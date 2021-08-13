var readLineSync =require("readline-sync");
var userName=readLineSync.question("what is your name? ");
var score=0;
console.log(userName +" must note: All character should be in small and not space's between two character");
console.log("welcome "+userName+" to shaaz game");
console.log("------------------");
console.log("Quiz about viratkohli");
console.log("------------------");


function play(question,answer){
  var userAnswer =readLineSync.question(question);
    if(userAnswer === answer){
      console.log("Your are right ");
      score++;
    }else{
    console.log("your are wrong ");
    
    } 
    
}


var questions=[{
  question:"how is the captian of indian cricket team ",
  answer:"viratkohli",
},{
  question:"country of viratkohli ",
  answer:"india",
},{
  question:"home-state of viratkohli ",
  answer:"delhi",
},
{
  question:"nick-name of viratkohli ",
  answer:"chikoo",
},
{
  question:"wife name  of viratkohli ",
  answer:"anushkasharma",
},
{
  question:"ipl team of viratkohli ",
  answer:"bangalore",
}];

for(var i=0;i<questions.length;i++ ){
  var currentQuestion=questions[i];
  play(currentQuestion.question,currentQuestion.answer);
  var currentScore=score;
  
}
// console.log("Your socre is "+ currentScore);

var highScore={
  name:userName,
  score:currentScore,
}

console.log(highScore.name+"\n"+highScore.score);
