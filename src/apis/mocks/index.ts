import Mock from 'better-mock'

Mock.setup({
  timeout: '200-600',
})

Mock.mock(/\/test/, 'get', () => {
  return {
    code: 200,
    msg: 'success',
    result: {
      name: 'mock',
    },
  }
})
