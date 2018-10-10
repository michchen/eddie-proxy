const router = require('express').Router();
const proxy = require('express-http-proxy');

router.use('/sidebar', proxy('http://ec2-18-234-26-142.compute-1.amazonaws.com/'));

router.use('/photos', proxy('http://ec2-18-212-199-79.compute-1.amazonaws.com/'));

router.get('/reviews/:id', proxy('http://localhost:3002/',
  {
    proxyReqPathResolver: function (req) {
      return `/api${req.url}`;
    }
  }
));

router.get('/review/:id', proxy('http://localhost:3002/',
  {
    proxyReqPathResolver: function (req) {
      return `/api${req.url}`;
    }
  }
));

router.post('/review/:id', proxy('http://localhost:3002/',
  {
    proxyReqPathResolver: function (req) {
      return `/api${req.url}`;
    }
  }
));


router.use('/header', proxy('http://ec2-18-232-101-230.compute-1.amazonaws.com/'));

module.exports = router;
