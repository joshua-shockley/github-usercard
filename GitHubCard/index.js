/* Step 1: using axios, send a GET request to the following URL 
           (replacing the palceholder with your Github name):
           https://api.github.com/users/<your name>
*/
axios.get('https://api.github.com/users/joshua-shockley')
    .then((response) => {
        console.log(response);
        const newCard = makeTag(response.data)
        main.appendChild(newCard)
    })
    .catch((err) => {
        console.log(err)
    })




/* Step 2: Inspect and study the data coming back, this is YOUR 
   github info! You will need to understand the structure of this 
   data in order to use it to build your component function 

   Skip to Step 3.
*/

/* Step 4: Pass the data received from Github into your function, 
           create a new component and add it to the DOM as a child of .cards
*/


/* Step 5: Now that you have your own card getting added to the DOM, either 
          follow this link in your browser https://api.github.com/users/<Your github name>/followers 
          , manually find some other users' github handles, or use the list found 
          at the bottom of the page. Get at least 5 different Github usernames and add them as
          Individual strings to the friendsArray below.
          
          Using that array, iterate over it, requesting data for each user, creating a new card for each
          user, and adding that card to the DOM.
*/
const followersArray = [
    'tetondan',
    'dustinmyers',
    'justsml',
    'luishrd',
    'bigknell'
];

followersArray.forEach(i => {
    axios.get('https://api.github.com/users/' + [i])
        .then((response) => {
            // console.log(response);
            const newCard = makeTag(response.data)
            main.appendChild(newCard)
        })
        .catch((err) => {
            console.log(err)
        })
})

/* Step 3: Create a function that accepts a single object as its only argument,
          Using DOM methods and properties, create a component that will return the following DOM element:

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




const main = document.querySelector('.cards');


function makeTag(stuff) {
    const theCard = document.createElement('div');
    theCard.classList.add('card');
    main.appendChild(theCard)

    const cardImg = document.createElement('img');
    const infoDiv = document.createElement('div')
        //h3 and 3p tags go inside this div ^
    const theName = document.createElement('h3');
    const theUserName = document.createElement('p');
    const theLoc = document.createElement('p');
    const theProfile = document.createElement('p');
    const theFollowers = document.createElement('p');
    const theFollowing = document.createElement('p');
    const theBio = document.createElement('p');
    const theLink = document.createElement('a');
    //now set classList
    infoDiv.classList.add('card-info');
    theName.classList.add('name');
    theUserName.classList.add('username');
    //now time to set appendChild()
    theCard.appendChild(cardImg)
    theCard.appendChild(infoDiv)
    infoDiv.appendChild(theName)
    infoDiv.appendChild(theUserName)
    infoDiv.appendChild(theLoc)
    infoDiv.appendChild(theProfile)
    theProfile.textContent = `Profile:`;

    theProfile.appendChild(theLink)
    infoDiv.appendChild(theFollowers)
    infoDiv.appendChild(theFollowing)
    infoDiv.appendChild(theBio)

    cardImg.setAttribute('src', stuff.avatar_url);
    theName.textContent = stuff.name;
    theUserName.textContent = stuff.login;
    theLoc.textContent = `${stuff.location}`;
    theLink.setAttribute('href', `${stuff.html_url}`);
    theLink.textContent = `${stuff.html_url}`;
    theFollowers.textContent = `Followers: ${stuff.followers}`;
    theFollowing.textContent = `Following: ${stuff.following}`;
    theBio.textContent = `Bio: ${stuff.bio || 'none'}`;

    return theCard
}

//  List of LS Instructors Github username's: 
//   tetondan
//   dustinmyers
//   justsml
//   luishrd
//   bigknell