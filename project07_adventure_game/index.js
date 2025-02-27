import inquirer from "inquirer";
class Player {
    name;
    fuel = 100;
    constructor(name) {
        this.name = name;
    }
    fuelDecrease() {
        let fuel = this.fuel - 25;
        this.fuel = fuel;
    }
    fuelIncrease() {
        this.fuel = 100;
    }
}
;
class Opponent {
    name;
    fuel = 100;
    constructor(name) {
        this.name = name;
    }
    fuelDecrease() {
        let fuel = this.fuel - 25;
        this.fuel = fuel;
    }
}
;
let player = await inquirer.prompt([
    {
        name: "name",
        type: "input",
        message: "Please Enter your name:"
    }
]);
let opponent = await inquirer.prompt([
    {
        name: "select",
        type: "list",
        message: "select your opponent",
        choices: ["Skeleton", "Alien", "Zombie"],
    }
]);
let p1 = new Player(player.name);
let o1 = new Opponent(opponent.select);
do {
    // Skeleton
    if (opponent.select == "Skeleton") {
        let ask = await inquirer.prompt([
            {
                name: "opt",
                type: "list",
                message: "What would you like to da?",
                choices: ["Attack", "Drink portion", "Run For Your Life...",]
            }
        ]);
        if (ask.opt == "Attack") {
            let num = Math.floor(Math.random() * 2);
            if (num > 0) {
                p1.fuelDecrease();
                console.log(`${p1.name} fuel is ${p1.fuel}`);
                console.log(`${o1.name} fuel is ${o1.fuel}`);
                if (p1.fuel <= 0) {
                    console.log("You Loose, Better Luck Next Time");
                    process.exit();
                }
            }
            if (num <= 0) {
                o1.fuelDecrease();
                console.log(`${p1.name} fuel is ${p1.fuel}`);
                console.log(`${o1.name} fuel is ${o1.fuel}`);
                if (o1.fuel <= 0) {
                    console.log("You Win");
                    process.exit();
                }
            }
        }
        if (ask.opt == "Drink portion") {
            p1.fuelIncrease();
            console.log(`You Drink Health Portion Your fuel is ${p1.fuel}`);
        }
        if (ask.opt == "Run For Your Life...") {
            p1.fuelDecrease();
            console.log("You Loose, Better Luck Next Time");
            process.exit();
        }
    }
    // Alien
    if (opponent.select == "Alien") {
        let ask = await inquirer.prompt([
            {
                name: "opt",
                type: "list",
                message: "What would you like to da?",
                choices: [
                    { name: "Attack", value: "Attack" },
                    { name: "Drink portion", value: "Drink portion" },
                    { name: "Run For Your Life...", value: "Run For Your Life..." },
                ]
            }
        ]);
        if (ask.opt == "Attack") {
            let num = Math.floor(Math.random() * 2);
            if (num > 0) {
                p1.fuelDecrease();
                console.log(`${p1.name} fuel is ${p1.fuel}`);
                console.log(`${o1.name} fuel is ${o1.fuel}`);
                if (p1.fuel <= 0) {
                    console.log("You Loose, Better Luck Next Time");
                    process.exit();
                }
            }
            if (num <= 0) {
                o1.fuelDecrease();
                console.log(`${p1.name} fuel is ${p1.fuel}`);
                console.log(`${o1.name} fuel is ${o1.fuel}`);
                if (o1.fuel <= 0) {
                    console.log("You Win");
                    process.exit();
                }
            }
        }
        if (ask.opt == "Drink portion") {
            p1.fuelIncrease();
            console.log(`You Drink Health Portion Your fuel is ${p1.fuel}`);
        }
        if (ask.opt == "Run For Your Life...") {
            p1.fuelDecrease();
            console.log("You Loose, Better Luck Next Time");
            process.exit();
        }
    }
    // Zombie
    if (opponent.select == "Zombie") {
        let ask = await inquirer.prompt([
            {
                name: "opt",
                type: "list",
                message: "What would you like to da?",
                choices: [
                    { name: "Attack", value: "Attack" },
                    { name: "Drink portion", value: "Drink portion" },
                    { name: "Run For Your Life...", value: "Run For Your Life..." },
                ]
            }
        ]);
        if (ask.opt == "Attack") {
            let num = Math.floor(Math.random() * 2);
            if (num > 0) {
                p1.fuelDecrease();
                console.log(`${p1.name} fuel is ${p1.fuel}`);
                console.log(`${o1.name} fuel is ${o1.fuel}`);
                if (p1.fuel <= 0) {
                    console.log("You Loose, Better Luck Next Time");
                    process.exit();
                }
            }
            if (num <= 0) {
                o1.fuelDecrease();
                console.log(`${p1.name} fuel is ${p1.fuel}`);
                console.log(`${o1.name} fuel is ${o1.fuel}`);
                if (o1.fuel <= 0) {
                    console.log("You Win");
                    process.exit();
                }
            }
        }
        if (ask.opt == "Drink portion") {
            p1.fuelIncrease();
            console.log(`You Drink Health Portion Your fuel is ${p1.fuel}`);
        }
        if (ask.opt == "Run For Your Life...") {
            p1.fuelDecrease();
            console.log("You Loose, Better Luck Next Time");
            process.exit();
        }
    }
} while (true);
