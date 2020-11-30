module.exports = {
    apps: [{
      name: 'consumer-frontend',
      script: 'reactserver.js',
      instances: 1,
      autorestart: true,
      watch: false,
      max_memory_restart: '1G',
      env: {
        NODE_ENV: 'development',
      },
      env_production: {
        NODE_ENV: 'production',
      },
      env_test: {
        NODE_ENV: 'test'
      }
    }],
  
    deploy: {
      consumer_test: {
        user: '',
        host: '',
        ref: '',
        repo: '',
        path: '',
        'post-deploy': 'npm install && npm run build && pm2 reload ecosystem.config.js --env production',
      },
      consumer_production: {
        user: '',
        host: '',
        ref: '',
        repo: '',
        path: '',
        'post-deploy': 'npm install && npm run build && pm2 reload ecosystem.config.js --env production',
      }
    },
  };