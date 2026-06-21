import pandas as pd
from model import build_model
from intent_model import IntentModel

def train_model():
    df = pd.read_csv("brain_v2.csv")

    texts = df['user_message'].tolist()

    intents = list(set(df['intent']))
    intent_map = {k: i for i, k in enumerate(intents)}

    labels = [intent_map[i] for i in df['intent']]

    intent_ai = IntentModel()

    model = build_model(input_dim=10)  # sama dengan max_len
    intent_ai.train(texts, labels, model)

    reverse_map = {v: k for k, v in intent_map.items()}

    return intent_ai, reverse_map