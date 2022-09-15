module.exports = {
  presets: ['module:metro-react-native-babel-preset'],
  plugins: [
    [
      'module-resolver',
      {
        root: ['./'],
        extensions: ['.ios.js', '.android.js', '.jsx', '.js', '.json'],
        alias: {
          '@services': './src/services',
          '@screens': './src/screens',
          '@redux': './src/redux',
          '@models': './src/models',
          '@utils': './src/utils',
          '@navigations': './src/navigations',
          '@base-components': './src/base-components',
          '@assets': './src/assets',
          '@constants': './src/constants',
        },
      },
    ],
    'react-native-reanimated/plugin',
  ],
};
