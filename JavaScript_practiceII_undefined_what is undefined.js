const characters = [
    {name: "◆◆◆ ◆◆◆", age: 14},
    {name: "*** ***", age: 100},
    {name: "??? ???", age: 5},
    // Please add elements.
    {name: "### ###"}
  ];
  
  for (let i = 0; i < characters.length; i++) {
    console.log("--------------------");
    
    const character = characters[i];
    
    console.log(`My name is ${character.name}.`);
    console.log(`I am ${character.age} years old.`);
  }

// If you run the program, it will output "I am undefined years old." because the 4th element does not have a value corresponding to "age".