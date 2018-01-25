// ... npm Package

var inquirer = require('inquirer');
var fs = require("fs");

// Require: BasicCard, ClozeCard

var BasicCard = require("./BasicCard.js");
var ClozeCard = require("./ClozeCard");



// Variables for New cards

var card1 = new BasicCard("Who was the ancient Greek philosopher famous for creating the dialectic method?", "Socrates")
var card2 = new ClozeCard("George Washington was the first president of the United States.", "George Washington")


// Start of Flashcard Generator 

console.log("Let's Begin!");


// User Will Choose Card Type

inquirer.prompt([

		{
			type: "list",
			message: "Which type of card would you like to start with?",
			choices:["Basic", "Cloze"],
			name: "cardType"

		}
    ]).then(function(card) {

    	if (card.cardType === "Basic") {

    		console.log("========== BASIC CARD ==========");

    		card1 = new BasicCard();

    		inquirer.prompt([

    			{

    				type: "input",
    				message: card1.front,
    				name: "question1"

    			}

    	]).then(function(answerBasic){
    		if (answerBasic.question1 == card1.back){
    			console.log("CORRECT!");
    			console.log (card1.back);
    		
    		} else {

    			console.log("INCORRECT!");
    			console.log(card1.back);
    		}
    	});
    	

// Cloze Option

    } else {

    		console.log("========== CLOZE CARD ==========");

    		card2 = new ClozeCard();

    		inquirer.prompt([

    				{
    					
    					type: "input",
    					message: card2.partial,
    					name: "question2"
    				
    				}


				]). then(function(answerCloze){

					if (answerCloze.question2 == card2) {
						console.log("CORRECT!");
						console.log(card2.fullText);
					
					} else {

					console.log("INCORRECT!");
					console.log(card2.fullText);

					}
				
				});
    	}
    
    });
};



	