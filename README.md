## RunningInDocker

# Setting up and Running Your React UI Component Library in Docker

This Docker setup will allow you to host your React UI Component Library on localhost:8083.

## Prerequisites

- Docker installed on your machine

## Instructions

### 1. Build Docker Image

Clone the repository or navigate to your project directory:

```
git clone https://github.com/mcook-2/cook_mckenzie_final_site
```

Change to Directory of Repo:

```
cd cook_mckenzie_final_site
```

Build the Docker image:

```
docker build -t cook_mckenzie_assignment14 .
```

### 2. Run Docker Container

Run the Docker container:

```
docker run -p 5575:5575 --name cook_mckenzie_assignment14 cook_mckenzie_assignment14
```

### 4. Access the Application

Open your web browser and go to [http://localhost:5575](http://localhost:5575) to view your React UI Component Library.