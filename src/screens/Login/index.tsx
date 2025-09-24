import { DismissKeyboardView } from "@/components/DismissKeyboardView";
import { useNavigation } from "@react-navigation/native";
import { StackNavigationProp } from "@react-navigation/stack";
import { View } from "react-native";
import { LoginForm } from "./LoginForm";
import { AuthHeader } from "@/components/AuthHeader";

export type PublicStackParamsList = {
  Login: undefined;
  Register: undefined;
};

export const Login = () => {
  const navigation =
    useNavigation<StackNavigationProp<PublicStackParamsList>>();
  return (
    <DismissKeyboardView>
      <View className="flex-1 w-[82%] self-center">
        <AuthHeader />
        <LoginForm />
      </View>
    </DismissKeyboardView>
  );
};
