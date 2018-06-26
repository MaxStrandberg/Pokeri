import Deck from './Deck.js';

//var cards = [];
const shuffled = new Deck();
shuffled.shuffle()
shuffled.deal()
//cards.push(shuffled.deck.slice(0,15));
// console.log(cards);
  var p1 = [];
  p1.push(shuffled.deck.slice(0,5));
  var p2 = [];
  p2.push(shuffled.deck.slice(5,10));
  var p3 = [];
  p3.push(shuffled.deck.slice(10,15));
 


console.log(p1);
console.log(p2);
console.log(p3);
