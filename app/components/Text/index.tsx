import React from 'react';
import { Text as ReactNativeText } from 'react-native';

import presets from './text.presets';
import { ITextProps } from './text.props';

export const Text: React.FC<ITextProps> = ({ style, preset, ...rest }) => {
  const styles = [presets[preset || 'default'], style];

  return <ReactNativeText {...rest} style={styles} />;
};
