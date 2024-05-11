import { createRouter, createWebHistory } from 'vue-router'
import DashboardView from '@/views/DashboardView.vue'
import AccountTypeListView from '@/views/account_type/AccountTypeListView.vue'
import WithdrawalListView from '@/views/withdrawal/WithdrawalListView.vue'
import CashDepositListView from '@/views/cash_deposit/CashDepositListView.vue'
import PaymentListView from '@/views/payment/PaymentListView.vue'
import InterestListView from '@/views/interest/InterestListView.vue'
import WithdrawalAdd from '@/views/withdrawal/WithdrawalAdd.vue'

import CashDepositAdd from '@/views/cash_deposit/CashDepositAdd.vue'
import AccountTypeAdd from '@/views/account_type/AccountTypeAdd.vue'
import AccountTypeEdit from '@/views/account_type/AccountTypeEdit.vue'
import LogInView from '@/views/LogInView.vue'
import SignUpView from '@/views/SignUpView.vue'
import CustomerView from '@/views/Customer/CustomerView.vue'

import InterestAdd from '@/views/interest/InterestAdd.vue'
import PaymentAdd from '@/views/payment/PaymentAdd.vue'
import PaymentEdit from '@/views/payment/PaymentEdit.vue'



const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'login',
      component: LogInView
    },
    {
      path: '/signup',
      name: 'signup',
      component: SignUpView
    },
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
      path: '/dashboard/withdrawalAdd',
      name: 'withdrawalAdd',
      component: WithdrawalAdd
    },
    {
      path: '/dashboard/cashDeposit',
      name: 'cashDeposit',
      component: CashDepositListView
    },
    {

      path: '/dashboard/cashDepositAdd',
      name: 'cashDepositAdd',
      component: CashDepositAdd
    },
    {
      path: '/dashboard/payment',
      name: 'payment',
      component: PaymentListView
    },
    {
      path: '/dashboard/paymentAdd',
      name: 'paymentAdd',
      component: PaymentAdd
    },
    {
      path: '/dashboard/paymentEdit/:id',
      name: 'paymentEdit',
      component: PaymentEdit
    },
    {
      path: '/dashboard/interest',
      name: 'interest',
      component: InterestListView
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
      path: '/dashboard/customerList/',
      name: 'customerList',
      component: CustomerView,
    },
    {
      path: '/dashboard/interestAdd',
      name: 'interestAdd',
      component: InterestAdd
    }

  ]
})

export default router
