const myNums = [1, 2, 3]

// const myTotal = myNums.reduce(function (acc, currval) {
//     console.log(`acc: ${acc} and currval: ${currval}`);  
//     return acc + currval
// }, 3)

const myTotal = myNums.reduce( (acc, curr) => acc+curr, 0 );

// console.log(myTotal);


const shopingCart = [
    {
        itemName: "js course",
        price: 2999
    },
    {
        itemName: "js course",
        price: 2999
    },
    {
        itemName: "py course",
        price: 999
    },
    {
        itemName: "mobile dev course",
        price: 5999
    },
    {
        itemName: "data science course",
        price: 12999
    },
]

const priceToPay = shopingCart.reduce( (acc, item) => acc + item.price, 0 )

// console.log(priceToPay);


const strawHats = [
    {
        name: "Luffy",
        bounty: 2999
    },
    {
        name: "Zoro",
        bounty: 1999
    },
    {
        name: "Sanji",
        bounty: 1599
    },
    {
        name: "Jinbe",
        bounty: 1659
    },
    {
        name: "Nami",
        bounty: 499
    },
    {
        name: "Chopper",
        bounty: 99
    },
    {
        name: "Ussopp",
        bounty: 699
    },
    {
        name: "Robin",
        bounty: 799
    },
    {
        name: "franky",
        bounty: 299
    },
    {
        name: "brook",
        bounty: 1399
    },
]

const piratesBounty = strawHats.reduce( (acc, prt) => acc + prt.bounty, 0 )

// console.log(piratesBounty);

const pirates = strawHats.filter( (bty) => bty.bounty <= 599 )
                .reduce( (acc, bty) => acc + bty.bounty, 0 )

console.log(pirates);
