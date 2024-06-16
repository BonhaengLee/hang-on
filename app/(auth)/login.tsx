import React, { useState } from "react";
import {
  Image,
  StyleSheet,
  Platform,
  Button,
  ScrollView,
  SafeAreaView,
  View,
  TouchableOpacity,
} from "react-native";

import { supabase } from "@/lib/supabase";

export default function LoginScreen() {
  const [loading, setLoading] = useState(false);

  const handleGoogleLogin = async () => {
    setLoading(true);
    const { error } = await supabase.auth.signInWithOAuth({
      provider: "google",
    });
    if (error) {
      console.error(error);
    }
    setLoading(false);
  };

  const handleKakaoLogin = async () => {
    setLoading(true);
    const { error } = await supabase.auth.signInWithOAuth({
      provider: "kakao",
    });
    if (error) {
      console.error(error);
    }
    setLoading(false);
  };

  console.log({ loading });

  return (
    <SafeAreaView style={styles.safeArea}>
      <View style={styles.container}>
        <Image
          source={require("../../assets/images/logo.png")}
          style={styles.handImage}
        />
        <View style={styles.buttonsContainer}>
          <TouchableOpacity
            style={styles.socialButton}
            onPress={handleGoogleLogin}
          >
            <Image
              source={require("../../assets/images/login/kakao.png")}
              style={styles.icon}
            />
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.socialButton}
            onPress={handleKakaoLogin}
          >
            <Image
              source={require("../../assets/images/login/google.png")}
              style={styles.icon}
            />
          </TouchableOpacity>
        </View>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: "black",
  },
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  handImage: {
    width: 284,
    height: 284,
    marginBottom: 50,
  },
  buttonsContainer: {
    flexDirection: "row",
    justifyContent: "center",
  },
  socialButton: {
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 9999,
    backgroundColor: "white",
    marginHorizontal: 16,
  },
  icon: {
    width: 54,
    height: 54,
  },
});
