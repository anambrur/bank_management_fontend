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
  ]
})

export default router
