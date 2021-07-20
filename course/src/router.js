
const NumberScale = () => import('./view/NumberScale');
const ImgToGray = () => import('./view/ImgToGray');
const MonacoEdit = () => import('./view/MonacoEdit');
const VueExtend = () => import('./view/VueExtend');

const routes = [
    { path: '/numberscale', component: NumberScale },
    { path: '/imgtogray', component: ImgToGray },
    { path: '/monacoedit', component: MonacoEdit },
    { path: '/vueextend', component: VueExtend }
]

const router = {
    mode: 'history',
    routes
}
export default router;