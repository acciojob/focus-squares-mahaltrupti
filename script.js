<script>
const squares = document.querySelectorAll(".square");
		for(let box of boxes)
			    box.addEventListener("mouseover", (e) => addBgColor(e));
      box.addEventListener("mouseout", () => resetColors());
    }

    function addBgColor(e) {
      const selectedBoxId = e.target.id;
      for (let b of boxes) {
        if (b.id !== selectedBoxId) {
          b.style.backgroundColor = "#6F4E37"; // Coffee for others
        } else {
          b.style.backgroundColor = "#E6E6FA"; // Keep hovered Lavender
        }
      }
    }

    function resetColors() {
      for (let b of boxes) {
        b.style.backgroundColor = "#E6E6FA"; // Reset all to Lavender
      }
    }
	</script>
