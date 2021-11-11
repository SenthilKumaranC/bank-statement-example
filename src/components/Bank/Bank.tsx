import { useCallback, useState } from 'react';
import useBank from '../../hooks/useBank'
import Transactions from '../Transactions/Transactions';
import './Bank.css'

export interface ITransaction {
    date: Date;
    amount: number;
    transactionType: string;
}

const Bank = () => {

    const { state, transferInput, depositInput, transferMoney, depositMoney } = useBank();

    const [transactions, setTransactions] = useState<ITransaction[]>([])

    const triggerTransactionTransfer = useCallback(() => {
        transferMoney();
        const newTransaction: ITransaction = { date: new Date(), amount: transferInput.current.value, transactionType: "Transfer" };
        ///setTransactions((prevTransactions)=> [...prevTransactions,newTransaction] );
        setTransactions([...transactions,newTransaction]);
    }, [transactions])


    const triggerTransactionDesposit = useCallback(() => {
        depositMoney();
        const newTransaction: ITransaction = { date: new Date(), amount: depositInput.current.value, transactionType: "Deposit" };
        ///setTransactions((prevTransactions)=> [...prevTransactions,newTransaction] );
        setTransactions([...transactions,newTransaction]);
    }, [transactions])

    return <div className="Bank">

        <div>My Bank Balance : {state.balance}</div>

        <input ref={transferInput} placeholder="Enter Amount" type="number"></input>
        <button onClick={triggerTransactionTransfer}>Transfer</button>

        <input ref={depositInput} placeholder="Enter Amount" type="number"></input>
        <button onClick={triggerTransactionDesposit}>Deposit</button>

        <Transactions transactions={transactions}></Transactions>

    </div>
}

export default Bank