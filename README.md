# Catch - SendGrid backend wrapper

 This project provides a simple wrapper around the SendGrid contacts api endpoint and allows users to invoke the functionality without providing a bearer token

## Running Locally
Running ```npm start``` will allow local testing of cloud functions
## Deployment

Run ```deploy.sh``` to deploy

Note: 
Deployment requires an .env.yaml file that specifies the sendgrid api token:
```
SENDGRID_API_BEARER: <TOKEN HERE>
```
as well as permissions to som-rit-phi-catch on GCloud