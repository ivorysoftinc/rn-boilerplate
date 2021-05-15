import { StyleSheet, ViewStyle } from 'react-native';

import COLORS from '../../utils/colors';

interface IInitialScreenStyles {
  root: ViewStyle;
}

export const styles = StyleSheet.create<IInitialScreenStyles>({
  root: {
    flex: 1,
    backgroundColor: COLORS.WHITE,
    alignItems: 'center',
    justifyContent: 'center',
  },
});
