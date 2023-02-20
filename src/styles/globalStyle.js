import { StyleSheet, Text } from 'react-native';
import React from 'react'

import { Dimensions, PixelRatio } from 'react-native';
import Colors from "../styles/color";
import MaskedView from '@react-native-masked-view/masked-view';
import LinearGradient from 'react-native-linear-gradient'

export const wH = Dimensions.get('window').height;
export const wW = Dimensions.get('window').width;
export const paddingHorizontal = Dimensions.get('window').width/18;



interface GradientTextProps {
    colors: string[];
    [x: string]: any;
}

export const GradientText = ({ colors, ...rest }: GradientTextProps) => {
    return (
        <MaskedView maskElement={<Text {...rest} />}>
            <LinearGradient colors={colors} start={{ x: 0, y: 0 }} end={{ x: 1, y: 0 }}>
                <Text {...rest} style={[rest.style, { opacity: 0 }]} />
            </LinearGradient>
        </MaskedView>
    );
};

const scale = wW / 360;
export function normalize(size) 
{const newSize = size * scale
    if (Platform.OS === 'ios'){
         return Math.round(PixelRatio.roundToNearestPixel(newSize))
        }else {
            return Math.round(PixelRatio.roundToNearestPixel(newSize)) - 2
        }
    }



export const globalStyles = StyleSheet.create({

    doubleShadeFont: {
        fontSize: wW / 16,
        color: "#041D56",
        fontWeight: '300',
        // fontFamily:Fonts.InterLight

    },
    flashPara: {
        fontSize: 14,
        color: Colors.TextDarkBlue,
        marginVertical: wH / 80,
        // fontFamily:Fonts.InterRegular
    },

    BoldHeading: {
        fontSize: wW / 15, fontWeight: '300', color: Colors.White,
    },
    Heading: {
        fontSize: wW / 23, fontWeight: '500', color: Colors.TextDarkBlue, textTransform: 'uppercase'
    },
    Heading2: {
        fontSize: wW / 20, fontWeight: '400', color: Colors.BaseBlue,
    },
    Heading3: {
        fontSize: wW / 28, fontWeight: '400', color: Colors.TextGrey,
    },
    heading4: {
        color: Colors.TextGrey, fontSize: wW / 28, fontWeight: '500',
    },
    Heading5: {
        fontSize: wW / 25, fontWeight: '500', color: Colors.TextDarkBlue,/*  lineHeight: 40,  */

    },
    styleLineheight1: {
        marginBottom: "5%"
    },

    styleLineheight2: {
        marginBottom: "3%"
    },
    styleLineheight3: {
        marginBottom: "2%"
    },

    // modalStyle
    modalStyle: {
        backgroundColor: Colors.White, width: wW,
        // borderRadius: wW / 10,
        borderTopLeftRadius: wW / 10,
        borderTopRightRadius: wW / 10,
        padding: wW / 20, alignItems: "center"
    },
    modalStyle1: {
        backgroundColor: Colors.White, width: wW, /* borderRadius: wW / 10, */
          borderTopLeftRadius: wW / 10,
        borderTopRightRadius: wW / 10,
        padding: wW / 20,
    },
    modalHeading: {
        fontSize: wW / 20,
        lineHeight: wW / 10,
        color: "#0F2C6F",
       // fontFamily: Fonts.InterSemiBold,
        fontWeight: '600',
    },
    modalHeading2: {
        fontSize: wW / 25, color: "#6f80a9", textAlign: 'justify',
        lineHeight: wH / 30, paddingBottom: wH / 85
    },


    // modalHeading2: {
    //     fontSize: wW / 28, fontWeight: '400', color: Colors.TextGrey,lineHeight:20
    // },
    TextInputBottomBorder: {

        borderColor: "#9AA6C3",
        borderBottomWidth: 1,
        fontSize: 18,
        color: Colors.TextDarkBlue,
     //   fontFamily: Fonts.InterSemiBold
    },

    TextInput: {
        backgroundColor: Colors.BoxGrey_20,
        borderRadius: 5,
        height: wH / 15,
        padding: wW / 40,
        color: Colors.TextGrey,
        fontSize: wW / 28,
    },
    submittDisableBotton:{
        backgroundColor: Colors.ButtonGrey,
        width:wW/1.2,
        height:wH/13,
        borderRadius:wH/10,
        justifyContent:"center",
        alignItems:"center",
       //paddingHorizontal:wW/20
       // bottom:wH/35,
    },
    termsAndCondBotton:{
        backgroundColor: Colors.ButtonGrey,
        width:wW/1.2,
        height:wH/13,
        borderRadius:wH/65,
        marginVertical:wH/85,
        justifyContent:"center",
        alignItems:"center",
       //paddingHorizontal:wW/20
       // bottom:wH/35,
    },
    enableBotton:{
        backgroundColor: Colors.BaseBlue_90,
        width:wH/4.5,
        height:wH/13,
        borderRadius:wH/10,
        justifyContent:"center",
        alignItems:"center",
        bottom:wH/35,
    },
    disableBotton: {
        backgroundColor: Colors.ButtonGrey,
        width: wH / 4.5,
        height: wH / 14,
        borderRadius: wH / 10,
        justifyContent: "center",
        alignItems: "center"

    },
    statusBtn: {
        backgroundColor: Colors.ButtonGrey,
        // width:"50%",
        paddingHorizontal:10,
        height: wH / 20,
        borderRadius: wH / 10,
        justifyContent: "center",
        alignItems: "center"
    },
    BottomNavBtn: {
        backgroundColor: "#CFDDFE",
        width: wW / 2.5,
        height: wW / 8,
        borderRadius: wH / 10,
        justifyContent: "center",
        alignItems: "center"
    },

    modalAddBtn: {
        width: wW / 6,
        height: wW / 6,
        backgroundColor: "#f3f4f8",
       // fontFamily: Fonts.InterSemiBold,
        paddingVertical: wH / 120,
        alignItems: "center",
        justifyContent: "center",
    },
    autocompleteContainer: {
        flex: 1,
        left: 0,
        position: 'absolute',
        backgroundColor: "white",
        color: "red",
        right: 0,
        top: 0,
        zIndex: 1
    },
    TabNotification: {
        // width: "100%",
        paddingHorizontal: 5,
        height: 25,
        marginLeft: 5,
        backgroundColor: Colors.White,
        justifyContent: "center",
        alignItems: "center",
        borderRadius: 5
    },



    //Service Req

    TermsandCondition2: {
        fontSize: wW / 28, fontWeight: '400',fontWeight:'600', color: Colors.TextDarkBlue,lineHeight:20,
    },
    TermsandCondition1: {
        fontSize: wW / 28, fontWeight: '400', color: Colors.TextDarkBlue,lineHeight:20,
    },
    TermsandCondition3: {
        fontSize: wW / 27, fontWeight: '400', color: Colors.TextDarkBlue,lineHeight:20,
    },
    TermsandConditionSub: {
        fontSize: wW / 27.5, fontWeight: '500', color: Colors.TextDarkBlue, lineHeight: 35, marginTop:wH/75
    },



});
