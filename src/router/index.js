import { createRouter, createWebHistory } from 'vue-router'
import DashboardView from '@/views/DashboardView.vue'
import AccountTypeListView from '@/views/account_type/AccountTypeListView.vue'

import LoanTypeListView from '@/views/loan_type/LoanTypeListView.vue'
import LoanListView from '@/views/loan/LoanListView.vue'
import LoanProposalListView from '@/views/loan_proposal/LoanProposalListView.vue'
import DepositTypeListView from '@/views/deposit_type/DepositTypeListView.vue'
import DepositListView from '@/views/deposit/DepositListView.vue'
import LoanTypeAddView from '@/views/loan_type/LoanTypeAddView.vue'
import LoanAddView from '@/views/loan/LoanAddView.vue'
import LoanProposalAddView from '@/views/loan_proposal/LoanProposalAddView.vue'
import DepositTypeAdd from '@/views/deposit_type/DepositTypeAdd.vue'
import DepositAdd from '@/views/deposit/DepositAdd.vue'
import WithdrawalListView from '@/views/withdrawal/WithdrawalListView.vue'
import CashDepositListView from '@/views/cash_deposit/CashDepositListView.vue'

import PaymentListView from '@/views/payment/PaymentListView.vue'
import InterestListView from '@/views/interest/InterestListView.vue'
import WithdrawalAdd from '@/views/withdrawal/WithdrawalAdd.vue'
import InterestAdd from '@/views/interest/InterestAdd.vue'
import CashDepositAdd from '@/views/cash_deposit/CashDepositAdd.vue'
import PaymentAdd from '@/views/payment/PaymentAdd.vue'
import AccountTypeAdd from '@/views/account_type/AccountTypeAdd.vue'
import AccountTypeEdit from '@/views/account_type/AccountTypeEdit.vue'
import LogInView from '@/views/LogInView.vue'
import SignUpView from '@/views/SignUpView.vue'
import CustomerView from '@/views/Customer/CustomerView.vue'
import LoanTypeEdit from '@/views/loan_type/LoanTypeEdit.vue'




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

      path: '/dashboard/loanType',
      name: 'loanType',
      component: LoanTypeListView
    },
    {
      path: '/dashboard/loanTypeAdd',
      name: 'loanTypeAdd',
      component: LoanTypeAddView
    },
    {
      path: '/dashboard/editLoanType/:id',
      name: 'editLoanType',
      component: LoanTypeEdit,
      props: true // Pass route params as props to the component
    },
    {
      path: '/dashboard/loan',
      name: 'loan',
      component: LoanListView
    },
    {
      path: '/dashboard/loanAdd',
      name: 'loanAdd',
      component:LoanAddView
    },
    {
      path: '/dashboard/loanProposal',
      name: 'loanProposal',
      component: LoanProposalListView
    },
    {
      path: '/dashboard/loanProposalAdd',
      name: 'loanProposalAdd',
      component: LoanProposalAddView
    },
    {
      path: '/dashboard/depositType',
      name: 'depositType',
      component: DepositTypeListView
    },
    {
      path: '/dashboard/depositTypeAdd',
      name: 'depositTypeAdd',
      component: DepositTypeAdd
    },
    {
      path: '/dashboard/deposit',
      name: 'deposit',
      component: DepositListView
    },
    {
      path: '/dashboard/depositAdd',
      name: 'depositAdd',
      component: DepositAdd

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
      path: '/dashboard/interest',
      name: 'interest',
      component: InterestListView
    },
    {
      path: '/dashboard/interestAdd',
      name: 'interestAdd',
      component: InterestAdd
    },{
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
  ]
})

export default router
