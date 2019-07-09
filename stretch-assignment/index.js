// Stretch Assignment

//MOVES BLOCK TO TOP OF STACK
const rockets = document.querySelectorAll('.block');
let rocketArray = Array.from(rockets);

rocketArray.forEach(item => item.addEventListener('click', function(e) {
        item.parentNode.prepend(item);
    })
);


