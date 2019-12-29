import React, {Component} from 'react';
import {
  NativeModules,
  Button,
  View,
  Text,
  ScrollView,
  StyleSheet,
  TextInput,
  Dimensions,
} from 'react-native';
import AppAction from '../redux/action/AppAction';
import {connect} from 'react-redux';
import UI from '../utils/UI';

class LoginScreen extends Component {
  static navigationOptions = {
    title: 'Login',
  };

  constructor(props) {
    super(props);
    this.state = {
      username: '',
      password: '',
      isLoading: false,
    };
    this.onPasswordChange = this.onPasswordChange.bind(this);
    this.onUsernameChange = this.onUsernameChange.bind(this);
    this.onSignInPress = this.onSignInPress.bind(this);
  }

  onUsernameChange(username) {
    let s = this.state;
    s.username = username;
    this.setState(s);
  }

  onPasswordChange(password) {
    let s = this.state;
    s.password = password;
    this.setState(s);
  }

  onSignInPress() {
    console.log(this.state);
    console.log(this.state);
    this.setState({isLoading: true});
    //this.props.login(this.state.username, this.state.password);
    UI.openURL('LIST');
  }

  componentDidMount() {}

  render() {
    //this.props.navigation.navigate('Details')}
    if (this.props.appData.user != null) {
      //this.props.navigation.navigate('Home');
      //NativeModules.ActivityStarter.navigateToExample('name');
      // UI.openURL('LIST');
    }
    return (
      <ScrollView
        style={styles.host}
        contentContainerStyle={styles.container}
        centerContent={true}>
        <View style={styles.login}>
          <View style={styles.button}>
            <TextInput
              style={styles.textinput}
              placeholder="Username"
              returnKeyType="next"
              autoCapitalize="none"
              text="mayurdube.android@gmail.com"
              onChangeText={this.onUsernameChange}
            />
          </View>
          <View style={styles.button}>
            <TextInput
              style={styles.textinput}
              placeholder="Password"
              returnKeyType="done"
              text="qa_gurus11"
              secureTextEntry={true}
              autoCapitalize="none"
              onChangeText={this.onPasswordChange}
            />
          </View>
          <View style={styles.button}>
            <Button
              fill={true}
              onPress={this.onSignInPress}
              title="Sign In"
              loading={this.state.isLoading}
            />
          </View>
          {/* <View style={{ height: this.state.height }} /> */}
        </View>
      </ScrollView>
    );
  }
}

function mapStateToProps(state: any) {
  return {
    appData: state.appData,
  };
}

function mapDispatchToProps(dispatch: any) {
  return {
    login: (username: string, password: string) =>
      dispatch(AppAction.login(username, password)),
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(LoginScreen);

const styles = StyleSheet.create({
  bigBlue: {
    color: 'blue',
    fontWeight: 'bold',
    fontSize: 30,
  },
  red: {
    color: 'red',
  },
  textinput: {
    fontSize: 20,
    padding: 10,
    width: Dimensions.get('window').width,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
