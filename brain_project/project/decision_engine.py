def decide_response(user_input, intent, best_memory):
    if best_memory is None:
        return "No memory found for this input."

    # if memory has response field
    if "response" in best_memory:
        return best_memory["response"]

    # fallback
    return f"[{intent}] I don't have exact response, but I understood your input."