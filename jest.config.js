module.exports = {
    roots: ['<rootDir>'],

    transform: {
        '^.+\\.tsx?$': 'ts-jest'
    },

    testRegex: "(/__tests__/.*|(\\.|/)(test|spec))\\.(jsx?|tsx?)$",

    collectCoverage: true,

    clearMocks: true,

    coverageDirectory: "coverage",

    "moduleNameMapper": {
        "\\.(jpg|jpeg|png|gif|eot|otf|webp|svg|ttf|woff|woff2|mp4|webm|wav|mp3|m4a|aac|oga)$": "<rootDir>/test/__mocks__/fileMock.js",
        "\\.(css|less|sass|scss)$": "babel-jest"
    },

    moduleFileExtensions: [
        "ts",
        "tsx",
        "js"
    ]
};
