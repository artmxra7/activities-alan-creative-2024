const resp1 = () => {
var word = document.getElementById('word');
var second = document.getElementById('second');
var third = document.getElementById('third');
var fourth = document.getElementById('fourth');
var fifth = document.getElementById('fifth');
var sixth = document.getElementById('sixth');
var seventh = document.getElementById('seventh');
var resp1 = document.getElementById('resp1');

    resp1.innerHTML = word.value + ' ' + second.value + ' ' + third.value + ' ' + fourth.value + ' ' + fifth.value + ' ' + sixth.value + ' ' + seventh.value
    console.log(word + ' ' + second + ' ' + third + ' ' + fourth + ' ' + fifth + ' ' + sixth + ' ' + seventh);
}

const resp2 = () => {
var word = document.getElementById('Typeword').value;
var exampleFirstWord = word[0] + word[1] + word[2];   
var secondWord = word[4] + word[5] + word[6] + word[7] + word[8] + word[9] + word[10] + word[11] + word[12] + word[13];
var thirdWord = word[15] + word[16];
var fourthWord = word[18] + word[19];
var fifthWord = word[21] + word[22] + word[23] + word[24];

var resp2 = document.getElementById('resp2');

    resp2.innerHTML = `
    <p>First Word: ${exampleFirstWord}</p>
    <p>Second Word: ${secondWord}</p>
    <p>Third Word: ${thirdWord}</p>
    <p>Fourth Word: ${fourthWord}</p>
    <p>Fifth Word: ${fifthWord}</p>
    `;
}

const resp3 = () => {
var word = document.getElementById('TypeWord').value;
var exampleFirstWord3 = word.substring(0, 3);
var secondWord = word.substring(4, 14);
var thirdWord = word.substring(15, 17);
var fourthWord = word.substring(18, 20);
var fifthWord = word.substring(21, 25);

var resp3 = document.getElementById('resp3');

    resp3.innerHTML = `
    <p>First Word: ${exampleFirstWord3}</p>
    <p>Second Word: ${secondWord}</p>
    <p>Third Word: ${thirdWord}</p>
    <p>Fourth Word: ${fourthWord}</p>
    <p>Fifth Word: ${fifthWord}</p>`;
}

const resp4 = () => {
var word = document.getElementById('TypeWord2').value;
var exampleFirstWord = word.substring(0, 3);
var secondWord = word.substring(4, 14);
var thirdWord = word.substring(15, 17);
var fourthWord = word.substring(18, 20);
var fifthWord = word.substring(21, 25);

var firstWordLength = exampleFirstWord.length;
var secondWordLength = secondWord.length;
var thirdWordLength = thirdWord.length;
var fourthWordLength = fourthWord.length;
var fifthWordLength = fifthWord.length;

var resp4 = document.getElementById('resp4');

    resp4.innerHTML = `
    <p>First Word: ${exampleFirstWord}, with length: ${firstWordLength}</p>
    <p>Second Word: ${secondWord}, with length: ${secondWordLength}</p>
    <p>Third Word: ${thirdWord}, with length: ${thirdWordLength}</p>
    <p>Fourth Word: ${fourthWord}, with length: ${fourthWordLength}</p>
    <p>Fifth Word: ${fifthWord}, with length: ${fifthWordLength}</p>`;
}




