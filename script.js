
        <script>


            const boxes = document.querySelectorAll(".box")
            console.log(boxes)


            // Iterate through boxes
            for(let box of boxes){
                // Add mouse over event
                box.addEventListener("mouseover",(e)=>addBgColor(e))
                box.addEventListener("mouseout",(e)=>addDefaultBgColor())

            }


            // Add bg color to other boxes
            function addBgColor(e){
                const selectedBoxId = e.target.id
                for(let i =0;i<boxes.length;i++){
                    if(boxes[i].id !== selectedBoxId){
                        boxes[i].style.backgroundColor = "red"
                    }
                }
            }

            // Remove bg color / Add default color to all boxes
            function addDefaultBgColor(){
                for(let box of boxes){
                    box.style.backgroundColor = "rgb(223, 134, 134)"
                }
            }
       
       
       
       </script>