import { fetchData } from './asyncFunctions'
import { delay } from './asyncFunctions'

describe('fetchData', () => {
	beforeEach(() => {
		global.fetch = jest.fn().mockResolvedValue({
			ok: true,
			text: jest.fn().mockResolvedValue('test data'),
		})
	})


	afterEach(() => {
		jest.restoreAllMocks()
	})


	it('должен возвращение данных', async () => {
		const data = await fetchData('https://popipo.com')
		expect(data).toBe('test data')
		expect(global.fetch).toHaveBeenCalledWith('https://popipo.com')
	})


	it('ошибка', async () => {
		;(global.fetch as jest.Mock).mockResolvedValueOnce({
			ok: false,
			status: 404,
			text: jest.fn().mockResolvedValue('Not found'),
		})

		await expect(fetchData('https://popipo.com')).rejects.toThrow(
			'Request failed with status 404'
		)
	})
   

	it('произойдет сбой сети', async () => {
		;(global.fetch as jest.Mock).mockRejectedValueOnce(
			new Error('ошибка сети')
		)

		await expect(fetchData('https://popipo.com')).rejects.toThrow(
			'ошибка сети'
		)
	})
})

describe('delay', () => {
	beforeEach(() => {
		jest.useFakeTimers()
	})

	afterEach(() => {
		jest.useRealTimers()
	})

	it('должно разрешение по времени', async () => {
		const ms = 1000
		const promise = delay(ms)

		jest.advanceTimersByTime(ms)

		await expect(promise).resolves.toBeUndefined()
	})

	it('setTimeout', () => {
		const setTimeoutSpy = jest.spyOn(global, 'setTimeout')
		const ms = 1000

		delay(ms)

		expect(setTimeoutSpy).toHaveBeenCalledWith(expect.any(Function), ms)
	})
})
