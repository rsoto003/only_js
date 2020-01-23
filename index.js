// *** Using Objects for Lookup. Can be used instead of if/else or switch statements. 
// *** Useful when input data is limited to a certain range.

function phoneticLookup(val) {
    var result = "";
    const lookup = {
      "alpha": "Adams",
      "bravo": "Boston",
      "charlie": "Chicago",
      "delta": "Denver",
      "echo": "Easy",
      "foxtrot": "Frank"
    }
  
    result = lookup[val];
    console.log(result);
    return result;
  }
  
  //Test Values
  phoneticLookup("");
  phoneticLookup("bravo");
  phoneticLookup("alpha");
  phoneticLookup("echo");
  phoneticLookup("charlie");
  phoneticLookup("foxtrot");

/* Testing Objects for Properties */
// *** hasOwnProperty(propname) method

// Setup
var myObj = {
    gift: "pony",
    pet: "kitten",
    bed: "sleigh"
  };
  
  function checkObj(checkProp) {
    if(myObj.hasOwnProperty(checkProp)){
      return myObj[checkProp];
    } else {
      return "Not Found";
    }
  }
  
  // Test your code by modifying these values
  console.log(checkObj("gift"));
  console.log(checkObj("pet"));
  console.log(checkObj("bed"));
  

  /* Manipulating Complex Objects */
  // Somtimes you may want to store data in a flexible data structure.
  //An object can handle flexible data (strings, numbers, booleans, functions and objects).
  // JavaScript Object Notation or JSON is a related data interchange format used to store data.

  var myMusic = [
    {
      "artist": "Billy Joel",
      "title": "Piano Man",
      "release_year": 1973,
      "formats": [
        "CD",
        "8T",
        "LP"
      ],
      "gold": true
    },
    {
      "artist": "Drake",
      "title": "Views",
      "release_year": 2016,
      "formats": [
        "CD",
        "Vinyl",
        "Streaming"
      ],
      "gold": true,
      "platinum": true
    }
    // Add record here
  ];
  /* Accessing Nested Objects */
  //Sub properties of objects can be accessed by chaining together the dot or bracket notation.

  /* Accessing Nested Arrays*/  
  //Array bracket notation can be chained to acces nested arrays.  

  /* * Record Collection * */

var collection = {
    2548: {
      album: "Slippery When Wet",
      artist: "Bon Jovi",
      tracks: [
        "Let It Rock",
        "You Give Love a Bad Name"
      ]
    },
    2468: {
      album: "1999",
      artist: "Prince",
      tracks: [
        "1999",
        "Little Red Corvette"
      ]
    },
    1245: {
      artist: "Robert Palmer",
      tracks: [ ]
    },
    5439: {
      album: "ABBA Gold"
    }
  };
  
  function updateRecords(id, prop, value) {
    if(prop !== "tracks" && value !== ""){
      collection[id][prop] = value;
    }
    if(prop == "tracks" && !collection[id].hasOwnProperty("tracks")){
      collection[id]["tracks"] = [];
    }
    if(prop == "tracks" && value !== ""){
      collection[id]["tracks"].push(value);
    }
    if(value === ""){
      delete collection[id][prop];
    }
    console.log(collection);
    return collection;
  }
  
  // Test Cases
  updateRecords(5439, "artist", "ABBA");
  updateRecords(5439, "tracks", "Take a Chance on Me");
  updateRecords(2548, "artist", "");
  updateRecords(1245, "tracks", "Addicted to Love");
  updateRecords(2468, "tracks", "Free");
  updateRecords(2548, "tracks", "");
  updateRecords(1245, "album", "Riptide");

  /****** Loops *******
    * While Loops 
     * Runs "while" a specific condition is true and stops when false.
    * For Loops
     * Most common. Runs for a specific amount of time.
     * for ([initialization]; [condition]; [final-expression])
  */

 function multiplyAll(arr) {
    var product = 1;
    // Only change code below this line
    for(var i = 0; i < arr.length; i++){
      for(var o = 0; o < arr[i].length; o++){
        product*= arr[i][o];
      }
    }
    // Only change code above this line
    return product;
  }
  
  // Modify values below to test your code
  multiplyAll([[1,2],[3,4],[5,6,7]]);
  
  console.log(multiplyAll([[1],[2],[3]]));
  console.log(multiplyAll([[1,2],[3,4],[5,6,7]]) );
  console.log(multiplyAll([[5,1],[0.2, 4, 0.5],[3, 9]]));

    /** 
   * Do...While Loops
   * called do...while b/c it will do one pass opf the code inside the loop no matter 
   * what, and then continue to run the loop while the specified condition 
   * evaluates to true
   * 
   * in a while loop the condition would evaluate to false and never run,
   * but this is not the case with a do...while loop
   * var ourArray = []; 
    var i = 5;
    do {
        ourArray.push(i);
        i++;
    } while (i < 5);
   * **/


   /* Replace Loops using Recursion */
   /*
    * Recursion is the concept that a function can be expressed in terms of itself
    * 
    * 
    * 
    */

   function sum(arr, n) {
      if(n <= 0){
        return arr[0];
      } else {
        return sum(arr, n - 1) + arr[n];
      }
  }

  /* Profile Lookup */

  var contacts = [
    {
        "firstName": "Akira",
        "lastName": "Laine",
        "number": "0543236543",
        "likes": ["Pizza", "Coding", "Brownie Points"]
    },
    {
        "firstName": "Harry",
        "lastName": "Potter",
        "number": "0994372684",
        "likes": ["Hogwarts", "Magic", "Hagrid"]
    },
    {
        "firstName": "Sherlock",
        "lastName": "Holmes",
        "number": "0487345643",
        "likes": ["Intriguing Cases", "Violin"]
    },
    {
        "firstName": "Kristian",
        "lastName": "Vos",
        "number": "unknown",
        "likes": ["JavaScript", "Gaming", "Foxes"]
    }
];


function lookUpProfile(name, prop){
    for(var index = 0; index < contacts.length; index++){
        if(contacts[index]["firstName"] === name){
            if(contacts[index].hasOwnProperty(prop)){
                return contacts[index][prop];
            } else {
                return "No such property"
            }
        }
    } 
    return "No such contact"
}

lookUpProfile("Akira", "likes");
lookUpProfile("Sherlock", "likes");
lookUpProfile("Harry","likes");