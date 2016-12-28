
// app.js
export class App {
  constructor() {
      console.log('constructor');
  }
  configureRouter (config, router) {
      console.log('configuring router');
    this.router = router;
    config.title = "Home";
    config.map([
      {route: '', name: 'home', moduleId: 'home/home', nav: true, title: 'Home'},
      {route: 'home', name: 'home', moduleId: 'home/home', nav: true, title: 'Home'},
      {route: 'configuration', name: 'configuration', moduleId: 'configuration/configuration', nav: true, title: 'Configuration'},
      {route: 'publishing', name: 'publishing', moduleId: 'publishing/publishing', nav: true, title: 'Publishing'},
      {route: 'reports', name: 'reports', moduleId: 'reports/reports', nav: true, title: 'Reports'},
      {route: 'safety', name: 'safety', moduleId: 'safety/safety', nav: true, title: 'Safety'},
      {route: 'security', name: 'security', moduleId: 'security/security', nav: true, title: 'Security'},
      {route: 'configuration', name: 'configuration', moduleId: 'configuration/configuration', nav: true, title: 'Configuration'},
      {route: 'warning', name: 'warning', moduleId: 'warning/warning', nav: true, title: 'Warning'},
      {route: 'guest', name: 'guest', moduleId: 'guest/guest', nav: true, title: 'Guest'}
    ]);
  }
}