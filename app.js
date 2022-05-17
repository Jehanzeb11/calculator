console.log('calculator');

function typenum(num){
    let result = document.getElementById('result');
    result.value += num;
    
}

function valclear(){
    let result = document.getElementById('result');
    result.value = "";
}


function valclear1(){
    let result = document.getElementById('result');
   result.value =  result.value.slice(0,-1)
}


function property(){
    let result = document.getElementById('result');
    result.value = eval(result.value);
}

