import Vue from "vue";
import VueRouter from "vue-router";
import StockMarket from "../views/Stock-market.vue";
import Market from "../views/Market.vue";
import Warehouse from "../views/Warehouse.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Stock-market",
    component: StockMarket
  },
  {
    path: "/warket",
    name: "Market",
    component: Market
  },
  {
    path: "/warehouse",
    name: "Warehouse",
    component: Warehouse
  }
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes
});

export default router;
