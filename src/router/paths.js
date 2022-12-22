export const HOME = {
  name: 'home',
  path: '/'
}

export const LOGIN = {
  name: 'login',
  path: '/login'
}

export const REGISTER = {
  name: 'register',
  path: '/register'
}

export const WORKSHOP = {
  name: 'workshop',
  path: '/workshops/:id'
}

export const MyProfile = {
  name: 'me',
  path: '/me',
  children: {
    CurrentWorkshops: {
      name: 'me-current-workshops',
      path: 'current-workshops'
    },
    SelectWorkshops: {
      name: 'me-select-workshops',
      path: 'register-workshops'
    },
    MyEdit: {
      name: 'my-edit',
      path: 'edit'
    }
  }
}