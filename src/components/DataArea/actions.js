import { GET_DATA } from './constants.js';

export function getData(payload) {
  return {
    type: GET_DATA,
    payload,
  };
}
