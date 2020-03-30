module.exports = {


  friendlyName: 'View reports',


  description: 'Display "Reports" page.',


  exits: {

    success: {
      viewTemplatePath: 'pages/reports'
    }

  },


  fn: async function () {

    // Respond with view.
    return {
      currentSection: 'reports'
    };

  }


};
