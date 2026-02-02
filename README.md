# Graw CI

This package contains the necessary assets to develop a web application that aligns with the corporate identity of Graw Radiosondes.

## Contents

- CSS Styles
  - Colors
    - as root css variables
    - as helper classes with additional shades
      - accent
      - bg
      - border
      - caret
      - decoration
      - outline
      - text
  - Fonts
- Images
  - Icon
  - Logo
  - Favicon
  - PWA Assets

## Installation

```bash
bun install @graw/ci
```

## Development

```bash
bun install
bun run watch
```

## Release

A package release is performed automatically once a version tag is pushed to GitHub.

```bash
bunx npm version major|minor|patch
git push origin main --tags
```

### Manually

```bash
rm -rf dist
bun run prod
bunx npm version major|minor|patch
bunx npm login
bun publish
```
