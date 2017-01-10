
// security/security.js
export class Security {
  constructor() {

    this.permissionsTemplate = [
      {
        permissionsType: 'Dashboard',
        permissionSubcategories: [
          {
            category: 'Display',
            permissions: [{
              permissionID: 1,
              permissionLabel: 'Can view dashboard',
              permissionValue: true
            }]
          },
          {
            category: 'Edit',
            permissions: [{
              permissionID: 6,
              permissionLabel: 'Can edit dashboard',
              permissionValue: true
            }]
          },
          {
            category: 'Add',
            permissions: [{
              permissionID: 7,
              permissionLabel: 'Can add reports to dashboard',
              permissionValue: true
            }]
          },
          {
            category: 'Delete',
            permissions: [{
              permissionID: 8,
              permissionLabel: 'Can delete reports from dashboard',
              permissionValue: true
            }]
          },
        ]
      },
      {
        permissionsType: 'Reports',
        permissionSubcategories: [
          {
            category: 'Display',
            permissions: [{
              permissionID: 2,
              permissionLabel: 'Can view reports',
              permissionValue: false
            }]
          }]
      },
      {
        permissionsType: 'Security',
        permissionSubcategories: [
          {
            category: 'Creation',
            permissions: [{
              permissionID: 3,
              permissionLabel: 'Can create new user',
              permissionValue: false
            }]
          }]
      },
      {
        permissionsType: 'Utility',
        permissionSubcategories: [
          {
            category: 'Change',
            permissions: [{
              permissionID: 4,
              permissionLabel: 'Can change utility',
              permissionValue: false
            }]
          }]
      },
      {
        permissionsType: 'Support',
        permissionSubcategories: [
          {
            category: 'Support stuff',
            permissions: [{
              permissionID: 5,
              permissionLabel: 'Can do support stuff',
              permissionValue: false
            }]
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