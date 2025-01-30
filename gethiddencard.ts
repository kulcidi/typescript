function getHiddenCard(card: string, defaultNumber = 4) {
	return `${'*'.repeat(defaultNumber)}${card.slice(-4, -1) + card.slice(-1)}`
}

console.log(getHiddenCard('1234567812345678', 2)) // "**5678"
console.log(getHiddenCard('1234567812345678', 3)) // "***5678"
console.log(getHiddenCard('1234567812345678')) //"****5678"
console.log(getHiddenCard('2034399002121100', 1)) // "*1100"
