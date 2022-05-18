"use strict";
// Todos
// grap the user container 
// grab search button 
// fetch Api 
// render the data to the dom 
// add daerk mode to your site


const usernameContainer = document.querySelector(".username_container");

const searchUser = document.querySelector(".search_btn");

searchUser.addEventListener("click", function () {
  let InputValue = document.querySelector(".search-data").value;
  fetch(`https://api.github.com/users/${InputValue}`)
  // convert data to json
    .then((response) => response.json())
    .then((data) => {
      console.log(data);
      renderUsers(data);
    });
});

const renderUsers = function (usersData) {
  console.log(usersData);

  usernameContainer.innerHTML = ` <div class="bio-update">
  <div>
    <img class="profile_img" src="${usersData.avatar_url}" alt="" />
  </div>
  <div class="bio">
    <div>
    <h2> ${usersData.name}</h2>
    <p>${usersData.login}</p>
    <!-- <p>This profile has no bio</p> -->
    </div>
    <div>
       <p class="date_joined">${new Date(usersData.created_at).toLocaleDateString('en-us', {
        day: "numeric",
        month: "short",
        year: "numeric",
       })}</p>
    
    </div>
  </div>
  </div>
  <div class="bio_wrap">
    <p>${usersData.bio}</p>
  </div>
  <div class="repos__container">
    <div class="repos">
      <h4>Public Repos</h4>
      <h2>${usersData.public_repos}</h2>
    </div>
    <div class="repos">
      <h4>Followers</h4>
      <h2>${usersData.followers}</h2>
    </div>
    <div class="repos">
      <h4>Following</h4>
      <h2>${usersData.following}</h2>
    </div>
  </div>
  <div class="location__container">
    <div class="location">
      <span><i class="fa-solid fa-location-dot"></i>${usersData.location}</span>
    </div>
    <div class="location">
    <span><i class="fa-brands fa-twitter-square"></i><a target="_blank" href="${usersData.twitter_username}">Twitter</a></span>
  </div>
  <div class="location">
  <span> <i class="fa-solid fa-link"></i><a target="_blank" href="${usersData.html_url}">Visit profile</a></span>
  </div>
  <div class="location">
      <span><i class="fa-solid fa-building"></i>${usersData.company}</span>
    </div>
  </div> `;
};

// fetchUsers();

// function for background flipper
const backgroundFlipper = document.getElementById('darkIcon');

backgroundFlipper.onclick = function(){
  document.body.classList.toggle('light');
  if(document.body.classList.contains('light')){
    backgroundFlipper ;
  }else{
    backgroundFlipper.innerHTML = `<i id="lightIcon" class="fa-solid fa-circle-half-stroke"></i>`
  }
}


