import { createAppContainer } from "react-navigation";
import { createStackNavigator } from 'react-navigation-stack';
import HomePageSrc from '../view/HomePageSrc';


const AppNavigator = createStackNavigator({
  HomePage: { screen: HomePageSrc },

}, {
    initialRouteName: 'HomePage',
  });

export default createAppContainer(AppNavigator);
