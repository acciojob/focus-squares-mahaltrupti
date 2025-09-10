<script>
    const squares = document.querySelectorAll(".focus-sq");

    function resetColors() {
      squares.forEach(sq => sq.style.background = "#E6E6FA");
    }

    squares.forEach(square => {
      square.addEventListener("mouseover", () => {
        resetColors();
        squares.forEach(other => {
          if (other !== square) {
            other.style.background = "#6F4E37"; // Coffee
          }
        });
      });

      square.addEventListener("mouseout", resetColors);
    });
  </script>


            
       
       