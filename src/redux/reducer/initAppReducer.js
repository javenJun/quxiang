import { INIT_APP } from '../action/initAppAction';


const initAppReducer = (previousState = false, action) => {
  switch (action.type) {
    case INIT_APP:
      return action.data;
    default:
      return previousState;
  }
};

export {
  initAppReducer,
};
