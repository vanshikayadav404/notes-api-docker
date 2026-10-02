\# Notes API (Dockerized)



A small REST API built with Node.js and Express, packaged as a Docker image and run with Docker Compose.



\## Run it

With Docker Compose:



&#x20;   docker compose up -d --build



From Docker Hub:



&#x20;   docker run -d -p 3000:3000 vanshikayadav404/notes-api:1.0



\## Endpoints

| Method | Path | Description |

|---|---|---|

| GET | / | Service status |

| GET | /health | Health check |

| GET | /notes | List notes |

| POST | /notes | Add a note, body: {"text": "..."} |



\## What I learned

\- Images vs containers, and how Dockerfile layers are cached

\- Port mapping, environment variables and running as a non-root user

\- Compose with a healthcheck and a restart policy



\## Known limits

Notes are stored in memory, so they are lost when the container restarts. A database with a volume would be the next step.

