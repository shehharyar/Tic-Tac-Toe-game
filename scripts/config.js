function openPlayerConfig(event){
    editedPlayer = +event.target.dataset.playerid;
    playerConfigOverlayElement.style.display= 'block';
    backdropElement.style.display='block';
}

function closePlayerCOnfig(){
    playerConfigOverlayElement.style.display= 'none';
    backdropElement.style.display='none';
    formELement.firstElementChild.classList.remove('error');
    errorsOutputElement.textContent= '';
    formELement.firstElementChild.lastElementChild.value = '';
}

function savePlayerConfig(event){
    event.preventDefault();
    const formData= new FormData(event.target);
    const enteredPlayerName= formData.get('playername').trim();

    if(!enteredPlayerName){ // enteredPlayername ===  ''
        event.target.firstElementChild.classList.add( 'error');
        errorsOutputElement.textContent= "Please enter a valid name"
        return;
    }
    const updatedPlayerDataElement= document.getElementById(`player-${editedPlayer}-data`);
    updatedPlayerDataElement.children[1].textContent = enteredPlayerName; 

    players[editedPlayer -1].name= enteredPlayerName;
    closePlayerCOnfig();
}   