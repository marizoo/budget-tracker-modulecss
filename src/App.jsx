import React from 'react'
import {app, containerTop, containerBottom, titleBottom, addExpenseContainer} from './App.module.css'
import AddExpenseForm from './components/AddExpenseForm'
import Budget from './components/Budget'
import ExpenseList from './components/ExpenseList'
import ExpenseTotal from './components/ExpenseTotal'
import Remaining from './components/Remaining'
import { AppProvider } from './context/AppContext'

const App = () => {
  return (
    <AppProvider>
      <div className={app}>
        
          <div className={containerTop}>
              <h2>My Budget Planner</h2>
              <Budget />
              <Remaining />
              <ExpenseTotal />
          </div>

          <div className={containerBottom}>
            <h2 className={titleBottom}>Expenses List</h2>
            <ExpenseList />
          </div>

          <div className={addExpenseContainer}>
            <h2 className={titleBottom}>Add Expense</h2>
            <AddExpenseForm />
          </div>
        
      </div>
    </AppProvider>
  )
}

export default App
