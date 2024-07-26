const env = import.meta.env.MODE || 'development';

const EnvConfig = {
  development: {
    baseApi: '/api',
    mockApi: '/mock'
  },
  test: {},
  production: {}
}

export default {
  env,
  ...EnvConfig[env],
  mock: false
}