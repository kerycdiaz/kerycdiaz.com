export const SET_NAVIGATOR_POSITION = 'SET_NAVIGATOR_POSITION'
export const SET_NAVIGATOR_SHAPE = 'SET_NAVIGATOR_SHAPE'
export const SET_NAVIGATOR_FILTER = 'SET_NAVIGATOR_FILTER'
export const SET_SCROLL_TO_TOP = 'SET_SCROLL_TO_TOP'
export const SET_FONT_SIZE_INCREASE = 'SET_FONT_SIZE_INCREASE'
export const SET_CATEGORY_FILTER = 'SET_CATEGORY_FILTER'

export const setNavigatorPosition = (navigatorPosition) => ({
  type: SET_NAVIGATOR_POSITION,
  navigatorPosition,
})

export const setNavigatorShape = (navigatorShape) => ({
  type: SET_NAVIGATOR_SHAPE,
  navigatorShape,
})

export const setNavigatorFilter = (navigatorFilter) => ({
  type: SET_NAVIGATOR_FILTER,
  navigatorFilter,
})

export const setScrollToTop = (scrollToTop) => ({
  type: SET_SCROLL_TO_TOP,
  scrollToTop,
})

export const setFontSizeIncrease = (fontSizeIncrease) => ({
  type: SET_FONT_SIZE_INCREASE,
  fontSizeIncrease,
})

export const setCategoryFilter = (categoryFilter) => ({
  type: SET_CATEGORY_FILTER,
  categoryFilter,
})
