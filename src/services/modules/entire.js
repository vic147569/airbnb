import HttpRequest from '../'

export function getEntireRoomList(offset = 0, size = 20) {
  return HttpRequest.get({
    url: '/entire/list',
    params: { offset, size }
  })
}
