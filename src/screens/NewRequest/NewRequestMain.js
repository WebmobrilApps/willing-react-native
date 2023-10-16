// import { View } from 'react-native'
// import React, { useState } from 'react'
// import { ProgressSteps, ProgressStep } from "react-native-progress-steps";
// import colors from '../../styles/colors';
// import NewRequestChooseCategory from './NewRequestChooseCategory';
// import NewRequestDetails from './NewRequestDetails';
// import NewRequestContact from './NewRequestContact';
// import styles from './styles';


// const NewRequestMain = ({ navigation, route }) => {
//   const [activePage, setActivePage] = useState(0);


//   const screenParams = {
//     progress: {
//       topOffset: 20,
//       marginBottom: 30,
//       completedStepIconColor: colors.theme,
//       completedProgressBarColor: colors.theme,
//       activeStepIconBorderColor: colors.theme,
//       activeLabelColor: colors.theme,
//       activeStep: activePage,
//     },
//     screen: {
//       navigation: navigation,
//       activePage: activePage,
//       setActivePage: setActivePage,
//     }

//   }

//   return (
//     <View style={styles.container}>
//       <ProgressSteps {...screenParams.progress} >
//         <ProgressStep removeBtnRow={true}>
//           <NewRequestChooseCategory {...screenParams.screen} />
//         </ProgressStep>
//         <ProgressStep removeBtnRow={true}>
//           <NewRequestDetails {...screenParams.screen} />
//         </ProgressStep>
//         <ProgressStep removeBtnRow={true}>
//           <NewRequestContact {...screenParams.screen} />
//         </ProgressStep>
//       </ProgressSteps>
//     </View>
//   )
// }

// export default NewRequestMain


import { View, Text, TouchableOpacity, ScrollView,Keyboard } from 'react-native'
import React, { useState,useEffect, useLayoutEffect } from 'react'
import { ProgressSteps, ProgressStep } from "react-native-progress-steps";
import colors from '../../styles/colors';
import NewRequestChooseCategory from './NewRequestChooseCategory';
import NewRequestDetails from './NewRequestDetails';
import NewRequestContact from './NewRequestContact';
import styles from './styles';
import commonStyles from '../../styles/commonStyles';
import { verticalScale } from '../../styles/Scale';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';
import { ConsoleLog } from '../../utility/helperFunction';



const NewRequestMain = ({ navigation, route }) => {
  useLayoutEffect(() => {
    const keyboardDidShowListener = Keyboard.addListener('keyboardDidShow', () => {
      setIsKeyboardOpen(true);
    });

    const keyboardDidHideListener = Keyboard.addListener('keyboardDidHide', () => {
      setIsKeyboardOpen(false);
    });

    return () => {
      // Clean up listeners when the component unmounts
      keyboardDidShowListener.remove();
      keyboardDidHideListener.remove();
    };
  }, []);
  const [activePage, setActivePage] = useState(0);
  const [data, setData] = useState({})
  const [isKeyboardOpen, setIsKeyboardOpen] = useState(false);

  const screenParams = {
    progress: {
      topOffset: 20,
      marginBottom: 30,
      completedStepIconColor: colors.theme,
      completedProgressBarColor: colors.theme,
      activeStepIconBorderColor: colors.theme,
      activeLabelColor: colors.theme,
      activeStep: activePage,
    },
    screen: {
      navigation: navigation,
      activePage: activePage,
      setActivePage: setActivePage,
      data: data,
      setData: setData
    }

  }

  const handleMessageClick=(data)=>{
    setActivePage(data)
  }

  const Page1 = () => {
    return (

      <View style={{ flex: 0.9,}}>
        <NewRequestChooseCategory onClick={handleMessageClick}/>
      </View>

    )
  }
  const Page2 = () => {
    return (

      <View style={{ flex:0.9,  }}>
     <NewRequestDetails onClick={handleMessageClick}/>
     </View>

    )
  }
  const Page3 = () => {
    return (
      <View style={{ flex:0.9,  }}>
      <NewRequestContact />
      </View>
    )
  }


  const renderContent = () => {
    switch (activePage) {
      case 0:
        return Page1()
        break;
      case 1:
        return Page2()
      default:
        return Page3()
        break;
    }
  };

  console.log('keyboard',Keyboard.isVisible());


  return (
    // <View style={styles.container}>
    //   <ProgressSteps {...screenParams.progress} >
    //     <ProgressStep removeBtnRow={true}>
    //       <NewRequestChooseCategory {...screenParams.screen} />
    //     </ProgressStep>
    //     <ProgressStep removeBtnRow={true}>
    //       <NewRequestDetails {...screenParams.screen} />
    //     </ProgressStep>
    //     <ProgressStep removeBtnRow={true}>
    //       <NewRequestContact {...screenParams.screen} />
    //     </ProgressStep>
    //   </ProgressSteps>
    // </View>
    <View style={styles.container}>
      <View style={{ flexDirection: 'row', justifyContent: "center", alignItems: 'center',marginVertical:verticalScale(18),marginBottom:verticalScale(50) }}>
        <TouchableOpacity 
        onPress={()=>setActivePage(0)}
        style={[styles.circleContainer,{backgroundColor:activePage == 1 || activePage==2 ? colors.theme : null,borderColor:activePage == 1 || activePage==2 ? colors.theme : null, }]}>
          <Text style={[commonStyles.fontSize14, {color:activePage ==1 || activePage == 2 ? colors.white : colors.txtColor}]}>1</Text>
        </TouchableOpacity>
        <View style={[styles.itemSeperator, {backgroundColor:activePage == 1 || activePage==2 ? colors.theme : colors.txtColor}]}/>
        <TouchableOpacity onPress={()=>setActivePage(1)}
        style={[styles.circleContainer,{backgroundColor:activePage == 2 || activePage==3 ? colors.theme : null,borderColor:activePage == 2 || activePage==3 ? colors.theme : null, }]}>
          <Text style={[commonStyles.fontSize14,{color:activePage ==2 || activePage == 3 ? colors.white : colors.txtColor}]}>2</Text>
        </TouchableOpacity>
        <View style={[styles.itemSeperator, ]}/>
        <TouchableOpacity onPress={()=>setActivePage(2)}
        style={styles.circleContainer}>
          <Text style={commonStyles.fontSize14}>3</Text>
        </TouchableOpacity>
      </View>
      {renderContent()}
    </View>
  )
}

export default NewRequestMain


