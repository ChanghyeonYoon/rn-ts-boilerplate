import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import type { TabStackParamsList } from '@/Navigators/types/bottomTab';

const BottomTab = createBottomTabNavigator<TabStackParamsList>();

export default BottomTab;
