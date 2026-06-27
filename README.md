#====================================================================================================
# START - Testing Protocol - DO NOT EDIT OR REMOVE THIS SECTION
#====================================================================================================
# THIS SECTION CONTAINS CRITICAL TESTING INSTRUCTIONS FOR BOTH AGENTS
# BOTH MAIN_AGENT AND TESTING_AGENT MUST PRESERVE THIS ENTIRE BLOCK
# Communication Protocol:
# If the testing_agent is available, main agent should delegate all testing tasks to it.
# You have access to a file called test_result.md . This file contains the complete testing state
# and history, and is the primary means of communication between main and the testing agent.
# Main and testing agents must follow this exact format to maintain testing data.
# The testing data must be entered in yaml format Below is the data structure:
## user_problem_statement: {problem_statement}
## backend:
## - task: "Task name"
## implemented: true
## working: true  # or false or "NA"
## file: "file_path.py"
## stuck_count: 0
## priority: "high"  # or "medium" or "low"
## needs_retesting: false
## status_history:
## -working: true  # or false or "NA"
## -agent: "main"  # or "testing" or "user"
## -comment: "Detailed comment about status"
## frontend:
## - task: "Task name"
## implemented: true
## working: true  # or false or "NA"
## file: "file_path.js"
## stuck_count: 0
## priority: "high"  # or "medium" or "low"
## needs_retesting: false
## status_history:
## -working: true  # or false or "NA"
## -agent: "main"  # or "testing" or "user"
## -comment: "Detailed comment about status"
## metadata:
## created_by: "main_agent"
## version: "1.0"
## test_sequence: 0
## run_ui: false
## test_plan:
## current_focus:
## - "Task name 1"
## - "Task name 2"
## stuck_tasks:
## - "Task name with persistent issues"
## test_all: false
## test_priority: "high_first"  # or "sequential" or "stuck_first"
## agent_communication:
## -agent: "main"  # or "testing" or "user"
## -message: "Communication message between agents"
# Protocol Guidelines for Main agent
# 1. Update Test Result File Before Testing:
# - Main agent must always update the test_result.md file before calling the testing agent
# - Add implementation details to the status_history
# - Set needs_retesting to true for tasks that need testing
# - Update the test_plan section to guide testing priorities
# - Add a message to agent_communication explaining what you've done
# 2. Incorporate User Feedback:
# - When a user provides feedback that something is or isn't working, add this information to the relevant task's status_history
# - Update the working status based on user feedback
# - If a user reports an issue with a task that was marked as working, increment the stuck_count
# - Whenever user reports issue in the app, if we have testing agent and task_result.md file so find the appropriate task for that and append in status_history of that task to contain the user concern and problem as well
# 3. Track Stuck Tasks:
# - Monitor which tasks have high stuck_count values or where you are fixing same issue again and again, analyze that when you read task_result.md
# - For persistent issues, use websearch tool to find solutions
# - Pay special attention to tasks in the stuck_tasks list
# - When you fix an issue with a stuck task, don't reset the stuck_count until the testing agent confirms it's working
# 4. Provide Context to Testing Agent:
# - When calling the testing agent, provide clear instructions about:
# - Which tasks need testing (reference the test_plan)
# - Any authentication details or configuration needed
# - Specific test scenarios to focus on
# - Any known issues or edge cases to verify
# 5. Call the testing agent with specific instructions referring to test_result.md
# IMPORTANT: Main agent must ALWAYS update test_result.md BEFORE calling the testing agent, as it relies on this file to understand what to test next.
#====================================================================================================
# END - Testing Protocol - DO NOT EDIT OR REMOVE THIS SECTION
#====================================================================================================
#====================================================================================================
# Testing Data - Main Agent and testing sub agent both should log testing data below this section
#====================================================================================================

---

# 🧠 AMRHZ-Portfolio: Auto AI Builder System

Welcome to the **AMRHZ AI System Workspace**. This workspace is an integrated ecosystem designed to build and deploy intelligent, highly automated AI systems rather than traditional standalone applications.

The core objective of this project is to build **App 1 (Auto AI Builder System)**, powered by an advanced OpenAI core layer. The ecosystem focuses on decoupled logic processing, standalone contextual memory, and robust multi-agent automation matrices.

---

## 🚀 Core Architecture

The repository is modularly structured into clear functional layers to ensure clean code separation and scalability:

*   📂 **`backend/`** – Powered by Python. Manages algorithmic pipelines, custom intelligence layers, and API handling.
*   📂 **`frontend/`** – Contains responsive, low-latency UI components built with JavaScript, HTML5, and CSS3 for telemetry monitoring.
*   📂 **`memory/`** – Dedicated persistence layer ensuring independent memory retention and contextual recall for the AI brain.
*   📂 **`tests/` & `test_reports/`** – An automated multi-agent verification environment that syncs directly via the `test_result.md` pipeline.

---

## 📊 Telemetry & Web Ecosystem

The presentation and control layers consist of several tightly integrated dashboard nodes:
1.  **`AMRHZ-Ai-system.html`** – Core platform node for tracking model decisions and engine states.
2.  **`AP1-dashboard-console.html`** – Primary administrative command center for application controls.
3.  **`About.html`** – Conceptual deep-dive detailing the system architecture, design philosophy, and core visions.
4.  **`analytics.html`** – Performance telemetry offering real-time analytical monitoring.
5.  **`landing_pages.html`** – Client-facing presentation layer for system onboarding and inquiry handling.

---

## 🛠️ Technical Stack Matrix

| Layer | Technology | Primary Domain |
| :--- | :--- | :--- |
| **Intelligence Core** | OpenAI API Framework | Autonomous reasoning, decision-making, & custom logic |
| **Backend / Logic** | Python | High-throughput data processing & secure backend APIs |
| **Frontend Node** | JavaScript (ES6+), HTML5, CSS3 | Dynamic, real-time dashboard visualization & command telemetry |
| **Validation Layer** | Unified YAML Testing Framework | Automated agent-to-agent verification loops |

---

## 📪 Contact & Inquiries

For technical consultations, deployment inquiries, or collaboration opportunities, feel free to reach out directly:

*   **Email:** [amirulhafiz1132002@gmail.com](mailto:amirulhafiz1132002@gmail.com)
*   **Portfolio Landing:** [Live Workspace Node](https://amirulhafiz1132002-code.github.io/-AMRHZ-Portfolio--9fc24822/)
