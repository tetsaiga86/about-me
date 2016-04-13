var userName = prompt('Welcome to the land of magic and Mystery!!! Who might you be?');
console.log('The user\'s name is ' + userName);

alert('Hey there, person of great interest... I mean ' + userName + ' I\'m going to ask you some questions about myself to determine that you can read. Please answer Y or N!!!');
var userResponse = prompt('Is one of my hobbies coding?');
console.log('userResponse: ' + userResponse);

if (userResponse.toLowerCase() === 'y' || userResponse.toLowerCase() === 'yes')
{
  alert ('Good Job! You passed round 1!');
} else if (userResponse.toLowerCase() === 'n' || userResponse.toLowerCase() === 'no'){
  alert ('You failed this one. So, so much fail...');
} else {
  alert ('directions are hard');
}

var secondQuestion = prompt ('Was I born in Washington?');
console.log('secondQuestion: ' + secondQuestion);

if (secondQuestion.toLowerCase() === 'n' || secondQuestion.toLowerCase() === 'no')
{
  alert ('Good Job! You passed round 2!');
} else if (secondQuestion.toLowerCase() === 'y' || secondQuestion.toLowerCase() === 'yes'){
  alert ('You failed this one. So, so much fail...');
} else {
  alert ('directions are hard');
}

var thirdQuestion = prompt('Was my last job at Joongbu University?');
console.log('thirdQuestion: ' + thirdQuestion);

if (thirdQuestion.toLowerCase() === 'y' || thirdQuestion.toLowerCase() === 'yes')
{
  alert ('Good Job! You passed round 3!');
} else if (thirdQuestion.toLowerCase() === 'n' || thirdQuestion.toLowerCase() === 'no'){
  alert ('You failed this one. So, so much fail...');
} else {
  alert ('directions are hard');
}

var fifthQuestion = prompt('Were my last three jobs in circus animal training?');
console.log('fifthQuestion: ' + fifthQuestion);

if (fifthQuestion.toLowerCase() === 'n' || fifthQuestion.toLowerCase() === 'no')
{
  alert ('Good Job! You passed round 4!');
} else if (fifthQuestion.toLowerCase() === 'y' || fifthQuestion.toLowerCase() === 'yes')
{
  alert ('You failed this one. So, so much fail...');
} else{
  alert ('directions are hard');
}

var fourthQuestion = prompt('Will you hire me?');
console.log('fourthQuestion: ' + fourthQuestion);

if (fourthQuestion.toLowerCase() === 'y' || fourthQuestion.toLowerCase() === 'yes')
{
  alert ('Congratulations, you win me!!! The bestest prize of all!!!!!');
}
else if (fourthQuestion.toLowerCase() === 'n' || fourthQuestion.toLowerCase() === 'no')
{
  alert ('You will be the first to be conquered, when I take over the world!!!');
}
else
{
  alert ('Please move on');
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
