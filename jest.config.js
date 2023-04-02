module.exports = {
	transform: {
		"^.+\\.tsx?$": "ts-jest"
	},
	moduleNameMapper: {
		'^@/(.*)$': '<rootDir>/src/$1',
		'^libs/(.*)$': '<rootDir>/libs/$1',
	},
	testRegex: "(/__tests__/.*|(\\.|/)(test|spec))\\.(jsx?|tsx?)$",
	moduleFileExtensions: ["ts", "tsx", "js", "jsx", "json", "node"],
	collectCoverage: false,
	testEnvironment: "node",
	coverageReporters: ["json", "lcov", "text", "clover"] // "text-summary"

};