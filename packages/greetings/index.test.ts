import { describe, expect, it } from "vitest";
import { greet, greetDefault } from ".";

describe("greet", () => {
	it("should return a personalized greeting", () => {
		expect(greet("Alice")).toBe("Hello, Alice!");
	});

	it("should handle names with spaces", () => {
		expect(greet("John Doe")).toBe("Hello, John Doe!");
	});

	it("should handle special characters", () => {
		expect(greet("José")).toBe("Hello, José!");
	});

	it("should handle empty string", () => {
		expect(greet("")).toBe("Hello, !");
	});
});

describe("greetDefault", () => {
	it("should return the default greeting", () => {
		expect(greetDefault()).toBe("Hello, world!");
	});
});
