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