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
    extends: ['airbnb-base', 'prettier','plugin:react/recommended'],
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
        2,
        "always",
        {
          "avoidExplicitReturnArrows": true
        }
      ],
      camelcase: 'warn',  // 强制驼峰法命名
      "function-paren-newline": 'off',
      "class-methods-use-this": 'off',
      "comma-dangle": 'off',
      "prefer-destructuring": [
        2,
        {
          "AssignmentExpression": {
            "array": false,
            "object": false,
          },
        }
      ],
      'no-else-return':'off', // 如果if语句里面有return,后面不能跟else语句
      'consistent-return':'off', // return 后面是否允许省略
      'prefer-template':'off',
      'func-names':'off', // 方法表达式是否需要命名
      'no-nested-ternar':'off',  //禁止使用嵌套的三目运算
      'strict': 'off', //使用严格模式
      'import/order':'off',
      'object-shorthand':'off', //强制对象字面量缩写语法
      "import/extensions": 'off',
      "import/no-extraneous-dependencies": 1,
      "import/no-unresolved": 'warn',
      "import/no-extraneous-dependencies":'off',
      "import/no-dynamic-require":'off',
      "import/prefer-default-export": 'off',
      'import/newline-after-import':'off',
      'lines-between-class-members':'off',
      "jsx-a11y/label-has-for": 'off', // allow implicit label for input implementation
      "jsx-a11y/no-static-element-interactions": 'off',
      "jsx-a11y/no-noninteractive-element-interactions": 'off',
      "jsx-a11y/mouse-events-have-key-events": 'off',
      "linebreak-style": 'off', //换行风格
      "no-await-in-loop": 'off',
      "no-console": 'off',
      "no-empty-function": 'warn',
      "no-param-reassign": 'off', // 不准给函数入参赋值
      "no-restricted-syntax": [
        2,
        "DebuggerStatement",
        "LabeledStatement",
        "WithStatement"
      ],
      "no-shadow": 2, // 外部作用域中的变量不能与它所包含的作用域中的变量或参数同名
      "no-underscore-dangle": 'off',
      "no-unused-vars": 'warn', //不能有声明后未被使用的变量或参数
      "no-use-before-define":'off', //未定义前不能使用 // 部分参数允许未定 暂且关闭
      'global-require':'off',

      // react 如果在项目中文件名后缀是 .js 而不是 .jsx 避免报错
      "react/sort-comp": 'off',
      "react/forbid-prop-types": 'off',
      "react/jsx-closing-bracket-location": 'off',
      "jsx-a11y/click-events-have-key-events": 'off',
      "jsx-a11y/anchor-is-valid": 'off',
      "react/jsx-filename-extension": [
        1,
        {
          extensions: [
            ".js",
            ".jsx"
          ]
        }
      ],
      'react/destructuring-assignment': ['off', 'never'],
      "react/no-array-index-key": 'off',
      "react/prop-types":'off',
     
      "react/require-default-props": 'warn',
      "no-mixed-operators": 'off',
      "react/no-did-mount-set-state": 'off',
    }
  };
  