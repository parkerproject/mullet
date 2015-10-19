var React = require('react/addons');

var Component = React.createClass({
  render: function(){
    return (
      <html>
      <head>
        <meta charSet="utf-8"/>
        <title>{this.props.title}</title>
        <meta name="description" content="Mullet Stack, React, Hapi, Node"/>
        <meta name="author" content="Linda Nichols"/>
        <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1"/>
        <link rel="stylesheet" href="css/bootstrap.min.css"/>
        <link rel="stylesheet" href="css/bootstrap-theme.min.css"/>
        <link rel="stylesheet" href="css/facebook.css" />
      </head>
      <body>
         {this.props.children}
         <script src="js/jquery.min.js"></script>
         <script src="js/bootstrap.min.js"></script>
      </body>
      </html>
    );
  }
});

module.exports = Component;