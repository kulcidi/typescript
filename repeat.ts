const repeat = (str: String, amount: number) => {
	let result = ''
	for (let i = 0; i < amount; i++) {
		result += str
	}
	return result
}

console.log(repeat('sometext', 2))
console.log(repeat('wo', 3))
