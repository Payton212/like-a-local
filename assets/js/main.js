const city1 = document.getElementById('city-1');

city1.addEventListener('click', function(event){
    event.preventDefault;
    redirectPage()
});
function redirectPage(){
    window.location.href = "city-1.html";
}