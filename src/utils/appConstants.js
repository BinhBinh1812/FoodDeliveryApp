import {Dimensions} from 'react-native';
const {width, height} = Dimensions.get('screen');
//iPhone X
const DESIGN_WIDTH = 375;
const DESIGN_HEIGHT = 812;
const WIDTH = width > height ? height : width;
const HEIGHT = width > height ? width : height;
const scale = size => {
  return (WIDTH / DESIGN_WIDTH) * size;
};
const verticalScale = size => {
  return (HEIGHT / DESIGN_HEIGHT) * size;
};
const moderateScale = (size, factor = 0.5) => {
  return size + (scale(size) - size) * factor;
};
/**
 * getSize.m(10) Responsive for padding - margin - fontSize.
 *
 * getSize.s(10) Responsive by width screen. (Image Size)
 *
 * getSize.v(10) Responsive by height screen.
 **/
export const getSize = {
  m: moderateScale,
  s: scale,
  v: verticalScale,
};
export const SCREEN_NAME = {
  HOME: 'SCREEN_NAME/HOME',
  ORDER_DELIVERY: 'SCREEN_NAME/ORDER_DELIVERY',
  RESTAURANT: 'SCREEN_NAME/RESTAURANT',
};
export const COLORS = {
  primary: '#FC6D3F',
  secondary: '#CDCDD2',
  black: '#1E1F20',
  white: '#FFFFFF',
  lightGray: '#F5F5F6',
  lightGray2: '#F6F6F7',
  lightGray3: '#EFEFF1',
  lightGray4: '#F8F8F9',
  transparent: 'transparent',
  darkgray: '#898C95',
};
export const SIZES = {
  // global sizes
  base: getSize.m(8),
  font: getSize.m(14),
  radius: getSize.m(30),
  padding: getSize.m(10),
  padding2: getSize.m(12),
  // font sizes
  largeTitle: getSize.m(50),
  h1: getSize.m(30),
  h2: getSize.m(22),
  h3: getSize.m(20),
  h4: getSize.m(18),
  body1: getSize.m(30),
  body2: getSize.m(20),
  body3: getSize.m(16),
  body4: getSize.m(14),
  body5: getSize.m(12),
  //screen size
  width,
  height,
};
export const FONTS = {
  largeTitle: {
    fontFamily: 'Roboto-regular',
    fontSize: SIZES.largeTitle,
    lineHeight: getSize.m(55),
  },
  h1: {
    fontFamily: 'Roboto-Black',
    fontSize: SIZES.h1,
    lineHeight: getSize.m(36),
  },
  h2: {
    fontFamily: 'Roboto-Bold',
    fontSize: SIZES.h2,
    lineHeight: getSize.m(30),
  },
  h3: {
    fontFamily: 'Roboto-Bold',
    fontSize: SIZES.h3,
    lineHeight: getSize.m(22),
  },
  h4: {
    fontFamily: 'Roboto-Bold',
    fontSize: SIZES.h4,
    lineHeight: getSize.m(22),
  },
  body1: {
    fontFamily: 'Roboto-Regular',
    fontSize: SIZES.body1,
    lineHeight: getSize.m(36),
  },
  body2: {
    fontFamily: 'Roboto-Regular',
    fontSize: SIZES.body2,
    lineHeight: getSize.m(30),
  },
  body3: {
    fontFamily: 'Roboto-Regular',
    fontSize: SIZES.body3,
    lineHeight: getSize.m(22),
  },
  body4: {
    fontFamily: 'Roboto-Regular',
    fontSize: SIZES.body4,
    lineHeight: getSize.m(22),
  },
  body5: {
    fontFamily: 'Roboto-Regular',
    fontSize: SIZES.body5,
    lineHeight: getSize.m(22),
  },
};
