const menuList = [
  {
    category: '首页',
    key: '/admin/ui',
    children: [
      {
        category: '幻灯片',
        father_id: 0,
        key: '/admin/ui/carousel'
      },
      {
        category: '十条列表广告',
        father_id: 0,
        key: '/admin/ui/newsAdv'
      },
      {
        category: '图片文字广告',
        father_id: 0,
        key: '/admin/ui/newsAdv1'
      },
      {
        category: '内部通知',
        father_id: 0,
        key: '/admin/ui/newsAdv2'
      }
    ]
  },
  {
    category: '二级菜单',
    key: '/admin/SubMenu',
    children: [
      {
        id: 1,
        category: '交易平台',
        father_id: 0,
        a_id: 1,
        key: '/admin/SubMenu/tradingPlatform',
        icon_address:
          'https://australia51.com/Attach/City/1202751A-394A-7FB8-011F-AC4C0FE6E305_thumbnail.jpg',
        createdAt: '2019-09-15T01:01:08.000Z',
        updatedAt: '2019-10-12T16:50:38.000Z'
        // children: [
        //   {
        //     id: 11,
        //     category: '二手市场',
        //     father_id: 1,
        //     a_id: 2,
        //     icon_address:
        //       'https://australia51.com/Attach/City/1202751A-394A-7FB8-011F-AC4C0FE6E305_thumbnail.jpg',
        //     createdAt: '2019-09-15T01:01:08.000Z',
        //     updatedAt: '2019-09-20T00:27:48.000Z'
        //   },
        //   {
        //     id: 12,
        //     category: '房屋租赁',
        //     father_id: 1,
        //     a_id: 2,
        //     icon_address:
        //       'https://australia51.com/Attach/City/1202751A-394A-7FB8-011F-AC4C0FE6E305_thumbnail.jpg',
        //     createdAt: '2019-09-15T01:01:08.000Z',
        //     updatedAt: '2019-09-20T05:28:03.000Z'
        //   },
        //   {
        //     id: 13,
        //     category: '生意买卖',
        //     father_id: 1,
        //     a_id: 2,
        //     icon_address:
        //       'https://australia51.com/Attach/City/1202751A-394A-7FB8-011F-AC4C0FE6E305_thumbnail.jpg',
        //     createdAt: '2019-09-15T01:01:08.000Z',
        //     updatedAt: '2019-09-15T01:01:08.000Z'
        //   },
        //   {
        //     id: 14,
        //     category: '汽车交易',
        //     father_id: 1,
        //     a_id: 2,
        //     icon_address:
        //       'https://australia51.com/Attach/City/1202751A-394A-7FB8-011F-AC4C0FE6E305_thumbnail.jpg',
        //     createdAt: '2019-09-15T01:01:08.000Z',
        //     updatedAt: '2019-09-15T01:01:08.000Z'
        //   }
        // ]
      },
      {
        id: 2,
        category: '专业服务',
        father_id: 0,
        a_id: 1,
        icon_address:
          'https://australia51.com/Attach/City/1202751A-394A-7FB8-011F-AC4C0FE6E305_thumbnail.jpg',
        createdAt: '2019-09-15T01:01:08.000Z',
        updatedAt: '2019-09-20T01:08:36.000Z',
        children: [
          {
            id: 15,
            category: '求职招聘',
            father_id: 2,
            a_id: 2,
            icon_address:
              'https://australia51.com/Attach/City/1202751A-394A-7FB8-011F-AC4C0FE6E305_thumbnail.jpg',
            createdAt: '2019-09-15T01:01:08.000Z',
            updatedAt: '2019-09-15T01:01:08.000Z'
          },
          {
            id: 16,
            category: '会计服务',
            father_id: 2,
            a_id: 2,
            icon_address:
              'https://australia51.com/Attach/City/1202751A-394A-7FB8-011F-AC4C0FE6E305_thumbnail.jpg',
            createdAt: '2019-09-15T01:01:08.000Z',
            updatedAt: '2019-09-15T01:01:08.000Z'
          },
          {
            id: 17,
            category: '金融服务',
            father_id: 2,
            a_id: 2,
            icon_address:
              'https://australia51.com/Attach/City/1202751A-394A-7FB8-011F-AC4C0FE6E305_thumbnail.jpg',
            createdAt: '2019-09-15T01:01:08.000Z',
            updatedAt: '2019-09-15T01:01:08.000Z'
          },
          {
            id: 18,
            category: '投资咨询',
            father_id: 2,
            a_id: 2,
            icon_address:
              'https://australia51.com/Attach/City/1202751A-394A-7FB8-011F-AC4C0FE6E305_thumbnail.jpg',
            createdAt: '2019-09-15T01:01:08.000Z',
            updatedAt: '2019-09-15T01:01:08.000Z'
          }
        ]
      },
      {
        id: 3,
        category: '美食餐饮',
        father_id: 0,
        a_id: 1,
        icon_address:
          'https://australia51.com/Attach/City/1202751A-394A-7FB8-011F-AC4C0FE6E305_thumbnail.jpg',
        createdAt: '2019-09-15T01:01:08.000Z',
        updatedAt: '2019-09-20T02:02:21.000Z',
        children: [
          {
            id: 19,
            category: '快餐',
            father_id: 3,
            a_id: 2,
            icon_address:
              'https://australia51.com/Attach/City/1202751A-394A-7FB8-011F-AC4C0FE6E305_thumbnail.jpg',
            createdAt: '2019-09-15T01:01:08.000Z',
            updatedAt: '2019-09-15T01:01:08.000Z'
          },
          {
            id: 20,
            category: '酒楼餐点',
            father_id: 3,
            a_id: 2,
            icon_address:
              'https://australia51.com/Attach/City/1202751A-394A-7FB8-011F-AC4C0FE6E305_thumbnail.jpg',
            createdAt: '2019-09-15T01:01:08.000Z',
            updatedAt: '2019-09-15T01:01:08.000Z'
          },
          {
            id: 21,
            category: '火锅烧烤',
            father_id: 3,
            a_id: 2,
            icon_address:
              'https://australia51.com/Attach/City/1202751A-394A-7FB8-011F-AC4C0FE6E305_thumbnail.jpg',
            createdAt: '2019-09-15T01:01:08.000Z',
            updatedAt: '2019-09-15T01:01:08.000Z'
          },
          {
            id: 22,
            category: '饮茶',
            father_id: 3,
            a_id: 2,
            icon_address:
              'https://australia51.com/Attach/City/1202751A-394A-7FB8-011F-AC4C0FE6E305_thumbnail.jpg',
            createdAt: '2019-09-15T01:01:08.000Z',
            updatedAt: '2019-09-15T01:01:08.000Z'
          },
          {
            id: 23,
            category: '私房菜',
            father_id: 3,
            a_id: 2,
            icon_address:
              'https://australia51.com/Attach/City/1202751A-394A-7FB8-011F-AC4C0FE6E305_thumbnail.jpg',
            createdAt: '2019-09-15T01:01:08.000Z',
            updatedAt: '2019-09-15T01:01:08.000Z'
          },
          {
            id: 24,
            category: '奶茶甜点',
            father_id: 3,
            a_id: 2,
            icon_address:
              'https://australia51.com/Attach/City/1202751A-394A-7FB8-011F-AC4C0FE6E305_thumbnail.jpg',
            createdAt: '2019-09-15T01:01:08.000Z',
            updatedAt: '2019-09-15T01:01:08.000Z'
          }
        ]
      },
      {
        id: 4,
        category: '美容服饰',
        father_id: 0,
        a_id: 1,
        icon_address:
          'https://australia51.com/Attach/City/1202751A-394A-7FB8-011F-AC4C0FE6E305_thumbnail.jpg',
        createdAt: '2019-09-15T01:01:08.000Z',
        updatedAt: '2019-09-20T05:12:12.000Z',
        children: [
          {
            id: 25,
            category: '美甲',
            father_id: 4,
            a_id: 2,
            icon_address:
              'https://australia51.com/Attach/City/1202751A-394A-7FB8-011F-AC4C0FE6E305_thumbnail.jpg',
            createdAt: '2019-09-15T01:01:08.000Z',
            updatedAt: '2019-09-15T01:01:08.000Z'
          },
          {
            id: 26,
            category: '美发',
            father_id: 4,
            a_id: 2,
            icon_address:
              'https://australia51.com/Attach/City/1202751A-394A-7FB8-011F-AC4C0FE6E305_thumbnail.jpg',
            createdAt: '2019-09-15T01:01:08.000Z',
            updatedAt: '2019-09-15T01:01:08.000Z'
          },
          {
            id: 27,
            category: '皮肤护理',
            father_id: 4,
            a_id: 2,
            icon_address:
              'https://australia51.com/Attach/City/1202751A-394A-7FB8-011F-AC4C0FE6E305_thumbnail.jpg',
            createdAt: '2019-09-15T01:01:08.000Z',
            updatedAt: '2019-09-15T01:01:08.000Z'
          },
          {
            id: 28,
            category: '箱包服饰首饰',
            father_id: 4,
            a_id: 2,
            icon_address:
              'https://australia51.com/Attach/City/1202751A-394A-7FB8-011F-AC4C0FE6E305_thumbnail.jpg',
            createdAt: '2019-09-15T01:01:08.000Z',
            updatedAt: '2019-09-15T01:01:08.000Z'
          }
        ]
      },
      {
        id: 5,
        category: '休闲娱乐',
        father_id: 0,
        a_id: 1,
        icon_address:
          'https://australia51.com/Attach/City/1202751A-394A-7FB8-011F-AC4C0FE6E305_thumbnail.jpg',
        createdAt: '2019-09-15T01:01:08.000Z',
        updatedAt: '2019-09-20T11:36:38.000Z',
        children: [
          {
            id: 29,
            category: '旅游',
            father_id: 5,
            a_id: 2,
            icon_address:
              'https://australia51.com/Attach/City/1202751A-394A-7FB8-011F-AC4C0FE6E305_thumbnail.jpg',
            createdAt: '2019-09-15T01:01:08.000Z',
            updatedAt: '2019-09-15T01:01:08.000Z'
          },
          {
            id: 30,
            category: '运动',
            father_id: 5,
            a_id: 2,
            icon_address:
              'https://australia51.com/Attach/City/1202751A-394A-7FB8-011F-AC4C0FE6E305_thumbnail.jpg',
            createdAt: '2019-09-15T01:01:08.000Z',
            updatedAt: '2019-09-15T01:01:08.000Z'
          },
          {
            id: 31,
            category: '网吧',
            father_id: 5,
            a_id: 2,
            icon_address:
              'https://australia51.com/Attach/City/1202751A-394A-7FB8-011F-AC4C0FE6E305_thumbnail.jpg',
            createdAt: '2019-09-15T01:01:08.000Z',
            updatedAt: '2019-09-15T01:01:08.000Z'
          },
          {
            id: 32,
            category: 'KTV',
            father_id: 5,
            a_id: 2,
            icon_address:
              'https://australia51.com/Attach/City/1202751A-394A-7FB8-011F-AC4C0FE6E305_thumbnail.jpg',
            createdAt: '2019-09-15T01:01:08.000Z',
            updatedAt: '2019-09-15T01:01:08.000Z'
          },
          {
            id: 33,
            category: '桌游',
            father_id: 5,
            a_id: 2,
            icon_address:
              'https://australia51.com/Attach/City/1202751A-394A-7FB8-011F-AC4C0FE6E305_thumbnail.jpg',
            createdAt: '2019-09-15T01:01:08.000Z',
            updatedAt: '2019-09-15T01:01:08.000Z'
          },
          {
            id: 34,
            category: '棋牌',
            father_id: 5,
            a_id: 2,
            icon_address:
              'https://australia51.com/Attach/City/1202751A-394A-7FB8-011F-AC4C0FE6E305_thumbnail.jpg',
            createdAt: '2019-09-15T01:01:08.000Z',
            updatedAt: '2019-09-15T01:01:08.000Z'
          }
        ]
      },
      {
        id: 6,
        category: '汽车服务',
        father_id: 0,
        a_id: 1,
        icon_address:
          'https://australia51.com/Attach/City/1202751A-394A-7FB8-011F-AC4C0FE6E305_thumbnail.jpg',
        createdAt: '2019-09-15T01:01:08.000Z',
        updatedAt: '2019-09-15T01:01:08.000Z',
        children: [
          {
            id: 35,
            category: '汽车美容',
            father_id: 6,
            a_id: 2,
            icon_address:
              'https://australia51.com/Attach/City/1202751A-394A-7FB8-011F-AC4C0FE6E305_thumbnail.jpg',
            createdAt: '2019-09-15T01:01:08.000Z',
            updatedAt: '2019-09-15T01:01:08.000Z'
          },
          {
            id: 36,
            category: '汽车维修',
            father_id: 6,
            a_id: 2,
            icon_address:
              'https://australia51.com/Attach/City/1202751A-394A-7FB8-011F-AC4C0FE6E305_thumbnail.jpg',
            createdAt: '2019-09-15T01:01:08.000Z',
            updatedAt: '2019-09-15T01:01:08.000Z'
          },
          {
            id: 37,
            category: '汽车回收',
            father_id: 6,
            a_id: 2,
            icon_address:
              'https://australia51.com/Attach/City/1202751A-394A-7FB8-011F-AC4C0FE6E305_thumbnail.jpg',
            createdAt: '2019-09-15T01:01:08.000Z',
            updatedAt: '2019-09-15T01:01:08.000Z'
          }
        ]
      },
      {
        id: 7,
        category: '生活服务',
        father_id: 0,
        a_id: 1,
        icon_address:
          'https://australia51.com/Attach/City/1202751A-394A-7FB8-011F-AC4C0FE6E305_thumbnail.jpg',
        createdAt: '2019-09-15T01:01:08.000Z',
        updatedAt: '2019-09-15T01:01:08.000Z',
        children: [
          {
            id: 38,
            category: '园艺',
            father_id: 7,
            a_id: 2,
            icon_address:
              'https://australia51.com/Attach/City/1202751A-394A-7FB8-011F-AC4C0FE6E305_thumbnail.jpg',
            createdAt: '2019-09-15T01:01:08.000Z',
            updatedAt: '2019-09-15T01:01:08.000Z'
          },
          {
            id: 39,
            category: '水电',
            father_id: 7,
            a_id: 2,
            icon_address:
              'https://australia51.com/Attach/City/1202751A-394A-7FB8-011F-AC4C0FE6E305_thumbnail.jpg',
            createdAt: '2019-09-15T01:01:08.000Z',
            updatedAt: '2019-09-15T01:01:08.000Z'
          },
          {
            id: 40,
            category: '除虫',
            father_id: 7,
            a_id: 2,
            icon_address:
              'https://australia51.com/Attach/City/1202751A-394A-7FB8-011F-AC4C0FE6E305_thumbnail.jpg',
            createdAt: '2019-09-15T01:01:08.000Z',
            updatedAt: '2019-09-15T01:01:08.000Z'
          },
          {
            id: 41,
            category: '家装',
            father_id: 7,
            a_id: 2,
            icon_address:
              'https://australia51.com/Attach/City/1202751A-394A-7FB8-011F-AC4C0FE6E305_thumbnail.jpg',
            createdAt: '2019-09-15T01:01:08.000Z',
            updatedAt: '2019-09-15T01:01:08.000Z'
          },
          {
            id: 42,
            category: '搬家接送',
            father_id: 7,
            a_id: 2,
            icon_address:
              'https://australia51.com/Attach/City/1202751A-394A-7FB8-011F-AC4C0FE6E305_thumbnail.jpg',
            createdAt: '2019-09-15T01:01:08.000Z',
            updatedAt: '2019-09-15T01:01:08.000Z'
          },
          {
            id: 43,
            category: '家电数码维修',
            father_id: 7,
            a_id: 2,
            icon_address:
              'https://australia51.com/Attach/City/1202751A-394A-7FB8-011F-AC4C0FE6E305_thumbnail.jpg',
            createdAt: '2019-09-15T01:01:08.000Z',
            updatedAt: '2019-09-15T01:01:08.000Z'
          },
          {
            id: 44,
            category: '换汇',
            father_id: 7,
            a_id: 2,
            icon_address:
              'https://australia51.com/Attach/City/1202751A-394A-7FB8-011F-AC4C0FE6E305_thumbnail.jpg',
            createdAt: '2019-09-15T01:01:08.000Z',
            updatedAt: '2019-09-15T01:01:08.000Z'
          },
          {
            id: 45,
            category: '家政保洁',
            father_id: 7,
            a_id: 2,
            icon_address:
              'https://australia51.com/Attach/City/1202751A-394A-7FB8-011F-AC4C0FE6E305_thumbnail.jpg',
            createdAt: '2019-09-15T01:01:08.000Z',
            updatedAt: '2019-09-15T01:01:08.000Z'
          },
          {
            id: 46,
            category: '防盗消防',
            father_id: 7,
            a_id: 2,
            icon_address:
              'https://australia51.com/Attach/City/1202751A-394A-7FB8-011F-AC4C0FE6E305_thumbnail.jpg',
            createdAt: '2019-09-15T01:01:08.000Z',
            updatedAt: '2019-09-15T01:01:08.000Z'
          }
        ]
      },
      {
        id: 8,
        category: '医疗保健',
        father_id: 0,
        a_id: 1,
        icon_address:
          'https://australia51.com/Attach/City/1202751A-394A-7FB8-011F-AC4C0FE6E305_thumbnail.jpg',
        createdAt: '2019-09-15T01:01:08.000Z',
        updatedAt: '2019-09-15T01:01:08.000Z',
        children: [
          {
            id: 47,
            category: '中医',
            father_id: 8,
            a_id: 2,
            icon_address:
              'https://australia51.com/Attach/City/1202751A-394A-7FB8-011F-AC4C0FE6E305_thumbnail.jpg',
            createdAt: '2019-09-15T01:01:08.000Z',
            updatedAt: '2019-09-15T01:01:08.000Z'
          },
          {
            id: 48,
            category: '西医',
            father_id: 8,
            a_id: 2,
            icon_address:
              'https://australia51.com/Attach/City/1202751A-394A-7FB8-011F-AC4C0FE6E305_thumbnail.jpg',
            createdAt: '2019-09-15T01:01:08.000Z',
            updatedAt: '2019-09-15T01:01:08.000Z'
          },
          {
            id: 49,
            category: '牙医',
            father_id: 8,
            a_id: 2,
            icon_address:
              'https://australia51.com/Attach/City/1202751A-394A-7FB8-011F-AC4C0FE6E305_thumbnail.jpg',
            createdAt: '2019-09-15T01:01:08.000Z',
            updatedAt: '2019-09-15T01:01:08.000Z'
          },
          {
            id: 50,
            category: '按摩休闲',
            father_id: 8,
            a_id: 2,
            icon_address:
              'https://australia51.com/Attach/City/1202751A-394A-7FB8-011F-AC4C0FE6E305_thumbnail.jpg',
            createdAt: '2019-09-15T01:01:08.000Z',
            updatedAt: '2019-09-15T01:01:08.000Z'
          },
          {
            id: 51,
            category: '医保',
            father_id: 8,
            a_id: 2,
            icon_address:
              'https://australia51.com/Attach/City/1202751A-394A-7FB8-011F-AC4C0FE6E305_thumbnail.jpg',
            createdAt: '2019-09-15T01:01:08.000Z',
            updatedAt: '2019-09-15T01:01:08.000Z'
          }
        ]
      },
      {
        id: 9,
        category: '移民教育',
        father_id: 0,
        a_id: 1,
        icon_address:
          'https://australia51.com/Attach/City/1202751A-394A-7FB8-011F-AC4C0FE6E305_thumbnail.jpg',
        createdAt: '2019-09-15T01:01:08.000Z',
        updatedAt: '2019-09-15T01:01:08.000Z',
        children: [
          {
            id: 52,
            category: '留学教育',
            father_id: 9,
            a_id: 2,
            icon_address:
              'https://australia51.com/Attach/City/1202751A-394A-7FB8-011F-AC4C0FE6E305_thumbnail.jpg',
            createdAt: '2019-09-15T01:01:08.000Z',
            updatedAt: '2019-09-15T01:01:08.000Z'
          },
          {
            id: 53,
            category: '移民签证',
            father_id: 9,
            a_id: 2,
            icon_address:
              'https://australia51.com/Attach/City/1202751A-394A-7FB8-011F-AC4C0FE6E305_thumbnail.jpg',
            createdAt: '2019-09-15T01:01:08.000Z',
            updatedAt: '2019-09-15T01:01:08.000Z'
          },
          {
            id: 54,
            category: '语言培训',
            father_id: 9,
            a_id: 2,
            icon_address:
              'https://australia51.com/Attach/City/1202751A-394A-7FB8-011F-AC4C0FE6E305_thumbnail.jpg',
            createdAt: '2019-09-15T01:01:08.000Z',
            updatedAt: '2019-09-15T01:01:08.000Z'
          },
          {
            id: 55,
            category: '证书培训',
            father_id: 9,
            a_id: 2,
            icon_address:
              'https://australia51.com/Attach/City/1202751A-394A-7FB8-011F-AC4C0FE6E305_thumbnail.jpg',
            createdAt: '2019-09-15T01:01:08.000Z',
            updatedAt: '2019-09-15T01:01:08.000Z'
          }
        ]
      },
      {
        id: 10,
        category: '丘比特姻缘',
        father_id: 0,
        a_id: 1,
        icon_address:
          'https://australia51.com/Attach/City/1202751A-394A-7FB8-011F-AC4C0FE6E305_thumbnail.jpg',
        createdAt: '2019-09-15T01:01:08.000Z',
        updatedAt: '2019-09-15T01:01:08.000Z',
        children: [
          {
            id: 61,
            category: '丘比特姻缘',
            father_id: 10,
            a_id: 1,
            icon_address:
              'https://australia51.com/Attach/City/1202751A-394A-7FB8-011F-AC4C0FE6E305_thumbnail.jpg',
            createdAt: '2019-11-08T09:33:26.000Z',
            updatedAt: '2019-11-08T09:33:31.000Z'
          }
        ]
      },
      {
        id: 56,
        category: '专栏作家',
        father_id: -1,
        a_id: 1,
        icon_address:
          'https://australia51.com/Attach/City/1202751A-394A-7FB8-011F-AC4C0FE6E305_thumbnail.jpg',
        createdAt: '2019-10-18T14:12:29.000Z',
        updatedAt: '2019-10-18T14:12:29.000Z'
      },
      {
        id: 57,
        category: '教育移民',
        father_id: -1,
        a_id: 1,
        icon_address:
          'https://australia51.com/Attach/City/1202751A-394A-7FB8-011F-AC4C0FE6E305_thumbnail.jpg',
        createdAt: '2019-10-18T14:12:29.000Z',
        updatedAt: '2019-10-18T14:12:29.000Z'
      },
      {
        id: 58,
        category: '社团资讯',
        father_id: -1,
        a_id: 1,
        icon_address:
          'https://australia51.com/Attach/City/1202751A-394A-7FB8-011F-AC4C0FE6E305_thumbnail.jpg',
        createdAt: '2019-10-18T14:12:29.000Z',
        updatedAt: '2019-10-18T14:12:29.000Z'
      },
      {
        id: 59,
        category: '时尚生活',
        father_id: -1,
        a_id: 1,
        icon_address:
          'https://australia51.com/Attach/City/1202751A-394A-7FB8-011F-AC4C0FE6E305_thumbnail.jpg',
        createdAt: '2019-10-18T14:12:29.000Z',
        updatedAt: '2019-10-18T14:12:29.000Z'
      },
      {
        id: 60,
        category: '热点话题',
        father_id: -1,
        a_id: 1,
        icon_address:
          'https://australia51.com/Attach/City/1202751A-394A-7FB8-011F-AC4C0FE6E305_thumbnail.jpg',
        createdAt: '2019-10-18T14:12:29.000Z',
        updatedAt: '2019-10-18T14:12:29.000Z'
      }
    ]
  },
  {
    category: '详情页面',
    key: '/admin/permission',
    children: [
      {
        category: '幻灯片'
      }
    ]
  }
];
export default menuList;
