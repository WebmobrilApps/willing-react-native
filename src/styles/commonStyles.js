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
    width: Scale(97),
    height: 100,
    margin: 7,
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
    justifyContent: 'center'
  },

})