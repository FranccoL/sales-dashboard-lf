export interface Theme {
  appBackground: string
  appColor: string
  appDefaultStroke: string
  appLogo: string
  appSkeletonFrom: string
  appSkeletonTo: string
  buttons: {
    alert: string
    alertColor: string
    alertHover: string
    disable: string
    disableColor: string
    primary: string
    primaryColor: string
    primaryHover: string
  }
  card: {
    alert: string
    backgroung: string
    border: string
    sucess: string
    warning: string
  }

  textInput: {
    active: string
    activeColor: string
    borderColor: string
    disable: string
    disableBorderColor: string
    disabledColor: string
    placeholderColor: string
  }

  typographies: {
    error: string
    subtitle: string
    sucess: string
  }
}
