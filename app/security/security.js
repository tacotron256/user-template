
// security/security.js
export class Security {
  constructor() {

    this.permissionsTemplate = [
      {
        permissionsType: 'Dashboard',
        permissions: [
          {
            permissionID: 1,
            permissionLabel: 'Can view dashboard'
          }]
      },
      {
        permissionsType: 'Reports',
        permissions: [{
          permissionID: 2,
          permissionLabel: 'Can view reports'
        }]
      },
      {
        permissionsType: 'Security',
        permissions: [{
          permissionID: 3,
          permissionLabel: 'Can create new user'
        }]
      },
      {
        permissionsType: 'Utility',
        permissions: [{
          permissionID: 4,
          permissionLabel: 'Can change utility'
        }]
      },
      {
        permissionsType: 'Support',
        permissions: [{
          permissionID: 5,
          permissionLabel: 'Can do support stuff'
        }]
      }
    ];

    this.roles = [
      {
        roleID: 1,
        roleName: 'Administrator',
        permissions: [
          {
            permissionID: 1,
            permissionValue: true
          },
          {
            permissionID: 2,
            permissionValue: true
          }
        ]
      },
      {
        roleID: 2,
        roleName: 'User',
        permissions: [
          {
            permissionID: 1,
            permissionValue: false
          },
          {
            permissionID: 2,
            permissionValue: false
          }
        ]
      }
    ];

  }
  configureRouter(config, router) {
    console.log('configuring router');
    this.router = router;
    config.title = "Security";
    config.map([
      { route: '', name: 'users', moduleId: 'security/users/users', nav: true, title: 'Users', permissionsTemplate: this.permissionsTemplate },
      { route: 'users', name: 'users', moduleId: 'security/users/users', nav: true, title: 'Users', permissionsTemplate: this.permissionsTemplate },
      { route: 'roles', name: 'roles', moduleId: 'security/roles/roles', nav: true, title: 'Roles' },
      { route: 'permissions', name: 'permissions', moduleId: 'security/permissions/permissions', nav: true, title: 'Permissions' }
    ]);
  }
}