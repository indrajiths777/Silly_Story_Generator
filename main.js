const customName = document.getElementById("custom-name");
const generateBtn = document.querySelector(".generate");
const story = document.querySelector(".story");

function randomValueFromArray(array) {
  const random = Math.floor(Math.random() * array.length);
  return array[random];
}


const characters = ['Willy the Goblin','Big Daddy','Father Christmas'];

const places = [ 'the soup kitchen','Disneyland','the White House'];

const events = [ 'spontaneously combusted','melted into a puddle on the sidewalk',
    'turned into a slug and slithered away'];


function returnRandomStoryString() {
    const randomCharacter = randomValueFromArray(characters);
    const randomPlace = randomValueFromArray(places);
    const randomEvent = randomValueFromArray(events);

    let storyText = 'It was 94 Fahrenheit outside, so :insertx: went for a walk. When they got to :inserty:, they stared in horror for a few moments, then :insertz:. Bob saw the whole thing, but was not surprised — :insertx: weighs 300 pounds, and it was a hot day.';
    storyText = storyText.replaceAll(':insertx:', randomCharacter)
                        .replace(':inserty:', randomPlace)
                        .replace(':insertz:', randomEvent);
  return storyText;
}


generateBtn.addEventListener("click", generateStory);

function generateStory() {
    let newStory = returnRandomStoryString();
  
    if (customName.value !== "") {
    const name = customName.value;
    newStory = newStory.replace('Bob',name);
  }

  if (document.getElementById("uk").checked) {
    const weight = Math.round(300/14) + 'stone';
    const temperature = Math.round((94-32) * 5/9) + 'Celsius' ;
    newStory = newStory.replace('300 pounds',weight);
    newStory = newStory.replace('94 Fahrenheit', temperature);
  }


  story.textContent = newStory;
  story.style.visibility = "visible";
}