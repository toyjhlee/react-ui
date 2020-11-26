const {version} = require('./package')

const ignore = [
  '**/__tests__/**',
  '**/*.test.{js,jsx,ts,tsx}',
  '**/*.spec.{js,jsx,ts,tsx}',
  '**/*.d.ts',
]

module.exports = {
  title: 'toyjhlee react ui',
  components: ['src/components/**/*.tsx', 'src/components/*.tsx'],
  version,
  ignore,
  //   sections: [
  //     {
  //       name: 'test',
  //       components: () => ['src/components/example/ExampleComponent.tsx'],
  //       sections: [
  //         {
  //           name: 'Font',
  //           content: 'src/components/example/ExampleComponent.md',
  //         },
  //       ],
  //     },
  //   ],
  webpackConfig: {
    devServer: {
      // Docs: https://codesandbox.io/docs/environment#how-can-i-tell-if-i-am-in-a-container-sandbox
      disableHostCheck: !!process.env.CODESANDBOX_SSE,
    },
    module: {
      rules: [
        {
          test: /\.tsx?$/,
          use: 'ts-loader',
          exclude: /node_modules/,
        },
        {
          test: /\.jsx?$/,
          exclude: /node_modules/,
          loader: 'babel-loader',
        },
        {
          test: /\.css$/,
          use: [
            'style-loader',
            {
              loader: 'css-loader',
              options: {
                importLoaders: 1,
                modules: true,
              },
            },
          ],
        },
      ],
    },
  },
}
