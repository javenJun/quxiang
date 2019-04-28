module.exports = {
    extends: "airbnb",
    parserOptions: {
      ecmaVersion: 7
    },
    parser: "babel-eslint",
    env: {
      browser: true,
      webextensions: true,
    },
    extends: ['airbnb-base', 'prettier'],
    plugins: ['prettier', 'react'],
    rules: {
      "max-len": [  // 字符串最大长度
        2,
        {
          code: 100,
          comments: 100,
          ignoreComments: true,
          ignoreStrings: true,
          ignoreTemplateLiterals: true,
          ignoreRegExpLiterals: true,
        },
      ],
      "object-shorthand": [
        4,
        "always",
        {
          "avoidExplicitReturnArrows": true
        }
      ],
      camelcase: 1,  // 强制驼峰法命名
      "function-paren-newline": 0,
      "class-methods-use-this": 0,
      "comma-dangle": 0,
      "prefer-destructuring": [
        2,
        {
          "AssignmentExpression": {
            "array": false,
            "object": false,
          },
        }
      ],
      "import/extensions": "off",
      "import/no-extraneous-dependencies": 1,
      "import/no-unresolved": 1,
      "import/prefer-default-export": 0,
      "jsx-a11y/label-has-for": 0, // allow implicit label for input implementation
      "jsx-a11y/no-static-element-interactions": 0,
      "jsx-a11y/no-noninteractive-element-interactions": 0,
      "jsx-a11y/mouse-events-have-key-events": 0,
      "linebreak-style": "off",
      "no-await-in-loop": 0,
      "no-console": 0,
      "no-empty-function": 1,
      "no-param-reassign": 0, // 不准给函数入参赋值
      "no-restricted-syntax": [
        2,
        "DebuggerStatement",
        "LabeledStatement",
        "WithStatement"
      ],
      "no-shadow": 0,
      "no-underscore-dangle": 0,
      "no-unused-vars": 1,

      // react 如果在项目中文件名后缀是 .js 而不是 .jsx 避免报错
      "react/sort-comp": 0,
      "react/forbid-prop-types": 0,
      "react/jsx-closing-bracket-location": 0,
      "jsx-a11y/click-events-have-key-events": 0,
      "jsx-a11y/anchor-is-valid": 0,
      "react/jsx-filename-extension": [
        1,
        {
          extensions: [
            ".js",
            ".jsx"
          ]
        }
      ],
      "react/destructuring-assignment": ['always'],
      "react/no-array-index-key": 0,
      "react/require-default-props": 1,
      "no-mixed-operators": 0,
      "react/no-did-mount-set-state": 0, // dom size detection after mount may require setState in didMount
    }
  };
  