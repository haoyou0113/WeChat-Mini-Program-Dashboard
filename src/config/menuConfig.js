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
    title: 'form',
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
    title: '表格',
    key: '/admin/table',
    children: [
      {
        title: '基础表格',
        key: '/admin/table/basic'
      },
      {
        title: '高级表格',
        key: '/admin/table/high'
      }
    ]
  },
  {
    title: '富文本',
    key: '/admin/rich'
  },
  {
    title: '城市管理',
    key: '/admin/city'
  },
  {
    title: '订单管理',
    key: '/admin/order',
    btnList: [
      {
        title: '订单详情',
        key: 'detail'
      },
      {
        title: '结束订单',
        key: 'finish'
      }
    ]
  },
  {
    title: '员工管理',
    key: '/admin/user'
  },
  {
    title: '车辆地图',
    key: '/admin/bikeMap'
  },
  {
    title: '图标',
    key: '/admin/charts',
    children: [
      {
        title: '柱形图',
        key: '/admin/charts/bar'
      },
      {
        title: '饼图',
        key: '/admin/charts/pie'
      },
      {
        title: '折线图',
        key: '/admin/charts/line'
      }
    ]
  },
  {
    title: '权限设置',
    key: '/admin/permission'
  }
];
export default menuList;
