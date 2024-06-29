import { ConfigContext, ExpoConfig } from "@expo/config";

export default ({ config }: ConfigContext): ExpoConfig => {
  const iosBuildNumber = process.env.IOS_BUILD_NUMBER || "1";
  const androidVersionCode = process.env.ANDROID_VERSION_CODE || "1";

  return {
    name: "hang-on",
    slug: "hang-on",
    version: "1.0.0",
    orientation: "portrait",
    icon: "./assets/images/icon.png",
    scheme: "myapp",
    userInterfaceStyle: "automatic",
    splash: {
      image: "./assets/images/splash.png",
      resizeMode: "contain",
      backgroundColor: "#ffffff",
    },
    ios: {
      supportsTablet: true,
      bundleIdentifier: "io",
      buildNumber: iosBuildNumber,
    },
    android: {
      adaptiveIcon: {
        foregroundImage: "./assets/images/adaptive-icon.png",
        backgroundColor: "#ffffff",
      },
      versionCode: parseInt(androidVersionCode, 10),
    },
    web: {
      bundler: "metro",
      output: "static",
      favicon: "./assets/images/favicon.png",
    },
    plugins: ["expo-router"],
    experiments: {
      typedRoutes: true,
    },
    extra: {
      supabaseUrl: process.env.supabaseUrl,
      supabaseAnonKey: process.env.supabaseAnonKey,
      eas: {
        projectId: "55595ef7-77b3-4184-9238-bab0d9cdd2d0",
      },
    },
  };
};
