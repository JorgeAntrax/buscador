'use strict';

class Search {

    constructor(obj) {
        this.el = document.querySelector(obj.el);
        this.list = obj.list;
        this.init();
    }

    init() {
        let input, listContainer;
        this.el.innerHTML = `
			<input placeholder="Buscar aqui" type="text" class="input"/>
			<listgroup class="is-visible" id="searchList"></listgroup>
		`;
        input = document.querySelector('.input');
        listContainer = document.querySelector('#searchList');
        this.watch(input, this.list, listContainer);
    }

    watch(input, list, search) {
        input.addEventListener('keyup', () => {
            search.innerHTML = '';
            let value = input.value.toLowerCase(),
                listT = list.length,
                existe = 0;

            for (let i = 0; i < listT; i++) {
                let text = list[i].toLowerCase();
                if (value != '') {
                    existe = ~text.indexOf(value);
                    if (existe != 0) {
                        this.updateList(search, list[i]);
                    }
                }
            }
        }, false);
    }

    updateList(el, text) {
        el.innerHTML += `<list-item>${text}</list-item>`;
    }

    add(item) {
        this.list.push(item);
    }

    remove(item) {
        let position = this.list.indexOf(item);
        this.list.splice(position, 1);
    }

}