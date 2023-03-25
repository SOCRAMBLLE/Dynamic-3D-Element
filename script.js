// select the element

const box = document.querySelector(".box");

// listener for mouse position

document.addEventListener("mousemove", (e) => {
    rotateElement(e, box);
});

// function to rotate element

function rotateElement(event, element) {
    // track mouse position
    const posX = event.clientX;
    const posY = event.clientY;
    // console.log (posX, posY);

    // find the middle of the page
    const boxCoordinates = box.getBoundingClientRect();
    const boxX = boxCoordinates.x;
    const boxY = boxCoordinates.y;
    // console.log(middleX, middleY);

    // offset from the middle in degres
    const offsetX = ((posX - boxX) / boxX) * 45;
    const offsetY = ((posY - boxY) / boxY) * 45;
    // console.log(offsetX, offsetY)

    element.style.setProperty("--rotateX", -1 * offsetY + "deg");
    element.style.setProperty("--rotateY", offsetX + "deg");
};