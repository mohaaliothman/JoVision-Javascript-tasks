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