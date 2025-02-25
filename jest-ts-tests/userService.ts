import axios from 'axios'

export async function getUserById(id: string) {
	try {
		const response = await axios.get(`https://erfj.ru/${id}`)
		return response.data
	} catch (error) {
		throw new Error('ошибка при получении')
	}
}
