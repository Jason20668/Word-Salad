const Weather = prompt('Give me a Weather Adjective');
const Day = prompt('Give me a Day of the Week');
const Color = prompt('Give me a Color');
const GnoNum = prompt ('Give me a Number');
const VoiAdj = prompt ('Give me an Adjective');
const Name = prompt ('Give me a Name');
const Town = prompt ('Give me a Name for a Town');
const FirVerb = prompt ('Give me a Verb');
const GnoAmount = prompt ('Give me a Number');
const Emotion = prompt ('Give me a Negative Emotion');
const BakedG = prompt ('Give me a Baked Good');
const BakedI =prompt ('Give me a Baking Ingredient')
const JamesHei = prompt ('Give me a Number below 5');
const PosVer = prompt ('Give me a Positive Verb');
const Reward = prompt ('Give me a Noun');
const Time = prompt ('give me an Amount of Time');
const SecVerb = prompt ('Give me a Verb');
const Adj = prompt ('Give me a Adjective');
const Subject = prompt ('Give me a School Subject');

let myStory = `One ${Weather} ${Day} James Carmicheal was getting ready for school. All of a sudden a gnome appeared! 
She had a floppy ${Color} hat and was ${GnoNum} inches tall. She said in a ${VoiAdj} voice, "My name is ${Name} and we need your help James Carmicheal. 
Your the only person short enough to be able to go through the portal and save ${Town}!". James happily agreed and ${FirVerb} through the portal to ${Town}. 
When he got there we was surrounded by ${GnoAmount} gnomes all of which looked very ${Emotion}. He was told that they wanted to make a ${BakedG} for the festival today
but the ${BakedI} was on the top shelf and they hadn't invented stepstools yet. Luckily, James was ${JamesHei} feet tall and was barely able to reach the shelf. 
All the gnomes ${PosVer} as they could now make their ${Reward} and gave James a ${Reward} as a reward. They told James he was welcome any time in ${Town} and
that he was a friend of the gnomes for ${Time}. James then once again ${SecVerb} through the portal to get home and get ready for school. 
Unfortunately he was ${Adj} from the adventure and passed out, missing his very important ${Subject} class. Poor James.`;
console.log(myStory);

document.getElementById('story').innerHTML = myStory;