import React, { Component } from 'react';
import { Navigator } from 'react-native';
import Categories from './Categories/Categories';
import Register from './Register/Register';
import Profile from './Profile/Profile';
import Login from './login/Login';
import Home from './Home/home';
import Welcome from './Home';
import OrgDetail from './OrgDetail';
// import Home from './Home';
// import Location from './Location';
// import Interest from './Interest';
// import Login from './Login';
// import Signup from './Signup';

export default class Router extends Component {
  constructor() {
    super();
  }

  configureScene(route, routeStack) {
    return Navigator.SceneConfigs.FloatFromBottomAndroid;
  }

renderScene(route, navigator) {
  if (route.name === 'Categories') {
    return (
      <Categories
      navigator={navigator}
      {...route.passProps}
      />
    );
  }
  if (route.name === 'Home') {
    return (
      <Home
      navigator={navigator}
      {...route.passProps}
      />
    );
  }
    if (route.name === 'Register') {
      return (
        <Register
        navigator={navigator}
        {...route.passProps}
        />
      );
    }

    if (route.name === 'Profile') {
      return (
        <Profile
        navigator={navigator}
        {...route.passProps}
        />
      );
    }

    if (route.name === 'Login') {
      return (
        <Login
        navigator={navigator}
        {...route.passProps}
        />
      );
    }

    if (route.name === 'Welcome') {
      return (
        <Welcome
        navigator={navigator}
        {...route.passProps}
        />
      );
    }

    if (route.name === 'OrgDetail') {
      return (
        <OrgDetail
        navigator={navigator}
        {...route.passProps}
        />
      );
    }

  // if (route.name === 'Location') {
  //   return (
  //     <Location
  //     navigator={navigator}
  //     {...route.passProps}
  //     />
  //   );
  // }
  // if (route.name === 'Interest') {
  //   return (
  //     <Interest
  //     navigator={navigator}
  //     {...route.passProps}
  //     />
  //   );
  // }
  // if (route.name === 'Login') {
  //   return <Login navigator={navigator} {...route.passProps} />
  // }
  // if (route.name == 'Signup') {
  //     return ( <Signup navigator={navigator} {...route.passProps} /> )
  //   }
}

render() {
  return (
    <Navigator
      configureScene={this.configureScene}
      initialRoute={{ name: 'Home', title: 'Home' }}
      renderScene={this.renderScene}
    />
  );
}

}
