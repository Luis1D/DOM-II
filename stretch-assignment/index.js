// Stretch Assignment

// VARIABLES
const container = document.querySelector(".blocks");
const rockets = document.querySelectorAll('.block');

//PART ONE : MOVES BLOCK TO TOP OF STACK
let rocketArray = Array.from(rockets);

rocketArray.forEach(item => item.addEventListener('click', function(e) {
        item.parentNode.prepend(item);
        console.log("1st function");
    })
);

// PART TWO
container.style.border = "1px solid #000";
container.style.width = "100%";


rocketArray.forEach(index => index.addEventListener('mousedown', function(e) {
        let pos = 100;
        let id = setInterval(moveBox, 5);

        function moveBox() {
            if (pos == 350) {
                clearInterval(id);
            } else {
                pos++;
                Object.assign(index.style, {
                    position: 'absolute',
                    marginleft: pos + 'px'
                });       
            }
            console.log("2nd function");
        }
    })
);


