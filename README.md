# Photography portfolio — React + Vite

A five-page portfolio site with a Google Form booking page. No backend,
no database, no server code.

---

## What you need to install

| Tool | Why | Where |
|---|---|---|
| **Node.js** (LTS, v20 or v22) | Runs the build tools. Comes with `npm`. | nodejs.org |
| **VS Code** | Your editor. | code.visualstudio.com |

That's the whole list. There is no "compiler" to choose — Vite is the
build tool and it arrives with the project when you run `npm install`.

Check Node installed correctly by opening a terminal and running:

```
node -v
npm -v
```

Both should print a version number. If `node -v` says v20 or higher,
you're ready.

---

## Getting it running

Open this folder in VS Code, then open its built-in terminal
(**Terminal → New Terminal**) and run:

```
npm install
npm run dev
```

`npm install` downloads React and Vite into a `node_modules` folder.
It takes a minute the first time and you only do it once.

`npm run dev` starts a local server and prints a URL like
`http://localhost:5173`. Open it. Leave this command running while you
work — every time you save a file, the browser updates by itself.

Stop the server with **Ctrl+C**.

---

## Making it yours, in order

1. **`src/data/site.js`** — your name, email, Instagram, about text,
   prices, and the list of photographs. Start here. Almost everything
   you want to change is in this one file.

2. **Your Google Form.** In `site.js`, replace `formLink` and
   `formEmbed`:
   - `formLink`: Form → **Send** → the 🔗 link icon → copy the URL.
   - `formEmbed`: Form → **Send** → the `< >` icon → you'll see
     `<iframe src="https://docs.google.com/forms/.../viewform?embedded=true" ...>`.
     Copy **only** the address inside `src="..."`, not the whole tag.

3. **Your photographs.** Drop the files into `public/photos/`, then list
   them in `site.js`. Paths start with `/photos/` — never write
   "public" in the path. Add a photo of yourself as
   `public/photos/me.jpg` for the About page.

4. **`index.html`** — the `<title>` and `<meta name="description">`.
   These are what Google shows in search results.

5. **`src/index.css`** — the colour and font variables are the first
   eight lines. Change `--accent` and the whole site changes with it.

---

## Publishing it

```
npm run build
```

This creates a `dist/` folder containing plain HTML, CSS and JavaScript.
That folder is your website.

**Netlify (easiest):** go to app.netlify.com, and drag the `dist` folder
onto the page. It's live in about ten seconds, on a temporary address.
Then add your own domain under **Domain settings**.

**Netlify or Vercel via GitHub (better):** push this folder to a GitHub
repository and connect it. Build command `npm run build`, publish
directory `dist`. After that, every `git push` redeploys the site
automatically.

One catch with React Router: if someone loads `yoursite.com/gallery`
directly, the host must serve `index.html` rather than looking for a
`/gallery` file. Netlify handles this via the `public/_redirects` file
that's already included. Vercel and Cloudflare Pages detect it
automatically.

---

## The file map

```
index.html            the page shell; title and meta tags live here
package.json          the list of dependencies and the npm scripts
vite.config.js        build config — you won't need to touch it
public/photos/        YOUR IMAGE FILES GO HERE
public/_redirects     tells Netlify how to handle page URLs
src/
  main.jsx            starts React — edit this basically never
  index.css           all the styling
  App.jsx             which URL shows which page
  data/site.js        ← YOUR CONTENT
  components/
    Nav.jsx           header and mobile menu
    Footer.jsx
    Photo.jsx         an <img> that survives a missing file
    Lightbox.jsx      full-screen photo viewer
    ScrollToTop.jsx   resets scroll on page change
  pages/
    Home.jsx  Gallery.jsx  About.jsx  Pricing.jsx  Book.jsx
```

---

## Common errors

**`npm: command not found`** — Node isn't installed, or the terminal was
open before you installed it. Close the terminal and open a new one.

**`Failed to resolve import`** — a filename is misspelled, or the `.jsx`
extension is missing from an import. Imports here are case-sensitive.

**Blank white page** — open the browser console (F12). The error is
almost always a typo in a component you just edited.

**Photos don't appear** — the file isn't in `public/photos/`, or the
path in `site.js` doesn't match the filename exactly, including
capitals and the `.jpg` vs `.JPG` extension.

**The form iframe is blank** — you pasted the whole `<iframe>` tag into
`formEmbed` instead of just the address from inside `src="..."`.
