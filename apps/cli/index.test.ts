import { describe, expect, it } from "vitest";
import { handleCliArgs } from ".";

describe("CLI Greeting Functions", () => {
	describe("handleCliArgs", () => {
		it("should return personalized greeting when name is provided", () => {
			const args = ["node", "script.js", "Alice"];
			expect(handleCliArgs(args)).toBe("Hello, Alice!");
		});

		it("should return default greeting when no name is provided", () => {
			const args = ["node", "script.js"];
			expect(handleCliArgs(args)).toBe("Hello, world!");
		});

		it("should handle only the first argument after script", () => {
			const args = ["node", "script.js", "Alice", "Bob"];
			expect(handleCliArgs(args)).toBe("Hello, Alice!");
		});

		it("should handle empty args array", () => {
			const args: string[] = [];
			expect(handleCliArgs(args)).toBe("Hello, world!");
		});

		it("should handle args with only node and script path", () => {
			const args = ["node", "script.js"];
			expect(handleCliArgs(args)).toBe("Hello, world!");
		});
	});
});
