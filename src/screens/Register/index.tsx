import { DismissKeyboardView } from "@/components/DismissKeyboardView";
import { useNavigation } from "@react-navigation/native";
import { StackNavigationProp } from "@react-navigation/stack";
import { View } from "react-native";
import { AuthHeader } from "@/components/AuthHeader";
import { RegisterForm } from "./RegisterForm";

export type PublicStackParamsList = {
  Login: undefined;
  Register: undefined;
};

export const Register  = () => {
  
  return (
     <DismissKeyboardView>
      <View className="flex-1 w-[82%] self-center">
        <AuthHeader />
        <RegisterForm />
      </View>
    </DismissKeyboardView>
  );
};
