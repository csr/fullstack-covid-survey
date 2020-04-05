module.exports = {


  friendlyName: 'View map',


  description: 'Display "Map" page.',


  exits: {

    success: {
      viewTemplatePath: 'pages/map'
    }

  },


  fn: async function () {
    var reports = await Report.find();

    // Respond with view.
    return {
      reports,
      currentSection: 'map'
    };
  }


};
