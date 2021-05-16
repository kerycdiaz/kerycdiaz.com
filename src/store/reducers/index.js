import {
  SET_CATEGORY_FILTER,
  SET_FONT_SIZE_INCREASE,
  SET_NAVIGATOR_FILTER,
  SET_NAVIGATOR_POSITION,
  SET_NAVIGATOR_SHAPE,
  SET_SCROLL_TO_TOP,
} from '@store/actions'

const initialState = {
  navigatorPosition: 'is-aside',
  navigatorShape: 'closed',
  navigatorFilter: '',
  scrollToTop: false,
  fontSizeIncrease: 1,
  categoryFilter: 'all posts',
}

const Reducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_NAVIGATOR_POSITION:
      return {
        ...state,
        navigatorPosition: action.navigatorPosition,
      }

    case SET_NAVIGATOR_SHAPE:
      return {
        ...state,
        navigatorShape: action.navigatorShape,
      }

    case SET_NAVIGATOR_FILTER:
      return {
        ...state,
        navigatorFilter: action.navigatorFilter,
      }

    case SET_SCROLL_TO_TOP:
      return {
        ...state,
        scrollToTop: action.scrollToTop,
      }

    case SET_FONT_SIZE_INCREASE:
      return {
        ...state,
        fontSizeIncrease: action.fontSizeIncrease,
      }

    case SET_CATEGORY_FILTER:
      return {
        ...state,
        categoryFilter: action.categoryFilter,
      }

    default:
      return state
  }
}
export default Reducer
