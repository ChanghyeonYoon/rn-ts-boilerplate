import { createNativeStackNavigator } from '@react-navigation/native-stack';
import type { RootStackParamsList } from '@/Navigators/types/root';

const RootStack = createNativeStackNavigator<RootStackParamsList>();

export default RootStack;
