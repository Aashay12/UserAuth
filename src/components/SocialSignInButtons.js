import { GoogleAuthProvider, signInWithRedirect } from "firebase/auth";
import { StyleSheet, View } from "react-native";

import CustomButton from "./CustomButton.js";
import React from "react";
import { auth, provider } from "../../Firebase.js";
import { useNavigation } from "@react-navigation/native";


const SocialSignInButtons = () => {
  const navigation = useNavigation();
  
  const onSignInGoogle = () => {
    signInWithRedirect(auth, provider)
    .then((result) => {
      const credential = GoogleAuthProvider.credentialFromResult(result);
      const token = credential.accessToken;
      const user = result.user
      
      navigation.navigate("Home")
    }).catch((error) => {
      const errorCode = error.code;
      const errorMessage = error.message;
      const email = error.customData.email;
      const credential = GoogleAuthProvider.credentialFromError(error);

      console.log(errorCode);
    })
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
