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
npm install @graw/ci
```

## Development

```bash
npm install
npm run watch
```

## Release

A package release is performed automatically once a version tag is pushed to GitHub. 

```bash
npm version major|minor|patch
git push origin main --tags
```

### Manually

```bash
rm -rf dist
npm run prod
npm version major|minor|patch
npm publish
```
