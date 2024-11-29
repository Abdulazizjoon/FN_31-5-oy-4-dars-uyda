const btn = document.getElementById("btn");
const mouse = document.getElementById("mouse");

btn.addEventListener("click", function () {
  document.body.style.backgroundColor = "black"; 

  mouse.style.position = "absolute";
  mouse.style.width = "150px";
  mouse.style.height = "150px";
  mouse.style.borderRadius = "50%";
  mouse.style.backgroundColor = "white"; 
  mouse.style.pointerEvents = "none"; 
    mouse.style.display = "block"; 
mouse.style.transition = "box-shadow 0.2s ease";

  document.addEventListener("mousemove", function (event) {
    const x = event.clientX;
    const y = event.clientY;

    mouse.style.left = `${x -75}px`;
      mouse.style.top = `${y - 75}px`;
      mouse.style.boxShadow = "0px 0px 20px 10px rgba(255, 255, 255, 0.6)";
  });
});
