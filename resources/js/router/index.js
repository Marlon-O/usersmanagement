import { createRouter, createWebHistory } from "vue-router";

import UsersIndex from '../components/users/UsersIndex'
import UsersCreate from '../components/users/UsersCreate'
import UsersEdit from '../components/users/UsersEdit'

const routes = [
    {
        path: '/dashboard',
        name: 'users.index',
        component: UsersIndex
    },
    {
        path: '/users/create',
        name: 'users.create',
        component: UsersCreate
    },
    {
        path: '/users/:id/edit',
        name: 'users.edit',
        component: UsersEdit,
        props: true
    }

]

export default createRouter({
    history: createWebHistory(),
    routes
});