class Sorter {

    constructor() {
        this._mass = [];
        this._comparator = (a, b) => a - b ;
        console.log("the creating of Sorter");
    }

    add(element) {
        this._mass.push(element);
    }

    at(index) {
        return this._mass[index];
    }

    get length() {
        return this._mass.length;
    }

    toArray() {
        return this._mass;
    }

    sort(indices) {

        indices.sort((a, b) => a - b); //sorting of indices
        let arrayToSort = []; //array of elements to sort
        indices.forEach((value, index) => {
            arrayToSort[index] =this._mass[value];
        });
        arrayToSort.sort(this._comparator);

        //making changes to the original array
        indices.forEach((value, index) => {
            this._mass[value] = arrayToSort[index];
        });

    }

    setComparator(compareFunction) {
        this._comparator = compareFunction;
    }
}

module.exports = Sorter;