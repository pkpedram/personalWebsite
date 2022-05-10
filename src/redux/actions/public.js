
const publicApi = {
 setLang: (data) => (dispatch) => {
  localStorage.setItem('lang', data);
  dispatch({type: 'SET_LANG', data});
 },
 loadData: () => (dispatch) => {
   if(localStorage.getItem('lang')){
    dispatch({type: 'SET_LANG', data : localStorage.getItem('lang')});
   }
 }

};

export default publicApi;
