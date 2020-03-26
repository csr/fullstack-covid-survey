module.exports = {


  friendlyName: 'Make call',


  description: 'This function makes a call to the input telephone number to adminster the survey.',


  inputs: {

  },


  exits: {

  },


  fn: async function (inputs) {

    const Nexmo = require('nexmo');

    const nexmo = new Nexmo({
      apiKey: '91c8d8c5',
      apiSecret: '29a9cHgOtJt7wx9v',
      applicationId: '47dc859c-3f8d-4c44-88c5-f40fefc46b09',
      privateKey: 'assets/privatekey.txt',
    });

    const ncco = [
      {
        action: 'talk',
        voiceName: 'Carla',
        text:
          'Ciao! Congratulazioni, ce l hai fatta. Adesso non ti resta che finire gli ultimi dettagli',
      },
    ];

    nexmo.calls.create(
      {
        to: [{ type: 'phone', number: '393703173039' }],
        from: { type: 'phone', number: '12017785973' },
        ncco,
      }, function(err, result) {
      console.log(err || result);
       console.log('ok made the call');
       return;
       // res.send('Ok, made the call.');
      });
  }

};
