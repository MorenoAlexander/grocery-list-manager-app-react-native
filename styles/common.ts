import tailwind from "tailwind-rn";
import {StyleSheet} from "react-native";

const commonStyles = StyleSheet.create({
    btnPrimary: tailwind('bg-green-500 hover:bg-blue-700 text-whitle font-bold py-2 px-4 rounded'),
    btnSecondary: tailwind('bg-gray-500 hover:bg-blue-700 text-whitle font-bold py-2 px-4 rounded')
});

export default commonStyles;