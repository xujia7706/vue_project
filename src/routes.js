import basic from './components/basic.vue'
import data from './components/data.vue'
import form from './components/form.vue'
import other from './components/other.vue'
import home from './components/home.vue'
let routes = [
    {
        path: '/',
        component: home,
        name: '导航一',
        iconCls: '',
        children: [
            { path: '/basic', component: basic, name: 'basic' }
        ]
    },
    {
        path: '/',
        component: home,
        name: '导航二',
        iconCls: '',
        children: [
            { path: '/data', component: data, name: 'data' }
        ]
    },{
        path: '/',
        component: home,
        name: '导航三',
        iconCls: '',
        children: [
            { path: '/form', component: form, name: 'form' }
        ]
    },{
        path: '/',
        component: home,
        name: '',
        iconCls: '',
        leaf:true,
        children: [
            { path: '/other', component: other, name: 'other' }
        ]
    }
];
export default routes;
