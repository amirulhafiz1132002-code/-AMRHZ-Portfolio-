<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>AMRHZ AI Space</title>

  <!-- Fonts -->
  <link href="https://fonts.googleapis.com/css2?family=Orbitron&family=Inter&display=swap" rel="stylesheet">

  <style>
    :root {
      --primary: #0096FF;
      --dark: #0050A0;
      --bg: #0a0a0a;
      --text: #ffffff;
    }

    * {
      margin: 0;
      padding: 0;
      box-sizing: border-box;
    }

    body {
      background: radial-gradient(circle at center, #0a0a0a, #000000);
      color: var(--text);
      font-family: 'Inter', sans-serif;
      overflow-x: hidden;
    }

    .nav {
      padding: 20px;
      text-align: center;
    }

    .logo {
      font-family: 'Orbitron', sans-serif;
      color: var(--primary);
      letter-spacing: 2px;
      text-shadow: 0 0 10px rgba(0,150,255,0.4);
    }

    .hero {
      height: 90vh;
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      gap: 18px;
      text-align: center;
      padding: 0 20px;
    }

    .logo-anim {
      width: 160px;
      filter: drop-shadow(0 0 20px rgba(0,150,255,0.6));
      animation: float 4s ease-in-out infinite;
    }

    @keyframes float {
      0% { transform: translateY(0px); }
      50% { transform: translateY(-10px); }
      100% { transform: translateY(0px); }
    }

    .hero h2 {
      font-family: 'Orbitron', sans-serif;
      font-size: 28px;
      text-shadow: 0 0 10px rgba(0,150,255,0.5);
    }

    .hero p {
      opacity: 0.7;
      font-size: 14px;
    }

    .btn {
      margin-top: 10px;
      padding: 12px 28px;
      border: none;
      background: linear-gradient(90deg, #0096FF, #0050A0);
      color: white;
      border-radius: 30px;
      cursor: pointer;
      transition: 0.3s;
      font-weight: bold;
    }

    .btn:hover {
      transform: scale(1.05);
      box-shadow: 0 0 20px rgba(0,150,255,0.6);
    }

    @media (max-width: 600px) {
      .hero h2 {
        font-size: 20px;
      }

      .logo-anim {
        width: 120px;
      }
    }
  </style>
</head>

<body>

  <div class="nav">
    <h1 class="logo">AMR AI</h1>
  </div>

  <div class="hero">
    <img src="./assets/logo.png" class="logo-anim" alt="AMR AI Logo">
    
    <h2>AI Connection Space</h2>
    <p>Your digital mind layer</p>

    <button class="btn" onclick="enterSystem()">Enter System</button>
  </div>

  <script>
    function enterSystem() {
      alert("Booting AMR AI System...");
      // nanti boleh tukar ke:
      // window.location.href = "dashboard.html";
    }
  </script>

</body>
</html>
