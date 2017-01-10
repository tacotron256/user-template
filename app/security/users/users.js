
export class Users {
  permissionsTemplate;
  selectedUser;

  activate(params, routeconfig) {
    //pass in permission template from router (parent controller)
    this.permissionsTemplate = routeconfig.permissionsTemplate || null;
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
        userPermissions: []
      },
      {
        firstName: 'James',
        lastName: 'Jamerson',
        email: 'jjamerson@gmail.com',
        DODID: '1234567890',
        role: 'Administrator',
        isActive: true,
        userPermissions: []
      },
      {
        firstName: 'Robert',
        lastName: 'Robertson',
        email: 'rrobertson@gmail.com',
        DODID: '1234567890',
        role: 'User',
        isActive: false,
        userPermissions: []
      },
      {
        firstName: 'Steven',
        lastName: 'Stevenson',
        email: 'sstevenson@gmail.com',
        DODID: '1234567890',
        role: 'User Administrator',
        isActive: true,
        userPermissions: []
      },
      {
        firstName: 'Matt',
        lastName: 'Matherson',
        email: 'mmatherson@gmail.com',
        DODID: '1234567890',
        role: 'User',
        isActive: false,
        userPermissions: []
      },
      {
        firstName: 'Matt',
        lastName: 'Matherson',
        email: 'mmatherson@gmail.com',
        DODID: '1234567890',
        role: 'User',
        isActive: false,
        userPermissions: []
      },
      {
        firstName: 'Matt',
        lastName: 'Matherson',
        email: 'mmatherson@gmail.com',
        DODID: '1234567890',
        role: 'User',
        isActive: false,
        userPermissions: []
      },
      {
        firstName: 'Matt',
        lastName: 'Matherson',
        email: 'mmatherson@gmail.com',
        DODID: '1234567890',
        role: 'User',
        isActive: false,
        userPermissions: []
      }
    ];

  }

  addNewUser() {

  }

  selectUser(user) {

    //if user has no associated permissions list
    if (user.userPermissions.length === 0) {
      //Make a call to the database to get user permissions template. for now we will use the default template. make a deep copy
      user.userPermissions = $.extend(true, [], this.permissionsTemplate);
    }
    //set selected user
    this.selectedUser = user;
  }
}