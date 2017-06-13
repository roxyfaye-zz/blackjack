/*
   Implement a Blackjack hand value calculator.

   Open up the `index.html` file and your console
   to watch the assertions pass as you write your code.

   Also remember, that the parameter `hand` will be an array, so
   you'll need to parse through that first before you can start to 
   write your logic.
*/
//roxy's notes---create an string that denotes the value of each card.
//create a rule that denotes how many cards a hand can be
//3 conditions-if "face card, if ace
//return the value of each hand
//

function handValue(hand) {

   var handResult = 0;

   for (var i = 0; i < hand.length; i++) {
    var card = 0;
    //Is hand[index] a "K", a "Q" or a "J"
    if (hand[i] == "K" || 'K' || 'Q' || 'J') {
     handResult = parseInt(hand[i] + 10);

    }

   else if (hand[i] == '2') {
     handResult = handResult += 2;
   }

   else if (hand[i] == '3') {
     handResult = handResult += 3;
   }

   else if (hand[i] == '4') {
     handResult = handResult += 4;
    }

    else if (hand[i] == '5') {
     handResult = handResult += 5;
    }

    else if (hand[i] == '6') {
     handResult = handResult += 6;
    }

    else if (hand[i] == '7') {
     handResult = handResult += 7;
    }

    else if (hand[i] == '8') {
     handResult = handResult += 8;
    }

    else if (hand[i] == '9') {
     handResult = handResult += 9;
    }

   else if (hand[i] == "A"){
     for (let j = 0; j < hand.length-1; j++){

       if (carval > 11)
       return cardVal += 1;
      }
      
      if (cardVal < 11)
      return cardVal -= 1;
   }
}
 
return handResult;
    }




  /* -----  Hints ------


  1..10   ==> Worth face value (1 = 1, 4 = 4, etc)
  K, Q, J ==> Worth 10
  A       ==> Worth 1 or 11

  */