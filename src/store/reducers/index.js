import { 
    SET_NAVIGATOR_POSITION,
    SET_NAVIGATOR_SHAPE,
    SET_NAVIGATOR_FILTER,
    SET_IS_WIDE_SCREEN,
    SET_SCROLL_TO_TOP,
    SET_FONT_SIZE_INCREASE,
    SET_CATEGORY_FILTER
} from '../actions'

const initialState = {
    navigatorPosition: "is-aside",
    navigatorShape: "open",
    navigatorFilter: "",
    isWideScreen: false,
    scrollToTop: false,
    fontSizeIncrease: 1,
    categoryFilter: "all posts"
  };

export default (state = initialState, action) => {
    switch (action.type) {
        case SET_NAVIGATOR_POSITION:
            return {
                ...state,
                navigatorPosition: action.navigatorPosition
            };
    
        case SET_NAVIGATOR_SHAPE:
            return {
                ...state,
                navigatorShape: action.navigatorShape
            };
    
        case SET_NAVIGATOR_FILTER:
            return {
                ...state,
                navigatorFilter: action.navigatorFilter
            };
    
        case SET_IS_WIDE_SCREEN:
            return {
                ...state,
                isWideScreen: action.isWideScreen
            };
    
        case SET_SCROLL_TO_TOP:
            return {
                ...state,
                scrollToTop: action.scrollToTop
            };
    
        case SET_FONT_SIZE_INCREASE:
            return {
                ...state,
                fontSizeIncrease: action.fontSizeIncrease
            };
    
        case SET_CATEGORY_FILTER:
            return {
                ...state,
                categoryFilter: action.categoryFilter
            };
    
        default:
            return state;
    }
};
