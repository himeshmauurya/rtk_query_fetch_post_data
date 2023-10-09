import React, {useState, useRef} from 'react';
import {
    widthPercentageToDP as wp,
    heightPercentageToDP as hp,
  } from 'react-native-responsive-screen';
import {
  View,
  ScrollView,
  Text,
  Dimensions,
  Image,
  PanResponder,
  TouchableOpacity,
} from 'react-native';
//import {TouchableOpacity} from 'react-native-gesture-handler';

const {width, height} = Dimensions.get('window');
const image = {uri: 'https://legacy.reactjs.org/logo-og.png'};


console.log(height,width)
//console.log(hp('10%'),wp('100%'))
const Mob2 = () => {
  const [position, setPosition] = useState({y: 0});
  const [tog, settog] = useState(true);
  const scrollViewRef = useRef();
  const [contentHeight, setContentHeight] = useState(0);
  const [per,setper]=useState(0)
  const [per23,setper23]=useState(0)
  const panResponder = PanResponder.create({
    onStartShouldSetPanResponder: () => true,
    onMoveShouldSetPanResponder: () => true,
    onPanResponderMove: (_, gesture) => {
      console.log('pp', gesture.moveY);
    //   setPosition({
    //     y: gesture.moveY,
    //   });
      if (gesture.moveY < 1) {
        setPosition({
          y: 0,
        });
      } else if (gesture.moveY <= hp('100%')-hp('10%')) {
        setPosition({
          y: gesture.moveY,
        });
      } 
      else {
        setPosition({
          y: hp('100%')-hp('10%'),
        });
      }
     },
  });

  const lmn = event => {
    const {locationX, locationY} = event.nativeEvent;
    //settouchend1(false);
    console.log('lmn', locationY);
    //scrollViewRef.current.scrollTo({x: 0, y: locationY, animated: false});
    console.log("hp",hp("100%"))

    const t=hp('100%')-hp('10%');
    console.log(t,'t')
    //const {locationX, locationY} = event.nativeEvent;
    console.log('loc',locationY)
    
    let per11=((locationY/t)*100);
     console.log("per",per11)
    //  if(per11>100){
    //     per11=100;
    //  }
     //setper23(per11)
     console.log("contentHeight",((contentHeight)))
     console.log("act",((contentHeight)*per23)/100)
     //scrollViewRef.current.scrollTo({x: 0, y: contentHeight*per , animated: false});
     
    //  scrollViewRef.current.scrollTo({x: 0, y: ((contentHeight-(height))*per11)/100 , animated: false});
     
     
     if(locationY>hp('100%')-hp('10%')){
        scrollViewRef.current.scrollTo({x: 0, y: ((contentHeight-(height))*per11)/100 , animated: false});
        setPosition({y: hp('100%')-hp('10%')});
     }else {
        scrollViewRef.current.scrollTo({x: 0, y: ((contentHeight-(height))*per11)/100 , animated: false});
        setPosition({y: locationY});
     }
     //setPosition({y: locationY});


    // if (locationY > hp('100%')-hp('10%')) {
    //   setPosition({y: hp('100%')-hp('10%')});
    //   scrollViewRef.current.scrollTo({x: 0, y: hp('100%')-hp('10%'), animated: false});
    // } else {
    //   setPosition({y: locationY});
    //   scrollViewRef.current.scrollTo({x: 0, y: locationY, animated: false});
    // }
  };
  const handleScreenPress = event => {
    const t=hp('100%')-hp('10%');
   // console.log(t,'t')
    const {locationX, locationY} = event.nativeEvent;
   // console.log('loc',locationY)
     //console.log("jat",position.y)
     const per1=((position.y/t)*100);
     //console.log("per",per)
     setper(per1)
    // console.log("act",(position.y*per)/100)
     //scrollViewRef.current.scrollTo({x: 0, y: contentHeight*per , animated: false});
    scrollViewRef.current.scrollTo({x: 0, y: ((contentHeight-(height))*per)/100 , animated: false});
  };

  function abc(event) {
    const t=hp('100%')-hp('10%');
    console.log("TTTTT",t)
    const offsetY = event.nativeEvent.contentOffset.y;
    console.log("KK1",offsetY)
    console.log(contentHeight)
   // if(offsetY>6){
        console.log('kk', (offsetY/(contentHeight-height))*100);
        let p1=(offsetY/((contentHeight-height)))*100
        console.log("p1",p1)
        // if(p1>100){
        //     p1=100
        // }
        
        // if (offsetY > 735) {
        //   //setPosition({y:754})
        // } else {
          //  if(p1>0){
                if (tog == false) {

                    setPosition({y: (t*p1)/100});
                  }
           // }
      
      //  }
  //  }
    
  }
  function pqr() {
    console.log('u8');
    settog(false);
  }
  function xyz() {
    settog(true);
  }
  const handleContentSizeChange = (contentWidth, contentHeight) => {
    // Update the state variable with the content's heighct
    console.log("hab",contentHeight)
    setContentHeight(contentHeight);
  };
  const handleScrollViewLayout = (event) => {
    const { height } = event.nativeEvent.layout;
   //setScrollViewHeight(height);
   console.log("scr",height)
  };
  return (
    <View style={{flex: 1}}>
      <ScrollView
        ref={scrollViewRef}
        showsVerticalScrollIndicator={false}
        showsHorizontalScrollIndicator={false}
        onScroll={abc}
        onContentSizeChange={handleContentSizeChange}
       // onLayout={handleScrollViewLayout}
        onTouchStart={pqr}>
        <View style={{height:'100%'}}>
          <Image
            source={image}
            style={{height: 100, width: 200, marginBottom: 15}}></Image>
          <Image
            source={image}
            style={{height:  300, width: 200, marginBottom: 15}}></Image>
          <Image
            source={image}
            style={{height:  500, width: 200, marginBottom: 15}}></Image>
          <Image
            source={image}
            style={{height:  200, width: 200, marginBottom: 15}}></Image>
        <Image
            source={image}
            style={{height:  400, width: 200, marginBottom: 15}}></Image>
        <Image
            source={image}
            style={{height:  700, width: 200, marginBottom: 15}}></Image>
          
        </View>
      </ScrollView>

      <View
        style={{
          position: 'absolute',
          right: 0,
          top: 0,
          width: wp('15%'),
          height: hp('100%'),
          backgroundColor: 'gray',
        }}
        onTouchMove={handleScreenPress}
        onTouchStart={xyz}
        //</TouchableOpacity>onTouchEnd={lmn}
        {...panResponder.panHandlers}>
        <TouchableOpacity
          style={{height: '100%', width: '100%'}}
          activeOpacity={1}
          onPress={lmn}>
          <View
            style={{
              //position: 'relative',
              height:hp('10%'),
              backgroundColor: 'blue',
              transform: [
                {
                  translateY: position.y,
                },
              ],
            }}
            {...panResponder.panHandlers}
          />
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default Mob2;
