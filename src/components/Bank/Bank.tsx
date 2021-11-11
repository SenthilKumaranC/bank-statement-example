import useBank from '../../hooks/useBank'
import './Bank.css'

const Bank = () => {

    const {state,transferInput,depositInput,transferMoney,depositMoney} = useBank();

    return <div className="Bank">

        <div>My Bank Balance : {state.balance}</div>

        <input ref={transferInput} placeholder="Enter Amount" type="number"></input>
        <button onClick={transferMoney}>Transfer</button>

        <input ref={depositInput} placeholder="Enter Amount" type="number"></input>
        <button onClick={depositMoney}>Deposit</button>

    </div>
}

export default Bank

export const UnionBank = () => {

    const {state,transferInput,depositInput,transferMoney,depositMoney} = useBank();

    return <div className="Bank">

        <div>My Bank Balance : {state.balance}</div>

        <input ref={transferInput} placeholder="Enter Amount" type="number"></input>
        <button onClick={transferMoney}>Transfer</button>

        <input ref={depositInput} placeholder="Enter Amount" type="number"></input>
        <button onClick={depositMoney}>Deposit</button>

    </div>
}

