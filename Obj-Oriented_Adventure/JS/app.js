const adventurer = {
    name: "Robin",
    health: 10,
    inventory: ["sword", "potion", "artifact"],
    companion: {
        name: "Leo",
        type: "Cat",
        companion:{
            name : "Frank",
            type : "Flea",
            inventory : ["small hat", "sunglasses"],
        }
    },
    // The roll()
      roll (mod = 0) {
        const result = Math.floor(Math.random() * 20) + 1 + mod;
        console.log(`${this.name} rolled a ${result}.`);
      }
    
}
adventurer.roll();

// Using class to create many adventures 
class Character {
    constructor (name) {
      this.name = name;
      this.health = 100;
      this.inventory = [];
    }
}

// new Character("Robin");
// robin.inventory = ["sword", "potion", "artifact"];
// robin.companion = new Character("Leo");
// robin.companion.type = "Cat";
// robin.companion.companion = new Character("Frank");
// robin.companion.companion.type = "Flea";
// robin.companion.companion.inventory = ["small hat", "sunglasses"];


class Adventurer extends Character {
    constructor (name, role) {
      super(name);
      // Adventurers have specialized roles.
      this.role = role;
      // Every adventurer starts with a bed and 50 gold coins.
      this.inventory.push("bedroll", "50 gold coins");
    }
    // Adventurers have the ability to scout ahead of them.
    scout () {
      console.log(`${this.name} is scouting ahead...`);
      super.roll();
    }
  }

  class Companion {
    constructor (name,type){
       super (name);
       this.type = type;

    }
  }

    

 //To acess any data in the inventory  use .inventory[]

 // Now we are console.login each element in the inventory
   for (let i = 0; i<adventurer.inventory.length; i++){
    console.log (adventurer.inventory[i]);
    }

