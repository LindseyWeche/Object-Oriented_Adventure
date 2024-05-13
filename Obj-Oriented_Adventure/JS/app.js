const adventurer = {
    name: "Robin",
    health: 10,
    inventory: ["sword", "potion", "artifact"],
    companion: {
        name: "Leo",
        type: "Cat",
        friend:{
            name : "Frank",
            type : "Flea",
            inventory : ["small hat", "sunglasses"],
        }
    },

 roll (mod = 0) {
        const result = Math.floor(Math.random() * 20) + 1 + mod;
        console.log(`${this.name} rolled a ${result}.`);
     }
}
    

 //To acess any data in the inventory  use .inventory[]

// Now we are console.login each element in the inventory
for (let i = 0; i<adventurer.inventory.length; i++){
    console.log (adventurer.inventory[i]);
}

