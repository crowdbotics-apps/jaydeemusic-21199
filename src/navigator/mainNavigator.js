import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import {createDrawerNavigator} from 'react-navigation-drawer';

import SplashScreen from "../features/SplashScreen";
import SideMenu from './sideMenu';
//@BlueprintImportInsertion
import Messaging5131400Navigator from '../features/Messaging5131400/navigator';
import NotificationList6131399Navigator from '../features/NotificationList6131399/navigator';
import Settings7131398Navigator from '../features/Settings7131398/navigator';
import SignIn59131396Navigator from '../features/SignIn59131396/navigator';
import UserProfile10131395Navigator from '../features/UserProfile10131395/navigator';
import ArticleList11131394Navigator from '../features/ArticleList11131394/navigator';
import Camera12131393Navigator from '../features/Camera12131393/navigator';
import Settings131241Navigator from '../features/Settings131241/navigator';
import Settings131207Navigator from '../features/Settings131207/navigator';

/**
 * new navigators can be imported here
 */

const AppNavigator = {

    //@BlueprintNavigationInsertion
Messaging5131400: { screen: Messaging5131400Navigator },
NotificationList6131399: { screen: NotificationList6131399Navigator },
Settings7131398: { screen: Settings7131398Navigator },
SignIn59131396: { screen: SignIn59131396Navigator },
UserProfile10131395: { screen: UserProfile10131395Navigator },
ArticleList11131394: { screen: ArticleList11131394Navigator },
Camera12131393: { screen: Camera12131393Navigator },
Settings131241: { screen: Settings131241Navigator },
Settings131207: { screen: Settings131207Navigator },

    /** new navigators can be added here */
    SplashScreen: {
      screen: SplashScreen
    }
};

const DrawerAppNavigator = createDrawerNavigator(
  {
    ...AppNavigator,
  },
  {
    contentComponent: SideMenu
  },
);

const AppContainer = createAppContainer(DrawerAppNavigator);

export default AppContainer;
