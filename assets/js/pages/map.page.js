parasails.registerPage('map', {
  //  ╦╔╗╔╦╔╦╗╦╔═╗╦    ╔═╗╔╦╗╔═╗╔╦╗╔═╗
  //  ║║║║║ ║ ║╠═╣║    ╚═╗ ║ ╠═╣ ║ ║╣
  //  ╩╝╚╝╩ ╩ ╩╩ ╩╩═╝  ╚═╝ ╩ ╩ ╩ ╩ ╚═╝
  data: {
    reports: [],

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
    console.log('reports:', this.reports);

    var x = document.getElementById("surveycontainer");
    x.style.display = "none";
  },

  //  ╦╔╗╔╔╦╗╔═╗╦═╗╔═╗╔═╗╔╦╗╦╔═╗╔╗╔╔═╗
  //  ║║║║ ║ ║╣ ╠╦╝╠═╣║   ║ ║║ ║║║║╚═╗
  //  ╩╝╚╝ ╩ ╚═╝╩╚═╩ ╩╚═╝ ╩ ╩╚═╝╝╚╝╚═╝
  methods: {
    myFunction: function(event) {
      console.log('Hello world!', event);
      var x = document.getElementById("surveycontainer");
      
      if (x.style.display === "none") {
        console.log('Ok, showing survey.')
        // Show survey
        x.style.display = "block";
        // Show cross
        $('#crossicon').removeClass('buttonHideIconAnimation');
        // Remove chat icon
        $('#chaticon').addClass('buttonHideIconAnimation');
      } else {
        console.log('Ok, hiding survey.')
        // Hide survey
        x.style.display = "none";
        // Hide cross
        $('#crossicon').addClass('buttonHideIconAnimation');
        // Show chat icon
        $('#chaticon').removeClass('buttonHideIconAnimation');
      }
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

    submittedTrackSymptomsModal: function() {
      console.log('ok it worked!');
      this.$forceUpdate();
    },
  }
});
