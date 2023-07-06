//This screen will help the user to create a new password.
//The user shall add the code received on their email along with the new password they desire.
//Once submitted the user should be navigated back to the SignIn Screen

import React, { useState } from "react";
import { ScrollView, StyleSheet, Text, View } from "react-native";

import CustomButton from "../components/CustomButton";
import CustomInput from "../components/CustomInput";
import { useNavigation } from "@react-navigation/native";

const ResetPasswordScreen = () => {
  const navigation = useNavigation();
  const [newpassword, setNewPassword] = useState("");
  const [code, setCode] = useState("");

  const onSubmitPressed = () => {
    // console.warn("Submit Clicked");
    navigation.navigate("SignIn");
  };

  const onBackToSignInPressed = () => {
    // console.warn("Back To Sign In Clicked");
    navigation.navigate("SignIn");
  };
  return (
    <ScrollView>
      <View style={styles.root}>
        <Text style={styles.title}>Reset Your Password</Text>
        <View style={styles.bottomContainer}>
          <CustomInput
            placeholder="Enter your code here"
            value={code}
            setValue={setCode}
          />
          <CustomInput
            placeholder="Enter your new password"
            value={newpassword}
            setValue={setNewPassword}
          />

          <CustomButton text="Submit" onPress={onSubmitPressed} />
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
