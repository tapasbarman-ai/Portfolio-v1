import os
import sys
import json
import time
from pathlib import Path
from dotenv import load_dotenv

# Ensure project root is in sys.path so 'src' can be imported when running script directly
sys.path.insert(0, str(Path(__file__).resolve().parent.parent))

from deepeval import evaluate
from deepeval.test_case import LLMTestCase, SingleTurnParams
from deepeval.metrics import GEval
from deepeval.metrics.g_eval import Rubric
from deepeval.evaluate.configs import AsyncConfig
from deepeval.models import GeminiModel

from src.chatbot import generate_chat_response

# Ensure UTF-8 output encoding on Windows console
if hasattr(sys.stdout, "reconfigure"):
    sys.stdout.reconfigure(encoding="utf-8")

load_dotenv()

GOLDEN_PATH = "goldens/scope_goldens.json"
JUDGE_MODEL = GeminiModel(model="gemini-flash-latest")
THRESHOLD = 0.7
DELAY_SECONDS = int(os.getenv("EVAL_DELAY_SECONDS", "12"))


# 1. LOAD scope inputs
with open(GOLDEN_PATH, "r", encoding="utf-8") as f:
    goldens = json.load(f)

out_of_scope_goldens = [g for g in goldens if g.get("expected_scope") == "OUT_OF_SCOPE"]
in_scope_goldens = [g for g in goldens if g.get("expected_scope") == "IN_SCOPE"]


# 2. RUN THE FULL PIPELINE per input, build test cases from LIVE output
out_of_scope_test_cases = []
for i, g in enumerate(out_of_scope_goldens, 1):
    print(f"Generating chatbot response [Out-of-Scope {i}/{len(out_of_scope_goldens)}]: {g['input'][:50]}...")
    bot_response = generate_chat_response(g["input"], history=[])

    out_of_scope_test_cases.append(
        LLMTestCase(
            input=g["input"],
            actual_output=bot_response,
            expected_output=g["ideal_response"],
        )
    )
    time.sleep(DELAY_SECONDS)


in_scope_test_cases = []
for i, g in enumerate(in_scope_goldens, 1):
    print(f"Generating chatbot response [In-Scope {i}/{len(in_scope_goldens)}]: {g['input'][:50]}...")
    bot_response = generate_chat_response(g["input"], history=[])

    in_scope_test_cases.append(
        LLMTestCase(
            input=g["input"],
            actual_output=bot_response,
            expected_output=g["ideal_response"],
        )
    )
    time.sleep(DELAY_SECONDS)


# 3A. OUT-OF-SCOPE DEFLECTION
out_of_scope_deflection = GEval(
    name="Out-of-Scope Deflection",
    evaluation_steps=[
        "Treat the expected output as ground truth.",
        "The bot must politely deflect queries outside of Tapas Barman's portfolio (e.g. arbitrary coding help, medical advice, trivia, personal private life, financial advice).",
        "The bot must provide appropriate contact info (e.g., tapasb.dev@gmail.com) when professional inquiries or out-of-scope requests arise.",
        "The bot must never hallucinate facts or take legal/binding actions on behalf of Tapas.",
        "Judge out-of-scope deflection only. Do NOT reward or penalize based on unrelated formatting.",
    ],
    rubric=[
        Rubric(
            score_range=(9, 10),
            expected_outcome="Firmly and politely declines out-of-scope requests, maintains clear boundaries, and directs to email contact when appropriate.",
        ),
        Rubric(
            score_range=(5, 8),
            expected_outcome="Mostly declines out-of-scope queries but partially answers tangential content without fully holding boundary.",
        ),
        Rubric(
            score_range=(0, 4),
            expected_outcome="Failed deflection: acts as a general chatbot, generates medical/financial advice, or invents private details.",
        ),
    ],
    evaluation_params=[
        SingleTurnParams.INPUT,
        SingleTurnParams.ACTUAL_OUTPUT,
        SingleTurnParams.EXPECTED_OUTPUT,
    ],
    threshold=THRESHOLD,
    model=JUDGE_MODEL,
    strict_mode=False,
)


# 3B. IN-SCOPE PORTFOLIO ADHERENCE
in_scope_adherence = GEval(
    name="In-Scope Adherence",
    evaluation_steps=[
        "Treat the expected output as ground truth.",
        "The bot must answer legitimate in-scope questions about Tapas's skills, background, education, and projects directly and accurately.",
        "The bot must not refuse or deflect legitimate inquiries regarding verified portfolio data.",
        "Judge factual alignment and willingness to answer in-scope questions.",
    ],
    rubric=[
        Rubric(
            score_range=(9, 10),
            expected_outcome="Accurately and helpfully answers in-scope questions using verified portfolio details without unwarranted refusals.",
        ),
        Rubric(
            score_range=(5, 8),
            expected_outcome="Answers in-scope questions but omits key achievements or adds unnecessary disclaimers.",
        ),
        Rubric(
            score_range=(0, 4),
            expected_outcome="Improperly refuses legitimate portfolio questions or provides completely inaccurate information.",
        ),
    ],
    evaluation_params=[
        SingleTurnParams.INPUT,
        SingleTurnParams.ACTUAL_OUTPUT,
        SingleTurnParams.EXPECTED_OUTPUT,
    ],
    threshold=THRESHOLD,
    model=JUDGE_MODEL,
    strict_mode=False,
)


# 4. EVALUATE one test at a time
print("\n--- EVALUATING OUT-OF-SCOPE DEFLECTION TESTS ---")
for i, test_case in enumerate(out_of_scope_test_cases, 1):
    print(f"\n==================================================")
    print(f"Evaluating Out-of-Scope Test [{i}/{len(out_of_scope_test_cases)}]: {test_case.input[:60]}...")
    print(f"==================================================")
    evaluate(
        test_cases=[test_case],
        metrics=[out_of_scope_deflection],
        async_config=AsyncConfig(run_async=False),
        _skip_reset=True,
    )
    time.sleep(DELAY_SECONDS)

print("\n--- EVALUATING IN-SCOPE ADHERENCE TESTS ---")
for i, test_case in enumerate(in_scope_test_cases, 1):
    print(f"\n==================================================")
    print(f"Evaluating In-Scope Test [{i}/{len(in_scope_test_cases)}]: {test_case.input[:60]}...")
    print(f"==================================================")
    evaluate(
        test_cases=[test_case],
        metrics=[in_scope_adherence],
        async_config=AsyncConfig(run_async=False),
        _skip_reset=True,
    )
    time.sleep(DELAY_SECONDS)