class Node{
    constructor(value){
        this.value = value;
        this.next = null;
    }
}

class LinkedList{
    constructor(){
        this.head = 0;
        this.size = 0;
    }

    append(...value){
        value.forEach(val => {
            const newNode = new Node(val);
            if(!this.head){
                this.head = newNode;
            }else{
                let current = this.head;
                while(current.next){
                    current = current.next;
                }
                current.next = newNode;
            }
            this.size++;
        });
    }
}

const value = new LinkedList;
value.append(5,6,7,8,9);