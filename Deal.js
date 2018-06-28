import Deck from 'Deck.js';

class Deal {
  checkFlush(hand){
      
      
    for (var y = 0; y < 5; y++){
        
        if(hand[0].substring(hand[0].length - 1) != hand[y].substring(hand[y].length - 1)){
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
    
    var sortedHand = numbers.slice().sort();
      for (var i = 0; i < sortedHand.length -1; i++ ){
          if (sortedHand[i+1] == sortedHand[i] && sortedHand[i+1] != sortedHand[i+2]){
              results.push(sortedHand[i]);
            }

        }
          if(results.length != 2){
            return false
              }
    return true;
  }

  

  checkStraight(hand){

    var values = ['2 ', '3 ', '4 ', '5 ', '6 ', '7 ', '8 ', '9 ', '10', 'J ', 'Q ', 'K ','A '];
    var numbers = [];
    var results = [];
      for (var y = 0; y < hand.length ; y++){
          numbers.push(hand[y].slice(0,2)); 
        }
        
        


    
    
    var sortedHand = numbers.slice().sort((a,b) => values.indexOf(a) - values.indexOf(b));
    let c0 = values.indexOf(sortedHand[0]);
    let c4 = values.indexOf(sortedHand[4]);

    for (var i = 0; i < sortedHand.length -1; i++ ){
      if (sortedHand[i+1] == sortedHand[i]){
            results.push(sortedHand[i]);
              }
      if(results.length != 0){
            return false;
              }
    }
      if(sortedHand[4] == 'A ' && sortedHand[3] == '5 ' ){
        
          return true;

        }

      if( c4-c0 == 4){
        console.log(sortedHand);
         return true;

          }
         
        
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
shuffled.shuffle()
shuffled.deal()
const evaluate = new Deal();


  for (i=0; i <= 0; i++){
    cards = shuffled.deck.splice(0,5);
    console.log(cards);
    shuffled.evaluate.evaluate(cards);
    cards = [];
  }