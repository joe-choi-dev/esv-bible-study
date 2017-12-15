import {observable} from 'mobx';
import {Flashcards} from './models/Flashcards';

class GlobalStore {
    @observable flashCardsStore = new Flashcards();
}

const globalStore = new GlobalStore();
export default globalStore;