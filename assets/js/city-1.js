const homeButton = document.getElementById('home');
const submitButton = document.querySelector('#submit');
const usernameInput = document.getElementById('username');
const toggleInput = document.getElementById('toggle');
const dropdownInput = document.getElementById('dropdown');
const entryInput = document.getElementById('entry');
const imageInput = document.querySelector('#image');

homeButton.addEventListener('click', function(event){
    event.preventDefault;
    homePage()
});

function homePage(){

    window.location.href = "index.html";
}

submitButton.addEventListener('click', function (event) {
    event.preventDefault;
      
      
      
    let newEntry = {
        username : usernameInput.value.trim(),
        toggle : toggleInput.value.trim(),
        
        entry : entryInput.value,
        image : imageInput.files[0],
    };
    

     let entryPosts = JSON.parse(localStorage.getItem(previousPosts)) || [];

    entryPosts.push(newEntry);

       /* displayMessage('error', 'please complete your entry')*/
        
      

      localStorage.setItem('previousPosts',JSON.stringify(entryPosts));

});

