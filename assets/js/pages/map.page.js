  parasails.registerPage('map', {
    //  ╦╔╗╔╦╔╦╗╦╔═╗╦    ╔═╗╔╦╗╔═╗╔╦╗╔═╗
    //  ║║║║║ ║ ║╠═╣║    ╚═╗ ║ ╠═╣ ║ ║╣
    //  ╩╝╚╝╩ ╩ ╩╩ ╩╩═╝  ╚═╝ ╩ ╩ ╩ ╩ ╚═╝
    data: {
      reports: [],

      surveyContainerOpen: false,

      currentState: {
      },

      states: {
        'anySymptoms': {
          id: 'anySymptoms',
          title: 'Hai sintomi del COVID-19?',
          subtitle: 'Per esempio febbre, tosse, affanno, dolori muscolari.',
          inputs: {
            "option1": {
              value: 'yes',
              userFacingLabel: 'Sì, ho sintomi',
            },
            "option2": {
              value: 'no',
              userFacingLabel: 'No, non ho sintomi',
            }
          },
        },
        'feverTemperature': {
          id: 'feverTemperature',  
          title: 'Hai la febbre?',
          inputs: {
            "option1": {
              value: 'yes',
              userFacingLabel: 'Sì, ho la febbre',
            },
            "option2": {
              value: 'no',
              userFacingLabel: 'No, non ho febbre',
            }
          },
        },
        'cough': {
          id: 'cough',  
          title: 'Hai la tosse?',
          inputs: {
            "option1": {
              value: 'yes',
              userFacingLabel: 'Sì, ho la tosse',
            },
            "option2": {
              value: 'no',
              userFacingLabel: 'No, non ho tosse',
            }
          },
        },
        'shortnessBreath': {
          id: 'shortnessBreath',  
          title: 'Hai difficoltà respiratorie?',
          subtitle: 'Per esempio affanno, fiato corto.',
          inputs: {
            "option1": {
              value: '5',
              userFacingLabel: 'Sì, severe',
            },
            "option2": {
              value: '3',
              userFacingLabel: 'Sì, lievi',
            },
            "option3": {
              value: '0',
              userFacingLabel: 'No, nessuna',
            }
          },
        },
        'bodyWeakness': {
          id: 'bodyWeakness',  
          title: 'Provi affaticamento o debolezza?',
          inputs: {
            "option1": {
              value: '5',
              userFacingLabel: 'Sì, molto',
            },
            "option2": {
              value: '3',
              userFacingLabel: 'Sì, un po\'',
            },
            "option3": {
              value: '0',
              userFacingLabel: 'No',
            }
          },
        },
        'soreThroat': {
          id: 'soreThroat',  
          title: 'Hai mal di gola?',
          inputs: {
            "option1": {
              value: '5',
              userFacingLabel: 'Sì, molto',
            },
            "option2": {
              value: '3',
              userFacingLabel: 'Sì, un po\'',
            },
            "option3": {
              value: '0',
              userFacingLabel: 'No',
            }
          },
        },
        'headache': {
          id: 'headache',  
          title: 'Hai mal di testa?',
          inputs: {
            "option1": {
              value: '5',
              userFacingLabel: 'Sì, spesso',
            },
            "option2": {
              value: '3',
              userFacingLabel: 'Sì, un po\'',
            },
            "option3": {
              value: '0',
              userFacingLabel: 'No',
            }
          },
        },
        'sneezing': {
          id: 'sneezing',  
          title: 'Ti capita di starnutire?',
          inputs: {
            "option1": {
              value: '5',
              userFacingLabel: 'Sì, spesso',
            },
            "option2": {
              value: '3',
              userFacingLabel: 'Sì, un po\'',
            },
            "option3": {
              value: '0',
              userFacingLabel: 'No',
            }
          },
        },
        'diarrhea': {
          id: 'diarrhea',  
          title: 'Hai disturbi di diarrhea?',
          inputs: {
            "option1": {
              value: '5',
              userFacingLabel: 'Sì, spesso',
            },
            "option2": {
              value: '3',
              userFacingLabel: 'Sì, un po\'',
            },
            "option3": {
              value: '0',
              userFacingLabel: 'No',
            }
          },
        },
        'thankyou': {
          id: 'thankyou',  
          title: 'Grazie',
          subtitle: 'Posso condividere la tua posizione approssimativa? Verrà mostrata su una mappa che permette alla collettività di seguire l\'evolversi della pandemia.',
          inputs: {
            "option1": {
              value: '5',
              userFacingLabel: 'Sì, localizzami',
            },
            "option2": {
              value: '3',
              userFacingLabel: 'Preferisco di no',
            },
          },
        },

      },

      formAnswers: {

      },

      promptTrackSymptomsModalOpen: false,

      // Syncing/loading state
      syncing: false,

      // Server error state
      cloudError: '',
    },

    //  ╦  ╦╔═╗╔═╗╔═╗╦ ╦╔═╗╦  ╔═╗
    //  ║  ║╠╣ ║╣ ║  ╚╦╝║  ║  ║╣
    //  ╩═╝╩╚  ╚═╝╚═╝ ╩ ╚═╝╩═╝╚═╝
    beforeMount: function() {
      // Attach any initial data from the server.
      _.extend(this, SAILS_LOCALS);
      this.reports = this._marshalEntries(this.reports);
    },

    mounted: async function() {
      console.log("I'm inside mounted!");

      var map = L.map('mapid').setView([51.505, -0.09], 3);

      L.tileLayer('https://api.mapbox.com/styles/v1/{id}/tiles/{z}/{x}/{y}?access_token={accessToken}', {
          attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, <a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
          maxZoom: 18,
          id: 'mapbox/streets-v11',
          accessToken: 'pk.eyJ1IjoiY2VzYXJlZGVjYWwiLCJhIjoiY2s0aDgydnk3MTFkazNsbjZsc3B0MXo5ZSJ9.d7fi1XCpfi5q9YUEN1xuBg'
      }).addTo(map);

      var layerGroup = L.markerClusterGroup().addTo(map);

      var heatLayer = L.heatLayer([
      ], {radius: 100, gradient: {0.4: 'blue', 0.65: 'lime', 1: 'red'}}).addTo(layerGroup);

      function addPinToMap(value, index, array) {
        L.marker([value.lat, value.long]).addTo(map)
            .bindPopup(value.completionDate.toString());
        var latlng = L.latLng(value.lat, value.long, 1);
        heatLayer.addLatLng(latlng);
      }

      this.reports.forEach(addPinToMap);
      console.log('Showing the following reports on map:', this.reports);
    },

    //  ╦╔╗╔╔╦╗╔═╗╦═╗╔═╗╔═╗╔╦╗╦╔═╗╔╗╔╔═╗
    //  ║║║║ ║ ║╣ ╠╦╝╠═╣║   ║ ║║ ║║║║╚═╗
    //  ╩╝╚╝ ╩ ╚═╝╩╚═╩ ╩╚═╝ ╩ ╩╚═╝╝╚╝╚═╝
    methods: {
      clickOpenSurveyButton: function(event) {
        var x = document.getElementById("surveycontainer");
        
        if (!this.surveyContainerOpen) {
          console.log('Ok, showing survey.')
          this.surveyContainerOpen = true;
          // Show cross
          $('#crossicon').removeClass('buttonHideIconAnimation');
          // Remove chat icon
          $('#chaticon').addClass('buttonHideIconAnimation');

          this._refreshState('anySymptoms');

        } else {
          console.log('Ok, hiding survey.')
          this.surveyContainerOpen = false;
          // Hide cross
          $('#crossicon').addClass('buttonHideIconAnimation');
          // Show chat icon
          $('#chaticon').removeClass('buttonHideIconAnimation');
        }
      },

      _refreshState: function(contextKey) {
        this.currentState = this.states[contextKey];
        console.log('Ok, setting new state with id:', this.currentState.id);
      },

      _marshalEntries: function(entries) {
        // Marshal provided array of data and return the modified version.
        return _.map(entries, (entry)=>{
          return entry;
        });
      },

      closeTrackSymptomsModal: function() {
        this.promptTrackSymptomsModalOpen = false;
      },

      handleParsingTrackSymptomsModal: function() {
        return {
          id: this.selectedThing.id
        };
      },

      radioclicked: function(event) {
        // TODO: save answer for context
        console.log('well, radio clicked', event);
        var context = event.toElement.name;
        var answer = event.toElement.value;
        console.log('context: ', context, ', answer: ', answer);

        if (this.currentState.id == 'anySymptoms') {
          this._refreshState('feverTemperature');
        } else if (this.currentState.id == 'feverTemperature') {
          this._refreshState('cough');
        } else if (this.currentState.id == 'cough') {
          this._refreshState('shortnessBreath');
        } else if (this.currentState.id == 'shortnessBreath') {
          this._refreshState('bodyWeakness');
        } else if (this.currentState.id == 'bodyWeakness') {
          this._refreshState('soreThroat');
        } else if (this.currentState.id == 'soreThroat') {
          this._refreshState('headache');
        } else if (this.currentState.id == 'headache') {
          this._refreshState('sneezing');
        } else if (this.currentState.id == 'sneezing') {
          this._refreshState('diarrhea');
        } else if (this.currentState.id == 'diarrhea') {
          this._refreshState('thankyou');
        }

        document.getElementById("radioelement").checked = false;
        document.getElementById("radioelement").active = false;

      },
    }
  });
