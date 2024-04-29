import { createRouter, createWebHistory } from 'vue-router'
import DashboardView from '@/views/DashboardView.vue'
import AccountTypeListView from '@/views/account_type/AccountTypeListView.vue'
import WithdrawalListView from '@/views/withdrawal/WithdrawalListView.vue'
import CashDepositListView from '@/views/cash_deposit/CashDepositListView.vue'
import AccountTypeAdd from '@/views/account_type/AccountTypeAdd.vue'

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
    }
  ]
})

export default router
