import {observable} from 'mobx';
import {Flashcards} from './models/Flashcards.js';
import {Esv} from './models/EsvModel.js';

class GlobalStore {
    @observable flashCardsStore = new Flashcards();
    @observable esv = new Esv();
}

const globalStore = new GlobalStore();
export default globalStore;