
let arr = ["Why couldn't the bicycle stand up by itself? Because it was two-tired.", "What do you get when you cross a snowman and a vampire? Frostbite.", "Why was the math book sad? It had too many problems.", "Why couldn't the leopard play hide and seek? Because he was always spotted.", "What do you call a bear with no teeth? A gummy bear.", "Why couldn't the tomato win the race? Because it was a slow-poke.", "What do you get when you cross a sheep and a kangaroo? A woolly jumper.", "Why was the computer cold? Because it left its Windows open.", "Why did the cookie go to the doctor? It was feeling crumbly.", "What do you get when you cross a cat and a dog? A catastrophe.", "Why did the chicken go to outer space? To see the moooon.", "What do you call a dinosaur with an extensive vocabulary? A thesaurus.", "Why couldn't the bicycle stand up by itself? It was two-tired.", "Why did the tomato turn red? Because it saw the salad dressing.", "What do you get when you cross a snowman and a vampire? Frostbite.", "Why was the math book sad? It had too many problems.", "Why couldn't the leopard play hide and seek? Because he was always spotted.", "What do you call a bear with no teeth? A gummy bear.", "Why couldn't the tomato win the race? Because it was a slow-poke.", "What do you get when you cross a sheep and a kangaroo? A woolly jumper.", "Why was the computer cold? Because it left its Windows open.", "Why did the cookie go to the doctor? It was feeling crumbly.", "What do you get when you cross a cat and a dog? A catastrophe.", "Why did the chicken go to outer space? To see the moooon.", "What do you call a dinosaur with an extensive vocabulary? A thesaurus.", "Why couldn't the bicycle stand up by itself? It was two-tired.", "Why did the tomato turn red? Because it saw the salad dressing.", "What do you get when you cross a snowman and a vampire? Frostbite.", "Why was the math book sad? It had too many problems.", "Why couldn't the leopard play hide and seek? Because he was always spotted.", "What do you call a bear with no teeth? A gummy bear.", "Why couldn't the tomato win the race? Because it was a slow-poke.", "What do you get when you cross a sheep and a kangaroo? A woolly jumper.", "Why was the computer cold? Because it left its Windows open.", "Why did the cookie go to the doctor? It was feeling crumbly.", "What do you get when you cross a cat and a dog? A catastrophe.", "Why did the chicken go to outer space? To see the moooon.", "What do you call a dinosaur with an extensive vocabulary? A thesaurus.", "Why couldn't the bicycle stand up by itself? It was two-tired."];
let button = document.getElementById('btnN');
let buttonP = document.getElementById('btnP');
let changeElement = document.getElementById('joke');

let i = 0;
const start = ()=>{
    button.innerHTML = "Next";
    buttonP.style.display = "inline";

    if(i >= 0 && i < arr.length){
        changeElement.innerHTML = arr[i];
        i++
    }
    else if (i > arr.length-1){
       i = 0;
       changeElement.innerHTML = arr[i];
       i++
    }
}

const end = ()=>{
    if(i < 1){
        i = arr.length-1;
        changeElement.innerHTML = arr[i];
    }
    else if(i >= arr.length){
        i = i - 2;
        changeElement.innerHTML = arr[i];
    }
    else{
        i = i - 1;
        changeElement.innerHTML = arr[i];
    }
   
}
