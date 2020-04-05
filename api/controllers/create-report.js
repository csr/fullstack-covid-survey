module.exports = {


  friendlyName: 'Create report',


  description: '',


  inputs: {
    completionDate: {
      required: true,
      type: 'number'
    },
  },


  exits: {

  },


  fn: async function (inputs) {

    // All done.
    return {'statusCode': 200, 
            'completionDate': completionDate,
          };

  }


};
