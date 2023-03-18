// layout
import { DefaultLayout, CartLayout, ProfileLayout } from '../components/Layout';


import CartPage from '../pages/Cart'
import HomePage from '../pages/Home'
import LoginPage from '../pages/Login'
import SignupPage from '../pages/Signup'
import ProductPage from '../pages/ProductPage';
import ProductDetail from '../pages/ProductDetail';

const publicRoutes = [
    {path: '/', component: ProductPage, layout: DefaultLayout},
    {path: '/login', component: LoginPage, layout: ProfileLayout},
    {path: '/signup', component: SignupPage, layout: ProfileLayout},
    {path: '/home', component: HomePage, layout: ProfileLayout},
    {path: '/cart', component: CartPage, layout: CartLayout},
    {path: '/product', component: ProductDetail, layout: CartLayout}
];

const privateRoutes = [
    {path: '/cart', component: CartPage, layout: DefaultLayout}
];

export { publicRoutes, privateRoutes };
