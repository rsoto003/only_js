function checkScope() {
    'use strict';
    let i = 'function scope';
    if (true) {
      let i = 'block scope';
      console.log('Block scope i is: ', i);
    }
    console.log('Function scope i is: ', i);
    return i;
  }
  

  /* Rest Operator */
  const sum = (...args) => {
    return args.reduce((a, b) => a + b, 0);
  }
  // console.log(sum(1, 2, 3)); // 6

  const getMacroData = ({protein, fat, calories}) => {
    protein*= 0.5;
    fat*= 0.8;
    calories*= 0.75;
    console.log(protein, fat, calories)
}


let macros = {
    protein: 10,
    fat: 15,
    calories: 250
}

getMacroData(macros);

/* Alter code below this line */
class Vegetable {
  constructor(name){
      this.name = name;
  }
}
/* Alter code above this line */

const carrot = new Vegetable('carrot');
console.log(carrot.name); // => should be 'carrot'


/* Alter code below this line */
class Thermostat{
  constructor(fahrenheit){
      this._fahrenheit = fahrenheit;
  }
  get temperature(){
      return (5/9) * (this._fahrenheit - 32);
  }   
  set temperature(celsius){
      this._fahrenheit = celsius * 9/5 + 32
  }
}
/* Alter code above this line */

const thermos = new Thermostat(76); // setting in Fahrenheit scale
let temp = thermos.temperature; // 24.44 in C
thermos.temperature = 26;
temp = thermos.temperature; // 26 in C
