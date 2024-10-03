module.exports = {
  transform: {
    '^.+\\.(js|jsx)$': '@swc/jest',
    '^.+\\.css$': 'jest-transform-css'
  },
  testEnvironment: 'jest-environment-jsdom',
  moduleFileExtensions: ['js', 'jsx'],
  setupFilesAfterEnv: ['<rootDir>/jest-setup.js']
};
