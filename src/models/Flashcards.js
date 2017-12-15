import {action, observable} from 'mobx';


export class Flashcards {

    @observable isDefVisible = 'hidden';

    // @action openCard() {
    //     this.isDefVisible = 'visible';
    // }

    @action toggleCard() {
        if (this.isDefVisible === 'visible') {
            this.isDefVisible = 'hidden';
        } else {
            this.isDefVisible = 'visible';
        }
    }

    @action closeCard() {
        this.isDefVisible = 'hidden';
    }

}
