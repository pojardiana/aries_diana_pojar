'use strict'

const path = require('path');

module.exports = {
  init: initRoutes,
};

function initRoutes(app) {
  const routePath = path.join(__dirname, '../routes');
  if(true){ //true ar trebui sa fie pe session si daca user are prorietatea admin = 1 sa dea true
    var route_admin = ['users','products' ];
  } else {
    var route_admin = ['users' ];
  }
  const routes = route_admin;

  routes.forEach(function(route) {
    app.use(require(`${routePath}/${route}`))
  })
}


