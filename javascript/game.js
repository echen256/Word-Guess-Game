
        var letters = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z", "-"];
        var dict = ["Peroxide", "Polymer", "Casin", "Antibody", "Cytokeratin",
            "Synaptophisin", "Albumin", "Lambda", "Kappa", "Actin", "Myosin",
            "Pancreas", "Tonsil", "Lymphoma", "Melanoma", "Prostate", "Testis", "Ovary", "Horseradish"];

        var numberOfTries = 0;
        var correctLetters = [];
        var guessedLetters = [];
        var wins = 0;
        var losses = 0;
        var displayElement = document.getElementById("word_display");


        reset();
        var word = "antibody".toUpperCase();

        document.onkeyup = function (event) {

            var key = event.key.toUpperCase();



            document.getElementById("#ofTries").innerText = numberOfTries;
            if (letters.includes(key)) {
                numberOfTries--;
                if (word.includes(key)) {
                    correctLetters.push(key);
                    numberOfTries+= 2;
                }
                guessedLetters.push(key);

            }
            updateDisplayString(key);
            var displayString = displayElement.innerText;
            console.log(displayString);

            if (!displayString.includes("_")) {
                wins++;
                recordScore(true);
                if (confirm("You win! Want to play again?")) {
                    reset();
                }
            } else if (numberOfTries == 0) {
                if (confirm("You lost! Want to play again?")) {
                    reset();
                }
                losses++;
                recordScore(false);
                reset();
            }

        }





        function recordScore(winner) {
            var text = document.getElementById("wins");

            if (!winner) {

                text = document.getElementById("losses");
            }

            text.innerText = parseInt(text.innerText, 10) + 1;
        }

        function reset() {
            word = dict[Math.floor(Math.random() * dict.length)].toUpperCase();
            console.log(word)
            numberOfTries = Math.floor(word.length);
            guessedLetters = [];
            correctLetters = [];
            var ds = "";
            for (var i = 0; i < word.length; i++) {
                ds += "_";
            }
            document.getElementById("#ofTries").innerText = numberOfTries;
            document.getElementById("word_display").innerText = ds;
            document.getElementById("used_letters").innerText = "";


        }

        function updateDisplayString(key) {

            var displayString = "";
            for (var i = 0; i < word.length; i++) {
                if (correctLetters.includes(word.charAt(i))) {
                    displayString += word.charAt(i);
                } else {

                    displayString += "_";
                }
            }

            var used_letters = document.getElementById("used_letters").innerText;
            if (used_letters == "") used_letters += key;
            else used_letters += ", " + key;
            document.getElementById("used_letters").innerText = used_letters;
            displayElement.innerText = displayString;
            return displayString;
        }
