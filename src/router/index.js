import Vue from 'vue'
import Router from 'vue-router'
import SchoolLoan from '@/components/Allpage/Register/SchoolLoan/index'
import Department from '@/components/Allpage/Department/index'
import SchoolAffair from '@/components/Allpage/SchoolAffair/index'
import Dorm from '@/components/Allpage/Dorm/index'
import DormDetail from '@/components/Allpage/Dorm/DormDetail/index'
import Food from '@/components/Allpage/Food/index'
import FoodDetail from '@/components/Allpage/Food/FoodDetail/index'
import Hospital from '@/components/Allpage/Hospital/index'
import HospitalDetail from '@/components/Allpage/Hospital/HospitalDetail/index'
import Life from '@/components/Allpage/Life/index'
Vue.use(Router)

export default new Router({
  mode: 'history',
  base: __dirname,
  routes: [{
    path: '/',
    name: 'dashboard',
    component: () => import('@/components/dashboard')},
  {
    path: '/login',
    name: 'login',
    component: () => import('@/login/login'),
    hidden: true
  },
  {
    path: '/Account',
    name: 'account',
    component: () => import('@/components/Account/index')
  },
  {
    path: '/Reflection',
    name: 'reflection',
    component: () => import('@/components/Reflection/index')
  },
  {
    path: '/Push',
    name: 'push',
    component: () => import('@/components/Push/index')
  },
  {
    path: '/User',
    name: 'user',
    component: () => import('@/components/User')
  },
  {
    path: '/index',
    name: 'index',
    component: () => import('@/layout/index')
  },
  {
    path: '/Keyword',
    name: 'keyword',
    component: () => import('@/components/Keyword/index')
  },
  {
    path: '/data',
    name: 'Data',
    component: () => import('@/components/Data/index')
  },
  {
    path: '/Allpage',
    name: 'Allpage',
    component: () => import('@/components/AllPage/index'),
    children: [
      { name: 'SchoolLoan',
        path: '/schoolLoan',
        component: SchoolLoan},
      { name: 'Department',
        path: '/department',
        component: Department},
      { name: 'SchoolAffair',
        path: '/schoolAffair',
        component: SchoolAffair},
      { name: 'Dorm',
        path: '/dorm',
        component: Dorm},
      {
        name: 'DormDetail',
        path: '/detail/:id',
        component: DormDetail
      },
      { name: 'Food',
        path: '/food',
        component: Food},
      {
        name: 'FoodDetail',
        path: '/fooddetail/:id',
        component: FoodDetail
      },
      { name: 'Hospital',
        path: '/hospital',
        component: Hospital},
      {
        name: 'HospitalDetail',
        path: '/hospitaldetail/:id',
        component: HospitalDetail
      },
      { name: 'Life',
        path: '/life',
        component: Life},
      { name: 'SchoolLoan',
        path: '/schoolLoan',
        component: SchoolLoan}
    ]
  }
  ]
})
