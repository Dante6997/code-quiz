

 
    var startBtn = document.getElementById("startBtn");
    var time = 75;
    var time_remaining = true;
    var time_start= false;
    var countdownTimer = document.getElementById("countdownTimer");
    var homeContainer =  document.getElementById("homeContainer");
    var quizContainer = document.getElementById("quizContainer");
    var questionHeading = document.getElementById("questionHeading");
    var answerChoiceA = document.getElementById("answerChoiceA");
    var answerChoiceB = document.getElementById("answerChoiceB");
    var answerChoiceC = document.getElementById("answerChoiceC");
    var answerChoiceD = document.getElementById("answerChoiceD");
    var correctAnswer = document.getElementById("correctAnswer");    
    var high_scores= [];
    var output="";
     
    var score = 0;
    
    let i = 0;



var questionsArray = [
{
    question: "Question: Commonly used data types DO Not Include:",
    imageSrc: "",
    answerChoice: ["A) strings", "B) alerts", "C) numbers", "D) booleans"],
    correctAnswer: 1
}, 
{
    question: "Question: The condition in an if / else statement is enclosed with what?",
    imageSrc: "",
    answerChoice: ["A) quotes", "B) curly brackets", "D) parenthesis", "D) square brackets"],
    correctAnswer: 2
},
{
    question: "Question: Arrays in JavaScript can be used to store what?",
    imageSrc: "",
    answerChoice: ["A) numbers and strings", "B) other arrays ", "C) booleans ", "D) all of the above"],
    correctAnswer: 3
}, 
{
    question: "Question: String values must be enclosed within ___ when being assigned to variables.",
    imageSrc: "",
    answerChoice: ["A) Commas", "B) curly brackets", "C) quotes", "D) parenthesis"],
    correctAnswer: 2
},
{
    question: "Question: A very useful tool used during development and debugging for printing content to the debugger is:",
    answerChoice: ["A) JavaScript", "B) terminal/bash", "C) for loops", "D) console.log"],
    correctAnswer: 3
}];



var countdownTimerInterval = setInterval(setCountdownTimer, 1000);

function setCountdownTimer() {
        if (time_start)
        time--;
        if(time<= 0) {
        end_quiz();
        time = 0;    
        }
        document.getElementById("timer").innerHTML = time;
    }


startBtn.addEventListener("click", function() {
    quizContainer.style.display = "block";
    homeContainer.style.display ="none";
    countdownTimer.style.display= "block";
    document.getElementById("score_keeper").style.display= "block";
    document.getElementById("score").innerHTML = score;
    setCountdownTimer();
    setQuizQuestions();
    time_start= true;
});


function setQuizQuestions() {
        questionHeading.textContent = questionsArray[i].question;
        answerChoiceA.textContent = questionsArray[i].answerChoice[0]; 
        answerChoiceB.textContent = questionsArray[i].answerChoice[1]; 
        answerChoiceC.textContent = questionsArray[i].answerChoice[2]; 
        answerChoiceD.textContent = questionsArray[i].answerChoice[3]; 
        };


answerChoiceA.addEventListener('click', function(event) {
        event.stopPropagation();
        correctAnswer= questionsArray[i].correctAnswer;
        console.log("correctAnswer " + correctAnswer);
        
        if (0 === correctAnswer) { 
            document.getElementById("AnswerResponse").innerHTML = "Correct!";
            setTimeout(function() {
            document.getElementById("AnswerResponse").innerHTML = "";
                },
                1000
            );
          
            score++;    
            
            document.getElementById("score").innerHTML = score;
        } else {
            time_remaining -= 5;
            
            document.getElementById("AnswerResponse").innerHTML = "Incorrect!";
            setTimeout(function() {
                document.getElementById("AnswerResponse").innerHTML = "";
                    },
                    1000
            );
        }
        if (i >= questionsArray.length -1) {
        end_quiz();
        } else {
            i++ 
            setQuizQuestions();
        };
    });

answerChoiceB.addEventListener('click', function(event) {
    event.stopPropagation();
    correctAnswer = questionsArray[i].correctAnswer;
    console.log(correctAnswer);
        if (1 === correctAnswer) { 
            document.getElementById("AnswerResponse").innerHTML = "Correct!";
            setTimeout(function() {
                document.getElementById("AnswerResponse").innerHTML = "";
                    },
                    1000
                );
            score++;
            document.getElementById("score").innerHTML = score;
        } else {
            time_remaining -= 5;
            document.getElementById("AnswerResponse").innerHTML = "Incorrect!";
            setTimeout(function() {
                document.getElementById("AnswerResponse").innerHTML = "";
                    },
                    1000
            );
        }
        if (i >= questionsArray.length -1) {
        end_quiz();
        } else {
         i++ 
        setQuizQuestions();
        };
    });

answerChoiceC.addEventListener('click', function(event) {
    event.stopPropagation();
    correctAnswer = questionsArray[i].correctAnswer;
    console.log(correctAnswer);
    if (2 === correctAnswer) { 
        document.getElementById("AnswerResponse").innerHTML = "Correct!";
        setTimeout(function() {
            document.getElementById("AnswerResponse").innerHTML = "";
                },
                1000
            );
        score++;
        document.getElementById("score").innerHTML = score;
    } else {
        time_remaining -= 5;
        document.getElementById("AnswerResponse").innerHTML = "Incorrect!";
        setTimeout(function() {
            document.getElementById("AnswerResponse").innerHTML = "";
                },
                1000
        );
    }
    if (i >= questionsArray.length -1) {
    end_quiz();
    } else {
        i++ 
        setQuizQuestions();
    };
    });

answerChoiceD.addEventListener('click', function(event) {
    event.stopPropagation();
    correctAnswer= questionsArray[i].correctAnswer.value;
    console.log(correctAnswer);
    if (3 === correctAnswer) { 
        document.getElementById("AnswerResponse").innerHTML = "Correct!";
        setTimeout(function() {
            document.getElementById("AnswerResponse").innerHTML = "";
                },
                1000
        );
        score++;
        document.getElementById("score").innerHTML = score;
    } else {
        time_remaining -= 5;
        document.getElementById("AnswerResponse").innerHTML = "Incorrect!";
        setTimeout(function() {
            document.getElementById("AnswerResponse").innerHTML = "";
                },
                1000
            );
    }
    if (i >= questionsArray.length -1) {
       end_quiz();
    } else {
        i++ 
        setQuizQuestions();
    };
});

       
        function end_quiz(){
            document.getElementById("game_over").style.display= "block";
            document.getElementById("quizContainer").style.display="none";
            document.getElementById("countdownTimer").style.display= "none";
            document.getElementById("score_keeper").style.display= "none";
            document.getElementById("AnswerResponse").innerHTML="";
            document.getElementById("end_score").innerHTML= score;
            }

        
            function submit_score() {
             high_scores.push(document.getElementById("initials").value + " " + score);
             view_high_scores();
            }
        
        function view_high_scores(){
        
        
            document.getElementById("quizContainer").style.display="none";
            document.getElementById("game_over").style.display= "none";
            document.getElementById("high_scores_page").style.display="block";
        
            output="";
            for(let k=0; k<high_scores.length; k++){
                 output = output + "  " + high_scores[k];
            }
            document.getElementById("high_scores").innerHTML= output;                
             clear_up();
        }

        
        function go_home(){	
                document.getElementById("high_scores_page").style.display= "none";
                document.getElementById("homeContainer").style.display= "block";
                clear_up();
        }
        
    
        function clear_hs(){
            high_scores = [];
            
          }
        
       
        function clear_up(){
        
        time=75;
        time_remaining=true;
        time_start=false;
        i=0;
        score=0;
        }