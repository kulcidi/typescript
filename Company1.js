"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.isEmployeEmail = isEmployeEmail;
function isEmployeEmail(email, domen) {
    return email.slice(-domen.length) === domen;
}
