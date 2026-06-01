<div class="hero">
  <img src="./assets/logo.png" class="logo-anim" alt="AMR AI Logo">
  
  <h2>AI Connection Space</h2>
  <p>Your digital mind layer</p>

  <!-- MAIN BUTTON -->
  <button class="btn" onclick="enterSystem()">
    Enter System
  </button>

  <!-- BACK BUTTON -->
  <button class="btn" onclick="goBack()">
    ⬅ Back to Main
  </button>
</div>

<script>
  function enterSystem() {
    alert("Booting AMR AI System...");
    // nanti upgrade:
    // window.location.href = "dashboard.html";
  }

  function goBack() {
    alert("Returning...");
    // contoh:
    // window.location.href = "index.html";
  }
</script>