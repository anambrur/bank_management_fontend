import { createRouter, createWebHistory } from 'vue-router'
import DashboardView from '@/views/DashboardView.vue'
import AccountTypeListView from '@/views/account_type/AccountTypeListView.vue'
import WithdrawalListView from '@/views/withdrawal/WithdrawalListView.vue'
import CashDepositListView from '@/views/cash_deposit/CashDepositListView.vue'
import AccountTypeAdd from '@/views/account_type/AccountTypeAdd.vue'
import AccountTypeEdit from '@/views/account_type/AccountTypeEdit.vue'
import ExpenseCategoryAddView from '@/views/expensecategory/ExpenseCategoryAddView.vue'
import ExpenseCategoryList from '@/views/expensecategory/ExpenseCategoryList.vue'
import ExpenseCategoryEditView from '@/views/expensecategory/ExpenseCategoryEditView.vue'
import ExpenseListView from '@/views/expenses/ExpenseListView.vue'
import ExpenseAddView from '@/views/expenses/ExpenseAddView.vue'
import ExpenseEditView from '@/views/expenses/ExpenseEditView.vue'
import EmployeeTypeListView from '@/views/employeeType/EmployeeTypeListView.vue'

import EmployeeTypeAdd from '@/views/employeeType/EmployeeTypeAdd.vue'
import EmployeeTypeEditView from '@/views/employeeType/EmployeeTypeEditView.vue'
import EmployeeListView from '@/views/employees/EmployeeListView.vue'
import EmployeeAdd from '@/views/employees/EmployeeAdd.vue'


const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/dashboard',
      name: 'dashboard',
      component: DashboardView
    },
    {
      path: '/dashboard/accountType',
      name: 'accountType',
      component: AccountTypeListView
    },
    {
      path: '/dashboard/withdrawal',
      name: 'withdrawal',
      component: WithdrawalListView
    },
    {
      path: '/dashboard/cashDeposit',
      name: 'cashDeposit',
      component: CashDepositListView
    },
    {
      path: '/dashboard/accountTypeAdd',
      name: 'accountTypeAdd',
      component: AccountTypeAdd
    },
    {
      path: '/dashboard/editAccountType/:id',
      name: 'editAccountType',
      component: AccountTypeEdit,
      props: true // Pass route params as props to the component
    },

    {
      path: '/dashboard/expesecategoryadd',
      name: 'expesecategoryadd',
      component: ExpenseCategoryAddView
    },
    {
      path: '/dashboard/expensecategory',
      name: 'expensecategory',
      component: ExpenseCategoryList 
    },

    {
      path: '/dashboard/expensecategoryedit/:id',
      name: 'expensecategoryedit',
      component: ExpenseCategoryEditView,
      props: true
    },


    {
      path: '/dashboard/expense',
      name: 'expense',
      component: ExpenseListView
    },
    {
      path: '/dashboard/expenseadd',
      name: 'expenseadd',
      component: ExpenseAddView
    },
    {
      path: '/dashboard/expenseedit/:id',
      name: 'expenseedit',
      component: ExpenseEditView,
      props: true
    },

    {
      path: '/dashboard/employeeType',
      name: 'employeeType',
      component: EmployeeTypeListView
    },
    {
      path: '/dashboard/employeeTypeadd',
      name: 'employeeTypeadd',
      component: EmployeeTypeAdd
    },
    {
      path: '/dashboard//dashboard/employeeTypeEdit/:id',
      name: 'employeeTypeEdit',
      component: EmployeeTypeEditView
    },


    {
      path: '/dashboard/employee',
      name: 'employee',
      component: EmployeeListView
    },
    {
      path: '/dashboard/employeeadd',
      name: 'employeeadd',
      component: EmployeeAdd
    },
  ]
})

export default router
