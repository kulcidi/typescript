import { sum, multiply, isEven } from './math'
import { describe, test, expect } from '@jest/globals'

describe('суммирование', () => {
	test('сумма чисел', () => {
		expect(sum(2, 3)).toBe(5)
	})

	test('правильная сумма отр чисел', () => {
		expect(sum(-2, -3)).toBe(-5)
	})

	test('суммировня нуля', () => {
		expect(sum(0, 5)).toBe(5)
		expect(sum(5, 0)).toBe(5)
	})
})

describe('умножениt', () => {
	test('результаи умножения чисел', () => {
		expect(multiply(2, 3)).toBe(6)
	})

	test('результат умножения отрицательных чисел', () => {
		expect(multiply(-2, -3)).toBe(6)
	})

	test('мультиплай нулем', () => {
		expect(multiply(0, 5)).toBe(0)
		expect(multiply(5, 0)).toBe(0)
	})

	test('умножения', () => {
		expect(multiply(-2, 3)).toBe(-6)
	})
})

describe('четность', () => {
	test('true для четных чисел', () => {
		expect(isEven(2)).toBe(true)
		expect(isEven(0)).toBe(true)
	})



	test('фалсе нечетным', () => {
		expect(isEven(3)).toBe(false)
		expect(isEven(-1)).toBe(false)
	})



	test('true для отрицательных четных чисел', () => {
		expect(isEven(-2)).toBe(true)
	})
})
