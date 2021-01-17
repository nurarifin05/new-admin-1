import Menu1 from "../components/Pages/menu1"
import Menu2 from "../components/Pages/menu2"
import Menu3 from "../components/Pages/menu3"
import Menu4 from "../components/Pages/menu4"


export const router = [
  {
        icon: '',
        label: 'menu1',
        path: '/menu1',
        template: 'dashboard',
        component: Menu1,
    },
    {
        icon: '',
        label: 'menu2',
        path: '/menu2',
        template: 'dashboard',
        component: Menu2,
    },
    {
        icon: '',
        label: 'menu3',
        path: '/menu3',
        template: 'dashboard',
        component: Menu3,
    },
    {
        icon: '',
        label: 'menu4',
        path: '/menu4',
        template: 'dashboard',
        component: Menu4,
    }
]