const textArea = document.querySelector("#UserBabble");
const responseArea = document.querySelector(".WordCountResult");
const regex = /\.|\?|\!/
textArea.addEventListener("input", wordCounterEventHandler);


function getTextFromEvent(event)
{
    const text = event.target.value;
    return text;
}

function wordCounter(text, splitter=" ")
{
    const wordArray = text.split(splitter).filter(Boolean);
    console.log(wordArray);
    const wordCount = wordArray.length;
    return wordCount;
}

function updateResultArea (words, sentences)
{
    responseArea.innerHTML = `<h2>Result</h2><p>${words} ${words == 1 ? 'word has' : 'words have'} been detected, in ${sentences} ${sentences == 1 ? 'sentence' : 'sentences'}.</p>`;
}

function wordCounterEventHandler(e)
{
    const text = getTextFromEvent(e);
    const words = wordCounter(text, " ");
    const sentences = wordCounter(text, regex);
    updateResultArea(words, sentences);
}