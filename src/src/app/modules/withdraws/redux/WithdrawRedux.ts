import { WithdrawModel} from '../models/WithdrawModel'

const initialWithdrawState: WithdarwState = {
  withdraw: undefined
};

export interface WithdarwState {
  withdraw?: WithdrawModel;
}

