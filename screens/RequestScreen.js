import React,{Component}from 'react';
import {
    View,
    Text,
    TextInput,
    Modal,
    KeyboardAvoidingView,
    StyleSheet,
    TouchableOpacity,
    Alert,
    ScrollView} from 'react-native';
    import firebase from 'firebase';
    import db from '../config';
    import MyHeader from '../components/MyHeader'
    import RadioForm, {RadioButton, RadioButtonInput, RadioButtonLabel} from 'react-native-simple-radio-button';

    var radio_props = [
      
        {label: 'Eduction', value: 1 },
        {label: 'Medical', value: 2 },
        {label: 'Sports', value: 3 },
        {label: 'Extra Curricular Activities', value: 4 },
        {label: 'Food', value: 5 },
        {label: 'Utilities', value: 6 },
        {label: 'Apparels', value: 7 },
      ];

    export default class RequestScreen extends Component{
        constructor(){
            super()
            this.state={
                NameOfSponser:"",
                FIRSTNAME:"",
                LASTNAME:"",
                CONTACCT:0,
                EMAIL:"",
                Vaalue:0,

            }
        }

        updateSponsershipdetails = ()=>{
            db.collection("Sponsership").add({
               NameOfSponser:this.state.NameOfSponser,
               FIRSTNAME:this.state.FIRSTNAME,
               LASTNAME:this.state.LASTNAME,
               EMAIL:this.state.EMAIL,
               CONTACCT:this.state.CONTACCT,
               Value:this.state.CONTACCT,
             })
         
             Alert.alert("Profile Updated Successfully")
                 }

        render(){
            return(
                <View>
                     <MyHeader title="Sponsorships" navigation={this.props.navigation}/>
                     <KeyboardAvoidingView style={styles.KeyboardAvoidingView}>
                    <Text>Sponsership Details</Text>
                    <TextInput
                 style={styles.formTextInput}
                 placeholder ={"Name Of Sponser(Company Name)"}
                 maxLength ={20}
                 onChangeText={(text)=>{
                   this.setState({
                     NameOfSponser: text
                   })
                 }}
               />
               <Text></Text>

               <Text>Sponser Representative Details</Text>
               
               <TextInput
                 style={styles.formTextInput}
                 placeholder ={"First Name"}
                 maxLength ={10}
                 onChangeText={(text)=>{
                   this.setState({
                     FIRSTNAME: text
                   })
                 }}
               />
               <TextInput
                 style={styles.formTextInput}
                 placeholder ={"Last Name"}
                 maxLength ={8}
                 onChangeText={(text)=>{
                   this.setState({
                     LASTNAME: text
                   })
                 }}
               />

               <TextInput
                 style={styles.formTextInput}
                 placeholder ={"abc@example.com"}
                 keyboardType ={'email-address'}
                 onChangeText={(text)=>{
                   this.setState({
                     EMAIL: text
                   })
                 }}

               />
               <TextInput
                 style={styles.formTextInput}
                 placeholder ={"Contact"}
                 maxLength ={10}
                 keyboardType={'numeric'}
                 onChangeText={(text)=>{
                   this.setState({
                     CONTACCT: text
                   })
                 }}
               />
               <RadioForm
          radio_props={radio_props}
          initial={10}
          onPress={(Vaalue) => {this.setState({Vaalue:Vaalue})}}
        />
               <Text></Text>
               <Text></Text>

               <TouchableOpacity style = {{backgroundColor:'gold'}}
               onPress={()=>{
                this.updateSponsershipdetails()
              }}>
                   <Text>Submit</Text>
               </TouchableOpacity>
               </KeyboardAvoidingView>
                </View>
            )
        }
    }
    const styles = StyleSheet.create({
      KeyboardAvoidingView:{
        flex:1,
        justifyContent:'center',
        alignItems:'center'
      },
    })