from brain_engine import brain


def run_chat():
    print("🧠 AMRHZ Brain System Online")
    print("Type 'exit' to stop\n")

    while True:
        try:
            user_input = input("You: ")

            if user_input.lower().strip() == "exit":
                print("🧠 Brain shutting down...")
                break

            response = brain(user_input)
            print("AI:", response)
            print()

        except KeyboardInterrupt:
            print("\n🧠 Force stopped by user.")
            break

        except Exception as e:
            print("⚠️ Error:", str(e))


if __name__ == "__main__":
    run_chat()