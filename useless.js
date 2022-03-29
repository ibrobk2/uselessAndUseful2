
function on(){
    document.getElementById('pic').src = "pic_bulbon.gif";
    document.getElementById('txt').innerHTML = "Light On";
    document.getElementById('txt').style.color = "green";
}



function off(){
    document.getElementById('pic').src = "pic_bulboff.gif";
    document.getElementById('txt').innerHTML = "Light Off";
    document.getElementById('txt').style.color = "red";
}