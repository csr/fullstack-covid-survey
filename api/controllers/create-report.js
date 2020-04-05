module.exports = {


  friendlyName: 'Create report',


  description: '',


  inputs: {
    completionDate: {
      required: true,
      type: 'number',
      description: 'Date when the survey was filled by the user expressed in seconds since 1970.',
      example: 1586076089,
    },
  },


  exits: {

  },


  fn: async function (inputs) {

    // All done.
    return {'statusCode': 200, 
            'completionDate': inputs.completionDate,
          };

  }


};
