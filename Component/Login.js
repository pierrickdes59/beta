import React from 'react'
import {Text, View, StyleSheet, ActivityIndicator, Button, TextInput, StatusBar} from 'react-native'
import {connect} from 'react-redux'

class Login extends React.Component {

  constructor(props) {
    super(props)
    this.state = {
      login: "",
      mdp: ""
    }

  }

  componentDidUpdate() {
      const actionLogin = {type: "NEW_LOGIN", value: this.state.login}
      this.props.dispatch(actionLogin)
      const actionMdp = {type: "NEW_MDP", value: this.state.mdp}
      this.props.dispatch(actionMdp)
      console.log(this.props)

 }



  _submit() {
      //faire les tests sur mdp/login
      this.props.navigation.navigate('NavAppli')
  }



  render() {
    return (
    <View style={{flex: 1, justifyContent: 'center', alignItems: 'center', marginTop : 40}}>

      <View style={{flexDirection: 'row', marginLeft: 10, marginRight: 10}}>
        <Text style={styles.text}>Login :</Text>
        <TextInput style={styles.textInput}
        onChangeText={
          (text) => this.setState({login: text})}
          autofocus={true}/>
      </View>

      <View style={{flexDirection: 'row', marginLeft: 10, marginRight: 10, paddingTop: 10}}>
        <Text style={styles.text}>Mot de passe : </Text>
        <TextInput style={styles.textInput}
          secureTextEntry={true}
          onChangeText={
            (text) => this.setState({mdp: text})}
            onSubmitEditing={() => this._submit()}/>
      </View>

      <View style={{flex: 1, paddingTop : 10}}>
        <Button onPress={() => this._submit()} title="Connexion"/>
      </View>

    </View>
  )
  }
}

const mapStateToProps = (state) => {
  return {login: state.login, mdp: state.mdp}
}

export default connect(mapStateToProps)(Login)

const styles = StyleSheet.create({
  text: {
    flex: 2,
  },
  textInput: {
    flex: 3,
    borderColor: '#000000',
    borderWidth: 1,
    paddingLeft: 5
  }
})
