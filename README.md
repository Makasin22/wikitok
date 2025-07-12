# WikiTok

A TikTok-style interface for exploring random NeoLurk articles.

## Features

- Vertical scrolling feed of random NeoLurk articles (Russian only)
- Article previews with images, titles and excerpts
- Share articles directly or copy links
- Preloading of images and content for smooth scrolling
- Responsive design that works on mobile and desktop
- Progressive Web App (PWA) support for installing as a standalone app

## Tech Stack

- React 18
- TypeScript
- Tailwind CSS
- Vite
- Angular 17 (see `angular-app` folder for an experimental rewrite)

## Development

Run the commands below in the `/frontend` folder.

1. Install dependencies:

```bash
bun install
```

2. Run development server:

```bash
bun run dev
```

No backend required!

### Angular version

An experimental Angular rewrite lives in the `angular-app` folder. To run it you would normally install dependencies and start the dev server:

```bash
cd angular-app
npm install
npm start
```

Dependencies are not included in this repository due to environment restrictions.

## Demo

Check it out here at [wikitok.vercel.app](https://wikitok.vercel.app) or [wikitok.io](https://www.wikitok.io)

**Note:** This is the original WikiTok web project, not affiliated with wikitok.net or the independently developed WikiTok mobile apps for iPhone and Android.

## Contributing

1. Fork the repository
2. Create a new branch
3. Make your changes and commit them

## License

This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for details.

## Star History

![Star History Chart](https://api.star-history.com/svg?repos=IsaacGemal/wikitok&type=Date)