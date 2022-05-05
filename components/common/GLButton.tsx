import { ButtonProps, Button, Pressable, PressableProps } from "react-native";
import commonStyles from "../../styles/common";

export interface IGLButton extends PressableProps {
  primary?: boolean;
  secondary?: boolean;
  children?: any[] | any;
}

export default function GLButton({
  primary,
  secondary,
  children,
  ...props
}: IGLButton) {
  let style = commonStyles.btnPrimary;

  if (secondary) {
    style = commonStyles.btnSecondary;
  }
  return (
    <Pressable style={style} {...props}>
      {children}
    </Pressable>
  );
}
