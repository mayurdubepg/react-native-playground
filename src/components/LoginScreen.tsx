import * as React from 'react';
import {
  NativeModules,
  Button,
  View,
  Text,
  ScrollView,
  StyleSheet,
  TextInput,
  Dimensions,
  ActivityIndicator,
} from 'react-native';
import AppAction from '../redux/action/AppAction';
import {connect} from 'react-redux';
import UI from '../utils/UI';
import AppState from '../redux/state/AppState';
import {iDataState} from '../redux/state/IState';

interface LoginScreenProps {
  appData: AppState;
  username: string;
  password: string;
  login: (username: string, password: string) => void;
}

class LoginScreen extends React.Component<LoginScreenProps> {
  static navigationOptions = {
    title: 'Login',
  };

  constructor(props) {
    super(props);
    this.state = {
      username: 'mayurdube.android@gmail.com',
      password: 'qa_gurus11',
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
    this.props.login(this.state.username, this.state.password);
    //UI.openURL('DASH');
  }

  componentDidUpdate(prevProps, prevState, snapshot) {
    console.log(this.props.appData);
    if (this.props.appData.isUserLoggedIn) {
      UI.openURL('LIST', {});
    }
  }
  componentDidMount() {}

  render() {
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
              defaultValue="mayurdube.android@gmail.com"
              onChangeText={this.onUsernameChange}
            />
          </View>
          <View style={styles.button}>
            <TextInput
              style={styles.textinput}
              placeholder="Password"
              returnKeyType="done"
              defaultValue="qa_gurus11"
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
              loading={this.props.appData.state}
            />
            <ActivityIndicator
              animating={this.props.appData.state == iDataState.loading}
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
      username && password && dispatch(AppAction.login(username, password)),
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
