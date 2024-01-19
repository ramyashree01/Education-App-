import React, { useState, useEffect, useRef } from 'react';
import { View, TouchableOpacity, Image, PanResponder, StyleSheet, Dimensions } from 'react-native';
import Video from 'react-native-video';
import RNFS from 'react-native-fs';
import Orientation from 'react-native-orientation';


const screenWidth = Dimensions.get('window').width;
const screenHeight = Dimensions.get('window').height;



const VideoScreen = ({ route }) => {
  const [paused, setPaused] = useState(true);
  const [currentTime, setCurrentTime] = useState(0);
  const [duration, setDuration] = useState(0);
  const [isFullscreen, setIsFullscreen] = useState(false);
  const [videoAspectRatio, setVideoAspectRatio] = useState(16 / 9);

  const [showOverlay, setShowOverlay] = useState(true);
  const videoRef = useRef(null);
  const panResponder = PanResponder.create({
    onStartShouldSetPanResponder: () => true,
    onMoveShouldSetPanResponder: () => true,
    onPanResponderGrant: () => {
      setPaused(true); 
    },
    onPanResponderMove: (_, gestureState) => {
      const newPosition = gestureState.moveX / screenWidth;
      const newTime = newPosition * duration;
      setCurrentTime(newTime);
    },
    onPanResponderRelease: (_, gestureState) => {
      setPaused(false); 
      videoRef.current.seek(currentTime);
    },
  });
  const calculateHeight = (width) => (isFullscreen ? screenHeight : screenHeight / videoAspectRatio);


  const handleOrientationChange = (orientation) => {
    if (orientation === 'LANDSCAPE' || orientation === 'LANDSCAPE-RIGHT' || orientation === 'LANDSCAPE-LEFT') {
      setIsFullscreen(true);
      setVideoAspectRatio(screenHeight / screenWidth);
    } else {
      setIsFullscreen(false);
      setVideoAspectRatio(16 / 9);
    }
  };

  useEffect(() => {
    Orientation.addOrientationListener(handleOrientationChange);
    return () => {
      Orientation.removeOrientationListener(handleOrientationChange);
    };
  }, []);





  const handleSkip = (direction) => {
    const newTime = direction === 'forward' ? currentTime + 10 : currentTime - 10;
    videoRef.current.seek(newTime < 0 ? 0 : newTime > duration ? duration : newTime);
  };

  const handleProgress = (data) => {
    setCurrentTime(data.currentTime);
    if (showOverlay && data.currentTime > 0) {
      setShowOverlay(false); 
    }
  };

  const handleLoad = (data) => {
    setDuration(data.duration);
  };

  console.log(route.params.videoSource);

  return (
    <View style={{ flex: 1, backgroundColor: 'grey' }}>
      <View
        style={{
          flex: 1,
          position: 'absolute',
          top: 0,
          justifyContent: 'center',
          bottom: 0,
          right: 0,
          left: 0,
          alignItems: 'center',
        }}
        {...panResponder.panHandlers}
      >
        <Video
          ref={videoRef}
          paused={paused}
          source={route.params.videoSource}
          onError={(error) => console.error("Video Error: ", error)}
          onProgress={handleProgress}
          onLoad={handleLoad}
          resizeMode="cover"
          style={{ width: screenWidth * 0.9, height: calculateHeight(screenWidth * 0.8) }}
        />
        {showOverlay && (
          <View
            style={{
              ...StyleSheet.absoluteFillObject,
              justifyContent: 'center',
              alignItems: 'center',
            }}
          >
            <Image source={require('../IMAGES/ML.jpg')} style={{ width: 400, height: 200 }} />
          </View>
        )}
      </View>

      <View
        style={{
          position: 'absolute',
          bottom: 20,
          flexDirection: 'row',
          justifyContent: 'space-between',
          width: screenWidth * 0.8,
          alignSelf: 'center',
        }}
      >
        <TouchableOpacity onPress={() => handleSkip('backward')}>
          <Image source={require('../IMAGES/backward.png')} style={{ width: 30, height: 30 }} />
        </TouchableOpacity>
        <TouchableOpacity onPress={() => setPaused(!paused)}>
          <Image source={paused ? require('../IMAGES/play.png') : require('../IMAGES/pause.png')} style={{ width: 30, height: 30, marginTop: 170 }} />
        </TouchableOpacity>
        <TouchableOpacity onPress={() => handleSkip('forward')}>
          <Image source={require('../IMAGES/forward.png')} style={{ width: 30, height: 30, marginBottom: 170 }} />
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default VideoScreen;
