import VueRouter from 'vue-router';

const router = new VueRouter({
  routes: [{
    path: '/',
    name: 'editor',
    component: () => import('../pages/editor/index.vue'), // 被 Webpack 自动代码分割的异步组件 (路由懒加载)
  }],
});
export default router;
