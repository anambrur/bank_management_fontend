import { createRouter, createWebHistory } from 'vue-router'
import DashboardView from '@/views/DashboardView.vue'
import AccountTypeListView from '@/views/account_type/AccountTypeListView.vue'
import WithdrawalListView from '@/views/withdrawal/WithdrawalListView.vue'
import CashDepositListView from '@/views/cash_deposit/CashDepositListView.vue'
import PaymentListView from '@/views/payment/PaymentListView.vue'
import InterestListView from '@/views/interest/InterestListView.vue'
import WithdrawalAdd from '@/views/withdrawal/WithdrawalAdd.vue'
import InterestAdd from '@/views/interest/InterestAdd.vue'
import CashDepositAdd from '@/views/cash_deposit/CashDepositAdd.vue'
import PaymentAdd from '@/views/payment/PaymentAdd.vue'



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
    },
  ]
})

export default router
