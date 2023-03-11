let op='+'
function calculate(){
    let a = Number(document.getElementById('first').value);
    let b = Number(document.getElementById('second').value);
    if(op=='+'){
        document.getElementById('result').innerHTML = (a+b);
    }else if( op=='-'){
        document.getElementById('result').innerHTML = (a+b); 
    }else if(op=='*'){
        document.getElementById('result').innerHTML = (a*b);
    }else if(op=='/'){
        document.getElementById('result').innerHTML = (a/b);
    }else{
        document.getElementById('result').innerHTML = "invalid operation";
    }
    
}

function getOp(){
    op = document.getElementById('operation').value;
    console.log(op);
}