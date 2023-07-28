import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const routes = [{
    path:'/',
    name:'Index',
    component:()=>import('../views/Index')
}]

const router = new VueRouter({mode:'hash',routes});
router.beforeEach((to,from,next)=>{
    const title = to.meta && to.meta.title;
    if (title) {
        document.title = title;
    }
    next();
})
export default router