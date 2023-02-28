//Quiz prototype
function Quiz(questions)
{
 this.score=0;
 this.questions=questions;
 this.questionIndex=0;
}

Quiz.prototype.getQuestionsByIndex= function(){
  return this.questions[this.questionIndex];
}

Quiz.prototype.isEnded= function()
{
   return this.questionIndex=== this.questions.length;
}

Quiz.prototype.checkOptionWithAnswer= function(answer){
   if(this.getQuestionsByIndex().isCorrectAnswer(answer)){
    this.score++;
   }
    this.questionIndex++;
}

//Question prototype

function Question(text,choices,answer){
    this.text=text;
    this.choices=choices;
    this.answer= answer;
}

Question.prototype.isCorrectAnswer= function(choice)
{
   return this.answer===choice;
}

//Quiz display and score display section

function loadQuestions()
{
    if (quiz.isEnded())
    {
        showScore();
    }
    else{
        //display question
        var element=document.getElementById("question");
        element.innerHTML=quiz.getQuestionsByIndex().text;

        //dsiplay options
        var choices= quiz.getQuestionsByIndex().choices;
        for(i=0; i<choices.length; i++)
        {
            var element= document.getElementById("choice"+i);
            element.innerHTML=choices[i];
            handleOptionButton("btn"+i, choices[i]);
        }
        showProgress();
    }
};

//handle event and load  next question 
function handleOptionButton(id,choice){
    var button= document.getElementById(id);
    button.onclick=function(){
        quiz.checkOptionWithAnswer(choice);
        loadQuestions();
    }

};

//display progress of questions

function showProgress(){
    var currentQuestionNumber=quiz.questionIndex+1;
    var element= document.getElementById("progress");
    element.innerHTML="Question "+currentQuestionNumber + " of " +quiz.questions.length;
    };

//displaying score

function showScore(){
    var quizOverHtml="<h1> Results </h1>";
    quizOverHtml+="<h2 id='score'> Your Score: "+quiz.score+" And the mark percentage is "+((quiz.score)/quiz.questions.length*100)+ "%";
    var element= document.getElementById("quiz");
    element.innerHTML=quizOverHtml;
};

// create questions here
var questions = [
    new Question("JavaScript supports", ["Functions", "XHTML","CSS", "HTML"], "Functions"),
    new Question("Which language is used for styling web pages?", ["HTML", "JQuery", "CSS", "XML"], "CSS"),
    new Question("Which is not a JavaScript Framework?", ["Python Script", "JQuery","Django", "NodeJS"], "Django"),
    new Question("Which is used for Connect To Database?", ["PHP", "HTML", "JS", "All"], "PHP"),
    new Question("JavaScript is a ", ["Language", "Programming Language", "Development", "All"], "Programming Language")
  ];
  
  // create quiz
  var quiz = new Quiz(questions);
  
  // display quiz
  loadQuestions();
