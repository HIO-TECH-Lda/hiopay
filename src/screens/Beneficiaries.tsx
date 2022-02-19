import React from "react";
import { View, Text } from "react-native";
import { ScrollView } from "react-native-gesture-handler";
import AppBar from "../components/AppBar";
import OptionCard from "../components/OptionCard";
import { globalStyles } from "../globalStyles";
import Carroussel from "../components/Carroussel";
interface Props {
  navigation: any;
}
const Offers = ({ navigation }: Props) => {
  return (
    <View style={globalStyles.container}>
      <AppBar page="Meus beneficiários" navigation={navigation} />
      <ScrollView
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{
          paddingHorizontal: 20,
          paddingTop: 20,
        }}
      >
        <Carroussel />

        <OptionCard message="Adicionar" navigation={navigation} to="Jackpot" />
        <OptionCard message="Ver" navigation={navigation} to="Internet" />

      </ScrollView>
    </View>
  );
};

export default Offers;
