import HttpRequest from '..'

export function getHomeGoodPriceData() {
  return HttpRequest.get({ url: '/home/goodprice' })
}

export function getHomeHighScoreData() {
  return HttpRequest.get({ url: '/home/highscore' })
}

export function getHomeDiscountData() {
  return HttpRequest.get({ url: '/home/discount' })
}

export function getHomeHotRecommendData() {
  return HttpRequest.get({ url: '/home/hotrecommenddest' })
}

export function getHomeLongForData() {
  return HttpRequest.get({ url: '/home/longfor' })
}
