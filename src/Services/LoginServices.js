import { GoogleSignin, statusCodes } from '@react-native-google-signin/google-signin';

class GoogleSignInManager {
  constructor() {
    this.googleConfigured = false;
  }

  async configure() {
    try {
      await GoogleSignin.configure({
        scopes: ['email'], 
        webClientId: '893528037623-7f0nvoadsud413f16rqaknupduk3g6bh.apps.googleusercontent.com',
      });
      this.googleConfigured = true;
    } catch (error) {
      console.log('Error configuring Google Sign-In:', error);
    }
  }

  async signIn() {
    if (!this.googleConfigured) {
      throw new Error('Google Sign-In is not configured. Call configure() first.');
    }

    try {
      await GoogleSignin.hasPlayServices();
      const { idToken } = await GoogleSignin.signIn();
      return idToken;
    } catch (error) {
      if (error.code === statusCodes.SIGN_IN_CANCELLED) {
        console.log('User canceled the login flow.');
      } else if (error.code === statusCodes.IN_PROGRESS) {
        console.log('Sign in is in progress.');
      } else if (error.code === statusCodes.PLAY_SERVICES_NOT_AVAILABLE) {
        console.log('Play services not available or outdated.');
      } else {
        console.log('Something went wrong:', error.message);
      }
      throw error;
    }
  }

  async signOut() {
    if (!this.googleConfigured) {
      throw new Error('Google Sign-In is not configured. Call configure() first.');
    }

    try {
      await GoogleSignin.signOut();
    } catch (error) {
      console.log('Error signing out:', error);
    }
  }
}

export default new GoogleSignInManager()
