module.exports = function(api) {
  api.cache(true);
  return {
    presets: ['babel-preset-expo'],
    plugins: [
      // other plugins can be listed here if needed
    ],
  };
};
