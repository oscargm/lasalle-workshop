module.exports = {
  rootDir: '../../',
  preset: 'ts-jest',
  moduleNameMapper: {
    '^.+\\.(css|less|scss|sass)$': 'identity-obj-proxy',
    '^common(.*)$': '<rootDir>/src/common/$1',
    '^core/(.*)$': '<rootDir>/src/core/$1',
    '^layouts(.*)$': '<rootDir>/src/layouts/$1',
    '^pods(.*)$': '<rootDir>/src/pods/$1',
    '^scenes(.*)$': '<rootDir>/src/scenes/$1',
    '^src(.*)$': '<rootDir>/src/$1',
  },

  modulePathIgnorePatterns: [
    '<rootDir>/build-prod/',
    '<rootDir>/build-dev/',
    '<rootDir>/test',
  ],
  testRegex: ['.+\\.spec.tsx', '.+\\.test.tsx'],
  transform: {
    '\\.(jpg|jpeg|png|gif|eot|otf|webp|svg|ttf|woff|woff2|mp4|webm|wav|mp3|m4a|aac|oga)$':
      '<rootDir>/config/jest/file-transformer.js',
    '^.+\\.js$': 'babel-jest',
  },
  transformIgnorePatterns: [
    '/node_modules/(?!transpile-me|transpile-me-too|lodash-es|@roche/components-library-mui).+(js|jsx|svg)$',
  ],
  globals: {
    'ts-jest': {
      isolatedModules: true,
    },
  },
  coveragePathIgnorePatterns: [
    '.+\\.d.ts',
    '.+\\.styles.ts',
    '.+\\index.ts',
    '.+\\.spec.tsx',
    '.+\\.test.tsx',
    '.+\\.steps.tsx',
    '<rootDir>/src/core/i18n/*.*',
    '<rootDir>/src/app.*.tsx?',
  ],
  coverageDirectory: 'jest-coverage',
  collectCoverageFrom: ['**/*.{ts,tsx}'],
  reporters: [
    'default',
    [
      'jest-junit',
      {
        outputDirectory: '<rootDir>/reports/',
        outputName: 'jest.junit.xml',
        suiteName: 'Unit/Integration tests',
        uniqueOutputName: 'false',
        classNameTemplate: '{classname}-{title}',
        titleTemplate: '{classname}-{title}',
        ancestorSeparator: ' › ',
        usePathForSuiteName: 'true',
      },
    ],
  ],
  restoreMocks: true,
  automock: false,
};
