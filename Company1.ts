export function isEmployeEmail(email: string, domen: string) {
	return email.slice(-domen.length) === domen
}
