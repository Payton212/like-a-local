const homeButton = document.getElementById('home');
const submitButton = document.querySelector('#btnSubmit');
const usernameInput = document.getElementById('username');
const toggleInput = document.getElementById('flexSwitchCheckChecked');
const attractionButton = document.getElementById('attraction-type');
const contentInput = document.querySelector('#content');
const error = document.querySelector('#error');
const hidden = document.getElementById('list-of-attractions');
const radios = document.getElementsByName('attractions');
const modalSubmit = document.getElementById('modal-submit');
const modalNo = document.getElementById('modal-no');
const myModal = new bootstrap.Modal('#myModal');

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
submitButton.addEventListener('click', function (event){
    event.preventDefault();
    const username = usernameInput.value.trim();
    const content = contentInput.value.trim();
    const name = nameInput.value.trim();

    venues = document.querySelectorAll('[name = "attractions"]');
    let checkedValue = null;
   for(radio of venues){
        if(radio.checked){
            checkedValue = radio.value;
            break;
        }
    }
    
    if(username === '' || content === '' || !checkedValue || name === ''){
        errorMessage('error', 'Please complete all fields before submitting');
        return;
    }else
   
myModal.show();

});
modalSubmit.addEventListener('click', function (event) {
    event.preventDefault();
    
    
    const username = usernameInput.value.trim();
    const content = contentInput.value.trim();
    const name = nameInput.value.trim();
    

    
    let attractionType;
    if(flexSwitchCheckChecked.checked){
    attractionType = 'Outdoor';
      console.log('Outdoor');
    }else{
        attractionType = 'Indoor';
        console.log('Indoor');
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

            
        }else if (savedEntry[i].checkedValue == 'skatepark'){
            div.classList.add('img');
            div.style.backgroundImage = "url('assets/stockIMGS/skatepark.jpg') ";
            
        }else if (savedEntry[i].checkedValue == 'festivals'){
            div.classList.add('img');
            div.style.backgroundImage = "url('assets/stockIMGS/festivals.jpg') ";
            
        }else if (savedEntry[i].checkedValue == 'golf'){
            div.classList.add('img');
            div.style.backgroundImage = "url('assets/stockIMGS/golf.jpg') ";
            
        }
       

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