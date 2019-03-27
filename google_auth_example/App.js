import React from "react"
import { StyleSheet, Text, View, Image, Button } from "react-native"
import { Google } from "expo"

export default class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      signedIn: false,
      name: "",
      photoUrl: "",
      accessToken: '',
      clientId: "1007100749210-4r5b1ph4p1g202uavgeip80vo2qkst1o.apps.googleusercontent.com",
    }
  }

  signIn = async () => {
    try {
      const clientId = this.state.clientId
      const { type, accessToken, user } = await Google.logInAsync({ clientId });

      if (type === 'success') {
        this.setState({
          signedIn: true,
          name: user.name,
          photoUrl: user.photoUrl,
          accessToken: accessToken
        })
      }
    }catch (e) {
      console.log("error", e)
    }
  }

  signOut = async () =>{
    try {
      const clientId = this.state.clientId
      const accessToken = this.state.accessToken
      const reply = await Google.logOutAsync({ clientId, accessToken });
      
      if (reply.status === 200) {
        console.log('Logout successful')
        this.setState({
          signedIn: false,
          name: '',
          photoUrl: '',
          accessToken: ''
        })
      }
    } catch (e) {
      console.log("error", e)
    }
  }

  

  render() {
    return (
      <View style={styles.container}>
        {this.state.signedIn ? (
          <LoggedInPage name={this.state.name} photoUrl={this.state.photoUrl} signOut={this.signOut} />
        ) : (
          <LoginPage signIn={this.signIn} />
        )}
      </View>
    )
  }
}

const LoginPage = props => {
  return (
    <View>
      <Text style={styles.header}>Sign In With Google</Text>
      <Button title="Sign in with Google" onPress={() => props.signIn()} />
    </View>
  )
}

const LoggedInPage = props => {
  return (
    <View style={styles.container}>
      <Text style={styles.header}>Welcome:{props.name}</Text>
      <Image style={styles.image} source={{ uri: props.photoUrl }} />
      <Button title="Sign Out" onPress={() => props.signOut()} />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center"
  },
  header: {
    fontSize: 25
  },
  image: {
    marginTop: 15,
    width: 150,
    height: 150,
    borderColor: "rgba(0,0,0,0.2)",
    borderWidth: 3,
    borderRadius: 150
  }
})