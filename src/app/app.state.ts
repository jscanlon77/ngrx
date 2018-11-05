import { Blockchain } from './components/blockchain/blockchain.model';
import { AuthActionTypes } from './store/actions/user.actions';
import * as auth from './store/reducers/auth.reducers';




export interface AppState {
  readonly blockchain: Blockchain[];
  authState: auth.State;
}

export const reducers = {
    auth: auth.reducer
  };
