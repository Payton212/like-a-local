const homeButton = document.getElementById('home');
const submitButton = document.querySelector('#submit');
const usernameInput = document.getElementById('username');
const toggleInput = document.getElementById('toggle');
const attractionButton = document.getElementById('attraction-type');
const contentInput = document.querySelector('#content');
const imageInput = document.querySelector('#image');
const error = document.querySelector('#error');
const listButtons = document.getElementById('list-of-attractions');
const firstbutton = document.querySelector('#li')
  

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

   const attractions = ['park', 'restaurant', 'movie theatre'];
   const checkboxes = [];

   attractions.forEach(attraction => {
       const li = document.createElement('li');
       const checkbox = document.createElement('input');
       checkbox.type = 'checkbox';
       checkbox.value = attraction;

       
       checkbox.addEventListener('change', function() {
           checkboxes.forEach(cb => {
               if (cb !== checkbox) {
                   cb.checked = false; 
               }
           });
       });

       li.textContent = attraction;
       li.appendChild(checkbox);
       listButtons.appendChild(li);
       checkboxes.push(checkbox); 
       console.log(checkbox);
   });
  
});





submitButton.addEventListener('click', function (event) {
    event.preventDefault();

    const username = usernameInput.value.trim();
    const content = contentInput.value.trim();
    
    const toggle = toggleInput;
   
    const image = imageInput;


    if(username === '' || content === ''){
        errorMessage('error', 'this is an error message');
        return;
    }else
    document.querySelector('#error').textContent = '';


});