/** @type {import('ts-jest/dist/types').InitialOptionsTsJest} */
module.exports = {
  testPathIgnorePatterns: [
    '<rootDir>/.next/',
    '<rootDir>/node_modules/'
  ],
  moduleFileExtensions: [
    'js',
    'json',
    'ts',
    'tsx'
  ],
  preset: 'ts-jest',
  testEnvironment: 'jsdom',
  setupFilesAfterEnv: ['<rootDir>/setupTests.ts'],
  testRegex: '.*\\.(test|spec)\\.(ts|tsx)$',
  transform: {
    "^.+\\.(js|jsx|ts|tsx)$": ["babel-jest", { presets: ["next/babel"] }],
  },
  moduleNameMapper: {
    '\\.(css|scss|less)$': '<rootDir>/styleMock.d.ts'
  },
};
