module.exports = {
  stories: ['../components/**/*.stories.@(js|jsx|ts|tsx)'],
  staticDirs: ['../public'],
  addons: [
    '@storybook/addon-links',
    '@storybook/addon-essentials',
    '@storybook/addon-interactions',
    '@storybook/addon-docs',
  ],
  framework: {
    name: '@storybook/nextjs',
    options: {
      fastRefresh: true,
      strictMode: true,
    },
  },
  typescript: {
    check: true,
    reactDocgen: 'react-docgen-typescript',
    reactDocgenTypescriptOptions: {
      shouldExtractLiteralValuesFromEnum: true,
      propFilter: (prop) => (prop.parent ? !/node_modules/.test(prop.parent.fileName) : true),
    },
  },
  webpackFinal: async (config) => {
    // Add Next.js support
    config.resolve.alias['next/router'] = require.resolve(
      '../__mocks__/next/router.js'
    )
    config.resolve.alias['next/link'] = require.resolve(
      '../__mocks__/next/link.js'
    )
    config.resolve.alias['next/image'] = require.resolve(
      '../__mocks__/next/image.js'
    )
    
    // Add CSS support
    config.module.rules.push({
      test: /\.css$/,
      use: [
        'style-loader',
        {
          loader: 'css-loader',
          options: {
            importLoaders: 1,
            modules: {
              auto: true,
            },
          },
        },
        'postcss-loader',
      ],
    })

    return config
  },
}