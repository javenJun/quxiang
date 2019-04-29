import { INVITE } from '../action/inviteAction';


const inviteReducer = (previousState = null, action) => {
  switch (action.type) {
    case INVITE:
      return action.data;
    default:
      return previousState;
  }
};

export {
  inviteReducer,
};
