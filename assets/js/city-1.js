const homeButton = document.getElementById('home');
const submitButton = document.querySelector('#submit');
const usernameInput = document.getElementById('username');
const toggleInput = document.getElementById('toggle');
const attractionButton = document.getElementById('attraction-type');
const contentInput = document.querySelector('#content');
const error = document.querySelector('#error');
const hidden = document.getElementById('list-of-attractions');
const radios = document.getElementsByName('attractions');

hidden.style.display ="none";

const nameInput = document.getElementById('name');
const section = document.getElementById('entry');



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

function oldEntrys(){
    if(localStorage.length === 0){
       // noEntrys('empty', 'please create an entry');
    }else {
    createEntrys();
    }
}

submitButton.addEventListener('click', function (event) {
    event.preventDefault();
    
    let isChecked = false;
    const username = usernameInput.value.trim();
    const content = contentInput.value.trim();
    const name = nameInput.value.trim();
    

    
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
        name : name,
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
   window.location.reload();
});

// creating the entries


function createEntrys(){
    let savedEntry = JSON.parse(localStorage.getItem('entry')) || [];
    console.log('savedEntry', savedEntry);
    for(let i = 0;i < savedEntry.length; i++ ){
        
        const div = document.createElement('div'); // stock img
        const H2 = document.createElement('h2');// username
        const H3 = document.createElement('h3');// name of attraction
        const H4 = document.createElement('h4');// (indoor/outdoor)
        const H5 = document.createElement('h5');// venue
        const P = document.createElement('p');// entry
        if(savedEntry[i].checkedValue == 'park'){
            div.classList.add('img');
            div.classList.add('entry');
            div.style.backgroundImage = "url('assets/stockIMGS/park.jpg') ";
            
        }else if(savedEntry[i].checkedValue == 'movietheatre'){
            div.classList.add('img');
            div.style.backgroundImage = "url('assets/stockIMGS/movie-theatre.jpg') ";
                                   
        }else if (savedEntry[i].checkedValue == 'club'){
            div.classList.add('img');
            div.style.backgroundImage = "url('assets/stockIMGS/club.jpg') ";
        }else if (savedEntry[i].checkedValue == 'restaurant'){
            div.classList.add('img');
            div.style.backgroundImage = "url('assets/stockIMGS/restaurant.jpg') ";
            Element.style.backgroundSize = "500px"
        }
                

        H2.style.color = 'white';
        H3.style.color = 'white';
        H4.style.color = 'white';
        H5.style.color = 'white';
        P.style.color = 'white';
        

        H2.textContent = savedEntry[i].username;
        H3.textContent = savedEntry[i].name;
        H4.textContent = savedEntry[i].checkedValue;
        H5.textContent = savedEntry[i].attractionType;
        P.textContent = savedEntry[i].content;

        section.appendChild(div);
        div.appendChild(H2);
        div.appendChild(H3);
        div.appendChild(H4);
        div.appendChild(H5);
        div.appendChild(P);

    }
}

oldEntrys();