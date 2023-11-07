module.exports = function (api) {
  api.cache(true);
  return {
    presets: ["babel-preset-expo"],
    //The following plugin is necessary for react-native-reanimated
    // library to work in the project.
    plugins: ["react-native-reanimated/plugin"],
  };
};
