<br />
<br />
<p align="center">
  <img alt="Streamify logo" src="https://d2fplzddl6myl4.cloudfront.net/logo/streamify-logo-purpur.svg" height="100">
</p>
<br />
<h3 align="center">
  Headless Streaming
</h3>
<p align="center">
  No-code solution to build custom streaming platforms.
</p>
<p align="center">
    <a href="https://streamify.com"><strong>Learn more »</strong></a>
    <br />
    <br />
    <a href="https://discord.gg/Xb7g2dFfQB">Discord</a>
    ·
    <a href="https://streamify.com">Website</a>
    ·
    <a href="https://github.com/streamify-com/streamify.com/issues">Issues</a>
    ·
    <a href="https://streamifyplus.com/roadmap">Roadmap</a>
  </p>
<br />

> [!NOTE]
> If you are a member/contributor of the Streamify development team, then check out the [wiki](https://github.com/streamify-com/streamify.com/wiki) to get started.

## Table of contents

- [Requirements](#requirements)
- [Installation](#installation)

## Requirements

- [Node.js](https://nodejs.org/en/) `Version +18`
- [pnpm](https://pnpm.io/) `Version +6`
- [Turbo](https://turbo.build/) `Version +1.10`
- [TypeScript](http://typescriptlang.org) `Version +5`
- [PostgreSQL](https://www.postgresql.org/) `Version +14`

Check versions:

```
node -v && pnpm -v && turbo --version && tsc -v
```

## Start this project

### Run locally

1. Navigate to the projects inside of the `apps` directory and copy the `.env.example` to `.env.local`. Update the variables.
```
cp .env.example .env.local
```

2. Install all dependencies and build all apps and packages
```
pnpm install && pnpm build
```

3. Running all projects locally
```
pnpm run dev
```

### Docker 

This repo is configured to be built with Docker, and Docker compose. To build all apps in this repo:

#### 1. Create a network, which allows containers to communicate with each other, by using their container name as a hostname
```
docker network create app_network
```
#### 2. Build prod using new BuildKit engine
```
COMPOSE_DOCKER_CLI_BUILD=1 DOCKER_BUILDKIT=1 docker-compose -f docker-compose.yml build
```
#### 3. Start prod in detached mode
```
docker-compose -f docker-compose.yml up -d
```
or
```
make up
```

Open http://localhost:4001

To shutdown all running containers:
```
docker kill $(docker ps -q) && docker rm $(docker ps -a -q)
```

## Requirements

- i18n
- mobile responsive for all browsers
- custom domain (DNS records)
- All-in-One solution
- PayPal
- SEO
- Desktop & Mobile app (later)
- Monorepo

### Core
- [ ] Drag and drop functionality with dnd-kit

### Template - OTT
- [ ] Custom checkout and payment infrastructure with Stripe
- [ ] Email workflow with Resend
- [ ] Newsletter functionality with Resend
- [ ] Video CMS with Mux, LiveKit, Brightcove, Vidstack
- [ ] Authentication with Clerk
- [ ] User management with Clerk
- [ ] i18n with next-intl
- [ ] Adjustable Metadata and Viewport with Next.js 14
- [ ] Auto-generated opengraph- and twitter-images ([Next.js guide](https://nextjs.org/docs/app/api-reference/file-conventions/metadata/opengraph-image#generate-images-using-code-js-ts-tsx))
