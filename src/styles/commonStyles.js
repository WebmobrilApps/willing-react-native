import { StyleSheet } from 'react-native'
import colors from './colors'
import fontFamily from './fontFamily'
import Scale, { verticalScale } from './Scale'

export default StyleSheet.create({
  fontSize7: {
    fontSize: Scale(7),
    color: colors.txtColor,
    fontFamily: fontFamily.regular,
    textAlign: 'left'
  },
  fontSize8: {
    fontSize: Scale(8),
    color: colors.txtColor,
    fontFamily: fontFamily.regular,
    textAlign: 'left'
  },
  fontSize10: {
    fontSize: Scale(10),
    color: colors.txtColor,
    fontFamily: fontFamily.regular,
    textAlign: 'left'
  },
  fontSize12: {
    fontSize: Scale(12),
    color: colors.txtColor,
    fontFamily: fontFamily.regular,
    textAlign: 'left'
  },
  fontSize14: {
    fontSize: Scale(14),
    color: colors.txtColor,
    fontFamily: fontFamily.regular,
    textAlign: 'left'
  },
  fontSize16: {
    fontSize: Scale(16),
    color: colors.txtColor,
    fontFamily: fontFamily.regular,
    textAlign: 'left'
  },
  fontSize18: {
    fontSize: Scale(18),
    color: colors.txtColor,
    fontFamily: fontFamily.regular,
    textAlign: 'left'
  },
  fontSize20: {
    fontSize: Scale(20),
    color: colors.txtColor,
    fontFamily: fontFamily.regular,
    textAlign: 'left'
  },
  fontSizeBold26: {
    fontSize: Scale(26),
    color: colors.txtColor,
    fontFamily: fontFamily.bold,
    textAlign: 'left'
  },
  fontSizeBold24: {
    fontSize: Scale(24),
    color: colors.txtColor,
    fontFamily: fontFamily.bold,
    textAlign: 'left'
  },
  fontSizeBold27: {
    fontSize: Scale(27),
    color: colors.txtColor,
    fontFamily: fontFamily.bold,
    textAlign: 'left'
  },
  fontSizeBold20: {
    fontSize: Scale(20),
    color: colors.txtColor,
    fontFamily: fontFamily.bold,
  },
  fontSizeBold32: {
    fontSize: Scale(32),
    color: colors.white,
    fontFamily: fontFamily.bold,
    textAlign: 'left'
  },
  fontSizeBold30: {
    fontSize: Scale(30),
    color: colors.white,
    fontFamily: fontFamily.bold,
    textAlign: 'left'
  },
  flexView: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center'
  }, mainContainer: {
    flex: 1,
    backgroundColor: colors.white,
  }, indicatorView: {
    flexDirection: 'row',
    width: '100%',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: verticalScale(10)
  }, circle: {
    height: Scale(16),
    width: Scale(16),
    borderWidth: 1,
    borderColor: colors.black,
    borderRadius: Scale(16),
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: Scale(10)
  }, checkBox: {
    height: Scale(8),
    width: Scale(8),
    borderRadius: Scale(8),
    backgroundColor: colors.black
  }, switchBtnStyle: {
    height: Scale(16),
    width: Scale(34),
    resizeMode: 'contain'
  }, categoryButton: {
    width: Scale(90),
    height: 100,
    margin: 10,
    borderRadius: 5,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 9,
    },
    borderColor: colors.borderColor,
    borderWidth: 1,
  }, ctegoryImg: {
    marginTop: 10,
    width: Scale(30),
    alignItems: "center",
    height: Scale(30),
    tintColor: colors.txtColor
  },
  categorylabel: {
    alignContent: "flex-end",
    fontSize: Scale(10),
    paddingTop: 3,
    color: colors.txtColor,
  },
  categoryBox: {
    width: "100%",
    height: "100%",
    alignItems: "center",
    justifyContent: 'center',
    padding:Scale(10)
  }, newRequestChooseCategory: {
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "center",
    paddingHorizontal: Scale(10),
  },dropdown: {
    height: verticalScale(38),
    borderColor: colors.black,
    borderWidth: Scale(1),
    borderRadius: Scale(20),
    paddingHorizontal: Scale(20),
    marginBottom: verticalScale(20),
    color: colors.black,
    width: '100%',
    // backgroundColor:'red'
}, icon: {
    marginRight: 5,
},
label: {
    position: 'absolute',
    backgroundColor: 'white',
    left: 22,
    top: 8,
    zIndex: 999,
    paddingHorizontal: 8,
    fontSize: 14,
    color: colors.black
},
placeholderStyle: {
    fontSize: Scale(12),
    fontFamily: fontFamily.regular,
    color: colors.black,
},
selectedTextStyle: {
    fontSize: Scale(12),
    fontFamily: fontFamily.regular,
    color: colors.black,
},
iconStyle: {
    width: 20,
    height: 20,
    tintColor: colors.black
},
inputSearchStyle: {
    height: 40,
    fontSize: 16,
    color: colors.black
}, itemTextStyle: {
    color: colors.black
}, leftIconStyle: {
    height: verticalScale(18),
    width: Scale(18),
    resizeMode: 'contain',
    marginRight: Scale(10),
}, containerStyle: {
    borderColor: colors.black,
    borderWidth:0,
    // backgroundColor:'red',
    bottom:40
}, itemContainerStyle: {
    // backgroundColor: colors.red,
    // marginBottom:40
}, imageStyle: {
    width: 24,
    height: 24,
},renderItem:{
    flexDirection:'row',
    padding:Scale(10),
}

})