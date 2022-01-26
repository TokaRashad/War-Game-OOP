let zAttack = document.querySelector(".z-attack");
let zHealth = document.querySelector(".z-health");
let gAttack = document.querySelector(".g-attack");
let gHealth = document.querySelector(".g-health");

class Character {
    constructor (name, strength, health){
        this.name = name;
        this.strength = strength;
        this.health = health;
    }

    printStatus(){
        console.log(`Name: ${this.name}... and Strength ${this.strength} ... and health ${this.health}`);
    }

    attack(opponent){
        if (opponent.health > 0){
            opponent.health -= this.strength;
            document.getElementById(`${opponent.name}Changing`).style.width = `${opponent.health}%`;
            document.getElementById(`${opponent.name}Changing`).style.backgroundColor = "red";
        }else{
            zAttack.remove();
            gAttack.remove()
        }
        
    }

    healthlevel(){
        document.getElementById("healthLevel").innerText = `The Health of  ${this.name} is ${this.health} `;
        document.getElementById("healthLevel").style.color = "green";
    }

    isAlive(){
        if (this.health == 0) {
            document.getElementById("status").innerText = ` ${this.name} is DEAD!`;
            document.getElementById("status").style.color = "red";
        }
    }
}

let z = new Character("zayra", 10, 100);
z.printStatus();

let g = new Character("garen", 10, 100);
g.printStatus();

zHealth.addEventListener("click" , function(){
    z.healthlevel();
});

gHealth.addEventListener("click" , function(){
    g.healthlevel();
});


zAttack.addEventListener("click" , function(){
    z.attack(g);
    z.isAlive();
    g.isAlive();
});

gAttack.addEventListener("click" , function(){
    g.attack(z)
    g.isAlive();
    z.isAlive();
});





