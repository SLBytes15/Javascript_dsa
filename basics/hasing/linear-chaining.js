class LinearChaining {
    constructor(size = 10){
        this.table = new Array(size).fill().map(() => []);
        this.size = 0;
    }

    _hash(key){
        return key % 10;
    }

    insert(key, value){
        const index = this._hash(key);
        this.table[index].push({key,value});
        this.size++;
    }

    get(key){
        const index = this._hash(key);
        const bucket = this.table[index];
        for(let items of bucket){
            if(items.key == key) return items.value;
        }
        return null;
    }

    delete(key){
        const index = this._hash(key);
        const bucket = this.table[index];   
        for (let i = 0; i < bucket.length; i++) {
            if(bucket[i].key == key){
                bucket.splice(i,1);
                this.size--;
                return true;
            }

        }
        return false;
    }
}

const chaining = new LinearChaining()

chaining.insert(1000, "Hi");
chaining.insert(100, "Hello");
chaining.insert(10, "World");

// chaining.delete(10);

console.log(chaining.get(1000));
