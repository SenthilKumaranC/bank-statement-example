import React, { useMemo } from "react";
import Transaction, { ITransaction } from "../Transaction/Transaction";

export interface ITransactions{
    transactions: ITransaction[]
}

interface TransactionsProps extends ITransactions ,React.ComponentPropsWithoutRef<any> {}

const Transactions = ({ transactions }: TransactionsProps) => {

    const transactionsUI = useMemo(() => {
        return transactions.map((transaction, index) => <Transaction key={index}  {...transaction}></Transaction>)
    }, [transactions])

    return <>

        {
            transactionsUI
        }

    </>
}

export default Transactions