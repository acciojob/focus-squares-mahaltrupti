/ <script>
    // Select all squares
    const squares = document.querySelectorAll(".focus-sq");

    squares.forEach((sq) => {
      // When mouse enters a square
      sq.addEventListener("mouseenter", () => {
        squares.forEach((otherSq) => {
          if (otherSq !== sq) {
            otherSq.style.backgroundColor = "#6F4E37"; // Coffee
          }
        });
      });

      // When mouse leaves, reset all squares to Lavender
      sq.addEventListener("mouseleave", () => {
        squares.forEach((otherSq) => {
          otherSq.style.backgroundColor = "#E6E6FA"; // Lavender
        });
      });
    });
  </script>
