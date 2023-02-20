import {StyleSheet, Text, TouchableOpacity, Modal, TouchableHighlight,View,Image} from 'react-native';
import React, {createRef} from 'react';
import {normalize, wH, wW} from '../../styles/globalStyle';
import BackArrow from '../../assets/svg/backArrow.svg';
import Logo from '../../assets/svg/logo.svg';
import SignPen from '../../assets/svg/signPen.svg';
import DollerBlack from '../../assets/svg/dollerBlack.svg';
import { FONTS } from '../../themes/textfonts';
import AsyncStorage from "@react-native-async-storage/async-storage";
import SignatureCapture from 'react-native-signature-capture';
const SignaturePad = ({navigation}) => {
  const [signatureModel, setSignatureModel] = React.useState(false);
  const sign = createRef();
  const saveSign = async() => {
    sign.current.saveImage();
    await AsyncStorage.setItem("signatureImage", data);
    console.log('Image ++++ '+await AsyncStorage.getItem("signatureImage"));
    navigation.reset({
      index: 0,
      routes: [{name: 'DrawerPage'}],
    });
    navigation.navigate('RideDetails');
    navigation.navigate('Delivered');
    navigation.navigate('GetSignature');
    
  };
  const [data, setData] = React.useState(null);
  

  const onSave = function (result) {
    setData(`data:image/png;base64,${result.encoded}`);
    sign.current.show(false);
    //console.log("ima  ge data" + JSON.stringify(data));
  };
  const resetSign = () => {
    sign.current.resetImage();
  };

  const _onSaveEvent = async (result) => {
    //result.encoded - for the base64 encoded png
    //result.pathName - for the file path name
    //alert('Signature Captured Successfully');
    setData('data:image/png;base64,'+result.encoded);
    // await AsyncStorage.setItem("signatureImage", data);
    //console.log('Imagesss ++++ '+await AsyncStorage.getItem("signatureImage"));
  };

  const _onDragEvent = (result) => {
    // This callback will be called when the user enters signature
    console.log('dragged :::: '+result.encoded);
  };

  return (
    <View style={{flex: 1, height: wH, alignItems: 'center'}}>
        
      <View
        style={{
          flexDirection: 'row',
          alignItems: 'center',
          width: wW,
          padding: wW / 55,
          justifyContent: 'space-between',
        }}>
        <TouchableOpacity
          onPress={() => {
            navigation.goBack();
          }}
          style={{
            //height: 50,
            borderRadius: 4,
          }}>
          {<BackArrow width={30} height={30} />}
        </TouchableOpacity>
        <Logo width={55} height={55} />
        <View style={{height: 30, width: 30}}></View>
      </View>
      <View
        style={{
          height: wH / 1.225,
          width: wW / 1.1,
          marginTop: wH / 65,
          shadowColor: 'black',
          backgroundColor: '#FFFFFF',
          shadowOpacity: 1,
          elevation: 5,
          shadowRadius: 4,
          borderRadius: wW / 55,
          justifyContent: 'space-between',
        }}>
        <View style={{height: wH / 1.225,}}>
          <View
            style={{
              height: '11%',
              width: '100%',flexDirection:'row',
              backgroundColor: '#f2edfd',
              paddingHorizontal:wW/18 ,
              justifyContent:'space-between',alignItems:'center'
            }}>
            <TouchableOpacity
              onPress={() => {
                //navigation.goBack();
                //setbalanceModel(false);
                resetSign()
              }}
              style={{
                //height: 50,
                borderRadius: 4,
              }}>
              <View
                style={{
                  width: '100%',borderWidth:1,borderColor:'#D0D5DD',
                  height: wH / 25,
                  backgroundColor: '#FFFFFF',
                  borderRadius: wW / 45,
                  justifyContent: 'center',
                }}>
                <Text
                  style={{
                    fontSize: normalize(12),paddingHorizontal:wW/30,
                    fontFamily:'DMSans-Regular',
                    fontWeight: '500',
                    color: '#344054',
                    //marginStart: wW / 25,
                    //paddingHorizontal: wW / 30,
                    textAlign: 'center',
                  }}>
                  Clear
                </Text>
              </View>
            </TouchableOpacity>
          <View style={{flexDirection: 'row', alignItems: 'center'}}>
              <SignPen width={wW / 18} height={wW / 18} />
              <View style={{marginLeft: wW / 45}}>
                <Text
                  style={{
                    fontSize: normalize(20),
                    fontFamily:'DMSans-Regular',
                    fontWeight: '500',
                    color: '#333333',
                  }}>
                  SIGN
                </Text>
              </View>
            </View>
            <TouchableOpacity
              onPress={() => {
                //navigation.goBack();
                //setbalanceModel(false);
                 saveSign();
                // resetSign();
                setSignatureModel(true);
              }}
              style={{
                //height: 50,
                borderRadius: 4,
              }}>
              <View
                style={{
                  width: '100%',borderWidth:1,borderColor:'#D0D5DD',
                  height: wH / 25,
                  backgroundColor: '#FFFFFF',
                  borderRadius: wW / 45,
                  justifyContent: 'center',
                }}>
                <Text
                  style={{
                    fontSize: normalize(12),paddingHorizontal:wW/30,
                    fontFamily:'DMSans-Regular',
                    fontWeight: '500',
                    color: '#344054',
                    //marginStart: wW / 25,
                    //paddingHorizontal: wW / 30,
                    textAlign: 'center',
                  }}>
                  Done
                </Text>
              </View>
            </TouchableOpacity>
          </View>
          <View style={{ flexDirection: "column" ,height:'89%'}}>
               
                <SignatureCapture
                    style={[{height:'89%'},styles.signature]}
                    ref={sign}
                    onSaveEvent={_onSaveEvent}
                    onDragEvent={_onDragEvent}
                    onSave={() => onSave()}
                    saveImageFileInExtStorage={false}
                    showNativeButtons={false}
                    showTitleLabel={false}
                    backgroundColor="#FFFFFF"
                    strokeColor="#000000"
                    minStrokeWidth={4}
                    maxStrokeWidth={8}
                    viewMode={"portrait"}/>

               

            </View>
        </View>
      </View>
    </View>
  );
};

export default SignaturePad;

const styles = StyleSheet.create({});
