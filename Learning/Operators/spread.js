// spread operator is used to concat inside script
// it is easier than concat function

const num1 = [1,2,3,4,5];
const num2 = [6,7,8,9,10];

const name = 'Saransh';

const joined = [...num1, ...num2, ...name];
// console.log(joined);

const user = {
    name : "Anurag",
    age : 25,
};

const updatedUser = {...user, city: 'Udaipur'};


function add(...joined){
    console.log(arguments);
    
}

