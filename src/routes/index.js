import express from "express";
import userRoute from "./user.route";
import registerRoute from "./register.route";
import logInRoute from "./login.route";
import filmListRoute from "./filmList.route";
import filmRoute from "./film.route";
import topViewRoute from "./topView.route";
import shopRoute from "./shop.route";
import adminRoute from "./admin.route";
import logOutRoute from "./logout.route";
import categoriesRoute from "./categories.route";
import movieRoute from "./movies.route";
import profileRoute from "./profile.route";

const router = express.Router();

const defaultRoutes = [
  {
    path: "/user",
    route: userRoute,
  },
  {
    path: "/login",
    route: logInRoute,
  },
  {
    path: "/register",
    route: registerRoute,
  },
  {
    path: "/logout",
    route: logOutRoute,
  },
  {
    path: "/danh-sach",
    route: filmListRoute,
  },
  {
    path: "/phim",
    route: filmRoute,
  },
  {
    path: "/top-luot-xem",
    route: topViewRoute,
  },
  {
    path: "/shop",
    route: shopRoute,
  },
  {
    path: "/admin",
    route: adminRoute,
  },
  {
    path: "/categories",
    route: categoriesRoute,
  },
  {
    path: "/movies",
    route: movieRoute,
  },
  {
    path: "/profile",
    route: profileRoute,
  },
];

// set router for defaultRoutes
defaultRoutes.forEach((route) => {
  router.use(route.path, route.route);
});

router.route("/").get((req, res) => {
  res.render("index", { title: "Trang chủ" });
});

export default router;
