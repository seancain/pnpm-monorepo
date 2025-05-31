/**
 * Generates a personalized greeting message
 * @param name - The name to greet
 * @returns A greeting message
 */
export function greet(name: string): string {
	return `Hello, ${name}!`;
}

/**
 * Generates a default greeting message
 * @returns A default greeting message
 */
export function greetDefault(): string {
	return "Hello, world!";
}
