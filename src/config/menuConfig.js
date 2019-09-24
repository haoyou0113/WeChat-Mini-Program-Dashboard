const menuList = [
  {
    title: 'Home',
    key: '/admin/home'
  },
  {
    title: 'UI',
    key: '/admin/ui',
    children: [
      {
        title: 'Button',
        key: '/admin/ui/buttons'
      },
      {
        title: 'Bounced',
        key: '/admin/ui/modals'
      },
      {
        title: 'Loading',
        key: '/admin/ui/loadings'
      },
      {
        title: 'notifications',
        key: '/admin/ui/notification'
      },
      {
        title: 'Global Message',
        key: '/admin/ui/messages'
      },
      {
        title: 'Tab',
        key: '/admin/ui/tabs'
      },
      {
        title: 'Photo gallery',
        key: '/admin/ui/gallery'
      },
      {
        title: 'Sliders',
        key: '/admin/ui/carousel'
      }
    ]
  },
  {
    title: 'Form',
    key: '/admin/form',
    children: [
      {
        title: 'Login',
        key: '/admin/form/login'
      },
      {
        title: 'Sign in',
        key: '/admin/form/reg'
      }
    ]
  },
  {
    title: 'Table',
    key: '/admin/table',
    children: [
      {
        title: 'Basic Form',
        key: '/admin/table/basic'
      },
      {
        title: 'Advanced Form',
        key: '/admin/table/high'
      }
    ]
  },
  {
    title: 'Rich Text',
    key: '/admin/rich'
  },
  {
    title: 'City Management',
    key: '/admin/city'
  },
  {
    title: 'Orders Management',
    key: '/admin/order',
    btnList: [
      {
        title: 'Orders Details',
        key: 'detail'
      },
      {
        title: 'Closed Orders',
        key: 'finish'
      }
    ]
  },
  {
    title: 'Employee Management',
    key: '/admin/user'
  },
  {
    title: 'Location of Bikes',
    key: '/admin/bikeMap'
  },
  {
    title: 'Charts',
    key: '/admin/charts',
    children: [
      {
        title: 'Bar Charts',
        key: '/admin/charts/bar'
      },
      {
        title: 'Pie Charts',
        key: '/admin/charts/pie'
      },
      {
        title: 'Line Charts',
        key: '/admin/charts/line'
      }
    ]
  },
  {
    title: 'Permission Setting',
    key: '/admin/permission'
  }
];
export default menuList;
