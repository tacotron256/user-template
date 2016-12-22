export class Users {
  permissionsTemplate;
  selectedUser;

  activate(params, routeconfig) {
    //pass in permission template from router (parent controller)
    // console.log(this);
    this.permissionsTemplate = routeconfig.permissionsTemplate || null;
    console.log(this.permissionsTemplate);
  }
  constructor() {

    this.users = [
      {
        firstName: 'Bob',
        lastName: 'Baumgardner',
        email: 'sbaumgardner27@gmail.com',
        DODID: '1234567890',
        role: 'User',
        isActive: false,
        permissions: [
          {
            permissionID: 1,
            permissionValue: true
          }
        ]
      },
      {
        firstName: 'James',
        lastName: 'Jamerson',
        email: 'jjamerson@gmail.com',
        DODID: '1234567890',
        role: 'Administrator',
        isActive: true
      },
      {
        firstName: 'Robert',
        lastName: 'Robertson',
        email: 'rrobertson@gmail.com',
        DODID: '1234567890',
        role: 'User',
        isActive: false
      },
      {
        firstName: 'Steven',
        lastName: 'Stevenson',
        email: 'sstevenson@gmail.com',
        DODID: '1234567890',
        role: 'User Administrator',
        isActive: true
      },
      {
        firstName: 'Matt',
        lastName: 'Matherson',
        email: 'mmatherson@gmail.com',
        DODID: '1234567890',
        role: 'User',
        isActive: false
      },
      {
        firstName: 'Matt',
        lastName: 'Matherson',
        email: 'mmatherson@gmail.com',
        DODID: '1234567890',
        role: 'User',
        isActive: false
      },
      {
        firstName: 'Matt',
        lastName: 'Matherson',
        email: 'mmatherson@gmail.com',
        DODID: '1234567890',
        role: 'User',
        isActive: false
      },
      {
        firstName: 'Matt',
        lastName: 'Matherson',
        email: 'mmatherson@gmail.com',
        DODID: '1234567890',
        role: 'User',
        isActive: false
      }
    ];

  }

  selectUser(user){
    this.selectedUser = user;
  }
}