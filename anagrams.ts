function filterAnagrams(word: string, wordsList: string[]): string[] {
	const sortedWord = word.split('').sort().join('')
	return wordsList.filter(w => {
		return w.split('').sort().join('') === sortedWord
	})
}

console.log(filterAnagrams('abba', ['aabb', 'abcd', 'bbaa', 'dada']))
console.log(
	filterAnagrams('racer', ['crazer', 'carer', 'racar', 'caers', 'racer'])
)
console.log(filterAnagrams('laser', ['lazing', 'lazy', 'lacer']))
