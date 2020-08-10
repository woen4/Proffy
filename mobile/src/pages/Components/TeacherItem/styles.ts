import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#fff",
    borderWidth: 1,
    borderColor: "#e6e6f0",
    borderRadius: 8,
    marginBottom: 16,
    overflow: "hidden",
  },
  profile: {
    flexDirection: "row",
    alignItems: "center",
    padding: 24,
  },
  avatar: {
    height: 64,
    width: 64,
    borderRadius: 32,
    backgroundColor: "#eee",
  },
  profileInfo: {
    marginLeft: 16,
  },
  name: {
    fontFamily: "Archivo_600SemiBold",
    color: "#32264d",
    fontSize: 20,
  },
  subject: {
    fontFamily: "Poppins_400Regular",
    color: "#6a6188",
    fontSize: 12,
    marginTop: 4,
  },
  bio: {
    marginHorizontal: 24,
    fontFamily: "Poppins_400Regular",
    fontSize: 14,
    lineHeight: 24,
    color: "#6a6188",
  },
  footer: {
    backgroundColor: "#fafafc",
    padding: 24,

    alignItems: "center",
  },
  price: {
    fontFamily: "Poppins_400Regular",
    color: "#6a6180",
    fontSize: 14,
  },
  priceValue: {
    fontFamily: "Archivo_600SemiBold",
    color: "#8257e5",
    fontSize: 16,
  },
  buttonsContainer: {
    flexDirection: "row",
    marginTop: 16,
  },
  favoriteButton: {
    backgroundColor: "#8257e5",
    width: 56,
    height: 56,
    borderRadius: 8,
    justifyContent: "center",
    alignItems: "center",
    marginRight: 8,
  },
  contactButton: {
    backgroundColor: "#04d361",
    flex: 1,
    flexDirection: "row",
    borderRadius: 8,
    justifyContent: "center",
    alignItems: "center",
    marginRight: 8,
  },
  contactButtonText: {
    color: "#ffff",
    fontFamily: "Archivo_600SemiBold",
    fontSize: 16,
    marginLeft: 14,
  },
  favorited: {
    backgroundColor: "#e33e3d",
  },
});

export default styles;
