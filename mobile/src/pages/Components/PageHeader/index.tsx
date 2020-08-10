import React, { ReactNode } from "react";
import { BorderlessButton } from "react-native-gesture-handler";
import { View, Image, Text } from "react-native";
import backIcon from "../../../assets/images/icons/back.png";
import logoImg from "../../../assets/images/logo.png";
import styles from "./styles";
import { useNavigation } from "@react-navigation/native";

interface PageHeaderProps {
  title: string;
  headerRight?: ReactNode;
}

const PageHeader: React.FC<PageHeaderProps> = ({
  title,
  headerRight,
  children,
}) => {
  const navigation = useNavigation();
  return (
    <View style={styles.container}>
      <View style={styles.topBar}>
        <BorderlessButton
          onPress={() => {
            navigation.navigate("Landing");
          }}
        >
          <Image source={backIcon} resizeMode="contain" />
        </BorderlessButton>
        <Image source={logoImg} resizeMode="contain" />
      </View>
      <View style={styles.header}>
        <Text style={styles.title}>{title}</Text>
        {headerRight}
      </View>
      {children}
    </View>
  );
};

export default PageHeader;
