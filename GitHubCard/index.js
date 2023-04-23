/*
  STEP 1: using axios, send a GET request to the following URL
    (replacing the placeholder with your Github name):
    https://api.github.com/users/<your name>
*/
import axios from "axios";

// axios.get('https://api.github.com/users/roberly2120')
//   .then(result => {
//     const ryanTheUser = userCard({result});
//     console.log(result);
    
//   })
//   .catch(err => {
//     console.error(err);
//   })
//   .finally( () => console.log('you did it, you LEGEND!'))

/*
  STEP 2: Inspect and study the data coming back, this is YOUR
    github info! You will need to understand the structure of this
    data in order to use it to build your component function

    Skip to STEP 3 (line 34).
*/

/*
  STEP 4: Pass the data received from Github into your function,
    and append the returned markup to the DOM as a child of .cards
*/

/*
  STEP 5: Now that you have your own card getting added to the DOM, either
    follow this link in your browser https://api.github.com/users/<Your github name>/followers,
    manually find some other users' github handles, or use the list found at the
    bottom of the page. Get at least 5 different Github usernames and add them as
    Individual strings to the friendsArray below.

    Using that array, iterate over it, requesting data for each user, creating a new card for each
    user, and adding that card to the DOM.
*/

const followersArray = [ 
  "tetondan", 
  "dustinmyers", 
  "justsml", 
  "luishrd", 
  "bigknell"
];


function userCardMaker (userObj) {
  const card = document.createElement('div');
  const userImg = document.createElement('img');
  const infoCard = document.createElement('div');
  const nameTitle = document.createElement('h3');
  const userName = document.createElement('p');
  const userLocation = document.createElement('p');
  const profile = document.createElement('p');
  const pageAddress = document.createElement('a');
  const followers = document.createElement('p');
  const following = document.createElement('p');
  const bio = document.createElement('p');

  card.appendChild(userImg);
  card.appendChild(infoCard);
  infoCard.appendChild(nameTitle);
  infoCard.appendChild(userName);
  infoCard.appendChild(userLocation);
  infoCard.appendChild(profile);
  // infoCard.appendChild(profile.appendChild(pageAddress));
  profile.appendChild(pageAddress);
  infoCard.appendChild(followers);
  infoCard.appendChild(following);
  infoCard.appendChild(bio);
  
  


  card.className = 'card'
  userImg.src = userObj.avatar_url;
  userImg.alt = 'github profile user';
  infoCard.className = 'card-info';
  nameTitle.className = 'name';
  nameTitle.textContent = userObj.name
  userName.className = "username";
  userName.textContent = userObj.login;
  userLocation.textContent = `Location: ${userObj.location}`;
  profile.textContent = "Profile:";
  pageAddress.href = userObj.html_url;
  pageAddress.textContent = "Profile Link";
  followers.textContent = `Followers: ${userObj.followers}`;
  following.textContent = `Following: ${userObj.following}`;
  bio.textContent = `Bio: ${userObj.bio}`

  console.log('Card:', card);
  console.log(pageAddress);
  return card;

}

const entryPoint = document.querySelector('.cards');

followersArray.forEach(follower => {
  axios.get(`https://api.github.com/users/${follower}`)
  .then(result => {
    const userCard = userCardMaker(result.data);
    entryPoint.appendChild(userCard);
  })
  .catch(err => {
    console.error(err);
  })
})






axios.get('https://api.github.com/users/roberly2120')
  .then(result => {
    console.log(result);
    const userCard = userCardMaker(result.data);
    entryPoint.appendChild(userCard);
    
  })
  .catch(err => {
    console.error(err);
  })
  .finally( () => console.log('you did it, you LEGEND!'))

/*
  STEP 3: Create a function that accepts a single object as its only argument.
    Using DOM methods and properties, create and return the following markup:

    <div class="card">
      <img src={image url of user} />
      <div class="card-info">
        <h3 class="name">{users name}</h3>
        <p class="username">{users user name}</p>
        <p>Location: {users location}</p>
        <p>Profile:
          <a href={address to users github page}>{address to users github page}</a>
        </p>
        <p>Followers: {users followers count}</p>
        <p>Following: {users following count}</p>
        <p>Bio: {users bio}</p>
      </div>
    </div>
*/

/*
  List of LS Instructors Github username's:
    tetondan
    dustinmyers
    justsml
    luishrd
    bigknell
*/
