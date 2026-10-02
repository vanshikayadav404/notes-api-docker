# Notes API (Dockerized)

A small REST API built with Node.js and Express, packaged as a Docker image and run with Docker Compose. The image is published on Docker Hub.

## Run it

With Docker Compose:

```bash
docker compose up -d --build
```

From Docker Hub:

```bash
docker run -d -p 3000:3000 vanshikayadav404/notes-api:1.0
```

Then open http://localhost:3000/notes

## Endpoints

| Method | Path | Description |
|---|---|---|
| GET | / | Service status |
| GET | /health | Health check |
| GET | /notes | List notes |
| POST | /notes | Add a note, body: {"text": "..."} |

## Tech

Node.js, Express, Docker, Docker Compose, Docker Hub

## What I learned

- Images vs containers, and how Dockerfile layers are cached
- Port mapping, environment variables and running as a non-root user
- Compose with a healthcheck and a restart policy
- A `restart: unless-stopped` policy does not bring back a container I killed by hand

## Known limits

Notes are stored in memory, so they are lost when the container restarts. A database with a volume would be the next step.
