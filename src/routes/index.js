// layout
import { DefaultLayout } from '../components/Layout';
import ProfileLayout from '../components/Layout/ProfileLayout';

import CartPage from '../pages/Cart'
import HomePage from '../pages/Home'
import LoginPage from '../pages/Login'
import SignupPage from '../pages/Signup'

const publicRoutes = [
    {path: '/', component: HomePage, layout: DefaultLayout},
    {path: '/login', component: LoginPage, layout: ProfileLayout},
    {path: '/signup', component: SignupPage, layout: ProfileLayout}
];

const privateRoutes = [
    {path: '/cart', component: CartPage, layout: DefaultLayout}
];

export { publicRoutes, privateRoutes };
