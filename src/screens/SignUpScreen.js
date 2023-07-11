import React, { useState } from "react";
import { ScrollView, StyleSheet, Text, View } from "react-native";

import CustomButton from "../components/CustomButton";
import CustomInput from "../components/CustomInput";
import SocialSignInButtons from "../components/SocialSignInButtons";
import auth from "../../Firebase";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { useNavigation } from "@react-navigation/native";

const SignUpScreen = () => {
  const navigation = useNavigation();
  // const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  // const [passwordRepeat, setPasswordRepeat] = useState("");

  const onPrivacyPolicyPressed = () => {
    console.warn("Privacy Policy Clicked");
  };
  const onTermsAndUsagePressed = () => {
    console.warn("Terms and usage Clicked");
  };
  const onSignInPressed = () => {
    // console.warn("Sign In Clicked");
    navigation.navigate("SignIn");
  };
  const onRegisterPressed = () => {
    createUserWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        const user = userCredential.user;
        console.warn("User Created Successfully");
        navigation.navigate("SignIn");
        setEmail("");
        setPassword("");
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;

        if (errorCode == "auth/weak-password") {
          console.warn("Weak password");
        } else if (errorCode == "auth/email-already-in-use") {
          console.warn("Email already used");
        }
        navigation.navigate("SignUp");
      });
  };
  return (
    <ScrollView>
      <View style={styles.root}>
        <Text style={styles.title}>Create An Account</Text>
        <View style={styles.bottomContainer}>
          {/* <CustomInput
            placeholder="Username"
            value={username}
            setValue={setUsername}
          /> */}
          <CustomInput
            placeholder="Email"
            value={email}
            setValue={setEmail}
            autoFocus={true}
          />

          <CustomInput
            placeholder="Password"
            value={password}
            setValue={setPassword}
            secureTextEntry={true}
          />
          {/* <CustomInput
            placeholder="Confirm Password"
            value={passwordRepeat}
            setValue={setPasswordRepeat}
            secureTextEntry={true}
          /> */}
          <CustomButton text="Register" onPress={onRegisterPressed} />
          <Text style={styles.text}>
            By registering, you confirm that you accept our
            <Text style={styles.textLink} onPress={onTermsAndUsagePressed}>
              {" "}
              Terms of Usage
            </Text>{" "}
            and
            <Text style={styles.textLink} onPress={onPrivacyPolicyPressed}>
              {" "}
              Privacy Policy
            </Text>
          </Text>
          <View style={styles.bottomButtonContainer}>
            <SocialSignInButtons />
            <CustomButton
              text="Have an account? Sign In"
              onPress={onSignInPressed}
              type="TERTIARY"
            />
          </View>
        </View>
      </View>
    </ScrollView>
  );
};

export default SignUpScreen;

const styles = StyleSheet.create({
  root: {
    alignItems: "center",
  },
  title: { fontSize: 30, fontWeight: "bold", margin: 30, color: "#B30638" },
  text: { color: "gray", marginVertical: 10 },
  textLink: { color: "#B30638" },
  bottomContainer: {
    width: "90%",
    alignItems: "center",
  },
  bottomButtonContainer: {
    width: "100%",
    borderTopColor: "#e3e3e3",
    borderTopWidth: 1.5,
    marginTop: "5%",
  },
});
