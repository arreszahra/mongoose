const mongoose=require("mongoose");
const Person=require("./personschema");
const db=require("./server")
db();
const newPerson= new Person ({
    name:"zahra",
    age: 29 ,
    favoriteFoods:["Pizza", "Chips", "Chocolat"]
})

const createPerson= async () => {
    try {
      const savedPerson = await newPerson.save();
      console.log("person is saved", savedPerson);
    } catch (error) {
      console.log("error", error);
    }
  };
  createPerson();