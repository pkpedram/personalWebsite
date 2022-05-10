

const initialState = {
  isMobile: false,
  lang: null,
};


export default function publicApi(state = initialState, action) {
  let { type, data } = action;
  switch (type) {
    case 'SET_LANG':
      return {
        ...state,
        lang: data
      }


    default:
      return state;
  }
}
