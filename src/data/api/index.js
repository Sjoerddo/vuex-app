import request from "../fetch"

const Url = 'http://deni-deni-node-app.1d35.starter-us-east-1.openshiftapps.com'

export const getItems = () => {
  return request.get(Url + '/titles')
}

export const getItemReservation = (link) => {
  return request.get(Url + '/schedule?link=' + link)
}

export const getItemScores = (title) => {
  return request.get('https://i321720.iris.fhict.nl/draait-er-nog-iets/src/api/rotten_scrape.php?title=' + title)
}
