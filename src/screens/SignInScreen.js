import {
  Image,
  ScrollView,
  StyleSheet,
  View,
  useWindowDimensions,
} from "react-native";
import React, { useState } from "react";

import CustomButton from "../components/CustomButton";
import CustomInput from "../components/CustomInput";
import Logo from "../../assets/images/Bronco.png";
import SocialSignInButtons from "../components/SocialSignInButtons";
import { auth } from "../../Firebase";
import { signInWithEmailAndPassword } from "firebase/auth";
import { useNavigation } from "@react-navigation/native";

const SignInScreen = () => {
  const { height } = useWindowDimensions();
  const navigation = useNavigation();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const onSignInPressed = () => {
    //Validate with firebase
    signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        // const user = userCredential.user;
        console.warn("Signed In");
        navigation.navigate("Home");
        setEmail("");
        setPassword("");
      })
      .catch((error) => {
        const errorCode = error.code;
        // const errorMessage = error.message;
        console.log(errorCode);
        if (errorCode == "auth/wrong-password") {
          console.warn("Wrong Email/Password");
        } else if (errorCode == "auth/user-not-found") {
          console.warn("User does not exists");
        } else {
          console.warn("Check your credentials");
        }
        navigation.navigate("SignIn");
      });
  };
  const onForgotPasswordPressed = () => {
    // console.warn("Forgot Password Clicked");
    navigation.navigate("ForgotPassword");
  };
  const onSignUpPress = () => {
    // console.warn("SignUp Clicked");
    navigation.navigate("SignUp");
  };

  return (
    <ScrollView>
      <View style={styles.root}>
        <Image
          source={Logo}
          style={[{ height: height * 0.25 }, styles.logo]}
          resizeMode="contain"
        />
        <View style={styles.bottomContainer}>
          <CustomInput placeholder="Email" value={email} setValue={setEmail} />

          <CustomInput
            placeholder="Password"
            value={password}
            setValue={setPassword}
            secureTextEntry={true}
          />
          <CustomButton text="Sign In" onPress={onSignInPressed} />
          <CustomButton
            text="Forgot password?"
            onPress={onForgotPasswordPressed}
            type="TERTIARY"
          />

          <View style={styles.bottomButtonContainer}>
            <SocialSignInButtons/>

            <CustomButton
              text="Don't have an account? Create one"
              onPress={onSignUpPress}
              type="TERTIARY"
            />
          </View>
        </View>
      </View>
    </ScrollView>
  );
};

export default SignInScreen;

const styles = StyleSheet.create({
  root: {
    alignItems: "center",
  },
  logo: {
    width: "100%",
    maxWidth: 350,
    maxHeight: 250,
  },
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
