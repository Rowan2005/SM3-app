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
    import MyHeader from '../components/MyHeader';
    
    export default class MyDonationsScreen extends Component{
        constructor(){
            super()
            this.state={
                DonorIDNo:"",
                AmountDonated:0,
                LastDonatedDate:"",
                PendingDonationAmount:0,
                TotalDonated:0,
            }
        }
        render(){
            return(
                <View>
                  <MyHeader title="My Savings" navigation={this.props.navigation}/>
                  <KeyboardAvoidingView style={styles.KeyboardAvoidingView}>
                    <Text>My Savings</Text>
                    <TextInput
                 style={styles.formTextInput}
                 placeholder ={"DepositorID Number"}
                 maxLength ={14}
                 onChangeText={(text)=>{
                   this.setState({
                    DonorIDNo: text
                   })
                 }}
               />
               <TextInput
              style={styles.formTextInput}
              placeholder ={"Amount Deposited"}
              maxLength ={12}
              keyboardType={'numeric'}
              onChangeText={(text)=>{
                this.setState({
                  AmountDonated: text
                })
              }}
            />
            <TextInput
              style={styles.formTextInput}
              placeholder ={"Pending Deposit Amount"}
              maxLength ={12}
              keyboardType={'numeric'}
              onChangeText={(text)=>{
                this.setState({
                  PendingDonationAmount: text
                })
              }}
            />
            <TextInput
              style={styles.formTextInput}
              placeholder ={"Total Deposited"}
              maxLength ={12}
              keyboardType={'numeric'}
              onChangeText={(text)=>{
                this.setState({
                  TotalDonated: text
                })
              }}
            />
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