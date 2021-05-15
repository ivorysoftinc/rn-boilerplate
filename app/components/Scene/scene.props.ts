import { NativeSafeAreaViewProps } from 'react-native-safe-area-context';
import { ScenePreset } from './scene.presets';

export interface ISceneProps extends NativeSafeAreaViewProps {
  preset?: ScenePreset;
}
