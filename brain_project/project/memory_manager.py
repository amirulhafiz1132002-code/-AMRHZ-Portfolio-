import pandas as pd

def load_memory():
    return pd.read_csv("brain_v2.csv").to_dict(orient="records")


def score_memory(row, intent):
    score = 0

    if row.get("intent") == intent:
        score += 3

    if intent in str(row.get("keywords", "")):
        score += 1

    return score