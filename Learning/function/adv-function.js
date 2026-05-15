const function1 = function greeting(){
    console.log('hello');
}
function1();

const function2 = function() {
    console.log('hello');
}


function run(param){
    param();
}

run(function(){ // passing a function into another function
    console.log('hello2');
})


setTimeout(function(){    //built-in function
  console.log("timeout");
},1000); 


setInterval(function(){
    console.log("interval");
},3000);


[   
    'make dinner',
    'wash dishes',
    'watch youtube'
].forEach(function(value, index ){
    console.log(index);
    console.log(value);
})



const arrowFunction = () => {
    console.log("hello");
};

const oneParam = (param1) => {
    console.log(param1);
}

const oneLine = () => 1+ 2; 