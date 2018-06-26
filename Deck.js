class Deck {
   
  constructor() {
    this.deck = [];

    const suits = ['\u2660', '\u2666', '\u2663', '\u2764'];
    const values = ['A', 2, 3, 4, 5, 6, 7, 8, 9, 10, 'J', 'Q', 'K'];


    var card = {};
    for (let suit in suits) {

      for (let value in values) {
       
        this.deck.push(`${values[value]} ${suits[suit]}`);
      }
    }
  }

  
    shuffle(){
        const { deck } = this;
        let i = deck.length;
        let x;
  
      while(i){
        x = Math.floor(Math.random() * i--);
  
        [deck[i], deck[x]] = [deck[x], deck[i]];
      }
  
      return this;
    }
  
    deal(){
      return this.deck.pop();
    }

    checkFlush(hand){

      for (var y = 0; y < 4; y++){
        if(hand[y].substring(hand[y].length - 1) != hand[y+1].substring(hand[y].length - 1)){
          return false;
        }
      }
      return true;
    }

  checkTwopair(hand){
    var numbers = [];
    for (var y = 0; y < hand.length ; y++){
      numbers.push(hand[y].slice(0,2))  
    }


    var results = [];
    
    var sortedhand = numbers.slice().sort();
    for (var i = 0; i < sortedhand.length -1; i++ ){
        if (sortedhand[i+1] == sortedhand[i] && sortedhand[i+1] != sortedhand[i+2]){
          results.push(sortedhand[i]);
        }

    }
    if(results.length != 2){
    return false
    }
    return true;
  }

  

  checkStraight(hand){

    var values = ['2 ', '3 ', '4 ', '5 ', '6 ', '7 ', '8 ', '9 ', '10 ', 'J ', 'Q ', 'K ', 'A '];
    var numbers = [];
    for (var y = 0; y < hand.length ; y++){
      numbers.push(hand[y].slice(0,2))  
    }


    var results = [];
    
    var sortedhand = numbers.slice().sort(function(a,b){return a-b});
    let c0 = values.indexOf(sortedhand[0])
    let c4 = values.indexOf(sortedhand[4])
    for (var i = 0; i < sortedhand.length -1; i++ ){
        if (sortedhand[i+1] == sortedhand[i]){
          results.push(sortedhand[i]);
        }
        if(results.length != 0){
        return false;
        }
       }
       if(sortedhand[0] == 'A ' && sortedhand[4] == '5 ' ){
         return true;
       }else if( (c0-c4) == 5){
         return true
       }

       //console.log(sortedhand)
     
        
        
        
       
       

        
        //return (c0-c4) == 4;
        
        //console.log(sortedhand);
        //return true;
        
      }




    evaluate(hand){

        
         if(this.checkStraight(hand) && this.checkFlush(hand)){
           console.log("Straight Flush")
          }
          else if(this.checkFlush(hand)){
            console.log("Flush")
          }
          else if(this.checkStraight(hand)){
            console.log("Straight")
          }   
          else if(this.checkTwopair(hand)){
            console.log("Two pair")
          }
      
    }

  }
  
var cards = [];
const shuffled = new Deck();
//shuffled.shuffle()
//shuffled.deal()
//cards.push(shuffled.deck.slice(0,15));
// console.log(cards);

  for (i=0; i <= 2; i++){
    cards = shuffled.deck.splice(0,5);
    console.log(cards);
    shuffled.evaluate(cards);
    cards = [];
  }
 
  
  



