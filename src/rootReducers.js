import { GET_DATA } from './components/DataArea/constants';

function rootReducers (state = {}, action) {
  switch (action.type) {
    case 'GET_DATA':
    return {
      result: action.payload
    }
    default:
      return state
  }
}

export default rootReducers;
