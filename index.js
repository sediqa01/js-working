// const answer = Math.floor(Math.random() * 10 + 1);
// let guesses = 0;
// console.log(answer);
// document.getElementById("sbtn").onclick = function (){

//   let guess = document.getElementById("field").value
//   guesses+=1;
  
//   if(guess == answer){
//     alert(`${answer} is the #. It took you ${guesses} guesses`);
//   }
//   else if(guess < answer){
//     alert("Too small!");
//   }
//   else{
//     alert("Too large!");
//   }
// }


//temp converter

// document.getElementById("sbtn").onclick = function(){

//   let temp;

//   if (document.getElementById("cbtn").checked) {

//     temp = document.getElementById("tbox").value;
//     temp = Number(temp);
//     temp = toCelsius(temp);
//     temp = document.getElementById("templabel").innerHTML = temp + "C"

//   } 

//   else if(document.getElementById("fbtn").checked){
//     temp = document.getElementById("tbox").value;
//     temp = Number(temp);
//     temp = toFarenhiet(temp);
//     temp = document.getElementById("templabel").innerHTML = temp + "F"
//   }

//   else{
//     document.getElementById("templabel").innerHTML = "Select a unite ..";
//   }

// }


// function toCelsius(temp){

//    return (temp - 32) * (5/9);
// }

// function toFarenhiet(temp){

//   return temp * 9 / 5 + 32;

// }

// let student = ["sediqa", "farhat", "maryam"];

// student.forEach(capitalize);
// student.forEach(print);

//   function capitalize(element, index, array){

//     array[index] = element[0].toUpperCase() + element.substring(1);

//   }

//   function print(element){
//     console.log(element);

//   }

// let username = "Sediqa";
// let userInbox = 1;

// login();
// function login(){

//     usernameDisplay();
//     userInboxDisplay();

//     function usernameDisplay(){

//         console.log(`Wlecome ${username}!!`);
//     }
//     function userInboxDisplay(){
//         console.log(`You have  ${userInbox} messages..`);
//     }
// }

// const store = new Map([

//     ["Apple", 10],
//     ["Banana", 5],
//     ["Kiwi", 10],
//     ["Juic", 10],
// ]);

//     // let shoppingCard = 0;
//     // shoppingCard += store.get("Banana");
//     // shoppingCard += store.get("Apple");
//     // shoppingCard += store.get("Kiwi");
//     // console.log(shoppingCard);

//     // store.get("Apple");
//     store.set("Water" , 2);
//     store.delete("Apple");
//     console.log(store.has("Flower"));
//     console.log(store.size)

// store.forEach((value , key) => console.log(` ${key} $${value}`));


// const car1 = {
//     model : "BMW",
//     color: "Black",
//     year: 2023,

//     drive : function(){
//         console.log(`You are the owner of a ${this.model} car , Let drive it ...`);
//     }
// }

// const car2 = {
//     model : "Crola 2023",
//     color: "White",
//     year: 2023,

//     drive : function(){
//         console.log(`You are the owner of a ${this.model} car , Let drive it ...`);
//     }
// }
// car1.drive();
// car2.drive();

//  class Developer{

//      constructor(name, exprience, pLangauage){
//         this.name = name;
//         this.exprience = exprience;
//         this.pLangauage = pLangauage;
//      }

//      working(){
//         console.log(`${this.name} is working on a project`);
//      }
//  }

//   const Developer1 = new Developer("Sediqa", 2, "Python and Js");

//   console.log(Developer1.pLangauage);

// class Animals{
//     alive = true;
//     eat(){
//         console.log(`The ${this.name} is eating ..`);
//     }
//     sleep(){
//         console.log(`The ${this.name} is slepping ..`);
//     }
// }
// class Rabbit extends Animals{
    
//     name = "Rabbit"

//     run(){
//         console.log(`The ${this.name} is running ..`);
//     }
    
// }

// class Fish extends Animals{
//     name = "Fish"

//     swimming(){
//         console.log(`The ${this.name} is swimming..`);
//     }

// }

// class Bird extends Animals {
//     name = "Kabuter"

//     fly(){
//         console.log(`The ${this.name} is flying..`);
//     }

// }

// const rabbit = new Rabbit();
// const bird = new Bird();
// const fish = new Fish();

// console.log(bird.alive);
// bird.eat();
// bird.sleep();

// class Car{

//     constructor(model, year, color){
//         this.model = model;
//         this.year = year;
//         this.color = color;

//     }
//     drive(){
//         console.log(`You are driving ${this.model}`);
//     }

// }

// const car1 = new Car("Ferrari", 2022, "Gray");
// const car2 = new Car("BMW", 2023, "black");
// const car3 = new Car("Lembo", 2021, "White");

// const cars = [car1, car2, car3];

// console.log(cars[0].model);
// console.log(cars[1].model);
// console.log(cars[2].model);

// // cars[0].drive();

// const myLabel = document.getElementById("myLabel");

// update();
// setInterval(update,1000);
// function update(){

//     let date = new Date();
//     myLabel.innerHTML = formaTime(date);

//     function formaTime(date){

//         let hours = date.getHours();
//         let minutes = date.getMinutes();
//         let seconds = date.getSeconds();
//         let amOrpm = hours >= 12 ? "pm" : "am";
        
//         hours = (hours % 12) || 12;

//         hours =  formatSeconds(hours);
//         minutes =  formatSeconds(minutes);
//         seconds =  formatSeconds(seconds);
//         return`${hours}:${minutes}:${seconds} ${amOrpm}`
//     }

//     function formatSeconds(time){
//         time = time.toString();
//         return time.length < 2 ? "0" + time : time;
//     }
// }

// let n = [1, 1, 3, 4, 5, 6, 7, 8, 9, 33, 2, 4];
// let m = Math.max(...n);
// console.log(m);


// const nameTag = document.createElement("h3");
// nameTag.innerHTML = "Engineer Sediqa";
// document.body.append(nameTag);

// const myList = document.querySelector("color");
// const listItem = document.createElement("i");
// listItem.textContent = "Black";
// myList.prepend(listItem);

// const innerDiv = document.getElementById("innerdiv");
// innerDiv.addEventListener("mouseover", changeColor);

// function changeColor(){
//     innerDiv.style.backgroundColor = "lightblue";
// }

// const myDiv = document.getElementById("myDiv");
// window.addEventListener("keydown", move);

// let x = 0;
// let y = 0;

// function move(event){

//     switch (event.key) {
//         case "ArrowDown":
//             y+=20;
//             myDiv.style.top = y + "px";
//             break;

//         case "ArrowUp":
//                 y-=20;
//                 myDiv.style.top = y + "px";
//                 break;

//         case "ArrowRight":
//                 x+=20;
//                 myDiv.style.left = x + "px";
//                 break;

//         case "ArrowLeft":
//                 x-=20;
//                 myDiv.style.left = x + "px";
//                 break;
//         default:
//             break; 
//     }

// }


// 
// console.log(navigator.cookieEnabled);




const timeDisplay = document.querySelector("#timeDisplay");
const startBtn = document.querySelector("#startBtn");
const pauseBtn = document.querySelector("#pauseBtn");
const resetBtn = document.querySelector("#resetBtn");

let startTime = 0;
let elapsedTime = 0;
let currentTime = 0;
let paused = true;
let intervalId;
let hrs = 0;
let min = 0;
let sec = 0;

startBtn.addEventListener("click", () => {
    if(paused){
        paused = false;
        startTime = Date.now() - elapsedTime;
        intervalId = setInterval(updateTime, 1000);
    }
})

pauseBtn.addEventListener("click", () => {
    if (!paused) {
        paused = true;
        elapsedTime = Date.now() - startTime;
        clearInterval(intervalId);
        
    }
});
resetBtn.addEventListener("click", () => {
    paused = true;
    clearInterval(intervalId);
    startTime = 0;
    elapsedTime = 0;
    currentTime = 0;
    hrs = 0;
    min = 0;
    sec = 0;

    timeDisplay.textContent = "00:00:00";

});

function updateTime(){
    elapsedTime = Date.now() - startTime;

    sec = Math.floor((elapsedTime / 1000) % 60);
    min = Math.floor((elapsedTime / (1000 * 60)) % 60);
    hrs = Math.floor((elapsedTime / (1000 * 60 * 60)) % 60);

    sec = pad(sec);
    min = pad(min);
    hrs = pad(hrs);

    timeDisplay.textContent = `${hrs}:${min}:${sec}`;

    function pad(unit){
        return (("0") + unit).length > 2 ? unit : "0" + unit;
    }
}
