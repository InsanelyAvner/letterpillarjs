// Change usernaem function
let username = document.getElementsByClassName('nav-link')[0]

username.innerHTML += '<a href="./game#/maps" onclick="changeName()"><i class="far fa-edit" style="float:right;position:relative;margin-right:10px;color:#d4ba9d!important"></i>'
const changeName = () => {
  let newUsername = prompt("Please enter your new username");
  if (newUsername != null) {
    username.innerHTML = newUsername
    username.innerHTML += '<a href="./game#/maps" onclick="changeName()"><i class="far fa-edit" style="float:right;position:relative;margin-right:10px;color:#d4ba9d!important"></i>'
  }
}

// Add XP function
let userXp = document.getElementsByClassName('app-avatar-experience-text')[0]
userXp.innerHTML += '&nbsp;&nbsp;<a href="./game#/maps" onclick="addXp()"><i class="far fa-plus-square" style="position:relative;margin-right:10px;color:#FFF!important"></i>'

const addXp = () => {
  let newXp = prompt("Please enter your new XP amount");
  if (newXp != null) {
    userXp.innerHTML = `${newXp} / ∞ XP`
    userXp.innerHTML += '&nbsp;&nbsp;<a href="./game#/maps" onclick="addXp()"><i class="far fa-plus-square" style="position:relative;margin-right:10px;color:#FFF!important"></i>'
  }
}

// Footer
button = document.getElementsByClassName('app-nav-btn active')[0]
button.setAttribute("onclick", "completeAll()")

button.innerHTML = '<i class="far fa-map"></i><span class="app-nav-name">Surprise</span>'

const completeAll = () => {
  missions = document.getElementsByClassName('app-quest-map-stage')
  for (let i=0; i < missions.length; i++) {
    imgPreview = missions[i].innerHTML = '<img src="/img/maps/Completed.png">'
  }
  alert("You've completed all the missions!")
}


// Add Medals (MD)
let MD = document.getElementsByClassName('nav-link')[2]
MD.innerHTML += '<a href="./game#/maps" onclick="setMD()"><i class="far fa-plus-square" style="float:right;position:relative;margin-right:10px;color:#d4ba9d!important"></i>'

const setMD = () => {
  let newMD = prompt('Enter the new medals amount')
  MD.innerHTML = `<i class="fas fa-medal" aria-hidden="true"></i> ${newMD}`
  MD.innerHTML += '<a href="./game#/maps" onclick="setMD()"><i class="far fa-plus-square" style="float:right;position:relative;margin-right:10px;color:#d4ba9d!important"></i>'
}


// Add LetterDollars (LD)
let LD = document.getElementsByClassName('nav-link')[3]
LD.innerHTML += '<a href="./game#/maps" onclick="setLD()"><i class="far fa-plus-square" style="float:right;position:relative;margin-right:10px;color:#d4ba9d!important"></i>'

const setLD = () => {
  let newLD = prompt('Enter the new LetterDollars amount')
  LD.innerHTML = `<i class="fas fa-hryvnia" aria-hidden="true"></i> ${newLD}`
  LD.innerHTML += '<a href="./game#/ma"ps onclick="setLD()"><i class="far fa-plus-square" style="float:right;position:relative;margin-right:10px;color:#d4ba9d!important"></i>'
}

// Change user badge
let badge = document.getElementsByClassName('app-avatar-profile-rank')[0]
badge.setAttribute('src', 'https://letterpillar.sajs.redooor.com/img/ranks/gold_rank_37.png')
badge.setAttribute('alt', 'Rank_37')