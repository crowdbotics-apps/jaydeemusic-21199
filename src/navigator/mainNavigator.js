import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import {createDrawerNavigator} from 'react-navigation-drawer';

import SplashScreen from "../features/SplashScreen";
import SideMenu from './sideMenu';
//@BlueprintImportInsertion
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
