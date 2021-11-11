import { useReducer, useRef, useCallback } from "react";

const BANK_ACTIONS = {
    TRANSFER: "TRANSFER",
    DEPOSIT: "DEPOSIT"
}



export interface IBankDetails {
    balance: number;
    fdBalance: number;
    statement: any[];
}

const initialBankDetails: IBankDetails = { balance: 0, fdBalance: 10000, statement: [] }

const processBankCommands = (oldBankDetails: IBankDetails, action: any) => {

    let newBankDetails = { ...oldBankDetails };

    const { amount } = action.payload;

    if (action.type === BANK_ACTIONS.DEPOSIT) {
        newBankDetails.balance = oldBankDetails.balance + amount
    }
    if (action.type === BANK_ACTIONS.TRANSFER) {
        newBankDetails.balance = oldBankDetails.balance - amount
    }
    return newBankDetails;

}

const useBank = () => {
    const [state, dispatch] = useReducer(processBankCommands, initialBankDetails);

    const transferInput = useRef<any>();
    const depositInput = useRef<any>();

    const transferMoney = useCallback(() => {
        dispatch({
            type: BANK_ACTIONS.TRANSFER,
            payload: { amount: Number(transferInput.current.value) }
        })
        transferInput.current.value = "";
    }, []);

    const depositMoney = useCallback(() => {
        dispatch({
            type: BANK_ACTIONS.DEPOSIT,
            payload: { amount: Number(depositInput.current.value) }
        })
        depositInput.current.value = "";
    }, []);

    return {state,transferInput,depositInput,transferMoney,depositMoney};
}

export default useBank;