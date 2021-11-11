import './Transaction.css'

export interface ITransaction {
    date: Date;
    amount: number;
    transactionType: string;
}

interface TransactionProps extends ITransaction, React.ComponentPropsWithoutRef<any> {}

const Transaction = (props:TransactionProps) => {

    const {date,transactionType,amount} = props;

    return <div className="Transaction">
        <div>{date.toDateString()}</div>
        <div>{transactionType}</div>
        <div>{amount}</div>
    </div>
}

export default Transaction