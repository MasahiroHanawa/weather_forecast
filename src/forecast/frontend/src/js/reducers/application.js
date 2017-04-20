import { REGISTER_TOKEN } from '../constants';

const initialState = {
  token: null,
  createdAt: null,
};

export default function access(state = initialState, action) {
  if (action.type === REGISTER_TOKEN) {
    return { token: state.token };
  }
  return state;
}
