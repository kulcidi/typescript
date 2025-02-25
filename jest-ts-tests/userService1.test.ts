import { DatabaseService } from './databaseService'
import { UserService } from './userService1'

test('должен сохранить и получить пользователя', () => {
	const dbService = new DatabaseService()
	const userService = new UserService(dbService)

	const user = { id: '1', name: 'алиса' }
	dbService.addUser(user)

	const foundUser = userService.getUserById('1')

	expect(foundUser).toEqual(user)
})

test('вернуть undefined, если пользователя нет', () => {
	const dbService = new DatabaseService()
	const userService = new UserService(dbService)

	const foundUser = userService.getUserById('2')

	expect(foundUser).toBeUndefined()
})
