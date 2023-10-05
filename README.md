<div align="center">
  <img alt="Logo" src="public/favicon.png" width="100" />
</div>
<h1 align="center">
  Hadad's portfolio <a text="small" href="https://hadadus.me" target=__blank"> link</a>
</h1>


A personal website built with  [astro](https://astro.build/) and sass and no tailwind but something close 😉. [hadadus.me](https://hadadus.me)

<br />
<img width="1437" alt="screenshot" src="https://github.com/dusmel/hadadus.me/assets/27511264/a815b03e-a8ea-48af-8345-23105ec32fdf">



## 🚀 Project Structure
high-level project structure

```
/
├── public/
│   └── favicon.png
├── src/
│   ├── components/
│   │   └── Projects.astro
|   |   └── Skills.astro
│   ├── layouts/
│   │   └── BaseLayout.astro
│   └── pages/
│   |    └── index.astro
|   └── styles/
│       └── index.scss
└── package.json
```



## 🎨 Color Reference

| Color          | Hex                                                                |
| -------------- | ------------------------------------------------------------------ |
| accent         | ![#0a192f](https://via.placeholder.com/10/ff8b33?text=+) `#ff8b33` |
| accent-700     | ![#112240](https://via.placeholder.com/10/ed5407?text=+) `#ed5407` |
| primary        | ![#233554](https://via.placeholder.com/10/78a5e2?text=+) `#78a5e2` |
| primary-700    | ![#8892b0](https://via.placeholder.com/10/242d52?text=+) `#242d52` |
| neutral-100    | ![#a8b2d1](https://via.placeholder.com/10/f8fafc?text=+) `#f8fafc` |
| neutral-900    | ![#ccd6f6](https://via.placeholder.com/10/000000?text=+) `#000000` |

<br />

## 🚀 Forking and customizing
I'm glad if you like this and want to customize it to your own thing, feel free to give credit. This is just to say I'm a big fan of open source.



> Let's talk about the styling, if you inspected the site or looked into the markup you might have noticed classes similar but not quite the same with tailwind. Why not just use Tailwind? I mean tailwind is great really great, so great I wanted to try to build something similar on my own. I found out real quick it's not just a bunch of utility classes. So the end end result is a style folder with few subfolders and a loot of documentation reading. I have some respect for sass now. I'm planning to write something around this topic.

<br />
<br />


## TL;DR
These are the only things you need to care about if you want to customize/extend the theme or the look of the site


- The `sections` are divided into components in the `Component` folder. They are easy to go through
- Style:
  - font family can be changed in the typography variable file `src/style/variables/_typography.scss`  variable name `$ff-primary` . and if you want to tweak anything font related, you will find it in that file.
  - the theme and colors used are shared below. you can change the values in `src/style/variables/_colors.scss`. They are categorized into 3 groups: `primary` `accent` and `neutral (very light to very dark)`. Great tools: get great color palettes  [color hunt](https://colorhunt.co/) and to have `shades` similar tailwind [ui colors](https://uicolors.app/create)
  - To `harmonize sizes` everywhere and get symmetric spaces across ... you can import the `size function` and use it like size(1..15)
  - That's it 🎉. The rest I tried to add comments in the files as much as I could but you don't need to go through all that.
  

PS: One more thing if you check the utility folder, it is generating a lot of classes. most probably not all of them are going to be used. So I'm purging the final css file while building so that it includes only used classes. This way we get a very small css file at the end just like tailwind. I'm using [PurgeCss](https://purgecss.com/) for this, but there is a catch tho!! it doesnt play well with SSR and serverless ( or I havent given it enough time to fix it ). which means if you want to use it you need to disable analytics by vercel in  `astro.config.mjs`

if you want to `generate utility classes` yourself and don't want to deal with sass, I created something with js just for that. [dusmel/utility-classes-generator-css](https://github.com/dusmel/utility-classes-generator-css)




The `content` are either in `json` or `md`. In the content you can check astro [doc](https://docs.astro.build/en/guides/content-collections/) for more details.

If you want to add more icons I added a step-by-step instructions in [src/constants/IconPaths.ts](https://github.com/dusmel/hadadus.me/blob/main/src/constants/IconPaths.ts)

## 🧞 Get started 

I'm using `bun` but you can use `pnpm` `yarn` or anything really!!

| Command                | Action                                           |
| :--------------------- | :----------------------------------------------- |
| `bun install`          | Installs dependencies                            |
| `bun run dev`          | Starts local dev server at `localhost:4321`      |
| `bun run build`        | Build your production site to `./dist/`          |
| `bun run preview`      | Preview your build locally, before deploying     |
| `bun run astro ...`    | Run CLI commands like `astro add`, `astro check` |



## 👀 Want to chat?

Feel free to say hello email: hadad.bwenge@gmail.com and Twitter: [@hadad__](https://twitter.com/hadad__)
