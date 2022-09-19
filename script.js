function getScore(quiz) {


    var score = 0;
    var choices = 9;
    var currentChoice, checkedAnswer, correctAnswers;

    //initialize the array with the correct answers
    var answers = ["Pozole", "The lives of deceased relatives", "A sweet rice milk drink"];

    //loop through all the quiz.elements on the page, from i = 0 until i < choices and incrementing i by 1 each time through the loop
    for (var i = 0; i < choices; i++) {
        //set currentChoice to whatever quiz.element the loop is on (the # rank of the choice)
        currentChoice = quiz.elements[i];
        //if the currentChoice is checked
        if (currentChoice.checked) {
            //set checkedAnswer to its value
            checkedAnswer = currentChoice.value;
            // make another loop to iterate(loop) through the answers array from j = 0 to j < answers length, increasing the loop by 1
            for (var j = 0; j < answers.length; j++) {
                // check to see if checkedAnswer == a correct answer in the array
                if (answers[j] == checkedAnswer) {
                    // increase score
                    score++;
                } //end of inner if statement

            } //end of inner loop
        } // end of outer if statement

    } //end of outer for loop

    // output the score to the webpage
    score = score / answers.length * 100;
    quiz.percentage.value = score + "%";

//set correctAnswers to the empty string
correctAnswers = "";
//output the correct answers
  for (i = 0; i < answers.length; i++) {
      if (i == 5 || i == 6) {
          correctAnswers += "6. " + answers[i] + "\n";
      }
      else if (i == 7 || i == 8 ||i== 9) {
          correctAnswers += "7. " + answers[i] + "\n";
      }
      else {
          correctAnswers += i + 1 + ". " + answers[i] + "\n";
      }
  }

//display correct answers

quiz.solutions.value = correctAnswers;

} //end of getScore()