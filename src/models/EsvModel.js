import {action, observable} from 'mobx';

export class Esv {

    @observable headings = "";

    @observable verses = "";

    @action getHeadings(q) {
        return fetch(
            '/api/esv/headings?q='+q
        ).then(response => response.json())
            .then(res => {
                this.headings = res.titles.join(', ');
                return res;
            })
    }

    @action
    getVerses(q) {
        return fetch(
            '/api/esv/?q='+q
        ).then(response => response.json())
            .then(res => {
                this.verses = res.passages[0];
                return res;
            })
        // esvService.getVerses(q)
        // fetch('/api/esv/?q='+q)
        //     .then(response => {
        //         this.status = response.status;
        //         if (response.status == 200) {
        //             return response.json();
        //         }
        //     })
        //     .then((res) => {
        //         if (this.status == 200) {
        //             return res;
        //         } else {
        //             return ({});
        //         }
        //     })
    }

}
