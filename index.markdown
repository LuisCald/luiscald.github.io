<!-- <!DOCTYPE html> -->
<html lang="en">
<head>
  <meta charset="utf-8">
  <meta http-equiv="X-UA-Compatible" content="IE=edge">
  <meta name="viewport" content="width=device-width, initial-scale=1">
  <title>Luis Calderon</title>
  <meta name="generator" content="Jekyll v3.9.5" />
  <meta property="og:title" content="Luis Calderon" />
  <meta property="og:locale" content="en_US" />
  <meta name="description" content="Write an awesome description for your new site here." />
  <meta property="og:description" content="Write an awesome description for your new site here." />
  <link rel="canonical" href="http://localhost:4000/" />
  <meta property="og:url" content="http://localhost:4000/" />
  <meta property="og:site_name" content="Luis Calderon" />
  <meta property="og:type" content="website" />
  <meta name="twitter:card" content="summary" />
  <meta property="twitter:title" content="Luis Calderon" />
  <link rel="stylesheet" href="/assets/main.css">
  <link rel="stylesheet" href="/styles.css">

  <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/chessboard-js/1.0.0/chessboard-1.0.0.min.css">
<script src="https://cdnjs.cloudflare.com/ajax/libs/chess.js/0.11.0/chess.min.js"></script>
<script src="https://cdnjs.cloudflare.com/ajax/libs/chessboard-js/1.0.0/chessboard-1.0.0.min.js"></script>

</head>
  <div class="tile-container"></div>
<header class="site-header" role="banner">
  <div class="wrapper">
    <a class="site-title" rel="author" href="/">Luis Calderon</a>
    <nav class="site-nav">
      <!-- Hamburger Menu -->
      <div class="hamburger-menu" onclick="toggleMenu()">☰</div>
      <!-- Navigation Links -->
      <ul id="nav-links" class="nav-links">
        <li><a class="page-link" href="/about/">About</a></li>
        <li><a class="page-link" href="/cv/">CV</a></li>
        <li><a class="page-link" href="/projects/">Research</a></li>
        <li><a class="page-link" href="/chess/">Chess</a></li>
      </ul>
    </nav>
  </div>
</header>
<body>

  <main class="page-content" aria-label="Content">
    <p>Hello, and thank you for visiting! I am a 5th year PhD candidate in economics from the <b>University of Bonn</b>, specializing in macroeconomics.</p>
    <p>My primary interests emphasizes the role of <b>household hetereogeneity</b> for monetary and fiscal policy and macroeconomic dynamics. For this, I draw from an extensive tool kit that spans <b>bayesian econometrics, functional data analysis, and semi-structural time series</b> models to fully structural approaches.</p>
    <p>Secondary interests are in role of banking in shaping macroeconomic dynamics and inequality. </p>
    <p>I hold a Master’s degree in Economic Research from Bonn and Bachelor’s degrees in Economics and Finance from Florida International University in Miami, FL.</p>
    <p>At the University of Bonn, I am currently under the supervision of Christian Bayer, Moritz Kuhn and Farzad Saidi.</p>
    <p>Feel free to check back. Will post some cool stuff soon!</p>
  </main>

  <footer>
    <h2 class="footer-heading">Contact</h2>
    <div class="footer-col-wrapper">
      <div class="footer-col footer-col-1">
        <ul class="contact-list">
          <li><a class="u-email" href="mailto:luis.calderon@uni-bonn.de">luis.calderon@uni-bonn.de</a></li>
        </ul>
      </div>
    </div>
  </footer>
  <script>
    function toggleMenu() {
      const navLinks = document.getElementById('nav-links');
      navLinks.classList.toggle('active');
    }
  </script>
  <script src="/script.js"></script>
</body>
</html>