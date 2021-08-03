class MyArray {

    constructor () {
        this.length = 0;
        this.data = {};
    }

    get(index) {
        return this.data[index];
    }

    push(item){
        this.data[this.length] = item;
        this.length ++;
        return this.length;
    }

    pop(){
        const lastItem = this.data[this.length - 1];
        delete this.data[this.length - 1];
        this.length --;
        return lastItem;
    }
    

    delete(index) {
        const item = this.data[index];
        delete this.data[index];
        for (let i = index; i < this.length; i++){
            this.data[i] = this.data[i+1]
        }
        delete this.data[this.length - 1]
        this.length --;
        return item
    }
}

// arr = ['jaafar','test','hey','world']

const newArray = new MyArray();
newArray.push('jaafar');
newArray.push('amine');
newArray.push('engineer')
newArray.push('28')
newArray.push('!')
console.log(newArray);
newArray.delete(3);
newArray.delete(0);
console.log(newArray);


