const homeButton = document.getElementById('home');
const submitButton = document.querySelector('#submit');
const usernameInput = document.getElementById('username');
const toggleInput = document.getElementById('toggle');
const attractionButton = document.getElementById('attraction-type');
const contentInput = document.querySelector('#content');
const imageInput = document.querySelector('#image');
const error = document.querySelector('#error');
const listButtons = document.getElementById('list-of-attractions');

  

homeButton.addEventListener('click', function(event){
    event.preventDefault;
    homePage()
});
function errorMessage(type, message){
    
    document.querySelector('#error').textContent = '';
    error.textContent = message;
    error.setAttribute = ('class',type);
}
function homePage(){

    window.location.href = "index.html";
}

attractionButton.addEventListener('click', function(event){
    event.preventDefault();
   listButtons.innerHTML = '';

   
  
});





submitButton.addEventListener('click', function (event) {
    event.preventDefault();

    const username = usernameInput.value.trim();
    const content = contentInput.value.trim();
    
    const toggle = toggleInput;
   
    const image = imageInput;


    if(username === '' || content === ''){
        errorMessage('error', 'please complete the form');
        return;
    }else
    document.querySelector('#error').textContent = '';


});