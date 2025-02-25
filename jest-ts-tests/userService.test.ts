import { getUserById } from './userService'
import axios from 'axios'

jest.mock('axios')
const mockedAxios = axios as jest.Mocked<typeof axios>

test('вернуть пользователя', async () => {
	mockedAxios.get.mockResolvedValue({ data: { id: '1', name: 'алиса' } })

	const user = await getUserById('1')

	expect(user).toEqual({ id: '1', name: 'алиса' })
})

test('обработать ошибку', async () => {
	mockedAxios.get.mockRejectedValue(new Error('ошибка сети'))

	await expect(getUserById('2')).rejects.toThrow(
		'ошибка при получении'
	)
})
