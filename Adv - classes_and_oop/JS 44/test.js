// // https://api.github.com/users/Z0RRR0

// async function callThis(){
//     try {
//         const response = await fetch('https://api.github.com/users/Z0RRR0')
//         const user = await response.json()
//         return user.login; // this will return the login name
//     } catch (error) {
//         console.log('ERROR: ', error);
//     }

// }


// function getUserName(username){
//     this.username = username
//     console.log('Username fetched:', this.username);
    
// }

// function createUser(username, email, password){
//     getUserName.call(this, username); 

//     this.email = email
//     this.password = password
// }

// // const chai = new createUser( nameae, 'chai@fb.com', 123)
// // console.log(chai);
// // console.log(nameae);


// async function createUserWithFetchedName(){
//     const nameae = await callThis(); // Wait for the fetch() to resolve
//     const chai = new createUser(nameae, 'chai@fb.com', 123);
//     console.log(chai);
// }

// createUserWithFetchedName()




// async function fetchUserData(){
//     try {
//         const response = await fetch('https://api.github.com/users/Z0RRR0')
//         const user = await response.json()
//         return user;
//     } catch (error) {
//         console.log("Error: ", error);
//     }
// }

// function user(username, email, bio){
//     getUserName.call(this, username)

//     this.email = email
//     this.bio = bio

// }

// function getUserName(username){
//     this.username = username
// }

// async function getData(){
//     const data = await fetchUserData()
//     const userName = data.login
//     const bio = data.bio ? data.bio: 'Bio not available';
//     const finalData = new user(userName, 'example.fb.com', bio)
//     console.log(finalData);
// }

// getData()



// async function fetchUserData(){
//     try {
//         const response = await fetch('https://jsonplaceholder.typicode.com/users/1')
//         const user = await response.json()
//         return user
//         // console.log(user);
//     } catch (error) {
//         console.log('ERROR: ', error);
//     }
// }

// function UserProfile(username, email, address, phone){
//     userName.call(this, username)
//     userEmail.call(this, email)
//     userAddress.call(this, address)
//     userPhone.call(this, phone)
// }

// function userName(username){
//     this.username = username;
// }


// function userEmail(email){
//     this.email = email;
// }

// function userAddress(address){
//     this.address = address;
// }

// function userPhone(phone){
//     this.phone = phone;
// }



// async function getUserData(){
//     const data = await fetchUserData()
//     const userNameData = data.username
//     const userEmailData = data.email
//     const userAddressData = data.address || 'Address not available'
//     const userPhoneData = data.phone || 'Phone number not available'

//     const finalData = new UserProfile(userNameData, userEmailData, userAddressData, userPhoneData)
//     console.log(finalData);
//     // console.log(userAddressData);
    
// }

// getUserData()




function PirateData(){
}

PirateData.prototype.pirates = (crewMemberName, signature, bounty)=>{

    function pirateName(crewMemberName){
        this.crewMemberName = crewMemberName;
    }
    
    function pirateSignature(signature){
        this.signature = signature;
    }
    
    function pirateBounty(bounty){
        this.bounty = bounty;
    }

    pirateName.call(this, crewMemberName)
    pirateSignature.call(this, signature)
    pirateBounty.call(this, bounty)

    console.log(`Name of Pirate: ${this.crewMemberName}`);
    console.log(`Signature of Pirate: ${this.signature}`);
    console.log(`Bounty of Pirate: ${this.bounty}`);
    
}

let strawHats = new PirateData()
strawHats.pirates('Luffy', 'Rubber_Man', 10000)

let redHairPirates = new PirateData()
strawHats.pirates('Shanks', 'Red_Hairs', 30000)

