import gulp from 'gulp';

import browserSync from 'browser-sync';
import config from '../config';

export function serve(done) {

  const logLevel = config.verbose ? 'debug' : 'info';

  browserSync.init({
    server: {
      baseDir: config.dist,
      index: "index.html"
    },
    port: config.port,
    logConnections: true,
    logLevel: logLevel
  }, done);
}

serve.description = 'Serve dist directory using browserSync.';
