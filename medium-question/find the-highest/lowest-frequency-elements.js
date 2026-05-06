let arr = [10,5,10,15,10,5];
let map = new Map();

for(let num of arr){
    if(map.has(num)){
        map.set(num, map.get(num) + 1);
    }else{
        map.set(num,1);
    }
}

let maxfreq = 0;
let minfreq = Infinity;

let maxElement, minElement;

for(let [key,value] of map) {
    if(value > maxfreq){
        maxfreq = value;
        maxElement = key;
    }

    if(value < minfreq){
        minfreq = value;
        minElement = key;
    }

};

console.log(`Maximum : ${maxElement}`);
console.log(`Minimun : ${minElement}`);
