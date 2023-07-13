function showOverlay(){
    document.getElementById("close").style.display="block",
    document.getElementById("close").style.position="absolute",
    document.getElementById("close").style.top="45%",
    document.getElementById("close").style.right="5%",
    document.getElementById("hamburger").style.display="none",
    document.getElementById("hambutton").style.display="block"
}

function hideOverlay(){
    document.getElementById("close").style.display="none",
    document.getElementById("hamburger").style.display="block",
    document.getElementById("hamburger").style.position="absolute",
    document.getElementById("hamburger").style.top="45%",
    document.getElementById("hambutton").style.display="none"
}