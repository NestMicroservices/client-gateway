# Client Gateway Microservice

## Dev

1. Clone the repository
2. Install dependencies
3. Create a `.env` file based on the `.env.template`
4. Run `pnpm run start:dev`

## Prod

Run

```dotnetcli
docker build -f dockerfile.prod -t client-gateway .
```
