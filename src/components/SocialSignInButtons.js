import { GoogleAuthProvider, signInWithRedirect } from "firebase/auth";
import { StyleSheet, View } from "react-native";

import CustomButton from "./CustomButton.js";
import React from "react";
import auth from "../../Firebase.js";

const SocialSignInButtons = () => {
  const provider = new GoogleAuthProvider();

  const onSignInGoogle = () => {
    signInWithRedirect(auth, provider);
    console.warn("onSignInGoogle");
  };

  const onSignInApple = () => {
    console.warn("onSignInApple");
  };

  return (
    <View style={styles.SocialSignInButtons}>
      <CustomButton
        text="Sign In with Google"
        onPress={onSignInGoogle}
        bgColor="#FAE9EA"
        fgColor="#DD4D44"
      />
      <CustomButton
        text="Sign In with Apple"
        onPress={onSignInApple}
        bgColor="#e3e3e3"
        fgColor="#363636"
      />
    </View>
  );
};

const styles = StyleSheet.create({
  SocialSignInButtons: { marginVertical: "5%" },
});
export default SocialSignInButtons;
