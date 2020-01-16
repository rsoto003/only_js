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
  