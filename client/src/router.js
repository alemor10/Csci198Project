import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'
import store from './store';

Vue.use(Router)

const router = new Router({
  mode: 'history',
  routes: [{
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/login',
      name: 'login',
      component: () => import('./views/Login.vue'),
      meta: {
        requiresGuest: true
      }
    },
    {
      path: '/register',
      name: 'register',
      component: () => import('./views/Register.vue'),
      meta: {
        requiresGuest: true
      }
    },
    {
      path: '/dashboard',
      name: 'dashboard',
      component: () => import('./views/Dashboard.vue'),
      meta: {
         requiresAuth: true
      }
    },
    {
      path: '/forms',
      name: 'forms',
      component: () => import('./views/Forms.vue'),
      meta: {
         requiresAuth: true,
      }
    },
    {
      path: '/studentforms',
      name: 'studentforms',
      component: () => import('./views/StudentForms.vue'),
      meta: {
         requiresAuth: true,
         requiresInstructor:true
      }
    },
    {
      path: '/csci190',
      name: 'csci190',
      component: () => import('./views/Forms/csci190.vue'),
      meta: {
         requiresAuth: true,
         requiresStudent: true

      }
    },
    {
      path: '/csci194',
      name: 'csci194',
      component: () => import('./views/Forms/csci194.vue'),
      meta: {
         requiresAuth: true,
         requiresStudent: true

      }
    },
    {
      path: '/csci198',
      name: 'csci198',
      component: () => import('./views/Forms/csci198.vue'),
      meta: {
        requiresAuth: true,
        requiresStudent:true
      }
    },
    {
      path: '/csci290',
      name: 'csci290',
      component: () => import('./views/Forms/csci290.vue'),
      meta: {
         requiresAuth: true,
         requiresStudent: true
      }
    },
    {
      path: '/csci298',
      name: 'csci298',
      component: () => import('./views/Forms/csci298.vue'),
      meta: {
        requiresAuth: true,
        requiresStudent: true
      }
    },
    {
      path: '/csci298C',
      name: 'csci298C',
      component: () => import('./views/Forms/csci298C.vue'),
      meta: {
         requiresAuth: true,
         requiresStudent: true
      }
    },
    {
      path: '/csci299',
      name: 'csci299',
      component: () => import('./views/Forms/csci299.vue'),
      meta: {
         requiresAuth: true,
         requiresStudent: true
      }
    },
  ]
});


router.beforeEach((to, from, next) => {

  if (to.matched.some(record => record.meta.requiresAuth)) {
    if (!store.getters.isLoggedIn) {
      // Redirect to the Login Page
      next('/login');
    } 
    else {
      let user = store.getters.user

      if(to.matched.some(record => record.meta.requiresStudent ||to.matched.some(record => record.meta.requiresStudent) ))
      {
        if(user['role'] != 'Student')
        {
          window.console.log('suppy',user['role'])
          next('Dashboard');
        }
        else {
          window.console.log(user)
          next();
        }
      }
      else if (to.matched.some(record => record.meta.requiresInstructor))
      {
       
        if (user)
          window.console.log('why',user)
        else {
          window.console.log('why')
        }
        if(user['role'] != 'Instructor')
        {
          window.console.log('suppy2',user)
          next('Dashboard');
        }
        else {
          next();
        }
      
      }
      else{
        next();
      }
    }
  }
  else if (to.matched.some(record => record.meta.requiresGuest)) {
    if (store.getters.isLoggedIn) {
      // Redirect to the Login Page
      next('/profile');
    } 
    else {
      next();
    }
  }
  else {
    next()
  }
});

export default router;