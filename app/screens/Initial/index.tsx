import React, { useEffect } from 'react';
import { SafeAreaView } from 'react-native';

import { Text } from '../../components';
import { IInitialScreenProps } from './initial.props';
import { styles } from './initial.styles';

export const InitialScreen: React.FC<IInitialScreenProps> = ({ navigation }) => {
  useEffect(() => {
    // TODO: Timeout for loading simulation. Replace it with data fetching
    setTimeout(() => navigation.replace('HomeStack'), 500);
  }, [navigation]);

  return (
    <SafeAreaView style={styles.root}>
      <Text preset="title">Preloader...</Text>
    </SafeAreaView>
  );
};
