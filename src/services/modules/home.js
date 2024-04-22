import HttpRequest from '..'

export function getHomeGoodPriceData() {
  return HttpRequest.get({ url: '/home/goodprice' })
}
export function getHomeHighScoreData() {
  return HttpRequest.get({ url: '/home/highscore' })
}
