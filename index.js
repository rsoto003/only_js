//Using Objects for Lookup. Can be used instead of if/else or switch statements. 
//Useful when input data is limited to a certain range.

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
  