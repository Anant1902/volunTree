// const { getDefaultConfig } = require("@expo/metro-config");

// const defaultConfig = getDefaultConfig(__dirname);
// defaultConfig.resolver.sourceExts.push("cjs");

// module.exports = defaultConfig;

const { getDefaultConfig } = require("@expo/metro-config");

const defaultConfig = getDefaultConfig(__dirname);

// Modify the default configuration for react-native-svg-transformer
const { transformer, resolver } = defaultConfig;
defaultConfig.transformer = {
  ...transformer,
  babelTransformerPath: require.resolve("react-native-svg-transformer"),
};
defaultConfig.resolver = {
  ...resolver,
  assetExts: resolver.assetExts.filter((ext) => ext !== "svg"),
  sourceExts: [...resolver.sourceExts, "svg"],
};

// Modify the default configuration for Firebase
defaultConfig.resolver.sourceExts.push("cjs");

module.exports = defaultConfig;
