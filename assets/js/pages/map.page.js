  parasails.registerPage('map', {
    //  ╦╔╗╔╦╔╦╗╦╔═╗╦    ╔═╗╔╦╗╔═╗╔╦╗╔═╗
    //  ║║║║║ ║ ║╠═╣║    ╚═╗ ║ ╠═╣ ║ ║╣
    //  ╩╝╚╝╩ ╩ ╩╩ ╩╩═╝  ╚═╝ ╩ ╩ ╩ ╩ ╚═╝
    data: {
      reports: [],

      surveyContainerOpen: false,

      currentState: {
      },

      lat: 0,

      long: 0,

      states: {
        'hasSymptoms': {
          id: 'hasSymptoms',
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
        'hasFever': {
          id: 'hasFever',  
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
        'feverTemperature': {
          id: 'feverTemperature',  
          title: 'Qual è la tua termperatura corporea?',
          subtitle: 'Scegli l\' opzione che si avvicina di più:',
          inputs: {
            "option1": {
              value: 37.5,
              userFacingLabel: '37.5°',
            },
            "option2": {
              value: 38,
              userFacingLabel: '38°',
            },
            "option3": {
              value: 38.5,
              userFacingLabel: '38.5°',
            },
            "option4": {
              value: 39,
              userFacingLabel: '39°',
            },
            "option4": {
              value: 'more',
              userFacingLabel: 'Più di 39°',
            },

          },
        },
        'higherFeverTemperature': {
          id: 'feverTemperature',  
          title: 'Quanto di preciso?',
          subtitle: 'Scegli un\' opzione:',
          inputs: {
            "option1": {
              value: 39.5,
              userFacingLabel: '39.5°',
            },
            "option2": {
              value: 40,
              userFacingLabel: '40°',
            },
            "option3": {
              value: 40.5,
              userFacingLabel: '40.5°',
            },
            "option4": {
              value: 41,
              userFacingLabel: '41°',
            },
          },
        },
        'hasCough': {
          id: 'hasCough',  
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
        'cough': {
          id: 'cough',  
          title: 'Che tipo di tosse?',
          subtitle: 'Scegli un\'opzione:',
          inputs: {
            "option1": {
              value: 'dry_cough',
              userFacingLabel: 'Secca',
            },
            "option2": {
              value: 'whooping_cough',
              userFacingLabel: 'Produttiva',
            },
            "option3": {
              value: 'wet_cough',
              userFacingLabel: 'Convulsa',
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
              userFacingLabel: 'No, non mi sento debole',
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
              userFacingLabel: 'No, non ho mal di gola',
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
              userFacingLabel: 'No, non ho mal di testa',
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
              userFacingLabel: 'No, non starnutisco',
            }
          },
        },
        'diarrhea': {
          id: 'diarrhea',  
          title: 'Hai disturbi di diarrea?',
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
              userFacingLabel: 'No, non ho diarrea',
            }
          },
        },
        'location': {
          id: 'location',  
          title: 'Dove ti trovi?',
          subtitle: 'Puoi inserire qualsiasi località nel mondo a tua scelta per lo scopo di questo esperimento:',
          fields: {
            "location": {
              value: 'location',
              userFacingLabel: 'location',
            }
          },
          buttons: {
            "confirm": {
              value: 'confirm',
              userFacingLabel: 'Conferma',
            },
          }
        },

        'endofsurvey': {
          id: 'endofsurvey',  
          title: 'Grazie',
          subtitle: 'Hai concluso l\'esperimento. Puoi procedere alla compilazione del questionario.',
          buttons: {
            "close": {
              value: 'close',
              userFacingLabel: 'Chiudi',
            },
          }
        },


      },

      formAnswers: {

      },

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

      var that = this;
      function addPinToMap(report, index, array) {
        var popupText = that.getReportDescription(report);

        L.marker([report.lat, report.long]).addTo(map)
            .bindPopup(popupText);
        var latlng = L.latLng(report.lat, report.long, 1);
        heatLayer.addLatLng(latlng);
      }

      this.reports.forEach(addPinToMap);
      console.log('Showing the following reports on map:', this.reports);

      this._setupAlgoliaPlaces();

      console.log('Setting up Algolia places...');
      var placesAutocomplete = places({
        appId: 'pl7A8UHH7NSM',
        apiKey: '427f13c5c54d8dab3949457f7593f189',
        container: document.querySelector('#address-input')
      });

      placesAutocomplete.on('change', handleOnChange);

      // Fired when suggestion selected in the dropdown or hint was validated.
      function handleOnChange(e) {
        const lat = e.suggestion.latlng.lat;
        const lng = e.suggestion.latlng.lng;
        map.setView([lat, lng], 10);
      }
    },


    //  ╦╔╗╔╔╦╗╔═╗╦═╗╔═╗╔═╗╔╦╗╦╔═╗╔╗╔╔═╗
    //  ║║║║ ║ ║╣ ╠╦╝╠═╣║   ║ ║║ ║║║║╚═╗
    //  ╩╝╚╝ ╩ ╚═╝╩╚═╩ ╩╚═╝ ╩ ╩╚═╝╝╚╝╚═╝
    methods: {
      getReportDescription: function(report) {
        var description = ""
        var newLine = "<br />"

        description += "<b>Inviato il " + this.timeConverter(report.completionDate) + '</b>' + newLine;
        
        description += 'Sintomi:'

        // Start List
        description += '<ul>';

        if (report.feverTemperature) {
          description += '<li>Febbre: ' + report.feverTemperature + '°</li>';
        }

        if (report.sneezing) {
          description += '<li>Starnuti' + '</li>';
        }

        if (report.diarrhea) {
          description += '<li>Diarrea' + '</li>';
        }

        if (report.headache) {
          description += '<li>Mal di testa' + '</li>';
        }

        if (report.shortnessBreath) {
          description += '<li>Respiro corto' + '</li>';
        }

        if (report.bodyWeakness) {
          description += '<li>Dolori muscolari' + '</li>';
        }

        if (report.soreThroat) {
          description += '<li>Mal di gola' + '</li>';
        }

        if (report.cough) {
          description += '<li>Tosse ';

          if (report.cough == 'wet_cough') {
            description += 'produttiva';
          } else if (report.cough == 'whooping_cough') {
            description += 'convulsa';
          } else if (report.cough == 'productive_cough') {
            description += 'secca';
          }

          description += '</li>';

        }


        description += '</ul>';


        return description
      },

      _setupAlgoliaPlaces: function() {
        this.$forceUpdate();
      },

      timeConverter: function(UNIX_timestamp) {
        var a = new Date(UNIX_timestamp * 1000);
        var months = ['Gennaio','Febbraio','Marzo','Aprile','Maggio','Giugno','Luglio','Agosto','Settembre','Ottobre','Novembre','Dicembre'];
        var year = a.getFullYear();
        var month = months[a.getMonth()];
        var date = a.getDate();
        var hour = a.getHours();
        var min = a.getMinutes();
        var sec = a.getSeconds();
        var time = date + ' ' + month + ' ' + year;
        return time;
      },

      clickOpenSurveyButton: function(event) {
        var x = document.getElementById("surveycontainer");
        if (!this.surveyContainerOpen) {
          this.surveyContainerOpen = true;
          // Show cross
          $('#crossicon').removeClass('buttonHideIconAnimation');
          // Remove chat icon
          $('#chaticon').addClass('buttonHideIconAnimation');
          $('#chatbubble').addClass('chatBubbleHideIconAnimation');

          $('#surveycontainer').removeClass('chatBubbleHideIconAnimation'); // reset animation
          void $('#surveycontainer').offsetWidth; // trigger reflow
          $('#surveycontainer').addClass('chatBubbleHideIconAnimation'); // start animation


          this._refreshState('hasSymptoms');

        } else {
          this.surveyContainerOpen = false;
          // Hide cross
          $('#crossicon').addClass('buttonHideIconAnimation');
          // Show chat icon
          $('#chaticon').removeClass('buttonHideIconAnimation');
        }
      },

      // Fired when suggestion selected in the dropdown or hint was validated.
      _updateLatLong: function(e) {
        const latitude = e.suggestion.latlng.lat;
        const longitude = e.suggestion.latlng.lng;
        this.lat = latitude;
        this.long = longitude;
        console.log('updated lat and long:' + this.lat + ' ,' + this.long);
      },

      _refreshState: function(contextKey) {
        this.currentState = this.states[contextKey];
        console.log('Ok, setting new state with id:', this.currentState.id);

        this.$forceUpdate();

        var originalThis = this;

        var delayInMilliseconds = 1; //1 second

        if (this.currentState.id == 'location') {

          setTimeout(function() {
            //your code to be executed after 1 second
            console.log('Setting up Algolia places...');
            var placesAutocomplete = places({
              appId: 'pl7A8UHH7NSM',
              apiKey: '427f13c5c54d8dab3949457f7593f189',
              container: document.querySelector('#inputaddress')
            });
            placesAutocomplete.on('change', handleOnChange);

            function handleOnChange(e) {
              console.log('hello world');

              originalThis._updateLatLong(e);
            }


          }, delayInMilliseconds);
        }


      },

      _marshalEntries: function(entries) {
        // Marshal provided array of data and return the modified version.
        return _.map(entries, (entry)=>{
          return entry;
        });
      },

      sendReport: async function(input) {
        console.log('Creating new database record...')

        var timeIntervalSince1970 = new Date() / 1000;
        this.formAnswers['completionDate'] = timeIntervalSince1970;
        this.formAnswers['lat'] = this.lat;
        this.formAnswers['long'] = this.long;

        await Cloud.createReport(this.formAnswers);
      },

      radioclicked: function(input) {
        var context = this.currentState.id;
        var answer = input.value;
        console.log('context: ', context, ', answer: ', answer);


        // TODO: save answer for context
        this.formAnswers[context] = answer
        console.log('Answers so far:', this.formAnswers);

        if (this.currentState.id == 'hasSymptoms' && answer == 'yes') {
          this._refreshState('hasFever');
        } else if (this.currentState.id == 'hasSymptoms' && answer == 'no') {
          this._refreshState('endofsurvey');
        } else if (this.currentState.id == 'hasFever' && answer == 'yes') {
          this._refreshState('feverTemperature');
        } else if (this.currentState.id == 'hasFever' && answer == 'no') {
          this._refreshState('hasCough');
        } else if (this.currentState.id == 'feverTemperature' && answer == 'more') {
          this._refreshState('higherFeverTemperature');
        } else if (this.currentState.id == 'feverTemperature' || this.currentState.id == 'higherFeverTemperature') {
          this._refreshState('hasCough');
        } else if (this.currentState.id == 'hasCough' && answer == 'yes') {
          this._refreshState('cough');
        } else if (this.currentState.id == 'hasCough' && answer == 'no') {
          this._refreshState('shortnessBreath');
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
          // Ask for location
          this._refreshState('location');
        } else if (this.currentState.id == 'endofsurvey') {
          // Close panel
          $('#surveybutton').trigger('click');
        }

        $(".radioelement").prop('checked', false); 
      },

      buttonclicked: function(input) {
        console.log('button clicked!' + input.value)

        if (input.value == 'close') {
          $('#surveybutton').trigger('click');
        } else if (input.value == 'confirm' && this.lat != 0 && this.long != 0) {
          console.log('looks good!')
          this.sendReport();
          this._refreshState('endofsurvey');
        } else {
          console.log('something is missing, maybe :)');
          console.log('lat: ', this.lat);
        }
      }
    }
  });
