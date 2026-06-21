from intent_model import detect_intent
from memory_manager import load_memory, score_memory
from decision_engine import decide_response


def brain(user_input):
    # 1. detect intent
    intent = detect_intent(user_input)

    # 2. load memory (CSV)
    memory = load_memory()

    # 3. score all memory rows
    scored_memory = []
    for row in memory:
        score = score_memory(row, intent)
        scored_memory.append((row, score))

    # 4. sort by best score
    scored_memory.sort(key=lambda x: x[1], reverse=True)

    # 5. extract best memory
    best_memory = scored_memory[0][0] if scored_memory else None

    # 6. generate response
    response = decide_response(user_input, intent, best_memory)

    return response