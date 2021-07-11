
const NumberScale = () => import('./view/NumberScale');
const ImgToGray = () => import('./view/ImgToGray');

const routes = [
    { path: '/numberscale', component: NumberScale },
    { path: '/imgtogray', component: ImgToGray }
]

const router = {
    mode: 'history',
    routes
}
export default router;