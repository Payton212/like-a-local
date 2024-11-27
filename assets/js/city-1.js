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
   
    if(hidden.style.display === "block"){
        hidden.style.display = "none";
    }else
    hidden.style.display = "block";
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
 
         venues = document.querySelectorAll('[name = "attractions"]');
    let checkedValue = null;
   for(radio of venues){
        if(radio.checked){
            checkedValue = radio.value;
            break;
        }
    }
    
    let newEntry = {
        username : username,
        content : content,
        checkedValue,
        attractionType ,
    };
   let savedEntry = JSON.parse(localStorage.getItem('entry')) || [];

   savedEntry.push(newEntry);

    if(username === '' || content === ''){
        errorMessage('error', 'please complete the form');
        return;
    }else
    document.querySelector('#error').textContent = '';

   localStorage.setItem('entry',JSON.stringify(savedEntry));

});

// creating the entries
function oldEntrys(){
    if(localStorage.length === 0){
        noEntrys('empty', 'please create an entry');
    }else {
    createEntrys();
    }
}

function createEntrys(){
    let savedEntry = JSON.parse(localStorage.getItem('entry')) || [];
    for(let i = 0;i < savedEntry.length; i++ ){
        
    }
}