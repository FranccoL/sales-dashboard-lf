import { Theme } from '@types'

export const lighTheme: Theme = {
  appBackground: '#FFF',
  appColor: '#000',
  appDefaultStroke: '#E0E0E0',
  appLogo: 'dnc-black.svg',
  appSkeletonFrom: '#EEE',
  appSkeletonTo: '#CCC',
  buttons: {
    alert: '#E80000',
    alertColor: '#FFF',
    alertHover: '#D80000',
    disable: '#CCC',
    disableColor: '#666',
    primary: '#0C70F2',
    primaryColor: '#FFF',
    primaryHover: '#0061DE',
  },
  card: {
    alert: '#E80000',
    backgroung: '#FFF',
    border: '#E0E0E0',
    sucess: '#008000',
    warning: '#F7A300',
  },

  textInput: {
    active: '#FFF',
    activeColor: '#000',
    borderColor: '#E0E0E0',
    disable: '#EEE',
    disableBorderColor: '#E0E0E0',
    disabledColor: '#666',
    placeholderColor: '#666',
  },

  typographies: {
    error: '#FF0202',
    subtitle: '#666',
    sucess: '#008000',
  },
}

export const darkTheme: Theme = {
  appBackground: '#060B26',
  appColor: '#FFF',
  appDefaultStroke: '#21497D',
  appLogo: 'dnc-write.svg',
  appSkeletonFrom: '#060B26',
  appSkeletonTo: '#21497D',
  buttons: {
    alert: '#E80000',
    alertColor: '#FFF',
    alertHover: '#D80000',
    disable: '#313649',
    disableColor: '#6D7B8E',
    primary: '#0C70F2',
    primaryColor: '#FFF',
    primaryHover: '#0061DE',
  },
  card: {
    alert: '#E80000',
    backgroung: '#0F1535',
    border: '#21497D',
    sucess: '#008000',
    warning: '#F7A300',
  },

  textInput: {
    active: '#0F1535',
    activeColor: '#FFF',
    borderColor: '#21497D',
    disable: '#282D49',
    disableBorderColor: '#2E3F55',
    disabledColor: '#58677C',
    placeholderColor: '#89A7CE',
  },

  typographies: {
    error: '#FF0202',
    subtitle: '#89A7CE',
    sucess: '#008000',
  },
}
