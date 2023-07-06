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
import { useNavigation } from "@react-navigation/native";

const SignInScreen = () => {
  const { height } = useWindowDimensions();
  const navigation = useNavigation();
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const onSignInPressed = () => {
    // console.warn("Signed In");
    //Validate with firebase
    navigation.navigate("Home");
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
          <CustomInput
            placeholder="Username"
            value={username}
            setValue={setUsername}
          />

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
            <SocialSignInButtons />

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
