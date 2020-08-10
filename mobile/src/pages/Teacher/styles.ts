import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  container: {
    width: "100%",
    height: "100%",
    backgroundColor: "#8257E5",
    alignItems: "center",
    justifyContent: "center",
  },
  background: {
    width: "85%",
    height: "85%",
    marginLeft: "20%",
  },
  title: {
    fontSize: 34,
    marginTop: "50%",
    color: "#fff",
    alignSelf: "flex-start",
    fontFamily: "Poppins_600SemiBold",
  },
  subtitle: {
    marginTop: "5%",
    fontSize: 16,
    color: "#D4C2FF",
    alignSelf: "flex-start",
    fontFamily: "Poppins_400Regular",
  },
  button: {
    backgroundColor: "#04D361",
    width: "90%",
    marginLeft: "-7%",
    marginTop: "80%",
    borderRadius: 8,
    height: "10%",
    alignItems: "center",
    justifyContent: "center",
  },
  textButton: {
    fontSize: 16,
    color: "#fff",
    fontFamily: "Archivo_600SemiBold",
  },
});

export default styles;
