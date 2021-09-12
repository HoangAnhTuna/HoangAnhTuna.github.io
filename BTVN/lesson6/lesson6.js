// Bài 1:

var arrFruits = ["Grape", `${15}`, "apple", `${16}`]
var arrGrape = arrFruits.slice(0, 1 + 1)
var arrApple = arrFruits.slice(2, 5 - 1)

//alert(`Đang có ${arrGrape[1]} kg ${arrGrape[0]} trong giỏ`)

console.log(`I have ${arrGrape[1]} ${arrGrape[0]}`)
console.log(`I have ${arrApple[1]} ${arrApple[0]}`)
console.log(arrApple)

var myDog = {
    "name": "Ngao",
    "legs": 4,
    "friends": ["everything!"]
};

let Husky = myDog

myDog.color = "brown"

delete myDog.friends

console.log(Husky)