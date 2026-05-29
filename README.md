<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <title>AMR AI Space</title>

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
    }

    .nav {
      padding: 20px;
      text-align: center;
    }

    .logo {
      font-family: 'Orbitron', sans-serif;
      color: var(--primary);
      letter-spacing: 2px;
    }

    .hero {
      height: 90vh;
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      gap: 20px;
    }

    .logo-anim {
      width: 180px;
      filter: drop-shadow(0 0 20px rgba(0,150,255,0.6));
    }

    .hero h2 {
      font-family: 'Orbitron';
      font-size: 28px;
    }

    .hero p {
      opacity: 0.7;
    }

    .btn {
      padding: 12px 28px;
      border: none;
      background: linear-gradient(90deg, #0096FF, #0050A0);
      color: white;
      border-radius: 30px;
      cursor: pointer;
      transition: 0.3s;
    }

    .btn:hover {
      transform: scale(1.05);
      box-shadow: 0 0 20px rgba(0,150,255,0.6);
    }
  </style>
</head>

<body>

  <div class="nav">
    <h1 class="logo">AMR AI</h1>
  </div>

  <div class="hero">
    <img src="logo.png" class="logo-anim">
    <h2>AI Connection Space</h2>
    <p>Your digital mind layer</p>
    <button class="btn">Enter System</button>
  </div>

</body>
</html>