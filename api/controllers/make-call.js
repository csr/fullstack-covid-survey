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

    var greeting = "buongiorno";
    var customerName = "Cesare";

    var date = new Date();
    var currentHour = date.getHours();

    if (currentHour < 13) {
      greeting = "buongiorno";
    } else if (currentHour < 16) {
      greeting = "buon pomeriggio";
    } else {
      greeting = "buonasera";
    }

    var greetingPhrase = greeting + ' ' + customerName + '. ' + 'Grazie per aver accettato l\'invito. Vorrei informarti che la conversazione verrà registrata per migliorare il servizio. Premi zero per iniziare.';

    const ncco = [
      {
        action: 'talk',
        voiceName: 'Carla',
        text: greetingPhrase,
        bargeIn: true
      },
      {
        action: 'input',
        submitOnHash: false,
        timeOut: 10,
      },
      {
        action: 'talk',
        text: 'Da uno a cinque, quanto sei in grado di camminare?',
        voiceName: 'Carla',
        bargeIn: true
      },
      {
        action: 'input',
        submitOnHash: false,
        timeOut: 10,
      },
      {
        action: 'talk',
        text: 'Molte grazie. Da uno a cinque, quanto sei in grado di lavarti e vestirti?',
        voiceName: 'Carla',
        bargeIn: true,
      },
      {
        action: 'input',
        submitOnHash: false,
        timeOut: 10,
      },
      {
        action: 'talk',
        text: 'Okay, Da uno a cinque, quanto riesci a svolgere attività abituali?',
        voiceName: 'Carla',
        bargeIn: true,
      },
      {
        action: 'input',
        submitOnHash: false,
        timeOut: 10,
      },
      {
        action: 'talk',
        text: 'Grazie, abbiamo quasi finito. uno a cinque, quanto prov?',
        voiceName: 'Carla',
        bargeIn: true,
      },
      {
        action: 'input',
        submitOnHash: false,
        timeOut: 10,
      },
      {
        action: 'talk',
        text: 'Grazie, abbiamo quasi finito. uno a cinque, quanto provi dolore o fastidio?',
        voiceName: 'Carla',
        bargeIn: true,
      },
      {
        action: 'input',
        submitOnHash: false,
        timeOut: 10,
      },
      {
        action: 'talk',
        text: 'Grazie, abbiamo quasi finito. uno a cinque, quanto provi dolore o fastidio?',
        voiceName: 'Carla',
        bargeIn: true,
      },
      {
        action: 'input',
        submitOnHash: false,
        timeOut: 10,
      },
      {
        action: 'talk',
        text: 'Questa è l\'ultima domanda. Da uno a cinque, soffri di ansia o depressione?',
        voiceName: 'Carla',
        bargeIn: true,
      },
      {
        action: 'input',
        submitOnHash: false,
        timeOut: 10,
      },
      {
        action: 'talk',
        text: 'Abbiamo finito. Grazie e arrivederci ' + customerName,
        voiceName: 'Carla',
        bargeIn: false,
      },
    ];

    nexmo.calls.create(
      {
        to: [{ type: 'phone', number: '393703173039' }],
        from: { type: 'phone', number: '12017785973' },
        ncco,
      }, function(err, result) {

        if (err) {
          return {status: 400, details: err, result: result}
        }

        return {status: 200, details: 'All good!'};
      });
  }

};
