import {NativeModules, NativeEventEmitter} from 'react-native';
import NavigationService from './NavigationService';
//const eventEmitterModule = NativeModules.EventEmitter;

class UI {
  //eventEmitter = new NativeEventEmitter(eventEmitterModule);
  openURL(path: string, data: any) {
    switch (path) {
      case 'HOME': {
        console.log('openUrl HOME');
        NavigationService.navigate('Home', {});
        break;
      }
      case 'DASH': {
        console.log('openUrl DASH');
        //NativeModules.ActivityStarter.navigateToExample('name');
        break;
      }

      case 'LIST': {
        console.log('openUrl LIST');
        NavigationService.navigate('List', {});
        break;
      }
    }
  }

  constructor() {
    // this.eventEmitter.addListener(eventEmitterModule.MyEventName, params => {
    //   this.openURL('HOME');
    // });
  }
}

export default new UI();
