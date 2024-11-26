const homeButton = document.getElementById('home');
const submitButton = document.querySelector('#submit');
const usernameInput = document.getElementById('username');
const toggleInput = document.getElementById('toggle');
const attractionButton = document.getElementById('attraction-type');
const contentInput = document.querySelector('#content');
const error = document.querySelector('#error');
const hidden = document.getElementById('list-of-attractions');
const radios = document.getElementsByName('attractions');

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
   
    if(hidden.style.display === "none"){
        hidden.style.display = "block";
    }else
    hidden.style.display = "none";
});

submitButton.addEventListener('click', function (event) {
    event.preventDefault();
    
    let isChecked = false;
    const username = usernameInput.value.trim();
    const content = contentInput.value.trim();
    
    
    let attractionType;
    if(toggle.checked){
    attractionType = 'outdoor';
      console.log('outdoor');
    }else{
        attractionType = 'indoor';
        console.log('indoor');
    }
 
          /*let selectedAttraction = '';
   document.querySelectorAll('input[name = "attractions"]').forEach((radio) => {
           radio.addEventListener('change',() =>{
               selectedAttraction = radio.value;
           });
    });*/

    for(radio of radios){
        if(radio.checked){
            isChecked = true;
        }
    }
   
    if(radios[3]){
        console.log('club');
    }else if (radios[2]){
        console.log('movietheatre');
    }else if(radios[1]){
        console.log('restaurant');
    } else if(radios[4]){
        console.log('park');
    }
   


    let newEntry = {
        username : username,
        content : content,
        
        attractionType ,
    };
   let savedEntry = JSON.parse(localStorage.getItem('entry')) || [];

   savedEntry.push(newEntry);

    if(username === '' || content === '' || !isChecked){
        errorMessage('error', 'please complete the form');
        return;
    }else
    document.querySelector('#error').textContent = '';

   localStorage.setItem('entry',JSON.stringify(savedEntry));
});