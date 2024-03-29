// Hai
import logo from './logo.svg';
import './App.css';
import "@aws-amplify/ui-react/styles.css";
import { withAuthenticator,
  Button,
  Heading,
  Image,
  View,
  Card, } from '@aws-amplify/ui-react';

function App({signOut}) {
  return (
    <View className='App'>
      <Card>
        <Image src={logo} className='App-logo' alt='logo'/>
        <Heading level={1}>We now have Authentication</Heading>
      </Card>
      <Button onClick={signOut}>Log out</Button>
    </View>
  );
}
export default withAuthenticator(App);
