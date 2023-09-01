var square = document.getElementById('square');

function getRandomColor() {
    var letters = '0123456789ABCDEF';
    var color = '#';
    for (var i = 0; i < 6; i++) {
        color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
}

square.onclick = function() {
    var color = getRandomColor();
    square.style.backgroundColor = color;
    square.innerText = color;
};