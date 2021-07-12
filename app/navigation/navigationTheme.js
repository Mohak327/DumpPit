import { DefaultTheme } from "@react-navigation/native";
import colors from "../config/colors";

export default {
// Copy all the default properties in react navigation
  ...DefaultTheme,

//   overwrite properties of colors
  colors: {
    ...DefaultTheme.colors,
    primary: colors.primary,
    background: colors.white,
  },
};
