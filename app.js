var question = 7;
var correct = 0;

var questionArray = ['Is one of my hobbies coding?','Was I born in Washington?','Was my last job at Joongbu University?','Were my last three jobs in circus animal training?','Will you hire me?'];

var answersArray = [['yes','y'], ['no','n'],['yes','y'],['no','n'],['yes','y']];
var wrongArray = [['no','n'],['yes','y'],['no','n'],['yes','y'],['no','n']];
var correctResponses = ['Good Job, you passed round 1!','Good Job, you passed round 2!','Good Job, you passed round 3!','Good Job, you passed round 4!','Congratulations, you win me!!! The bestest prize of all!!!!!' ];
var incorrectResponses = ['You failed this one. So, so much fail...', 'You failed this one. So, so much fail...','You failed this one. So, so much fail...','You failed this one. So, so much fail...','You will be the first to be conquered, when I take over the world!!!' ];

var incorrect = 'directions are hard';

var userName = prompt('Welcome to the land of magic and Mystery!!! Who might you be?');
console.log('The user\'s name is ' + userName);

alert('Hey there, person of great interest... I mean ' + userName + ' I\'m going to ask you some questions about myself to determine that you can read. Please answer Y or N!!!');

function useQuestions(i){
  var userInput = prompt(questionArray[i]).toLowerCase();
  if(userInput === answersArray[i][0] || userInput === answersArray[i][1])
  {
    alert(correctResponses[i]);
    correct++;
  }
  else if(userInput === wrongArray[i][0] || userInput === wrongArray[i][1])
  {
    alert(incorrectResponses[i]);
  }
  else{
    alert(incorrect);
  }
}

for(var i = 0; i < answersArray.length; i++)
{
  useQuestions(i);
}

alert('The next question is going to ask for a number between 1 and 50. The answer is NOT on this page. It is a complete guess! May the force be with you...');

var attempt = 0;
var answerQuestionSix = 30;
while (attempt <= 3) {
  var sixthQuestion = prompt ('How many countries have I been to? (you have ' + (4 - attempt) + ' guesses)');
  console.log('sixthQuestion: ' + sixthQuestion);
  if (parseInt(sixthQuestion) === answerQuestionSix)
  {
    alert('That is correct! Nice Job!');
    correct++;
    attempt += 10;
    console.log ('user got question 6 correct');
  }else if (isNaN(parseInt(sixthQuestion)))
  {
    attempt++;
    console.log ('user did not input a number');
    alert('That is not a number!!! You have ' + (4 - attempt) + ' more tries');
  }else if (parseInt(sixthQuestion) < answerQuestionSix)
  {
    attempt++;
    console.log ('user guessed too low');
    alert('WRONG!!! You have ' + (4 - attempt) + ' more tries! Your answer was too LOW');
  }else if (parseInt(sixthQuestion) > answerQuestionSix)
  {
    attempt++;
    console.log ('user guessed too high');
    alert('WRONG!!! You have ' + (4 - attempt) + ' more tries! Your answer was too HIGH');
  }
}
var movieList = ['RETURN TO OZ', ' FIGHT CLUB', ' DONNIE DARKO', ' THE DARK CRYSTAL', ' STAR WARS', ' LABYRINTH', ' NEVER ENDING STORY', ' LITTLE MONSTERS', ' PULP FICTION', ' THE AVENGERS '];
var attemptQuestion7 = 0;

while (attemptQuestion7 < 5) {
  var seventhQuestion = prompt ('What is one of my top 10 movies? (you have ' + (6 - attemptQuestion7) + ' guesses)');
  console.log('seventhQuestion: ' + seventhQuestion);
  if (seventhQuestion.toUpperCase() == 'RETURN TO OZ' || seventhQuestion.toUpperCase() == 'FIGHT CLUB' || seventhQuestion.toUpperCase() == 'DONNIE DARKO' || seventhQuestion.toUpperCase() == 'THE DARK CRYSTAL' || seventhQuestion.toUpperCase() == 'STAR WARS' || seventhQuestion.toUpperCase() == 'LABYRINTH' || seventhQuestion.toUpperCase() == 'NEVER ENDING STORY' || seventhQuestion.toUpperCase() == 'LITTLE MONSTERS' || seventhQuestion.toUpperCase() == 'PULP FICTION')
  {
    alert('Yay, you did it!!! The list of accepted answers was: ' + movieList);
    attemptQuestion7 += 10;
    console.log ('user got question 7 correct');
    correct++;
  }
  else
  {
    alert('You guessed wrong!');
    attemptQuestion7++;
    console.log ('user guessed incorrect');
  }
}

while (attemptQuestion7 < 6) {
  var seventhQuestion = prompt ('What is one of my top 10 movies? (you have 1 guess left!!! Think wisely. Or, Ya know... look!)');
  console.log('seventhQuestion: ' + seventhQuestion);
  if (seventhQuestion.toUpperCase() == 'RETURN TO OZ' || seventhQuestion.toUpperCase() == 'FIGHT CLUB' || seventhQuestion.toUpperCase() == 'DONNIE DARKO' || seventhQuestion.toUpperCase() == 'THE DARK CRYSTAL' || seventhQuestion.toUpperCase() == 'STAR WARS' || seventhQuestion.toUpperCase() == 'LABYRINTH' || seventhQuestion.toUpperCase() == 'NEVER ENDING STORY' || seventhQuestion.toUpperCase() == 'LITTLE MONSTERS' || seventhQuestion.toUpperCase() == 'PULP FICTION')
  {
    alert('Yay, you did it!!! The list of accepted answers was: ' + movieList);
    attemptQuestion7 += 10;
    correct++;
    console.log ('user got question 7 correct');
  }
  else
  {
    alert('You were not able to guess ONE of my top TEN movies... The list of accepted answers was: ' + movieList);
    attemptQuestion7 += 10;
    console.log ('user guessed incorrect');
  }
}

if (correct > 5)
{
  alert('Congratulations ' + userName + '! you got ' + correct + ' out of ' + question + ' correct!!!! Well done!');
}
else
{
  alert('I hope you feel shame ' + userName + '! you only got ' + correct + ' out of ' + question + ' correct...');
}
