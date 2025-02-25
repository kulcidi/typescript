import { BankAccount } from './bankAccount'
import { describe, test, expect } from '@jest/globals'

describe('BankAccount', () => {
	test('возвращаевт баланчик', () => {
		const initialBalance = 100
		const account = new BankAccount(initialBalance)
		expect(account.getBalance()).toBe(initialBalance)
	})

	test('депозит добавляет', () => {
		const initialBalance = 50
		const depositAmount = 200
		const account = new BankAccount(initialBalance)
		account.deposit(depositAmount)
		expect(account.getBalance()).toBe(initialBalance + depositAmount)
	})

	test('снятие уменьшает', () => {
		const initialBalance = 200
		const withdrawAmount = 50
		const account = new BankAccount(initialBalance)
		account.withdraw(withdrawAmount)
		expect(account.getBalance()).toBe(initialBalance - withdrawAmount)
	})

	test('ошибко', () => {
		const initialBalance = 100
		const account = new BankAccount(initialBalance)
		expect(() => account.withdraw(200)).toThrow()
	})
})
