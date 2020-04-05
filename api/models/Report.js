/**
 * Report.js
 *
 * @description :: A model definition represents a database table/collection.
 * @docs        :: https://sailsjs.com/docs/concepts/models-and-orm/models
 */

module.exports = {

  attributes: {

    //  ╔═╗╦═╗╦╔╦╗╦╔╦╗╦╦  ╦╔═╗╔═╗
    //  ╠═╝╠╦╝║║║║║ ║ ║╚╗╔╝║╣ ╚═╗
    //  ╩  ╩╚═╩╩ ╩╩ ╩ ╩ ╚╝ ╚═╝╚═╝
    completionDate: {
        type: 'number',
        required: true,
        example: 1586076089,
        description: 'Survey completion date expressed in seconds since 1970.',
    },

    lat: {
        type: 'number',
        required: true,
        example: 41.3851,
        description: 'Latitude.',
    },

    long: {
        type: 'number',
        required: true,
        example: 2.1734,
        description: 'Latitude.',
    },

    feverTemperature: {
        type: 'number',
        required: false,
        example: 38,
        description: 'Fever temperature in degrees.',
    },

    sneezing: {
        type: 'number',
        required: false,
        example: 5,
        description: '1-5.',
    },

    diarrhea: {
        type: 'number',
        required: false,
        example: 5,
        description: '1-5.',
    },

    headache: {
        type: 'number',
        required: false,
        example: 5,
        description: '1-5.',
    },

    shortnessBreath: {
        type: 'number',
        required: false,
        example: 5,
        description: '1-5.',
    },

    bodyWeakness: {
        type: 'number',
        required: false,
        example: 5,
        description: '1-5.',
    },

    soreThroat: {
        type: 'number',
        required: false,
        example: 5,
        description: '1-5.',
    },

    cough: {
        type: 'string',
        required: false,
        example: 'wet_cough',
        description: 'Type of cough: wet_cough, dry_cough, productive_cough.',
    },


    //  ╔═╗╔╦╗╔╗ ╔═╗╔╦╗╔═╗
    //  ║╣ ║║║╠╩╗║╣  ║║╚═╗
    //  ╚═╝╩ ╩╚═╝╚═╝═╩╝╚═╝


    //  ╔═╗╔═╗╔═╗╔═╗╔═╗╦╔═╗╔╦╗╦╔═╗╔╗╔╔═╗
    //  ╠═╣╚═╗╚═╗║ ║║  ║╠═╣ ║ ║║ ║║║║╚═╗
    //  ╩ ╩╚═╝╚═╝╚═╝╚═╝╩╩ ╩ ╩ ╩╚═╝╝╚╝╚═╝

  },

};

