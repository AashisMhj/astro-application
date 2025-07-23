module.exports = {
  apps: [
    {
      name: 'astro-app',              
      script: 'yarn',
      args: 'preview',             
      env: {
        NODE_ENV: 'production'
      }
    }
  ]
};
