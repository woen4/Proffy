import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#8257E5",
    alignItems: "center",
  },
  landingImage: {
    marginTop: "25%",
  },
  apresentation: {
    marginTop: "23%",
    fontSize: 26,
    color: "#fff",
    alignSelf: "flex-start",
    marginLeft: "10%",
    fontFamily: "Poppins_400Regular",
  },
  strong: {
    fontFamily: "Poppins_600SemiBold",
  },
  containerOptions: {
    marginTop: "10%",
    width: "85%",
    height: "22.5%",
    flexDirection: "row",

    alignItems: "center",
    justifyContent: "space-around",
  },
  iconOption: {
    width: 40,
    height: 35,
  },
  option1: {
    paddingTop: "8%",
    paddingLeft: "8%",
    height: "95%",
    width: "45%",
    backgroundColor: "#9871F5",
    borderRadius: 8,
  },
  option2: {
    paddingTop: "8%",
    paddingLeft: "8%",
    height: "95%",
    width: "45%",
    backgroundColor: "#04D361",
    borderRadius: 8,
  },
  titleOption: {
    marginTop: "40%",
    fontSize: 21,
    color: "#fff",
    fontFamily: "Poppins_600SemiBold",
  },
  connections: {
    color: "#D4C2FF",
    fontSize: 14,
    alignSelf: 'flex-start',
    marginLeft: '10%',
    marginTop: '15%',
  },
});

export default styles;
