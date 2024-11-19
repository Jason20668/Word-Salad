const Weather = prompt('Give me a Weather Adjective');
const Day = prompt('Give me a Day of the Week');
const Color = prompt('Give me a Color');

let GnoNum = prompt ('Give me a Number Less than 10');
if (GnoNum >=0) {
    prompt ('No negatives or 0s chucklenuts');
} 

const VoiAdj = prompt ('Give me an Adjective');
const Name = prompt ('Give me a Name');
const Town = prompt ('Give me a Name for a Town');
const FirVerb = prompt ('Give me a Past Tense Verb');
const GnoAmount = prompt ('Give me a Number');
const Emotion = prompt ('Give me a Negative Emotion');
const BakedG = prompt ('Give me a Baked Good');
const BakedI =prompt ('Give me a Baking Ingredient')
const JamesHei = prompt ('Give me a Number below 5');
const PosVer = prompt ('Give me a Verb');
const Reward = prompt ('Give me a Noun'); 
const Time = prompt ('give me an Amount of Time');
const SecVerb = prompt ('Give me a Past Tense Verb');
const Adj = prompt ('Give me a Adjective');
const Subject = prompt ('Give me a School Subject');

let myStory1 = `One ${Weather} ${Day} James Carmicheal was getting ready for school. All of a sudden a gnome appeared!`;
console.log(myStory1);
document.getElementById('story1').innerHTML = myStory1;

let myStory2 = `She had a floppy ${Color} hat and was ${GnoNum} inches tall. She said in a ${VoiAdj} voice, "My name is ${Name} and we need your help James Carmicheal.`;
console.log(myStory2);
document.getElementById('story2').innerHTML = myStory2;

let myStory3 = `Your the only person short enough to be able to go through the portal and save ${Town}!". James happily agreed and ${FirVerb} through the portal to ${Town}.`;
console.log(myStory3);
document.getElementById('story3').innerHTML = myStory3;

let myStory4 = `When he got there we was surrounded by ${GnoAmount} gnomes all of which looked very ${Emotion}. He was told that they wanted to make a ${BakedG} for the festival today but the
 ${BakedI} was on the top shelf and they hadn't invented stepstools yet.`;
console.log(myStory4);
document.getElementById('story4').innerHTML = myStory4;

let myStory5 = `Luckily, James was ${JamesHei} feet tall and was barely able to reach the shelf. 
All the gnomes ${PosVer} as they could now make their ${BakedG} and gave James a ${Reward} as a reward.`;
console.log(myStory5);
document.getElementById('story5').innerHTML = myStory5;

let myStory6 = `They told James he was welcome any time in ${Town} and that he was a friend of the gnomes for ${Time}. 
James then once again ${SecVerb} through the portal to get home and get ready for school. 
Unfortunately he was ${Adj} from the adventure and passed out, missing his very important ${Subject} class and would ultimately fail that class because of it. Poor James.`;
console.log(myStory6);
document.getElementById('story6').innerHTML = myStory6;

 




