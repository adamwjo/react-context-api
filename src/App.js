import './App.css';

//Context
import { Provider }from './context/GlobalState'

//Components
import { Header } from './components/Header'
import { Balance } from './components/Balance'
import { IncomeExpenses } from './components/IncomeExpenses'
import { TransactionList } from './components/TransactionList'
import { TransactionForm } from './components/TransactionForm'



function App() {
  return (
    <Provider>
      <Header />
      <div className="container">
        <Balance />
        <IncomeExpenses />
        <TransactionList />
        <TransactionForm />
      </div>
    </Provider>
  )
}

export default App;
