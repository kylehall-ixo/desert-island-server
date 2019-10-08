const PingEndpoint = async function (context, req) {
    context.log('JavaScript HTTP trigger function processed a request.');

    context.res = {
        body: 'Pong!'
    }
};

module.exports = PingEndpoint
