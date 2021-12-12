// CRUD

// create
//let arrFruits = ["cam", "táo", "chuối", "dứa"];

//read

//console.log(arrFruits[2]);
//console.log(arrFruits[3]);

//console.log(arrFruits.length);

//update

//arrFruits[1] = "vải";
//arrFruits[3] = "dừa";

//arrFruits.push("chôm chôm");

//arrFruits.unshift("ổi");

//delete

//arrFruits.pop();//xóa cuối
//arrFruits.shift();//xóa đầu

//arrFruits.splice(1, 2);

//console.log(arrFruits);

//cho phép người dùng dùng prompt để nhập 3 món bất kì
//sau đó lưu vào array và alert món thứ hai

//alert("Nhập ba món ăn ưa thích của bạn");

//let arrFood = [];

//let a = prompt("Món 1");

//let b = prompt("Món 2");

//let c = prompt("món 3");

//arrFood.push(`${a}`);

//arrFood.push(`${b}`);

//arrFood.push(`${c}`);

//console.log(arrFood);

//alert(`${arrFood[1]}`);

//object
let banna = {
    name: "Chuối",
    color: "vàng",
    flavor: "ngọt"
}

//update
banna.color = "tím"
banna.price = "$1.5"

//delete
delete banna.color

//read
console.log(banna)


let studenta = {
    name: "A",
    age: "15",
    school: "RandomSchool"
}
 
console.log(studenta)

studenta.class = "random class"
delete studenta.school

console.log(studenta)

//loop
//for("giá trị bắt đầu"; điều kiện; bước nhảy)

for(let i=0; i<20; i++){
    console.log("hello")
}
for(let a=1; a<6; a++){
    console.log("hello " + a)
}

//while //tự tìm hiểu