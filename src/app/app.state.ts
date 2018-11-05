import { Blockchain } from './components/blockchain/blockchain.model';



export interface AppState {
  readonly blockchain: Blockchain[];
}
