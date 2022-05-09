

const initialState = {
  
};


export default function publicApi(state = initialState, action) {
  let { type, data } = action;
  switch (type) {
    case 'ADD_CATEGORY':
      return {
        ...state,
        categories: [...state.categories, {
          id: state.categories.length,
          title: data
        }]
      }
    case 'ADD_TASK':

      return {
        ...state,
        tasks: [
          ...state.tasks,
          {
            id: state.tasks.length,
            pid: 1,
            ...data,
          }
        ]
      }
    case 'CHANGE_COL' :
      let des = state.board.find(itm => itm.title === data.des).id;
      let thisTask = state.tasks.find(itm => itm.id == data.id);
      let otherTasks = state.tasks.filter(itm => itm.id !== data.id);
      let thisNewTask = {
        ...thisTask,
        pid: des
      };
      
      return{
        ...state,
        tasks:[thisNewTask, ...otherTasks]
      }
    case 'DELETE_TASK':
      return {
        ...state,
        tasks: state.tasks.filter(itm => itm.id !== data.id)
      }
    case 'SAVE':
      localStorage.setItem('BoardData', JSON.stringify(state));
      return state
    case 'LOAD_DATA':
      return data


    default:
      return state;
  }
}
