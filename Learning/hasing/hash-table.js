class HashTable {
    constructor(size = 10){
        this.table = new Array(size).fill(null);
        this.size = 0;
    }

    _hash(key){ //
        return  key % 10;  // division method using modulo 10
    }

    insert(key,value){
        const index = this._hash(key);
        this.table[index] = value;
        this.size++;
    }
    get(key){
        const index = this._hash(key);
         return   this.table[index] || null;
    }
    search(value){
        for (let i = 0; i < this.table.length ; i++) {
            if(this.table[i] == value){
                console.log(`Value found at index: ${i}`);
                return;
            }   
        }
        console.log("Value not found");
        
    }
    delete(key){
        const index = this._hash(key);
        if (this.table[index]) {
            this.table[index] = null;
            this.size--;
            return true;
        }
        return false;
    }
}

const hashtable = new HashTable();

hashtable.insert(17, "alice");
hashtable.insert(127, "john");

console.log(hashtable.get(7));

hashtable.delete(7);

console.log(hashtable.get(7));