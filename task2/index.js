// Task 2
function functionToExrcute(){
    console.log("Hello Word");
}

// Task 4
function createArrayAndSum(){

    let numbers = [];
    let sum = 0;

    for(let i = 0; i <= 100; i++){
        numbers.push(i);
    }

    for(let i = 0; i < numbers.length; i++){
        sum += numbers[i];
    }

    console.log("Sum =", sum);
}

// Task 5 
function createArrayAndSumEven(){

    let numbers = [];
    let sum = 0;

    for(let i = 0; i <= 100; i++){
        numbers.push(i);
    }

    for(let i = 0; i < numbers.length; i++){
        if(numbers[i] % 2 === 0 ){
            sum+= numbers[i]
        }
    }

    console.log("Sum =", sum);
}

//Task 6

function createArray(){
    let arr =[];
    for (let i =0 ;i <= 100 ; i++){
        arr.push(i);
    }
    return arr;
}

function shuffleArray(array){
    for(let i = array.length -1; i>0 ; i--){
        let j = Math.floor(Math.random() * (i + 1));
        [array[i] ,array[j]] = [array[j] ,array[i]];
    }
}

function buttonOne(){
    let arr = createArray() ;

    let result = arr.filter(function(num){
        return num % 3 !== 0 ;
    });

    console.log(result);
}

function buttonTwo(){
    let arr = createArray();

    for (let i = 100 ; i<= 150 ; i++){
        arr.push(i);
    }
    console.log(arr)
}

function buttonThree(){
    let arr = createArray();

    let result = arr.map(function(num){
        return num + 3;
    });
    console.log(result);
}

function buttonFour() {
    let arr = createArray();

    let result = arr.slice(20, 41);

    console.log(result);
}

function buttonFive() {
    let arr = createArray();

    shuffleArray(arr);

    console.log("Shuffled:", arr);

    arr.sort(function(a, b) {
        return b - a;
    });

    console.log("Descending:", arr);
}

//Task 7 

function updateClock() {

    let now = new Date();

    let hours = now.getHours();
    let minutes = now.getMinutes();
    let seconds = now.getSeconds();

    if (hours < 10) {
        hours = "0" + hours;
    }

    if (minutes < 10) {
        minutes = "0" + minutes;
    }

    if (seconds < 10) {
        seconds = "0" + seconds;
    }

    let time = hours + ":" + minutes + ":" + seconds;

    document.getElementById("clock").textContent = time;
}
//setInterval(updateClock, 1000);


//task 9 

function getIP(){
    fetch("https://api.ipify.org/")
    .then(response => response.text())
    .then(data => console.log(data))
    .catch(error => console.error('Error:', error));
}