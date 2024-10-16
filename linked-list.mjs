import { Node } from './node.mjs';

class LinkedList {
    constructor() {
        this.head = null;
        this.tail = null;
    }

    append(value) {
        const item = new Node(value);
        // if it was an empty list, set the head and tail to this node
        if (this.head === null) {
            this.head = item;
            this.tail = item;
            return;
        }

        let cur = this.head;
        while (cur.nextNode != null) {
            cur = cur.nextNode;
        }
        cur.nextNode = item;
        this.tail = item;
    }

    prepend(value) {
        const item = new Node(value);
        if (this.head === null) {
            this.head = item;
            this.tail = item;
            return;
        }

        item.nextNode = this.head;
        this.head = item;


    }
}

const list = new LinkedList();
list.append('testing node');
list.append('testing tail');
list.prepend('testing prepend');
console.log(list.head);