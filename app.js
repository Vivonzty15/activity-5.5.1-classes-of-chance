class Casino {
    constructor(name, fakeCoin){
        this.name = name;
        this.timesPlayed = 0;
        this.winnings = 0;
        this.fakeCoin = fakeCoin
    }

    playGame(betAmount){
        this.timesPlayed += 1
        if (Math.random() < 0.5 && this.fakeCoin == false){
            console.log(this.name + " wins!");
            this.winnings = 0
            this.timesPlayed = 0 
       
        } else {
        console.log("You win: " + betAmount);
        this.winnings += betAmount * this.timesPlayed;
        console.log(this.winnings)
        }
    }

    rollDie(sides){
        console.log(Math.floor(math.random() * sides) + 1)
    }
};

// TESTS
const myCasino = new Casino("HackerU Casino");
console.log(myCasino);
myCasino.playGame(5);
myCasino.playGame(15);
myCasino.playGame(25);
myCasino.playGame(35);

// BONUS TESTS
/*
const myBonusCasino = new Casino("HackerU Bonus Casino", true);
console.log(myBonusCasino);
myBonusCasino.playGame(5);
myBonusCasino.playGame(15);
myBonusCasino.playGame(25);
myBonusCasino.playGame(35);
*/

// Extra BONUS TESTS
/*
const myExtraBonusCasino = new Casino("HackerU Extra Bonus Casino", false);
console.log(myExtraBonusCasino);
myExtraBonusCasino.rollDie(6);
myExtraBonusCasino.rollDie(20);
myExtraBonusCasino.rollDie(100);
*/
