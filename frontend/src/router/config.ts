const routes = [
  {
    path: ["/", "/home"],
    exact: true,
    component: "Guest",
  },
  {
    path: ["/auth/", "/auth/home"],
    exact: true,
    component: "Authenticated",
  },
  {
    path: ["/auth/meals", "/auth/meals"],
    exact: true,
    component: "Meals",
  },
];

export default routes;
