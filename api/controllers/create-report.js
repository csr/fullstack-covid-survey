module.exports = {


  friendlyName: 'Create report',


  description: '',


  inputs: {
    data: {
      type: 'json',
      description: 'Data to create report.',
      required: true
    },
  },


  exits: {

  },


  fn: async function (inputs) {

    // All done.
    var report = await Report.create(inputs.data).fetch();

    return {report};
  }


};
