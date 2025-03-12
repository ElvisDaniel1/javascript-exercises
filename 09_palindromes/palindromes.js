
const palindromes = function (word) {

    word = word.toLowerCase();
    word = word.split('');
    word = word.filter((wrd) => {
        if (!['!', '?', ',', '.', ' '].includes(wrd))
            return wrd;
        });
    word = word.join('');
    let wordR = '';

    const wordLen = word.length;
    let i = wordLen;
    while (i != 0) {
        wordR += word[i-1];
        i = i - 1;   
    }

    if (wordR == word)
        return true;
        //console.log('YES ITS PALINDROME');
    else
        return false;
        //console.log('No its not');
        //racecar
};

// Do not edit below this line
module.exports = palindromes;
