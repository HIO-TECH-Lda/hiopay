import React from "react";
import { View, Text, Image, StyleSheet } from "react-native";
import { ScrollView } from "react-native-gesture-handler";
import { Paragraph, Caption, Button } from "react-native-paper";
import AppBar from "../components/AppBar";
import OptionCard from "../components/OptionCard";
import { globalStyles } from "../globalStyles";
interface Props {
  navigation: any;
}
const Profile = ({ navigation }: Props) => {
  return (
    <View style={globalStyles.container}>
      <AppBar page="Meu Perfil" navigation={navigation} />
      <View style={styles.wrapper}>
        <View style={styles.topAbsolute}>
          <View style={styles.imageWrapper}>
            <Image
              style={styles.cover}
              source={require("../../assets/images/profile2.jpeg")}
              defaultSource={require("../../assets/images/profile1.jpeg")}
            />
          </View>
        </View>
        {/* <Image source={require("../../assets/images/profile1.jpeg")} /> */}

        <View>
          <View style={styles.field}>
            <Caption style={styles.label}>Nome</Caption>
            <Paragraph style={styles.paragraph}>
              Helton Furau
            </Paragraph>
          </View>
          <View style={styles.field}>
            <Caption style={styles.label}>Contacto</Caption>
            <Paragraph style={styles.paragraph}>847554622</Paragraph>
          </View>
          <View style={styles.field}>
            <Caption style={styles.label}>Género</Caption>
            <Paragraph style={styles.paragraph}>Masculino</Paragraph>
          </View>
          <View style={styles.field}>
            <Caption style={styles.label}>Data de Nascimento</Caption>
            <Paragraph style={styles.paragraph}>
              27 de Novembro de 1999
            </Paragraph>
          </View>

          <Button mode="contained" color="#5271ff">
            Actualizar
          </Button>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  wrapper: {
    paddingTop: 100,
    padding: 20,
    borderColor: "#eee",
    backgroundColor: "#ffff",
    borderWidth: 1,
    margin: 20,
    marginTop: 120,
    position: "relative",
    borderRadius: 25,
  },

  cover: {
    width: "100%",
    borderRadius: 500,
    height: "100%",
  },
  imageWrapper: {
    height: 200,
    width: 200,
    borderRadius: 500,
    backgroundColor: "#ffff",
    padding: 5,
    elevation: 4,
  },
  topAbsolute: {
    position: "absolute",
    top: -100,
    left: 0,
    right: 0,
    alignItems: "center",
    zIndex: 69,
  },
  label: {
    color: "#aca6a3",
    fontSize: 16,
    fontFamily: "Inter_400Regular",
  },
  paragraph: {
    fontSize: 16,
    color: "#625d5b",

    fontFamily: "Inter_400Regular",
  },
  field: {
    marginBottom: 20,
  },
});
export default Profile;
