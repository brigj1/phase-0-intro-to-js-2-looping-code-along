for (let age = 30; age < 40; age++) {
    //console.log(`I'm ${age} years old. Happy birthday to me!`);
    //debugger;
}

const gifts = ["teddy bear", "drone", "doll"];

function wrapGifts(gifts) {
  for (let i = 0; i < gifts.length; i++) {
    console.log(`Wrapped ${gifts[i]} and added a bow!`);
    // debugger;
  }

  return gifts;
}

wrapGifts(gifts);

function writeCards(names, eventName) {
// build a function named writeCards() that accepts two arguments: an array of string names, and an event name. Create a for loop with a counter that starts at 0 and increments at the end of each loop. The for loop should stop once it has iterated over the length of the array.
// create a custom message for each name inside the loop. Unlike that example, however, instead of simply logging the messages to the console, you will collect them in a new array and return this array at the end of the function.
    const messages = [ ];
    for (let i = 0; i < names.length; i++) {
        messages.push(`Thank you, ${names[i]}, for the wonderful ${eventName} gift!`);
    }
    return messages;
}

function countDown(countFrom) {
// write a function, countDown, that takes in any positive integer and, starting from that number, counts down to zero using console.log(). Note that this means that running countDown(10); would actually log 11 times.
    let loopsToGo = countFrom + 1;
    
    while (loopsToGo > 0) {
        loopsToGo--;
        console.log(loopsToGo);
    }
}

countDown(10);