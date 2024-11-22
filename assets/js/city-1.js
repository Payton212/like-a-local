const homeButton = document.getElementById('home');

homeButton.addEventListener('click', function(event){
    event.preventDefault;
    homePage()
});

function homePage(){

    window.location.href = "index.html";
}