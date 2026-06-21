import csv
import random
from collections import defaultdict
from datetime import datetime

# 🔥 ML IMPORT
from trainer import train_model

# 🔥 LOAD ML MODEL
intent_ai, intent_map = train_model()

BRAIN_FILE = "brain_v2.csv"

# 📥 LOAD MEMORY
def load_brain():
    try:
        data = []
        with open(BRAIN_FILE, mode='r', encoding='utf-8') as file:
            reader = csv.DictReader(file)
            for row in reader:
                data.append(row)
        return data
    except FileNotFoundError:
        print("⚠️ Brain file tak jumpa.")
        return []

# 🧠 ANALYZE PATTERNS
def analyze_patterns(data):
    patterns = defaultdict(list)
    for row in data:
        patterns[row['intent']].append(row)
    return patterns

# 🧠 🔥 HYBRID INTENT DETECTION
def detect_intent(user_input):
    user_input = user_input.lower()

    # 🔥 TRY ML FIRST
    try:
        return intent_map[intent_ai.predict(user_input)]
    except:
        pass

    # 🔥 FALLBACK RULE-BASED
    if any(word in user_input for word in ["hello", "hi", "hey", "yo"]):
        return "greeting"

    if any(word in user_input for word in ["error", "bug", "fix", "issue", "crash"]):
        return "debug"

    if any(word in user_input for word in ["how", "what", "why", "when"]):
        return "question"

    if "?" in user_input:
        return "question"

    return "general"

# 🔢 MEMORY SCORING
def score_memory(row, intent, user_input):
    score = 0

    if row['intent'] == intent:
        score += 3

    if row['priority'] == "high":
        score += 2

    if row['context_tag'] == "auto":
        score += 1

    # simple similarity
    if user_input in row['user_message'].lower():
        score += 2

    return score

# 🤖 RESPONSE ENGINE
def generate_response(user_input, patterns):
    intent = detect_intent(user_input)

    candidates = []

    if intent in patterns:
        for row in patterns[intent]:
            s = score_memory(row, intent, user_input)
            candidates.append((s, row['ai_response']))

    if candidates:
        top = sorted(candidates, key=lambda x: x[0], reverse=True)[:3]
        best = random.choice(top)

        # 🔥 CONFIDENCE CHECK
        if best[0] < 2:
            return "Aku tak pasti sangat... boleh explain lagi?", intent

        return best[1], intent

    return "Aku tengah belajar benda ni...", intent

# 🔢 GET NEXT ID
def get_next_id():
    try:
        with open(BRAIN_FILE, 'r', encoding='utf-8') as file:
            return sum(1 for _ in file)
    except:
        return 1

# 🔁 AUTO LEARNING
def learn_new_data(user_message, ai_response, intent):
    new_id = get_next_id()

    new_row = {
        "id": new_id,
        "user_message": user_message,
        "ai_response": ai_response,
        "intent": intent,
        "context_tag": "auto",
        "priority": "medium",
        "timestamp": datetime.now().strftime("%Y-%m-%d")
    }

    with open(BRAIN_FILE, mode='a', newline='', encoding='utf-8') as file:
        writer = csv.DictWriter(file, fieldnames=new_row.keys())

        if file.tell() == 0:
            writer.writeheader()

        writer.writerow(new_row)

# 🚀 MAIN LOOP
def run_ai():
    print("🧠 Hybrid Brain AI Running (type 'exit' to stop)\n")

    last_input = None

    while True:
        data = load_brain()
        patterns = analyze_patterns(data)

        user_input = input("You: ")

        if user_input.lower() == "exit":
            print("👋 Bye!")
            break

        response, intent = generate_response(user_input, patterns)

        if last_input:
            print(f"(context: {last_input})")

        print("AI:", response)

        learn_new_data(user_input, response, intent)

        last_input = user_input

# ▶️ START
if __name__ == "__main__":
    run_ai()