const envBuild = {
  'rest-server': [
    'DEBUG=TRUE',
    'NODE_ENV=production',
    'PORT=3396',
    'LOCAL_USER=root',
    'LOCAL_HOST=localhost',
    'LOCAL_DATABASE=codesling',
    'LOCAL_PASSWORD=root',
    'LOCAL_PORT=5432',
    'AWS_USER=root',
    'AWS_HOST=13.56.228.82',
    'AWS_DATABASE=codesling',
    'AWS_PASSWORD=root',
    'AWS_PORT=5432',
    'SALT_ROUNDS=10',
    'TOKEN_SECRET=codeslingapi'
  ],
  'socket-server': [
    'NODE_ENV=DEVELOPMENT',
    'DEBUG=TRUE',
    'HOST=13.56.228.82',
    'PORT=4155',
    'REST_SERVER_URL=13.56.228.82:4990',
    'CODERUNNER_SERVICE_URL=13.56.228.82:4000',
    'TOKEN_SECRET=codeslinger'
  ],
  'services/coderunner-service': [
    'NODE_ENV=DEVELOPMENT',
    'DEBUG=TRUE',
    'HOST=13.56.228.82',
    'PORT=4000',
    'REST_SERVER_URL=13.56.228.82:3396',
    'SOCKET_SERVER_URL=13.56.228.82:4155'
  ]
};

module.exports = envBuild;
