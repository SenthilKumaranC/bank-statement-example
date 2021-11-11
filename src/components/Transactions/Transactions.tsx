import React from "react";
import { ITransaction } from "../Bank/Bank";
import Transaction from "../Transaction/Transaction";

export interface TransactionsProps extends React.ComponentPropsWithoutRef<any> {
    transactions: ITransaction[]
}

const Transactions = ({ transactions }: TransactionsProps) => {

    return <>

        {
            transactions.map((transaction,index) => <Transaction key={index}  {...transaction}></Transaction>)
        }

    </>
}

export default Transactions