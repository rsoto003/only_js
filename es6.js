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