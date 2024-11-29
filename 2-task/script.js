let img = document.querySelector('img')
document.body.addEventListener('click', function (e) {
    let x = e.clientX
    let y = e.clientY
    let rx = x-75 + "px";
    let ry = y-75 + "px";
    console.log(rx, ry);
    img.style.top = `${ry}`;
    img.style.left=`${rx}`
    console.log(res);
})