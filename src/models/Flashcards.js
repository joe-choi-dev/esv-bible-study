import {action, observable} from 'mobx';


export class Flashcards {

    @observable isDefVisible = 'none';
    @observable chptNumArray = [];
    @observable keyVerses = [];
    @observable currCard = 1;

    @action toggleCard() {
        if (this.isDefVisible === 'inherit') {
            this.isDefVisible = 'none';
        } else {
            this.isDefVisible = 'inherit';
        }
    }

    @action closeCard() {
        this.isDefVisible = 'none';
    }

    @action nextCard() {
        if (this.chptNumArray.size !== 0) {
            const x = this.chptNumArray.pop();
            this.currCard = x;
            console.log(x);
            return x;
        }
    }

    @action createKeyVersesArray(bookTitle) {
        if (bookTitle === "Matthew") {
            this.keyVerses = ["5:3-12", "5:14", "5:17", "6:9-13", "6:19", "6:33", "7:21", "11:28", "16:18", "22:37", "28:18-20"];
        } else if (bookTitle === "Mark") {
            this.keyVerses = ["1:14-15", "10:45", "11:24", "12:30", "16:15-16"];
        } else if (bookTitle === "Luke") {
            this.keyVerses = ["4:18", "1:4", "10:25", "1:35", "9:23", "2:10-12"];
        } else if (bookTitle === "John") {
            this.keyVerses = ["1:1", "1:9", "1:12", "1:14", "3:16", "8:32", "10:10", "13:34", "14:1-3", "14:6", "14:15"];
        }
    }

    @action createChptNumArray(bookTitle) {
        if (bookTitle === "Matthew") {
            this.generateArray(28);
        } else if (bookTitle === "Mark") {
            this.generateArray(16);
        } else if (bookTitle === "Luke") {
            this.generateArray(24);
        } else if (bookTitle === "John") {
            this.generateArray(21);
        }
        this.chptNumArray = this.shuffle(this.chptNumArray);
        this.currCard = this.chptNumArray[0];
    }

    @action generateArray(total) {
        var arr = []
        var i = 1;
        while(i <= total) {
            arr.push(i);
            i++;
        }
        this.chptNumArray = arr;
    }

    @action shuffle(array) {
        var i = array.length,
            j = 0,
            temp;

        while (i--) {

            j = Math.floor(Math.random() * (i+1));

            // swap randomly chosen element with current element
            temp = array[i];
            array[i] = array[j];
            array[j] = temp;

        }
        return array;
    }

}
