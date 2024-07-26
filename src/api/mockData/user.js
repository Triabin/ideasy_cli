export default {
  queryUsers: () => {
    return {
      code: 200,
      msg: '请求成功！',
      data: [
        {
          id: '001',
          userName: 'Triabin',
          gender: 0,
          age: 26,
          createdAt: '2024-07-23 09:54:33'
        }
      ]
    }
  }
}