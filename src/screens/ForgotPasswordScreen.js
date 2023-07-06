// When the user clicks Forgot NewPasswordScreen, this screen is rendered.
// The User shall enter his email id and he will receive a code and the screen will be naviagated to ResetPasswordScreen

import React, { useState } from "react";
import { ScrollView, StyleSheet, Text, View } from "react-native";

import CustomButton from "../components/CustomButton";
import CustomInput from "../components/CustomInput";
import { useNavigation } from "@react-navigation/native";

const ResetPasswordScreen = () => {
  const navigation = useNavigation();
  const [email, setEmail] = useState("");

  const onSendPressed = () => {
    // console.warn("Get Code Clicked");
    navigation.navigate("ResetPassword");
  };

  const onBackToSignInPressed = () => {
    // console.warn("Back To Sign In Clicked");
    navigation.navigate("SignIn");
  };
  return (
    <ScrollView>
      <View style={styles.root}>
        <Text style={styles.title}>Get Your Code</Text>
        <View style={styles.bottomContainer}>
          <CustomInput
            placeholder="Enter your Email"
            value={email}
            setValue={setEmail}
          />

          <CustomButton text="Send" onPress={onSendPressed} />
          <CustomButton
            text="Back to Sign In"
            onPress={onBackToSignInPressed}
            type="TERTIARY"
          />
        </View>
      </View>
    </ScrollView>
  );
};

export default ResetPasswordScreen;

const styles = StyleSheet.create({
  root: {
    alignItems: "center",
    marginVertical: 30,
  },
  title: { fontSize: 28, fontWeight: "bold", margin: 30, color: "#B30638" },
  text: { color: "gray", marginVertical: 10 },
  textLink: { color: "#B30638" },
  bottomContainer: {
    width: "90%",
  },
});
