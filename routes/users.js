var router = require('koa-router')();
router.prefix('/users');

/**
 * 
 * routes:
 * Get    /users/:id   =>   users.show()
 * POST   /usrs/       =>   users.register()
 * DELETE /usrs        =>   users.destroy()
 * 
 */
router.get('/', function *(next) {
  this.body = 'this is a users response!';
});

router.get('/bar', function *(next) {
  this.body = 'this is a users/bar response!';
});

module.exports = router;
