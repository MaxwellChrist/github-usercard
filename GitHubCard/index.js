import axios from 'axios';
// console.log("this is a test for my first commit");

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

function master ({ aurl, name, login, loc, fowlrs, fowlng, url, bi }) {
  // function master ({ obj }) {
  const card = document.createElement("div");
  const image = document.createElement("img");
  const cardInfo = document.createElement("div");
  const heading = document.createElement("h3");
  const username = document.createElement("p");
  const location = document.createElement("p");
  const profile = document.createElement("p");
  const address = document.createElement("a");
  const followers = document.createElement("p");
  const following = document.createElement("p");
  const bio = document.createElement("p");

  card.classList.add("card");
  cardInfo.classList.add("card-info");
  heading.classList.add("name");
  username.classList.add("username");

  card.appendChild(image);
  card.appendChild(cardInfo);
  cardInfo.appendChild(heading);
  cardInfo.appendChild(username);
  cardInfo.appendChild(location);
  cardInfo.appendChild(profile);
  profile.appendChild(address)
  cardInfo.appendChild(followers);
  cardInfo.appendChild(following);
  cardInfo.appendChild(bio);

  // image.src = obj.avatar_url;
  // heading.textContent = obj.name;
  // username.textContent = obj.login;
  // location.textContent = `Location: ${obj.location}`;
  // profile.textContent = "Profile";
  // address.href = obj.html_url;
  // address.textContent = obj.html_url;
  // followers.textContent = `Followers: ${obj.followers}`;
  // following.textContent = `Following: ${obj.following}`;
  // bio.textContent = `Bio: ${obj.bio}`;

  image.src = aurl;
  heading.textContent = name;
  username.textContent = login;
  location.textContent = `Location: ${loc}`;
  profile.textContent = "Profile";
  address.href = url;
  address.textContent = url;
  followers.textContent = `Followers: ${fowlrs}`;
  following.textContent = `Following: ${fowlng}`;
  bio.textContent = `Bio: ${bi}`;

  return card;
}


/*
  STEP 1: using axios, send a GET request to the following URL
    (replacing the placeholder with your Github name):
    https://api.github.com/users/<your name>
*/

// import axios from 'axios';
// axios.get(`https://api.github.com/users/maxwellchrist`)
//   .then(res => {
//     console.log(res)
//     // console.log(res.data.login)
//   })
//   .catch(err => {
//     console.log(err);
//   })
//   .finally(() => console.log("done"))

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

let cards = document.querySelector(".cards");

  // axios.get(`https://api.github.com/users/maxwellchrist`)
  // .then(resp => {
  //   console.log(resp.data.login);
  //   // const card = master ({ obj });
  //   const card = master ({ aurl: resp.data.avatar_url, name: resp.data.name, 
  //                                  login : resp.data.login, loc: resp.data.location, 
  //                                  fowlrs: resp.data.followers, fowlng: resp.data.following, 
  //                                  url: resp.data.html_url, bi: resp.data.bio });
  //   cards.appendChild(card);
  // })
  // .catch(err => {
  //   console.log(err);
  // })
  // .finally(() => console.log("done"))

  /*
  STEP 5: Now that you have your own card getting added to the DOM, either
    follow this link in your browser https://api.github.com/users/<Your github name>/followers,
    manually find some other users' github handles, or use the list found at the
    bottom of the page. Get at least 5 different Github usernames and add them as
    Individual strings to the friendsArray below.

    Using that array, iterate over it, requesting data for each user, creating a new card for each
    user, and adding that card to the DOM.
*/

/*
  List of LS Instructors Github username's:
    tetondan
    dustinmyers
    justsml
    luishrd
    bigknell
*/
const followersArray = ["maxwellchrist", "tetondan", "dustinmyers", "justsml", "luishrd", "bigknell"];
const followersCount = ( user ) => {
  axios.get(`https://api.github.com/users/${user}`)
  .then(resp => {
      console.log(resp.data)
      const card = master ({ aurl: resp.data.avatar_url, name: resp.data.name, 
                                    login : resp.data.login, loc: resp.data.location, 
                                    fowlrs: resp.data.followers, fowlng: resp.data.following, 
                                    url: resp.data.html_url, bi: resp.data.bio });
      cards.appendChild(card);
  })
  .catch(err => {
    console.log(err);
  })
  .finally(() => console.log("done"))
}

for (let i = 0; i < followersArray.length; i++) {
  followersCount(followersArray[i])
}
