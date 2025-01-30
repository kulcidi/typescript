function filterAnagrams(word, wordsList) {
    var sortedWord = word.split('').sort().join('');
    return wordsList.filter(function (w) {
        return w.split('').sort().join('') === sortedWord;
    });
}
console.log(filterAnagrams('abba', ['aabb', 'abcd', 'bbaa', 'dada']));
console.log(filterAnagrams('racer', ['crazer', 'carer', 'racar', 'caers', 'racer']));
console.log(filterAnagrams('laser', ['lazing', 'lazy', 'lacer']));
