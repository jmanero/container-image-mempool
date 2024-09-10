mempool.space Container Image Build
===================================

Simplified container image builds for `mempool/frontend` and `mempool/backend`

~[Unwinding NPM builds](./doc/npm.jpg)

The container images produced by this configuration should behave more or less the same as those published to [hub.docker.com](https://hub.docker.com/u/mempool) by the [mempool.space](https://mempool.space/about) team. Changes include:

- Alpine based images with clean security scans as of September 2024
- Support for `--read-only`
- Handle shutdown signals correctly in PID1 container processes
- Consolidated nginx logging to STDIO
- Use of existing configuration template and pre-start hook features in nginx image

## API Image

[`ghcr.io/jmanero/mempool/api`](https://github.com/users/jmanero/packages/container/package/mempool/api)

The `api` image contains the mempool "backend" NodeJS service.


## Web Image

[`ghcr.io/jmanero/mempool/web`](https://github.com/users/jmanero/packages/container/package/mempool/web)

The `web` image contains the mempool "frontend" distribution served by an Nginx instance.
