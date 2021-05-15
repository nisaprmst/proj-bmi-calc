
import { google } from 'googleapis';

const googleConfig = {
  clientId: '999102146750-sgqulbp4qknobfusic1cmi3oh6jh4q8j.apps.googleusercontent.com', // e.g. asdfghjkljhgfdsghjk.apps.googleusercontent.com
  clientSecret: 'MQ0oH6cE4PU704MBqHS5tUfh', // e.g. _ASDFA%DFASDFASDFASD#FAD-
  redirect: 'https://your-website.com/google-auth' // this must match your google api settings
};

/**
 * Create the google auth object which gives us access to talk to google's apis.
 */
function createConnection() {
  return new google.auth.OAuth2(
    googleConfig.clientId,
    googleConfig.clientSecret,
    googleConfig.redirect
  );
}