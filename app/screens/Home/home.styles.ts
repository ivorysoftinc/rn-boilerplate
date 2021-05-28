import { StyleSheet, ViewStyle, TextStyle } from 'react-native';

import { COLORS } from '../../themes/colors';

interface IHomeScreenStyles {
  root: ViewStyle;
  body: ViewStyle;
  description: TextStyle;
}

export const styles = StyleSheet.create<IHomeScreenStyles>({
  root: {
    flex: 1,
    backgroundColor: COLORS.WHITE,
  },
  body: {
    padding: 20,
  },
  description: {
    marginTop: 15,
  },
});
