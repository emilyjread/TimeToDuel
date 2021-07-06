class Card{
    constructor(name, cost){
        this.name=name;
        this.cost=cost;
    }
}

class Unit extends Card{
    constructor(name, cost, power, resilience){
        super(name, cost)
        this.power =power;
        this.resilience=resilience;
    }
    
}

class Effect extends Card{
    constructor(name, cost, text, stat, magnitude){
        super(name,cost);
        this.cost=cost;
        this.text= text;
        this.stat=stat;
        this.magnitude= magnitude;
    }
    attack(target){
        this.target= target;
        if(this.stat=="resilience"){
            target.resilience+=this.magnitude;
        }
        if(this.stat=="power"){
            target.power+=this.magnitude
        }
        
    }
}

const redBeltNinja= new Unit("Red Belt Ninja", 3, 3, 4)
const blackBeltNinja = new Unit("Black Belt Ninja", 3, 3, 4)
const hardAlgorithm = new Effect("Hard Algorithm", 2, "increase target's resilience by 2", "resilience", 3)
const unhandledPromiseRejection = new Effect("Unhandled Promise Rejection", 1, "reduce target's resilience by 2", "resilience", -2)
const pairProgramming = new Effect("Pair Programming", 3, "increase target's power by 2", "power", 2)

console.log("redbeltninja resilience before attack: " + redBeltNinja.resilience)
console.log("   Attacking redbeltninja with Hard Algorithm!")
hardAlgorithm.attack(redBeltNinja)
console.log("redbeltninja resilience after attack: " + redBeltNinja.resilience)

console.log("blackbeltninja resilience before attack: " + blackBeltNinja.resilience )
console.log("   Attacking blackbeltninja with Unhandled Promise Exception!")
unhandledPromiseRejection.attack(blackBeltNinja)
console.log("blackbeltninja resilience after attack: " + blackBeltNinja.resilience)

console.log("redbeltninja power before attack: " + redBeltNinja.power)
console.log("   Attacking redbeltninja with Pair Programming!")
pairProgramming.attack(redBeltNinja)
console.log("redbeltninja power after attack: " + redBeltNinja.power)
