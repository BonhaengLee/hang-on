import "react-native-url-polyfill/auto";
import { useState, useEffect } from "react";
import { supabase } from "@/lib/supabase";
import { View, Text } from "react-native";
import { Session } from "@supabase/supabase-js";

import {
  DarkTheme,
  DefaultTheme,
  ThemeProvider,
} from "@react-navigation/native";
import { useFonts } from "expo-font";
import { Stack } from "expo-router";
import * as SplashScreen from "expo-splash-screen";

import { useColorScheme } from "@/hooks/useColorScheme";
import { AuthProvider } from "@/contexts/AuthContext";

// Prevent the splash screen from auto-hiding before asset loading is complete.
SplashScreen.preventAutoHideAsync();

function RootLayout() {
  const colorScheme = useColorScheme();
  const [session, setSession] = useState<Session | null>(null);

  useEffect(() => {
    supabase.auth.getSession().then(({ data: { session } }) => {
      setSession(session);
    });

    supabase.auth.onAuthStateChange((_event, session) => {
      setSession(session);
    });
  }, []);

  const [loaded] = useFonts({
    SpaceMono: require("../assets/fonts/SpaceMono-Regular.ttf"),
  });

  useEffect(() => {
    if (loaded) {
      SplashScreen.hideAsync();
    }
  }, [loaded]);

  if (!loaded) {
    return null;
  }

  return (
    <ThemeProvider value={colorScheme === "dark" ? DarkTheme : DefaultTheme}>
      <Stack>
        {session && session.user ? (
          <Stack.Screen name="(tabs)" options={{ headerShown: false }} />
        ) : (
          <Stack.Screen name="login" options={{ headerShown: false }} />
        )}
        <Stack.Screen name="+not-found" />
      </Stack>
    </ThemeProvider>
  );
}

export default function App() {
  return (
    <AuthProvider>
      <RootLayout />
    </AuthProvider>
  );
}
