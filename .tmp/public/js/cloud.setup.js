/**
 * cloud.setup.js
 *
 * Configuration for this Sails app's generated browser SDK ("Cloud").
 *
 * Above all, the purpose of this file is to provide endpoint definitions,
 * each of which corresponds with one particular route+action on the server.
 *
 * > This file was automatically generated.
 * > (To regenerate, run `sails run rebuild-cloud-sdk`)
 */

Cloud.setup({

  /* eslint-disable */
  methods: {"grantCsrfToken":{"verb":"GET","url":"/csrfToken"},"createReport":{"verb":"POST","url":"/api/v1/create-report","args":["data"]},"deliverContactFormMessage":{"verb":"POST","url":"/api/v1/deliver-contact-form-message","args":["emailAddress","topic","fullName","message"]}}
  /* eslint-enable */

});
