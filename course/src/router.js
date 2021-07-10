
const NumberScale = () => import('./view/NumberScale');

const routes = [
    { path: '/numberscale', component: NumberScale },
]

const router = {
    mode: 'history',
    routes
}
export default router;