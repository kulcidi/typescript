type User = {
	name: string
	age: number
}

const getOlderUser = (bro: User, otherBro: User): User | null => {
	if (bro.age > otherBro.age) {
		return bro
	} else if (bro.age < otherBro.age) {
		return otherBro
	} else {
		return null
	}
}

console.log(getOlderUser({ name: 'Petr', age: 8 }, { name: 'Van', age: 4 }))

console.log(getOlderUser({ name: 'Masha', age: 8 }, { name: 'Alice', age: 8 }))
