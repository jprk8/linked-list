import { LinkedList } from './linked-list.mjs';

const list = new LinkedList();

list.append("dog");
list.append("cat");
list.append("parrot");
list.append("hamster");
list.append("snake");
list.append("turtle");

console.log(list.toString());
list.insertAt('dragon', 1);
console.log(list.toString());
list.removeAt(1);
console.log(list.toString());