import request from '../fetch'

export default () => {
  return request.get('http://deni-deni-node-app.1d35.starter-us-east-1.openshiftapps.com/titles')
}
