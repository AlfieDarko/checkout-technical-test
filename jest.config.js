module.exports = {
  // Automatically clear mock calls and instances between every test
  clearMocks: true,

  // An array of glob patterns indicating a set of files for which coverage information should be collected
  collectCoverageFrom: ["src/**/*.{js,jsx,mjs}"],

  // The directory where Jest should output its coverage files
  coverageDirectory: "coverage",

  // An array of file extensions your modules use
  moduleFileExtensions: ["js", "json", "jsx"],
  moduleNameMapper: {
    "\\.(css|less|pcss)$": "identity-obj-proxy",
    "\\.(png|webp|jpg|jpeg|gif)$": "<rootDir>/__mocks__/fileMock.js",
    "\\.(svg)$": "<rootDir>/__mocks__/svgMock.js",
  },

  moduleDirectories: [
    "node_modules",
    // add the directory with the test-utils.js file, for example:
    "test-utils", // a utility folder
    __dirname, // the root directory
  ],

  testPathIgnorePatterns: ["<rootDir>/node_modules"],
  // The test environment that will be used for testing
  testEnvironment: "jest-environment-jsdom-sixteen",

  // The glob patterns Jest uses to detect test files
  testMatch: ["**/__tests__/**/*.js?(x)", "**/?(*.)+(spec|test).js?(x)"],

  // An array of regexp pattern strings that are matched against all test paths, matched tests are skipped
  testPathIgnorePatterns: ["\\\\node_modules\\\\"],

  // An array of regexp pattern strings that are matched against all source file paths, matched files will skip transformation
  transformIgnorePatterns: ["<rootDir>/node_modules/"],

  // Indicates whether each individual test should be reported during the run
  verbose: false,
};
