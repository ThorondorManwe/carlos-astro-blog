# Carlos Rangel Dev

Personal website and blog for Carlos Rangel, a front-end developer in Aguascalientes, México. This is a single Astro application with React components. It includes a home page, an about page, a portfolio, blog posts, tags, and an RSS feed.

## Requirements

- Node.js 24.15.0. pnpm 11.6.0 requires Node.js 22 or newer, and this repository was installed and built with Node.js 24.15.0.
- pnpm 11.6.0. The exact version is pinned in `package.json`:

```json
"packageManager": "pnpm@11.6.0"
```

## Install or activate pnpm 11.6.0

Node.js 24 includes Corepack. Corepack reads `packageManager` and runs that pnpm version inside this repository.

From the repository root:

```sh
corepack enable
corepack prepare pnpm@11.6.0 --activate
```

`corepack enable` installs the pnpm command. On Windows this writes into the Node.js directory, so an administrator shell may be required the first time. `corepack prepare` downloads pnpm 11.6.0 and activates it. After that, `pnpm` in this repository uses 11.6.0 even if another version is installed globally.

Confirm the versions:

```sh
node -v
pnpm -v
```

The expected output is `v24.15.0` and `11.6.0`.

## Install dependencies

```sh
pnpm install
```

Use the lockfile exactly, including in CI and on Netlify:

```sh
pnpm install --frozen-lockfile
```

`pnpm-lock.yaml` is the only package-manager lockfile.

## Commands

Run these from the repository root:

| Command | Action |
| --- | --- |
| `pnpm run dev` | Starts the dev server at `localhost:4321` |
| `pnpm run start` | Starts the dev server at `localhost:4321` |
| `pnpm run build` | Builds the production site into `dist/` |
| `pnpm run preview` | Serves the production build locally |
| `pnpm exec astro --help` | Prints Astro CLI help |

## Dependency build scripts

pnpm 11 does not run dependency install scripts until they are approved in `pnpm-workspace.yaml` under `allowBuilds`. That file holds pnpm settings for this one application. It does not define a workspace or monorepo, because `packages` is omitted and only the root package is included.

- `esbuild` is allowed. Vite uses its install script to select the platform binary.
- `sharp` is denied. This site does not process images with Sharp, and the production build completes without it.
- `fsevents` is allowed for Vite's optional macOS file watcher. pnpm does not install that package on Windows or Linux.

## Netlify

The production site URL is set in `astro.config.mjs`. This repository has no Netlify configuration file, and remote site settings were not changed.

After these changes are pushed, update the existing site manually:

- Build command: `pnpm run build`
- Publish directory: `dist`
- Node.js: 24, matching the validated 24.15.0. pnpm 11.6.0 does not run on Node.js 18 or 20.

In the Netlify UI:

- Build command and publish directory: Project configuration > Developer settings > Continuous deployment > Build settings.
- Node.js version: Project configuration > Developer settings > Continuous deployment > Dependency management. A `NODE_VERSION` value of `24`, or a `.node-version` / `.nvmrc` file, overrides that UI setting. Existing sites keep their previous Node.js version until one of those is changed. New Netlify sites default to Node.js 24.

Netlify installs dependencies with pnpm when `pnpm-lock.yaml` is present. The `packageManager` field tells Corepack to download pnpm 11.6.0. Without that field, Netlify's default pnpm is 10.x, which does not understand this project's `allowBuilds` setting. Leave the base directory at the repository root.
