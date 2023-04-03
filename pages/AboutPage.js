import React,{useState,useEffect} from 'react';
import {StyleSheet,View, Text, Image, TouchableOpacity} from 'react-native'
import * as Linking from 'expo-linking'

export default function Aboutpage({navigation,route}) {
const aboutimage = 'https://storage.googleapis.com/sparta-image.appspot.com/lecture/about.png'

    const onPress =() => {
        alert('아이디가 등록됐습니다.')
    }
    const link = () => {
        Linking.openURL('https://www.instagram.com/')

    }
    const todayWeather = 10 + 17;
    const todayCondition = "흐림"
    useEffect(()=>{
        console.log(route)

	//Card.js에서 navigation.navigate 함수를 쓸때 두번째 인자로 content를 넘겨줬죠?
  //content는 딕셔너리 그 자체였으므로 route.params에 고대~로 남겨옵니다.
  //즉, route.params 는 content죠!

        navigation.setOptions({
            title:'소개페이지',
						//setOptions로 페이지 타이틀도 지정 가능하고
						//StackNavigator에서 작성했던 옵션을 다시 수정할 수도 있습니다. 
            headerStyle: {
                backgroundColor: '#1F266A',
                shadowColor: "#000",
            },
            headerTintColor: "#fff",
        })
    },[])

  return (
    <View style = {styles.allcontainer}>
        <Text style={styles.weather}>오늘의 날씨: {todayWeather + '°C ' + todayCondition} </Text>
        <Text style = {styles.title}> 탐험 지도 안내서 </Text>
        <View style = {styles.card}>
            <Image style = {styles.cardimage} source = {{uri :aboutimage}}/>
            <Text style = {styles.cardtitle}>많은 노력을 간결하게 담아내려고 노력함</Text>
            <Text style = {styles.cardcontent}>탐험의 세계에 오신것을 환영합니다. 여러분들에게 몇가지 팁을 드리려고 합니다</Text>
            <TouchableOpacity style = {styles.button1} onPress ={() => link()}><Text style = {styles.button1style}>계정</Text></TouchableOpacity>
        </View>
    </View>
    
        
        
        
    )



}

const styles = StyleSheet.create({
    allcontainer: {
        flex: 1,
       backgroundColor: '#1F266A',

    },
    title: {
        fontSize: 30,
        marginTop: 50,
        marginLeft:20,
        marginRight: 20,
        color:"#fff",
        alignSelf: 'center',
    },
    weather:{
        color: 'white',
        alignSelf:"flex-end",
        paddingRight:20
      },
    card: {
        margin: 30,
        height: 600,
        padding: 20,
        borderRadius: 20,
        backgroundColor: '#fff'
        
    },
    cardimage: {
        width:'80%',
        height: 200,
        borderRadius: 20,
        marginTop: 30,
        alignSelf: 'center',
    },
    cardtitle: {
        margin: 20,
        fontSize: 15,
        fontWeight: '700',
        alignSelf: 'center',
    },
    cardcontent: {
        margin: 20,
        textAlign: 'center',
        fontWeights :'900',
        alignSelf: 'center',
    },
    button1: {
        backgroundColor: '#FFA600',
        padding: 7,
        width: 150,
        borderRadius: 20,
        alignSelf: 'center',
    },
    button1style: {
        margin: 20,
        alignSelf: 'center',
        fontSize: 15,
        fontWeight: 'bold',
    }

}
)