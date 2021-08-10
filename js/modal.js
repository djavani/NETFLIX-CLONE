var modal = document.getElementById('myModal');
var vid = document.getElementById("myVideo");

function AbreVideo(){
    modal.style.display = "block";
    vid.play();
}

function FechaVideo()
{
    vid.pause();
    modal.style.display = "none";

}


var vid = document.getElementById("myVideo"); 
var modal = document.getElementById("myModal");
var btn = document.getElementById("myBtn");
var span = document.getElementsByClassName("close")[0];

btn.onclick = function() {
    modal.style.display = "block";
    vid.play(); 
}

span.onclick = function() {
    modal.style.display = "none";
    vid.pause();
}            

window.onclick = function(event) {
    if (event.target == modal) 
    {                
    modal.style.display = "none";
    vid.pause();
    }
}

// codigo para abrir o modal info
function infoFilme() {
    alert("Rambo II - A Missão está atualmente disponível para Ver em Stream, alugue e compre no/na Brasil. JustWatch te ajuda a descobrir onde você pode assistir legalmente seus filmes e séries online. Visite JustWatch para mais informações.");
}