import App from "@/app";
// import AuthRoute from '@routes/auth.route';
// import IndexRoute from '@routes/index.route';
// import UsersRoute from '@routes/users.route';
// import RolesRoute from '@routes/roles.route';
// import validateEnv from '@utils/validateEnv';

// validateEnv();
console.log("Valid");
const app = new App([
	// new IndexRoute(),
	// new UsersRoute(),
	// new AuthRoute(),
	// new RolesRoute()
]);
//const app = new App([new IndexRoute(), new UsersRoute(), new AuthRoute()]);

app.listen();
