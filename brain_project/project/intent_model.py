# intent_model.py

import pickle

# optional: kalau kau guna mapping manual
intent_map = {
    0: "greeting",
    1: "debug",
    2: "question",
    3: "general"
}

MODEL_PATH = "intent_model.pkl"

# load model sekali sahaja
try:
    with open(MODEL_PATH, "rb") as f:
        intent_ai = pickle.load(f)
except:
    intent_ai = None


def detect_intent(user_input):
    """
    Main function: detect user intent
    fallback system included
    """

    # Case 1: ML model available
    if intent_ai is not None:
        try:
            predicted = intent_ai.predict([user_input])[0]
            return intent_map.get(predicted, "general")
        except:
            pass

    # Case 2: fallback rule-based system
    return rule_based_intent(user_input)


def rule_based_intent(text):
    """
    Backup intent system if model fails
    """

    text = text.lower()

    # greeting
    if any(word in text for word in ["hi", "hello", "hey", "halo", "salam"]):
        return "greeting"

    # debug / system
    if any(word in text for word in ["error", "bug", "fix", "debug", "issue"]):
        return "debug"

    # question
    if "?" in text or any(word in text for word in ["what", "how", "why", "when", "where"]):
        return "question"

    # default
    return "general"