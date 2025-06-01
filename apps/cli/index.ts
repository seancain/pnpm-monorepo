#!/usr/bin/env node

import { greet, greetDefault } from "greetings";

/**
 * Handles CLI arguments and returns appropriate greeting
 * @param args - Command line arguments (typically process.argv)
 * @returns A greeting message based on the arguments
 */
export function handleCliArgs(args: string[]): string {
	const name = args[2]; // args[0] is node, args[1] is script path, args[2] is first user arg
	return name ? greet(name) : greetDefault();
}

// CLI execution - only runs when this file is executed directly
if (import.meta.url === `file://${process.argv[1]}`) {
	console.log(handleCliArgs(process.argv));
}
