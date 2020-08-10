import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
  teacherList: {
    marginTop: -40,
    
  },
  searchForm: {
    marginBottom: 24,
  },
  label: {
    color: "#d4c2ff",
    fontFamily: "Poppins_400Regular",
  },
  input: {
    height: 54,
    borderRadius: 8,
    justifyContent: "center",
    paddingHorizontal: 16,
    marginTop: 4,
    marginBottom: 16,
    backgroundColor: "#fff",
  },
  inputGroup: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
  inputBlock: {
    width: "48%",
  },
  submitButton: {
    backgroundColor: "#04d361",
    flexDirection: "row",
    borderRadius: 8,
    height: 56,
    justifyContent: "center",
    alignItems: "center",
  },
  submitButtonText: {
    fontFamily: "Archivo_600SemiBold",
    color: "#fff",
    fontSize: 16,
  },
});

export default styles;
