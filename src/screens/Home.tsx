import React from "react";
import {
  View,
  Text,
  StyleSheet,
  Image,
  TouchableNativeFeedback,
  Appearance,
} from "react-native";
import { Caption, Surface } from "react-native-paper";
import Header from "../components/Header";
import { globalStyles } from "../globalStyles";
import { Paragraph, Title } from "react-native-paper";
import { ScrollView } from "react-native-gesture-handler";
import { Ionicons } from "@expo/vector-icons";
import OptionCard from "./../components/OptionCard";
import { useEffect } from "react";
interface Props {
  navigation: any;
}
const colorScheme = Appearance.getColorScheme();
let BLUE_COLOR = colorScheme === "dark" ? "#ee6366" : "#5271ff";
const Home = ({ navigation }: Props) => {
  useEffect(() => {
    BLUE_COLOR = colorScheme === "dark" ? "#ee6366" : "#5271ff";
  }, [colorScheme]);
  return (
    <View style={globalStyles.container}>
      <Header navigation={navigation} />
      <ScrollView
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{
          padding: 20,
        }}
      >
        <View style={styles.userInfo}>
          <Caption style={styles.userCaption}>22 de Fevereiro de 2022</Caption>
          <Title style={styles.userName}>Olá Helton!</Title>
          <Paragraph style={styles.userWellcome}>
            Bem-vindo(a) ao HioPay, pague suas tarifas públicas aqui com facilidade.
          </Paragraph>
        </View>

        <Surface style={styles.mainAccount}>
          {/* <View
            style={{
              position: "absolute",
              top: -35,
              left: 0,
              right: 0,
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <TouchableNativeFeedback>
              <View
                style={{
                  padding: 10,
                  backgroundColor: "#EF1417",
                  borderRadius: 60,
                  borderColor: "white",
                  borderWidth: 2,
                }}
              >
                <Ionicons name="ios-add-outline" color="white" size={30} />
              </View>
            </TouchableNativeFeedback>
          </View> */}

          <Paragraph
            style={[
              styles.paragraph,
              {
                color: "#f3f5eb",
              },
            ]}
          >
            Saldo
          </Paragraph>
          <Title
            style={[
              styles.title,
              {
                color: "#f3f5eb",
              },
            ]}
          >
            8.000,00 MT
          </Title>
          <Paragraph
            style={[
              styles.paragraph,
              {
                color: "#d2d3cf",
              },
            ]}
          >
            22 de Fevereiro de 2022
          </Paragraph>
        </Surface>
        <ScrollView
          horizontal
          showsHorizontalScrollIndicator={false}
          contentContainerStyle={{ marginBottom: 20 }}
        >
          <Surface style={[styles.balance]}>
            <Ionicons name="school-outline" size={30} color={BLUE_COLOR} />
            <Title style={styles.title}>Taxas</Title>
            <Paragraph style={styles.paragraph}>de Escola</Paragraph>
          </Surface>
          <Surface style={styles.balance}>
            <Ionicons name="stats-chart-outline" size={30} color={BLUE_COLOR} />
            <Title style={styles.title}>Taxas</Title>
            <Paragraph style={styles.paragraph}>de Imposto</Paragraph>
          </Surface>
          <Surface style={styles.balance}>
            <Ionicons name="people-outline" size={30} color={BLUE_COLOR} />
            <Title style={styles.title}>Taxas</Title>
            <Paragraph style={styles.paragraph}>de INSS</Paragraph>
          </Surface>
          <Surface style={styles.balance}>
            <Ionicons name="compass-outline" size={30} color={BLUE_COLOR} />
            <Title style={styles.title}>Taxas</Title>
            <Paragraph style={styles.paragraph}>da Imigração</Paragraph>
          </Surface>
          <Surface style={styles.balance}>
            <Ionicons name="car-outline" size={30} color={BLUE_COLOR} />
            <Title style={styles.title}>Multas</Title>
            <Paragraph style={styles.paragraph}> de Trânsito</Paragraph>
          </Surface>
          <Surface style={styles.balance}>
            <Ionicons name="archive-outline" size={30} color={BLUE_COLOR} />
            <Title style={styles.title}>Taxas</Title>
            <Paragraph style={styles.paragraph}>do Tribunal</Paragraph>
          </Surface>
          <Surface style={styles.balance}>
            <Ionicons name="airplane-outline" size={30} color={BLUE_COLOR} />
            <Title style={styles.title}>Taxas</Title>
            <Paragraph style={styles.paragraph}>da Alfândega</Paragraph>
          </Surface>
          <Surface style={styles.balance}>
            <Ionicons name="albums-outline" size={30} color={BLUE_COLOR} />
            <Title style={styles.title}>Outros</Title>
            <Paragraph style={styles.paragraph}>Serviços</Paragraph>
          </Surface>
        </ScrollView>

        <OptionCard message="Recaregar" navigation={navigation} to="Profile" />
        <OptionCard message="Transferir Dinheiro" navigation={navigation} to="Internet"/>
        {/* <OptionCard message="Enviar Crédito" navigation={navigation} to="TopOffers"/>
        <OptionCard message="Extra Jackpot" navigation={navigation} to="ExtraJackpot"/>
        <OptionCard message="Ofertas Top" navigation={navigation} to="ExtraJackpot"/> */}
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  userInfo: {
    marginBottom: 20,
    paddingHorizontal: 10,
  },
  userName: {
    fontSize: 28,
    fontFamily: "Inter_700Bold",
    marginVertical: 10,
    color: "#050505",
  },
  userCaption: {
    fontFamily: "Inter_400Regular",
    fontSize: 16,
    color: "#aca6a3",
  },
  userWellcome: {
    fontFamily: "Inter_400Regular",
    fontSize: 16,
    color: "#625d5b",
  },
  title: {
    color: BLUE_COLOR,

    fontSize: 28,
    fontFamily: "Inter_900Black",
    marginVertical: 20,
  },
  paragraph: {
    fontFamily: "Inter_400Regular",
    color: BLUE_COLOR,
  },
  mainAccount: {
    backgroundColor: BLUE_COLOR,
    padding: 20,
    borderRadius: 25,
    marginBottom: 20,
    alignItems: "center",
    position: "relative",
  },
  balance: {
    width: 150,
    height: 200,
    backgroundColor: "#caebff",
    padding: 10,
    borderRadius: 25,
    marginRight: 20,
    justifyContent: "center",
    alignItems: "center",
  },
  surface: {
    backgroundColor: "#FD7016",
    padding: 10,
    borderRadius: 15,
    marginBottom: 20,
  },
});
export default Home;
