import Vue from 'vue'
import Router from 'vue-router'
import { normalizeURL, decode } from 'ufo'
import { interopDefault } from './utils'
import scrollBehavior from './router.scrollBehavior.js'

const _374bcd73 = () => interopDefault(import('..\\pages\\404.vue' /* webpackChunkName: "pages/404" */))
const _fd677e9a = () => interopDefault(import('..\\pages\\about-us.vue' /* webpackChunkName: "pages/about-us" */))
const _3e7c78ab = () => interopDefault(import('..\\pages\\blog\\index.vue' /* webpackChunkName: "pages/blog/index" */))
const _135eb26d = () => interopDefault(import('..\\pages\\cart\\index.vue' /* webpackChunkName: "pages/cart/index" */))
const _b1343ea6 = () => interopDefault(import('..\\pages\\chat.vue' /* webpackChunkName: "pages/chat" */))
const _054ede82 = () => interopDefault(import('..\\pages\\coming-soon.vue' /* webpackChunkName: "pages/coming-soon" */))
const _385e89fc = () => interopDefault(import('..\\pages\\contact-us\\index.vue' /* webpackChunkName: "pages/contact-us/index" */))
const _4e53f732 = () => interopDefault(import('..\\pages\\electronics.vue' /* webpackChunkName: "pages/electronics" */))
const _39871f5e = () => interopDefault(import('..\\pages\\faq.vue' /* webpackChunkName: "pages/faq" */))
const _655a68ed = () => interopDefault(import('..\\pages\\furniture.vue' /* webpackChunkName: "pages/furniture" */))
const _98c6dd70 = () => interopDefault(import('..\\pages\\grocery.vue' /* webpackChunkName: "pages/grocery" */))
const _fe28d338 = () => interopDefault(import('..\\pages\\login.vue' /* webpackChunkName: "pages/login" */))
const _34912e46 = () => interopDefault(import('..\\pages\\lookbook.vue' /* webpackChunkName: "pages/lookbook" */))
const _f0e4267e = () => interopDefault(import('..\\pages\\my-account\\index.vue' /* webpackChunkName: "pages/my-account/index" */))
const _2278c608 = () => interopDefault(import('..\\pages\\pharmacy.vue' /* webpackChunkName: "pages/pharmacy" */))
const _418b30ac = () => interopDefault(import('..\\pages\\privacy-policy.vue' /* webpackChunkName: "pages/privacy-policy" */))
const _55e337f8 = () => interopDefault(import('..\\pages\\register.vue' /* webpackChunkName: "pages/register" */))
const _18539e52 = () => interopDefault(import('..\\pages\\shop\\index.vue' /* webpackChunkName: "pages/shop/index" */))
const _6556155e = () => interopDefault(import('..\\pages\\vendor-dashboard\\index.vue' /* webpackChunkName: "pages/vendor-dashboard/index" */))
const _1b1d3dbe = () => interopDefault(import('..\\pages\\blog\\blog-2.vue' /* webpackChunkName: "pages/blog/blog-2" */))
const _1b2b553f = () => interopDefault(import('..\\pages\\blog\\blog-3.vue' /* webpackChunkName: "pages/blog/blog-3" */))
const _310e04de = () => interopDefault(import('..\\pages\\blog\\blog-single-2.vue' /* webpackChunkName: "pages/blog/blog-single-2" */))
const _5f2f713a = () => interopDefault(import('..\\pages\\cart\\cart-2.vue' /* webpackChunkName: "pages/cart/cart-2" */))
const _5f3d88bb = () => interopDefault(import('..\\pages\\cart\\cart-3.vue' /* webpackChunkName: "pages/cart/cart-3" */))
const _5f4ba03c = () => interopDefault(import('..\\pages\\cart\\cart-4.vue' /* webpackChunkName: "pages/cart/cart-4" */))
const _14bb3c15 = () => interopDefault(import('..\\pages\\cart\\empty-cart.vue' /* webpackChunkName: "pages/cart/empty-cart" */))
const _72328d50 = () => interopDefault(import('..\\pages\\contact-us\\contact-us-2.vue' /* webpackChunkName: "pages/contact-us/contact-us-2" */))
const _1b647dd1 = () => interopDefault(import('..\\pages\\my-account\\account-details.vue' /* webpackChunkName: "pages/my-account/account-details" */))
const _a56293d0 = () => interopDefault(import('..\\pages\\my-account\\account-info-edit.vue' /* webpackChunkName: "pages/my-account/account-info-edit" */))
const _24fb57de = () => interopDefault(import('..\\pages\\my-account\\addresses.vue' /* webpackChunkName: "pages/my-account/addresses" */))
const _69581b0b = () => interopDefault(import('..\\pages\\my-account\\checkout-1.vue' /* webpackChunkName: "pages/my-account/checkout-1" */))
const _6966328c = () => interopDefault(import('..\\pages\\my-account\\checkout-2.vue' /* webpackChunkName: "pages/my-account/checkout-2" */))
const _9bdaf4d8 = () => interopDefault(import('..\\pages\\my-account\\compare.vue' /* webpackChunkName: "pages/my-account/compare" */))
const _0413564c = () => interopDefault(import('..\\pages\\my-account\\downloads.vue' /* webpackChunkName: "pages/my-account/downloads" */))
const _7d4c1d12 = () => interopDefault(import('..\\pages\\my-account\\order-tracking.vue' /* webpackChunkName: "pages/my-account/order-tracking" */))
const _6e689b86 = () => interopDefault(import('..\\pages\\my-account\\orders.vue' /* webpackChunkName: "pages/my-account/orders" */))
const _7a8a8026 = () => interopDefault(import('..\\pages\\my-account\\wishlist.vue' /* webpackChunkName: "pages/my-account/wishlist" */))
const _314f4cb5 = () => interopDefault(import('..\\pages\\product\\product-single-2.vue' /* webpackChunkName: "pages/product/product-single-2" */))
const _315d6436 = () => interopDefault(import('..\\pages\\product\\product-single-3.vue' /* webpackChunkName: "pages/product/product-single-3" */))
const _563d3134 = () => interopDefault(import('..\\pages\\shop\\shop-2.vue' /* webpackChunkName: "pages/shop/shop-2" */))
const _56210232 = () => interopDefault(import('..\\pages\\shop\\shop-3.vue' /* webpackChunkName: "pages/shop/shop-3" */))
const _5604d330 = () => interopDefault(import('..\\pages\\shop\\shop-4.vue' /* webpackChunkName: "pages/shop/shop-4" */))
const _55e8a42e = () => interopDefault(import('..\\pages\\shop\\shop-5.vue' /* webpackChunkName: "pages/shop/shop-5" */))
const _5b9e0662 = () => interopDefault(import('..\\pages\\vendor-dashboard\\add-product.vue' /* webpackChunkName: "pages/vendor-dashboard/add-product" */))
const _7e20d5da = () => interopDefault(import('..\\pages\\vendor-dashboard\\order.vue' /* webpackChunkName: "pages/vendor-dashboard/order" */))
const _03c3140a = () => interopDefault(import('..\\pages\\vendor-dashboard\\product.vue' /* webpackChunkName: "pages/vendor-dashboard/product" */))
const _619e45b5 = () => interopDefault(import('..\\pages\\vendor-dashboard\\profile.vue' /* webpackChunkName: "pages/vendor-dashboard/profile" */))
const _4fbe1edc = () => interopDefault(import('..\\pages\\vendor-dashboard\\setting.vue' /* webpackChunkName: "pages/vendor-dashboard/setting" */))
const _91781966 = () => interopDefault(import('..\\pages\\index.vue' /* webpackChunkName: "pages/index" */))
const _3cc5d763 = () => interopDefault(import('..\\pages\\blog\\_slug.vue' /* webpackChunkName: "pages/blog/_slug" */))
const _ef29f500 = () => interopDefault(import('..\\pages\\product\\_id.vue' /* webpackChunkName: "pages/product/_id" */))

const emptyFn = () => {}

Vue.use(Router)

export const routerOptions = {
  mode: 'history',
  base: '/',
  linkActiveClass: 'nuxt-link-active',
  linkExactActiveClass: 'nuxt-link-exact-active',
  scrollBehavior,

  routes: [{
    path: "/404",
    component: _374bcd73,
    name: "404"
  }, {
    path: "/about-us",
    component: _fd677e9a,
    name: "about-us"
  }, {
    path: "/blog",
    component: _3e7c78ab,
    name: "blog"
  }, {
    path: "/cart",
    component: _135eb26d,
    name: "cart"
  }, {
    path: "/chat",
    component: _b1343ea6,
    name: "chat"
  }, {
    path: "/coming-soon",
    component: _054ede82,
    name: "coming-soon"
  }, {
    path: "/contact-us",
    component: _385e89fc,
    name: "contact-us"
  }, {
    path: "/electronics",
    component: _4e53f732,
    name: "electronics"
  }, {
    path: "/faq",
    component: _39871f5e,
    name: "faq"
  }, {
    path: "/furniture",
    component: _655a68ed,
    name: "furniture"
  }, {
    path: "/grocery",
    component: _98c6dd70,
    name: "grocery"
  }, {
    path: "/login",
    component: _fe28d338,
    name: "login"
  }, {
    path: "/lookbook",
    component: _34912e46,
    name: "lookbook"
  }, {
    path: "/my-account",
    component: _f0e4267e,
    name: "my-account"
  }, {
    path: "/pharmacy",
    component: _2278c608,
    name: "pharmacy"
  }, {
    path: "/privacy-policy",
    component: _418b30ac,
    name: "privacy-policy"
  }, {
    path: "/register",
    component: _55e337f8,
    name: "register"
  }, {
    path: "/shop",
    component: _18539e52,
    name: "shop"
  }, {
    path: "/vendor-dashboard",
    component: _6556155e,
    name: "vendor-dashboard"
  }, {
    path: "/blog/blog-2",
    component: _1b1d3dbe,
    name: "blog-blog-2"
  }, {
    path: "/blog/blog-3",
    component: _1b2b553f,
    name: "blog-blog-3"
  }, {
    path: "/blog/blog-single-2",
    component: _310e04de,
    name: "blog-blog-single-2"
  }, {
    path: "/cart/cart-2",
    component: _5f2f713a,
    name: "cart-cart-2"
  }, {
    path: "/cart/cart-3",
    component: _5f3d88bb,
    name: "cart-cart-3"
  }, {
    path: "/cart/cart-4",
    component: _5f4ba03c,
    name: "cart-cart-4"
  }, {
    path: "/cart/empty-cart",
    component: _14bb3c15,
    name: "cart-empty-cart"
  }, {
    path: "/contact-us/contact-us-2",
    component: _72328d50,
    name: "contact-us-contact-us-2"
  }, {
    path: "/my-account/account-details",
    component: _1b647dd1,
    name: "my-account-account-details"
  }, {
    path: "/my-account/account-info-edit",
    component: _a56293d0,
    name: "my-account-account-info-edit"
  }, {
    path: "/my-account/addresses",
    component: _24fb57de,
    name: "my-account-addresses"
  }, {
    path: "/my-account/checkout-1",
    component: _69581b0b,
    name: "my-account-checkout-1"
  }, {
    path: "/my-account/checkout-2",
    component: _6966328c,
    name: "my-account-checkout-2"
  }, {
    path: "/my-account/compare",
    component: _9bdaf4d8,
    name: "my-account-compare"
  }, {
    path: "/my-account/downloads",
    component: _0413564c,
    name: "my-account-downloads"
  }, {
    path: "/my-account/order-tracking",
    component: _7d4c1d12,
    name: "my-account-order-tracking"
  }, {
    path: "/my-account/orders",
    component: _6e689b86,
    name: "my-account-orders"
  }, {
    path: "/my-account/wishlist",
    component: _7a8a8026,
    name: "my-account-wishlist"
  }, {
    path: "/product/product-single-2",
    component: _314f4cb5,
    name: "product-product-single-2"
  }, {
    path: "/product/product-single-3",
    component: _315d6436,
    name: "product-product-single-3"
  }, {
    path: "/shop/shop-2",
    component: _563d3134,
    name: "shop-shop-2"
  }, {
    path: "/shop/shop-3",
    component: _56210232,
    name: "shop-shop-3"
  }, {
    path: "/shop/shop-4",
    component: _5604d330,
    name: "shop-shop-4"
  }, {
    path: "/shop/shop-5",
    component: _55e8a42e,
    name: "shop-shop-5"
  }, {
    path: "/vendor-dashboard/add-product",
    component: _5b9e0662,
    name: "vendor-dashboard-add-product"
  }, {
    path: "/vendor-dashboard/order",
    component: _7e20d5da,
    name: "vendor-dashboard-order"
  }, {
    path: "/vendor-dashboard/product",
    component: _03c3140a,
    name: "vendor-dashboard-product"
  }, {
    path: "/vendor-dashboard/profile",
    component: _619e45b5,
    name: "vendor-dashboard-profile"
  }, {
    path: "/vendor-dashboard/setting",
    component: _4fbe1edc,
    name: "vendor-dashboard-setting"
  }, {
    path: "/",
    component: _91781966,
    name: "index"
  }, {
    path: "/blog/:slug",
    component: _3cc5d763,
    name: "blog-slug"
  }, {
    path: "/product/:id?",
    component: _ef29f500,
    name: "product-id"
  }],

  fallback: false
}

export function createRouter (ssrContext, config) {
  const base = (config._app && config._app.basePath) || routerOptions.base
  const router = new Router({ ...routerOptions, base  })

  // TODO: remove in Nuxt 3
  const originalPush = router.push
  router.push = function push (location, onComplete = emptyFn, onAbort) {
    return originalPush.call(this, location, onComplete, onAbort)
  }

  const resolve = router.resolve.bind(router)
  router.resolve = (to, current, append) => {
    if (typeof to === 'string') {
      to = normalizeURL(to)
    }
    return resolve(to, current, append)
  }

  return router
}
