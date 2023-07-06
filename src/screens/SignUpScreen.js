import {
  Image,
  ScrollView,
  StyleSheet,
  Text,
  View,
  useWindowDimensions,
} from "react-native";
import React, { useState } from "react";

import CustomButton from "../components/CustomButton";
import CustomInput from "../components/CustomInput";
import Logo from "../../assets/images/Bronco.png";
import SocialSignInButtons from "../components/SocialSignInButtons";
import { useNavigation } from "@react-navigation/native";

const SignUpScreen = () => {
  const navigation = useNavigation();
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [passwordRepeat, setPasswordRepeat] = useState("");

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
    // console.warn("Register Clicked");
    navigation.navigate("ConfirmEmail");
  };
  return (
    <ScrollView>
      <View style={styles.root}>
        <Text style={styles.title}>Create An Account</Text>
        <View style={styles.bottomContainer}>
          <CustomInput
            placeholder="Username"
            value={username}
            setValue={setUsername}
          />
          <CustomInput placeholder="Email" value={email} setValue={setEmail} />

          <CustomInput
            placeholder="Password"
            value={password}
            setValue={setPassword}
            secureTextEntry={true}
          />
          <CustomInput
            placeholder="Confirm Password"
            value={passwordRepeat}
            setValue={setPasswordRepeat}
            secureTextEntry={true}
          />
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
