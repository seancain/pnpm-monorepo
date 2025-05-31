"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.greet = greet;
exports.greetDefault = greetDefault;
/**
 * Generates a personalized greeting message
 * @param name - The name to greet
 * @returns A greeting message
 */
function greet(name) {
    return `Hello, ${name}!`;
}
/**
 * Generates a default greeting message
 * @returns A default greeting message
 */
function greetDefault() {
    return "Hello, world!";
}
