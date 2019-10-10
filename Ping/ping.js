const PingEndpoint = async function(context, req) {
  context.log('JavaScript HTTP trigger function processed a request.')

  context.res = {
    body: {
      msg: 'Pong! Plus some more to test the deployment works!'
    }
  }

  context.res.headers['Content-Type'] = 'application/json'
}

module.exports = PingEndpoint
