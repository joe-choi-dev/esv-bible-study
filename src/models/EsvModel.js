import {action, observable} from 'mobx';

export class Esv {

    @observable headings = ""

    @action getHeadings(q) {
        return fetch(
            '/api/esv/headings?q='+q
        ).then(response => response.json())
            .then(res => {
                console.log(res)
                this.headings = res.titles.join();
                return res;
            })
    }

    @action
    getVerses(q) {
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
