export default {
  path: '/test',
  name: 'test',
  component: () =>
    import('@/views/test'),
  meta: {
    title: 'test',
    keepAlive: false
  }
}