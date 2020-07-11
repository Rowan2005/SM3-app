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

    export default class LoanAmountScreen extends Component{
        constructor(){
            super()
            this.state={
                LoanIDNo:"",
                AmountDisbursed:0,
                MonthlyEMI:0,
                DateLastPaid:"",
                AmountLastPaid:0,
                TotalPaid:0,
                BalanceOutstanding:0,
            }
        }
        render(){
            return(
                <View>
                  <MyHeader title="Loan Details" navigation={this.props.navigation}/>
                  <KeyboardAvoidingView style={styles.KeyboardAvoidingView}>
                  <Text>*Loan Eligibility: You can only avail 80% of the total deposited amount. Minimum 2 years of payment has to be done to avail the loan.
                   To avail the loan a <b>GUARANTOR</b> is a must.</Text>

                    <Text>Any defalut in deposits within 2 years will void loan eligibility. Loan is eligibile for those who choose to <b>SAVE</b> and not for <b>DONATION</b>.</Text>

                    <Text>Loan Details</Text>
                    <TextInput
                 style={styles.formTextInput}
                 placeholder ={"LoanID Number"}
                 maxLength ={14}
                 onChangeText={(text)=>{
                   this.setState({
                     LoanIDNo: text
                   })
                 }}
               />
                <TextInput
              style={styles.formTextInput}
              placeholder ={"Amount Disbursed"}
              maxLength ={6}
              keyboardType={'numeric'}
              onChangeText={(text)=>{
                this.setState({
                  AmountDisbursed: text
                })
              }}
            />
             <TextInput
              style={styles.formTextInput}
              placeholder ={"Monthly EMI"}
              maxLength ={6}
              keyboardType={'numeric'}
              onChangeText={(text)=>{
                this.setState({
                  MonthlyEMI: text
                })
              }}
            />
             <TextInput
              style={styles.formTextInput}
              placeholder ={"Amount Last Paid"}
              maxLength ={6}
              keyboardType={'numeric'}
              onChangeText={(text)=>{
                this.setState({
                  AmountLastPaid: text
                })
              }}
            />
             <TextInput
              style={styles.formTextInput}
              placeholder ={"Total Paid"}
              maxLength ={6}
              keyboardType={'numeric'}
              onChangeText={(text)=>{
                this.setState({
                  TotalPaid: text
                })
              }}
            />
             <TextInput
              style={styles.formTextInput}
              placeholder ={"Balance Outstanding"}
              maxLength ={6}
              keyboardType={'numeric'}
              onChangeText={(text)=>{
                this.setState({
                  BalanceOutstanding: text
                })
              }}
            />
             <TouchableOpacity style = {{backgroundColor:'gold'}}>
                <Text>I Need a Loan</Text>
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