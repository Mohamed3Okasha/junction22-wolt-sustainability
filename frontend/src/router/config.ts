const routes = [
  {
    path: ["/", "/home"],
    exact: true,
    component: "Home",
  },
  {
    path: ["/auth/", "/auth/home"],
    exact: true,
    component: "Home",
  },
  {
    path: ["/auth/orders", "/auth/orders"],
    exact: true,
    component: "Orders",
  },
  {
    path: ["/menu", "/menu"],
    exact: true,
    component: "Menu",
  },
];

export default routes;
