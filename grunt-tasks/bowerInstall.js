module.exports = (function() {
  // Automatically inject Bower components into the app
  return {
    app: {
      cwd: '.',
      src: '<%= yeoman.app %>/index.html',
      ignorePath: '<%= yeoman.app %>/',
      exclude: '<%= 2ViVe.bowerExclude %>'
    }
  };
})();