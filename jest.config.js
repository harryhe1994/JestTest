module.exports = {
    setupFiles: [
        // "<rootDir>/src/test/js/unit/specs/base.index.js"
    ],
    testRegex: './src/test/js/unit/specs/.*.test.js$',
    moduleNameMapper: {
        '^@/(.*)$': '<rootDir>/src/test/js/build/$1',
        "\\.(css|less)$": "identity-obj-proxy"
    },
    collectCoverage: false,
    coveragePathIgnorePatterns: [
        '<rootDir>/src/test/js/build',
        '<rootDir>/src/main/webapp/css',
        'build',
        'node_modules'
    ],
    coverageDirectory: '<rootDir>/src/test/js/unit/coverage/cosco',
    transform:{"\\.(jpg|jpeg|png|gif|eot|otf|webp|svg|ttf|woff|woff2|mp4|webm|wav|mp3|m4a|aac|oga)$": "<rootDir>/fileTransformer.js"}
};