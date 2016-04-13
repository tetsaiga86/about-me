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
