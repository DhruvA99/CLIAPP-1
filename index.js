var readLineSync=require('readline-sync');

var name=readLineSync.question("Hi! What is your name ");
console.log('hello '+name);
var score=0;
var quesArray=[],ansArray=[];
var ques1Ans="Am i over 20 years in age? ";
var ques2Ans="Am i doing engineering? ";
var ques3Ans="Am i from the city mirzapur? ";
var ans1='yes',ans2='yes',ans3='no';
quesArray.push(ques1Ans,ques2Ans,ques3Ans);
ansArray.push(ans1,ans2,ans3);
var count=0;

function quiz1(ques,ans){
  var userQuesAns=readLineSync.question(ques);
    if(userQuesAns===ans){
      console.log('Thats correct! You get one point');
      score+=1;
    }
    else{
      console.log("That's wrong answer!You lose one point");
      score-=1;
    }
}

for(count=0;count<quesArray.length;count++){
   quiz1(quesArray[count],ansArray[count]);
  
 }

console.log('your final score is : '+score);