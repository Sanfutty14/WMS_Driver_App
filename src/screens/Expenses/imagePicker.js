// Example of Image Picker in React Native
// https://aboutreact.com/example-of-image-picker-in-react-native/

// Import React
import React, {useState} from 'react';
// Import required components
import * as ImagePicker from 'react-native-image-picker';
import {
  SafeAreaView,
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  Image,
} from 'react-native';

// Import Image Picker
import {launchCamera, launchImageLibrary} from 'react-native-image-picker';
import { normalize, wH, wW } from '../../styles/globalStyle';

const ImagePickerPage = () => {
    const [pickerResponse, setPickerResponse] = useState([]);
    const [pickerImage, setPickerImage] = useState('');
  const [filePath, setFilePath] = useState({});
  const [addMediaModalVisible, setAddMediaModalVisible] = useState(false);
//   const onImageLibraryPress = React.useCallback(async () => {
//     setAddMediaModalVisible(false)

//     const options = {
//       //   selectionLimit: 1,
//       //   mediaType: 'photo',
//       title: 'Video Picker',
//       mediaType: 'any',
//       includeBase64: false,

//     };
//     try {
//       ImagePicker.launchImageLibrary(options, (response) => {
//         console.log('Response = ', response.assets);

//         if (response.didCancel) {
//           setPickerResponse([...pickerResponse])
//         } else {
//           setPickerResponse([...pickerResponse, response.assets[0]])
//         }

//       })
//     } catch {
//       setPickerResponse([...pickerResponse])
//     }


//   });
  const chooseFile = () => {
   // setAddMediaModalVisible(false)

    const options = {
      //   selectionLimit: 1,
      //   mediaType: 'photo',
      title: 'Video Picker',
      mediaType: 'any',
      includeBase64: false,

    };
    try {
      ImagePicker.launchImageLibrary(options, (response) => {
        console.log('Response = ', response.assets);

        if (response.didCancel) {
          setPickerResponse([...pickerResponse])
        } else {
          setPickerResponse([...pickerResponse, response.assets[0]])
        }

      })
    } catch {
      setPickerResponse([...pickerResponse])
    }
    // let options = {
    //   title: 'Select Image',
    //   customButtons: [
    //     {
    //       name: 'customOptionKey',
    //       title: 'Choose Photo from Custom Option'
    //     },
    //   ],
    //   storageOptions: {
    //     skipBackup: true,
    //     path: 'images',
    //   },
    // };
    // ImagePicker.launchImageLibrary(options, (response) => {
    //     console.log('Response = ', response.assets);

    //     if (response.didCancel) {
    //       setPickerResponse([...pickerResponse])
    //     } else {
    //       setPickerResponse([...pickerResponse, response.assets[0]])
    //     }

    //   });
    // ImagePicker.showImagePicker(options, (response) => {
    //   console.log('Response = ', response);

    //   if (response.didCancel) {
    //     console.log('User cancelled image picker');
    //   } else if (response.error) {
    //     console.log('ImagePicker Error: ', response.error);
    //   } else if (response.customButton) {
    //     console.log(
    //       'User tapped custom button: ',
    //       response.customButton
    //     );
    //     alert(response.customButton);
    //   } else {
    //     let source = response;
    //     // You can also display the image using data:
    //     // let source = {
    //     //   uri: 'data:image/jpeg;base64,' + response.data
    //     // };
    //     setFilePath(source);
    //   }
    // });
  };
  const onImageLibraryPress = React.useCallback(async () => {
    setAddMediaModalVisible(false)

    const options = {
      //   selectionLimit: 1,
      //   mediaType: 'photo',
      title: 'Video Picker',
      mediaType: 'any',
      includeBase64: false,

    };
    try {
      ImagePicker.launchImageLibrary(options, (response) => {
        console.log('Response ********* ', response.assets);
        setPickerResponse([...pickerResponse, response.assets[0]])
       
        setPickerImage(response.assets[0]);
        console.log('Response 1111111111 ', pickerImage);
        //setPickerResponse([...pickerResponse]);
        // if (response.didCancel) {
        //   setPickerResponse([...pickerResponse]);
        //   console.log('Image Response :::::::::11',pickerResponse);
        // } else {
        //   setPickerResponse([...pickerResponse, response.assets[0]])
        //   console.log('Image Response :::::::::22',pickerResponse);
        //  // console.log('Image Response :::::::::22',pickerResponse[0].uri);
        // }

      })
    } catch {
      setPickerResponse([...pickerResponse])
    }


  });
  return (
    <View style={{height:wH,width:wW,}}>
      <Text style={styles.titleText}>
        Example of Image Picker in React Native
      </Text>
      <View style={styles.container}>
        {/*<Image 
          source={{ uri: filePath.path}} 
          style={{width: 100, height: 100}} />*/}
        {pickerResponse[0]!=null?<Image
          source={{
            uri: pickerResponse[0].uri,
          }}
          style={{height:wW,width:wW}}
        />:<></>}
        
        {pickerResponse[0]!=null?<Text style={{fontSize:normalize(25),color:'black'}}>
          {pickerResponse[0].uri}
        </Text>:<></>}
        {/*
          <Button
            title="Choose File"
            onPress={chooseFile} />
        */}
        <TouchableOpacity
          activeOpacity={0.5}
          style={styles.buttonStyle}
          onPress={() => {
            // setShowPassword(!showPassword);
            onImageLibraryPress();
          }}>
          <Text style={styles.textStyle}>
            Choose Image
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default ImagePickerPage;

const styles = StyleSheet.create({
  container: {
   height:wH,width:wW,
    backgroundColor: '#fff',
    alignItems: 'center',
  },
  titleText: {
    fontSize: 22,
    fontWeight: 'bold',
    textAlign: 'center',
    paddingVertical: 20,color:'black'
  },
  textStyle: {
    padding: 10,
    color: 'black',
  },
  buttonStyle: {
    alignItems: 'center',
    flexDirection: 'row',
    backgroundColor: '#DDDDDD',
    padding: 5,
  },
  imageStyle: {
    width: 200,
    height: 200,
    margin: 5,
  },
});