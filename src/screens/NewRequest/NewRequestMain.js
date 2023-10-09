import { View } from 'react-native'
import React, { useState } from 'react'
import { ProgressSteps, ProgressStep } from "react-native-progress-steps";
import colors from '../../styles/colors';
import NewRequestChooseCategory from './NewRequestChooseCategory';
import NewRequestDetails from './NewRequestDetails';
import NewRequestContact from './NewRequestContact';
import styles from './styles';


const NewRequestMain = ({ navigation, route }) => {
  const [activePage, setActivePage] = useState(0);


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
    }

  }

  return (
    <View style={styles.container}>
      <ProgressSteps {...screenParams.progress} >
        <ProgressStep removeBtnRow={true}>
          <NewRequestChooseCategory {...screenParams.screen} />
        </ProgressStep>
        <ProgressStep removeBtnRow={true}>
          <NewRequestDetails {...screenParams.screen} />
        </ProgressStep>
        <ProgressStep removeBtnRow={true}>
          <NewRequestContact {...screenParams.screen} />
        </ProgressStep>
      </ProgressSteps>
    </View>
  )
}

export default NewRequestMain