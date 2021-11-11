import { ITransaction } from '../Bank/Bank'
import './Transaction.css'

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