import {createDrawerNavigator} from '@react-navigation/drawer';
import MapHomeScreen from '../screens/map/MapHomeScreen';
import FeedListScreen from '../screens/feed/FeedListScreen';
import CalendarScreen from '../screens/calendar/CalendarScreen';
import {createStaticNavigation} from '@react-navigation/native';
import {MapStack} from './MapNavigation';
import {FeedStack} from './FeedNavigation';
import DrawerButton from '../components/DrawerButton';
import {colors} from '../constants/colors';
import CustomDrawerContent from '../components/CustomDrawerContent';
import {MainDrawerParamList} from '../types/navigation';
import FontAwesome6 from '@react-native-vector-icons/fontawesome6';

type DrawIconsType = 'map' | 'book' | 'calendar';

function DrawerIcons(routeName: keyof MainDrawerParamList, focused: boolean) {
  let iconName: DrawIconsType;
  switch (routeName) {
    case 'Map': {
      iconName = 'map';
      break;
    }
    case 'Feed': {
      iconName = 'book';
      break;
    }
    case 'Calendar': {
      iconName = 'calendar';
      break;
    }
  }

  return (
    <FontAwesome6
      name={iconName}
      size={20}
      iconStyle={'solid'}
      color={focused ? colors.WHITE : colors.GRAY_300}
    />
  );
}

const MainDrawer = createDrawerNavigator({
  screenOptions: ({route}) => {
    return {
      drawerStyle: {
        width: '70%',
        backgroundColor: colors.WHITE,
      },
      drawerLabelStyle: {
        fontSize: 14,
        fontWeight: 600,
      },
      drawerItemStyle: {
        borderRadius: 8,
      },
      drawerType: 'front',
      drawerActiveTintColor: colors.WHITE,
      drawerInactiveTintColor: colors.GRAY_500,
      drawerActiveBackgroundColor: colors.GRAY_500,
      drawerIcon: ({focused}) =>
        DrawerIcons(route.name as keyof MainDrawerParamList, focused),
      headerTitleAlign: 'center',
      headerBackButtonDisplayMode: 'minimal',
      headerTintColor: colors.BLACK,
      headerStyle: {
        backgroundColor: colors.WHITE,
        shadowColor: colors.GRAY_500,
      },
      headerTitleStyle: {
        fontSize: 16,
      },
    };
  },

  screens: {
    Map: {
      screen: MapStack,
      options: {
        title: '홈',
        headerShown: false,
      },
    },
    Feed: {
      screen: FeedStack,
      options: {
        title: '피드',
        headerShown: false,
      },
    },
    Calendar: {
      screen: CalendarScreen,
      options: {
        title: '캘린더',
        headerLeft: () => <DrawerButton />,
      },
    },
  },
  drawerContent: props => <CustomDrawerContent {...props} />,
});

const DrawerNavigation = createStaticNavigation(MainDrawer);

export default DrawerNavigation;
