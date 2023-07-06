import React, { useState } from "react";
import { ScrollView, StyleSheet, Text, View } from "react-native";

import CustomButton from "../components/CustomButton";
import CustomInput from "../components/CustomInput";
import { useNavigation } from "@react-navigation/native";

const ConfirmEmailScreen = () => {
  const navigation = useNavigation();
  const [code, setCode] = useState("");
  const [email, setEmail] = useState("");

  const onConfirmPressed = () => {
    // console.warn("Confirm Clicked");
    navigation.navigate("Home");
  };
  const onResendCodePressed = () => {
    // console.warn("Code Resend Clicked");
    //Send email verfication again
  };
  const onBackToSignInPressed = () => {
    // console.warn("Back To Sign In Clicked");
    navigation.navigate("SignIn");
  };
  return (
    <ScrollView>
      <View style={styles.root}>
        <Text style={styles.title}>Confirm Your Email</Text>
        <View style={styles.bottomContainer}>
          <CustomInput placeholder="Email" value={email} setValue={setEmail} />
          <CustomInput
            placeholder="Enter your confirmation code"
            value={code}
            setValue={setCode}
          />

          <CustomButton text="Confirm" onPress={onConfirmPressed} />
          <View style={styles.bottomButtons}>
            <CustomButton
              text="Resend Code"
              onPress={onResendCodePressed}
              type="SECONDARY"
            />
            <CustomButton
              text="Back to Sign In"
              onPress={onBackToSignInPressed}
              type="TERTIARY"
            />
          </View>
        </View>
      </View>
    </ScrollView>
  );
};

export default ConfirmEmailScreen;

const styles = StyleSheet.create({
  root: {
    alignItems: "center",
    marginVertical: 30,
  },
  title: { fontSize: 30, fontWeight: "bold", margin: 30, color: "#B30638" },
  bottomContainer: {
    width: "90%",
  },
  bottomButtons: {
    width: "50%",
    flexDirection: "row",
  },
});
