/* quiz tutorial from: https://www.sitepoint.com/simple-javascript-quiz/ */

const quizContainer = document.getElementById('quiz');
const resultsContainer = document.getElementById('results');
const submitButton = document.getElementById('submit');

const myQuestions = [
    {
        question: "True or False: The first organised Mardi Gras celebration in America took place in New Orleans.",
        answers: {
            a: "True",
            b: "False"
        },
        correctAnswer: "b"
    },
    {
        question: "Which of the following is not one of New Orleans' Mardi Gras colors?",
        answers: {
            a: "yellow",
            b: "green",
            c: "purple",
            d: "blue"
        },
        correctAnswer: "d"
    },
    {
        question: "What is Mardi Gras known as in the Christian calendar?",
        answers: {
            a: "Ash Tuesday",
            b: "Shrove Tuesday",
            c: "Lent",
            d: "Happy Tuesday"
        },
        correctAnswer: "b"
    },
    {
        question: " Which of the New Orleans Mardi Gras colors is not a Mobilian Mardi Gras color?",
        answers: {
            a: "purple",
            b: "blue",
            c: "yellow",
            d: "green"
        },
        correctAnswer: "d"
    },
    {
        question: "What medieval tradition can Mardi Gras be traced back to?",
        answers: {
            a: " parading held in celebration of Lent",
            b: " feasting before the arrival of Lent",
            c: " the throwing of trinkets by children to celebrate Lent",
            d: " ordinary citizens dressing in costume to celebrate Lent"
        },
        correctAnswer: "b"
    }
];

function buildQuiz() {
    // we'll need a place to store the HTML output
    const output = [];

    // for each question...
    myQuestions.forEach(
        (currentQuestion, questionNumber) => {

            // we'll want to store the list of answer choices
            const answers = [];

            // and for each available answer...
            for (letter in currentQuestion.answers) {

                // ...add an HTML radio button
                answers.push(
                    `<label>
                        <ul>
                        <li class="answer"><input type="radio" name="question${questionNumber}" value="${letter}">
                        ${letter} :
                        ${currentQuestion.answers[letter]}</li>
                        </ul>
                    </label>`
                );
            }

            // add this question and its answers to the output
            output.push(
                `<div class="question"> ${currentQuestion.question} </div>
                <div class="answers"> ${answers.join('')} </div>`
            );
        }
    );

    // finally combine our output list into one string of HTML and put it on the page
    quizContainer.innerHTML = output.join('');
};

function showResults() {

    // gather answer containers from our quiz
    const answerContainers = quizContainer.querySelectorAll('.answers');

    // keep track of user's answers
    let numCorrect = 0;

    // for each question...
    myQuestions.forEach((currentQuestion, questionNumber) => {

        // find selected answer
        const answerContainer = answerContainers[questionNumber];
        const selector = 'input[name=question' + questionNumber + ']:checked';
        const userAnswer = (answerContainer.querySelector(selector) || {}).value;

        // if answer is correct
        if (userAnswer === currentQuestion.correctAnswer) {
            // add to the number of correct answers
            numCorrect++;

            // color the answers green
            answerContainers[questionNumber].style.color = '#8cbf3f';
        }
        // if answer is wrong or blank
        else {
            // color the answers red
            answerContainers[questionNumber].style.color = 'red';
        }
    });

    // show number of correct answers out of total
    resultsContainer.innerHTML = numCorrect + ' out of ' + myQuestions.length;
}



// display quiz right away
buildQuiz();

// on submit, show results
submitButton.addEventListener('click', showResults);