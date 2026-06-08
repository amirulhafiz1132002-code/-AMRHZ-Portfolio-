# AMRHZ AI Space

## Introduction
AMRHZ AI Space is an interactive platform that allows users to manage data and analytics via a responsive, customizable dashboard.

## Current Features
- Interactive dashboard with control buttons
- Responsive layout for both desktop and mobile devices
- Modular code structure for easy expansion

## UI Flexibility for Future Development
We plan to introduce a flexible UI where users can customize themes, layouts, and visual elements. In the future, we will support dark themes, multiple color options, and adaptive layouts to provide a personalized user experience.

## API Integration
Our system integrates with a modern API, enabling secure data fetching, user authentication, and real-time analytics. Detailed API documentation is available in the docs folder, guiding you through endpoints, request/response formats, and authentication.

## Roadmap
- UI Enhancements: Theme switching, color options, and adaptive layouts
- AI Integration: Adding AI models for advanced predictive analytics
- Detailed Documentation: Usage guides, tutorials, and FAQs

## Contributing
Please refer to the contributing guidelines in this repository for instructions on how to contribute and report issues.
🧠 AMRHZ Dashboard Template (App 1)

📁 Project Structure

/project-root
│
├── index.html          # Entry point (routing)
├── dashboard.html      # Main dashboard UI
├── /assets
│   ├── /css
│   │   └── style.css
│   ├── /js
│   │   └── app.js
│   └── /img
│       └── (your images here)
│
└── README.md

---

🔗 index.html (Router Entry)

<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <title>AMRHZ App</title>
  <script>
    // Simple routing logic
    window.location.href = "dashboard.html";
  </script>
</head>
<body>
</body>
</html>

---

🧭 dashboard.html (Main UI)

<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <title>Dashboard</title>
  <link rel="stylesheet" href="assets/css/style.css">
</head>
<body>

  <div class="container">
    <h1>AMRHZ Dashboard</h1>

    <div class="command-panel">
      <button onclick="runCommand('profile')">Profile</button>
      <button onclick="runCommand('settings')">Settings</button>
      <button onclick="runCommand('logout')">Logout</button>
    </div>

    <div id="output"></div>
  </div>

  <script src="assets/js/app.js"></script>
</body>
</html>

---

🎨 style.css

body {
  font-family: Arial, sans-serif;
  background: #0f172a;
  color: white;
  margin: 0;
  padding: 0;
}

.container {
  padding: 20px;
}

.command-panel button {
  margin: 10px;
  padding: 10px 20px;
  background: #1e293b;
  border: none;
  color: white;
  cursor: pointer;
}

.command-panel button:hover {
  background: #334155;
}

---

⚙️ app.js (Command System)

function runCommand(cmd) {
  const output = document.getElementById("output");

  switch(cmd) {
    case "profile":
      output.innerHTML = "<p>Opening Profile...</p>";
      break;

    case "settings":
      output.innerHTML = "<p>Loading Settings...</p>";
      break;

    case "logout":
      output.innerHTML = "<p>Logging out...</p>";
      break;

    default:
      output.innerHTML = "<p>Unknown command</p>";
  }
}

---

🚀 Next Step (IMPORTANT)

- [ ] Masukkan images dalam "/assets/img"
- [ ] Test routing (index → dashboard)
- [ ] Push ke GitHub
- [ ] Improve responsive design

---

🧩 Notes

- Ini base version (stable)
- Senang extend → tambah module / feature
- Command system boleh evolve jadi AI control layer nanti

---
## License
This project is licensed under the MIT License. Please refer to the LICENSE file for more details.