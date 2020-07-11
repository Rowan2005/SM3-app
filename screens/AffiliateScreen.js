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
    import DatePicker from 'react-native-datepicker';
    import RadioForm, {RadioButton, RadioButtonInput, RadioButtonLabel} from 'react-native-simple-radio-button';
    import MyHeader from '../components/MyHeader';

    var radio_props = [
      
        {label: 'School', value: 1 },
        {label: 'College', value: 2 },
        {label: 'Institution', value: 3 },
        {label: 'Individual', value: 4 },
      ];
    export default class AffiliateScreen extends Component{
        constructor(){
            super()
            this.state={
                NAME:"",
                DateOfBirth:"",
                ADDRESS:"",
                Value:0,
                CONTACT:0,
                EMAILID:"",
                AAdharCard:0,
                BankAccNo:0,
                BankName:"",
                NameofAccHolder:"",
                BankIFSC:"",
                BankBranch:"",
            }
        }
updateAffiliatedetails = ()=>{
   db.collection("Affiliate").add({
      NAME: this.state.NAME,
      DateOfBirth:this.state.DateOfBirth,
      ADDRESS:this.state.ADDRESS,
      value:this.state.Value,
      CONTACT:this.state.CONTACT,
      EMAILID:this.state.EMAILID,
      AAdharCard:this.state.AAdharCard,
      BankAccNo:this.state.BankAccNo,
      BankName:this.state.BankName,
      NameofAccHolder:this.state.NameofAccHolder,
      BankIFSC:this.state.BankIFSC,
      BankBranch:this.state.BankBranch
    })

    Alert.alert("Profile Updated Successfully")
        }

        render(){
            return(
                <View>
                  <MyHeader title="Affiliate" navigation={this.props.navigation}/>
                  <KeyboardAvoidingView style={styles.KeyboardAvoidingView}>
                    <Text>Affiliate Login Details</Text>
                    <TextInput
                    style={styles.loginBox}
                    placeholder="Name"
                    onChangeText={(text)=>{
                      this.setState({
                       NAME: text
                      })
                    }}
                  />
                  <DatePicker
        style={{width: 200}}
        date={this.state.DateOfBirth}
        mode="Date Of Birth"
        placeholder="Date Of Birth"
        format="YYYY-MM-DD"
        minDate="2016-05-01"
        maxDate="2016-06-01"
        confirmBtnText="Confirm"
        cancelBtnText="Cancel"
        customStyles={{
          dateIcon: {
            position: 'absolute',
            left: 0,
            top: 4,
            marginLeft: 0
          },
          dateInput: {
            marginLeft: 36
          }
        }}
        onDateChange={(date) => {this.setState({DateOfBirth: date})}}
      />
                <TextInput
                    style={styles.loginBox}
                    placeholder="Address"
                    multiline = {true}
                    onChangeText={(text)=>{
                      this.setState({
                        ADDRESS: text
                      })
                    }}
                  />
                  <RadioForm
          radio_props={radio_props}
          initial={1}
          onPress={(Value) => {this.setState({Value:Value})}}
        />
        <TextInput
              style={styles.formTextInput}
              placeholder ={"Contact"}
              maxLength ={10}
              keyboardType={'numeric'}
              onChangeText={(text)=>{
                this.setState({
                  CONTACT: text
                })
              }}
                value ={this.state.contact}
            />
             <TextInput
                 style={styles.formTextInput}
                 placeholder ={"abc@example.com"}
                 keyboardType ={'email-address'}
                 onChangeText={(text)=>{
                   this.setState({
                     EMAILID: text
                   })
                 }}
               />
               <TextInput
              style={styles.formTextInput}
              placeholder ={"Aadhar Card"}
              maxLength ={12}
              keyboardType={'numeric'}
              onChangeText={(text)=>{
                this.setState({
                  AAdharCard: text
                })
              }}
                //value ={this.state.AAdharCard}
            />
            <Text>Bank Details</Text>

            <TextInput
              style={styles.formTextInput}
              placeholder ={"Bank A/c Number"}
              maxLength ={18}
              keyboardType={'numeric'}
              onChangeText={(text)=>{
                this.setState({
                  BankAccNo: text
                })
              }}
                //value ={this.state.BankAccNo}
            />
            <TextInput
                 style={styles.formTextInput}
                 placeholder ={"Bank Name"}
                 maxLength ={30}
                 onChangeText={(text)=>{
                   this.setState({
                     BankName: text
                   })
                 }}
               />
                <TextInput
                 style={styles.formTextInput}
                 placeholder ={"Name of A/c Holder"}
                 maxLength ={30}
                 onChangeText={(text)=>{
                   this.setState({
                     NameofAccHolder: text
                   })
                 }}
               />
                <TextInput
                 style={styles.formTextInput}
                 placeholder ={"Bank IFSC"}
                 maxLength ={11}
                 onChangeText={(text)=>{
                   this.setState({
                     BankIFSC: text
                   })
                 }}
               />
               <TextInput
                    style={styles.loginBox}
                    placeholder="Bank Branch"
                    multiline = {true}
                    onChangeText={(text)=>{
                      this.setState({
                        BankBranch: text
                      })
                    }}
                  />
        <TouchableOpacity style = {{backgroundColor:'gold'}}
            onPress={()=>{
              console.log("Affiliate log")
                this.updateAffiliatedetails()
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