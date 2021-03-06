import logo from './logo.svg';
import './App.css';
import {useSelector, useDispatch} from 'react-redux'
import {bindActionCreators} from 'redux'
import {actionCreators} from './state/index'

function App() {
  // const state = useSelector((state)=> state)
  const account = useSelector((state)=> state.account)
  const dispatch = useDispatch()

  const {depositMoney, widthdrawMoney} = bindActionCreators(actionCreators, dispatch)
  
  return (
    <div className="App">
      <h1>{account}</h1>
      <button onClick={()=> depositMoney(100)}>Deposit</button>
      <button onClick={()=> widthdrawMoney(50)} >widthdrawMoney</button>
    </div>
  );
}

export default App;
