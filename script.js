//your JS code here. If required.
 <script>
    const box = document.getElementById("myBox");

    box.addEventListener("click", () => {
      box.style.backgroundColor = 
        box.style.backgroundColor === "lightgreen" ? "lightblue" : "lightgreen";
      box.textContent = 
        box.textContent === "Clicked!" ? "Click Me!" : "Clicked!";
    });
  </script>
