var wins = 0, losses = 0, ties = 0;
var choices = ["r", "p", "s"];
    
    document.onkeyup = function(event){
        var userGuess = event.key;
        var computerGuess = choices[Math.floor(Math.random() * choices.length)];
        if ((userGuess === "r") || (userGuess === "p") || (userGuess === "s")){
            if ((userGuess === "r") && (computerGuess === "s")) {
                wins++;
                document.getElementById('picture').innerHTML = '<img src=\"assets/images/rock.jpg\" alt=\"Dwayne The Rock Johnson\">';
                document.getElementById('computerPicture').innerHTML = '<img src=\"assets/images/scissors.jpg\" alt=\"Scissor Me Timbers\">';
                document.getElementById('userChoice').innerHTML = "<p>You chose: " + userGuess + "</p>" + "<p>The computer chose: " + computerGuess + "</p>" + "<p>The Rock will always crush Mrs. Garrison</p>" + "<p>Press R, P or S to play again!</p>";
            } else if ((userGuess === "r") && (computerGuess === "p")){
                losses++;
                document.getElementById('picture').innerHTML = '<img src=\"assets/images/rock.jpg\" alt=\"Dwayne The Rock Johnson\">';
                document.getElementById('userChoice').innerHTML = "<p>You chose: " + userGuess + "</p>" + "<p>The computer chose: " + computerGuess + "</p>" + "<p>The Rock can't defeat the paper skin of the Olsen Twins</p>" + "<p>Press R, P or S to play again!</p>";
            } else if ((userGuess === "r") && (computerGuess === "r")){
                ties++;
                document.getElementById('picture').innerHTML = '<img src=\"assets/images/rock.jpg\" alt=\"Dwayne The Rock Johnson\">';
                document.getElementById('userChoice').innerHTML = "<p>You chose: " + userGuess + "</p>" + "<p>The computer chose: " + computerGuess + "</p>" + "<p>No one wins with fanny packs</p>" + "<p>Press R, P or S to play again!</p>";
            } else if ((userGuess === "p") && (computerGuess === "r")){
                wins++;
                document.getElementById('picture').innerHTML = '<img src=\"assets/images/paper.jpg\" alt=\"Olsen Twins Paper Skin\">';
                document.getElementById('userChoice').innerHTML = "<p>You chose: " + userGuess + "</p>" + "<p>The computer chose: " + computerGuess + "</p>" + "<p>The Olsen Twins paper skin is too much to fit in a fanny pack</p>" + "<p>Press R, P or S to play again!</p>";
            } else if ((userGuess === "p") && (computerGuess === "s")){
                losses++;
                document.getElementById('picture').innerHTML = '<img src=\"assets/images/paper.jpg\" alt=\"Olsen Twins Paper Skin\">';
                document.getElementById('userChoice').innerHTML = "<p>You chose: " + userGuess + "</p>" + "<p>The computer chose: " + computerGuess + "</p>" + "<p>Mrs. Garrison is the all devour of paper skin</p>" + "<p>Press R, P or S to play again!</p>";
            } else if ((userGuess === "p") && (computerGuess === "p")){
                ties++;
                document.getElementById('picture').innerHTML = '<img src=\"assets/images/paper.jpg\" alt=\"Olsen Twins Paper Skin\">';
                document.getElementById('userChoice').innerHTML = "<p>You chose: " + userGuess + "</p>" + "<p>The computer chose: " + computerGuess + "</p>" + "<p>The Olsen Twins are too oily to defeat other paper skins</p>" + "<p>Press R, P or S to play again!</p>";
            } else if ((userGuess === "s") && (computerGuess === "p")){
                wins++;
                document.getElementById('picture').innerHTML = '<img src=\"assets/images/scissors.jpg\" alt=\"Scissor Me Timbers\">';
                document.getElementById('userChoice').innerHTML = "<p>You chose: " + userGuess + "</p>" + "<p>The computer chose: " + computerGuess + "</p>" + "<p>Scissor Me Timbers Ashley Olsen</p>" + "<p>Press R, P or S to play again!</p>";
            } else if ((userGuess === "s") && (computerGuess === "r")){
                losses++;
                document.getElementById('picture').innerHTML = '<img src=\"assets/images/scissors.jpg\" alt=\"Scissor Me Timbers\">';
                document.getElementById('userChoice').innerHTML = "<p>You chose: " + userGuess + "</p>" + "<p>The computer chose: " + computerGuess + "</p>" + "<p>Don't use my fabric scissors on rocks - My Mom as she beat me</p>" + "<p>Press R, P or S to play again!</p>";
            } else if ((userGuess === "s") && (computerGuess === "s")){
                ties++;
                document.getElementById('picture').innerHTML = '<img src=\"assets/images/scissors.jpg\" alt=\"Scissor Me Timbers\">';
                document.getElementById('userChoice').innerHTML = "<p>You chose: " + userGuess + "</p>" + "<p>The computer chose: " + computerGuess + "</p>" + "<p>We Scissorin now</p>" + "<p>Press R, P or S to play again!</p>";
            } else {
                alert("Please enter a valid input of r, p or s.");
            }
        
        }
        }

        document.querySelector('.js-change-theme').innerHTML = "Switch to Night Display";
        document
            .querySelector('.js-change-theme')
            .addEventListener('click', () => {
            const body = document.querySelector('body');
            if (body.classList.contains('t--light')) {
                body.classList.remove('t--light');
                body.classList.add('t--dark');
            } else {
                body.classList.remove('t--dark');
                body.classList.add('t--light');
            };
            if (body.classList.contains('t--light')){
                document.querySelector('.js-change-theme').innerHTML = 'Switch to Night Display';
            } else {
                document.querySelector('.js-change-theme').innerHTML = 'Switch to Day Display';
            }
        })