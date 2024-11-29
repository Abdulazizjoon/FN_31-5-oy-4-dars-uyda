let color = document.querySelector('.bg')
let text=document.querySelector('.text')
let p = document.querySelector('p')
text.oninput=function(e) {
    let res = e.target.value
    p.style.color=`${res}`
}
color.oninput=function(e) {
  let res=e.target.value
  document.body.style.backgroundColor=`${res}`
}


