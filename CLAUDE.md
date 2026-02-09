# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

GraphAI official website. Built with VitePress for documentation and developer resources.

## Commands

```bash
yarn dev        # Start VitePress dev server
yarn build      # Build static site
yarn preview    # Preview built site
yarn eslint     # Run ESLint with --fix on docs/
yarn format     # Format with Prettier
yarn deploy     # Build and deploy to Firebase hosting
```

## Architecture

- VitePress static site generator
- `docs/` - Documentation source (Markdown + Vue components)
- Firebase hosting for deployment
