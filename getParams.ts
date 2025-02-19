const getParams = (query: string): any =>
	query.split('&').reduce((params: any, param) => {
		const [key, value] = param.split('=')
		params[key] = value
		return params
	}, {})

console.log(getParams('per=10&page=5'))
console.log(getParams('name=hexlet&count=3&order=asc')) 
