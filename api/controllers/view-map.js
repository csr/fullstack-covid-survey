module.exports = {


  friendlyName: 'View map',


  description: 'Display "Map" page.',


  exits: {

    success: {
      viewTemplatePath: 'pages/map'
    }

  },


  fn: async function () {

    // Respond with view.
    return {};

  }


};
