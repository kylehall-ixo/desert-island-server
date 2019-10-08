const PingEndpoint = async function(context, req) {
  context.log('JavaScript HTTP trigger function processed a request.')

  context.res = {
    body: 'Pong! Plus some more to test the deployment works!'
  }
}

module.exports = PingEndpoint
