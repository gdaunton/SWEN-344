var fs = require('fs');

var config = {};

//Port (for development) (uncomment to switch port)
//config.port = 3000;

//Secret string used as a salt in the session/cookie middleware
//(A static secret is what they recommend/the package makers say is necessary)
config.secret = 'sfvg1WwQefFghv3x0DKL10sklQ';

//Flag indicating whether semantic ui is part of a custom build
config.semanticBuild = false;

module.exports = config;
