# Currencies

## Production

1. Create `docker-compose.yml` with content:
```yml
version: "3.8"

services:
  currencies:
    image: idefant/currencies
    container_name: currencies
    restart: unless-stopped
    ports:
      - "80:80"
```
2. Create `.env` and fill in similarly `.env.sample`
3. Run `docker compose up -d`
