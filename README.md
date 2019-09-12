## Security front-end template with examples of both good and bad practices of:

- Hosting
- Authentication
- Storage

## Deploying application in GCP (Cloud Run)

    1. Init your gcloud etc - in docs of Google
    2. Enable Cloud Run API (as it is still in beta)
    3. Deploy your container as:

### pushes container into registry

```
gcloud builds submit --tag gcr.io/fe-security/fe-security
```

### deploys pushed container

```
gcloud beta run deploy --image gcr.io/fe-security/fe-security --platform managed

```
