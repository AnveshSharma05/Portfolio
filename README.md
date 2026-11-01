# Anvesh Sharma: portfolio

Built with Astro and published free with GitHub Pages. Every time you save (commit) a change on GitHub, the site rebuilds and goes live in about a minute.

## Editing with Pages CMS (easiest)

1. Go to https://app.pagescms.org and sign in with GitHub.
2. Open the **Portfolio** repository.
3. Use **Projects** to add or edit projects, and **Home page & settings** for the intro text, photo, contact links, resume and colors.
4. Click **Save**. The live site updates about a minute later. You can follow progress in the repository's **Actions** tab.

The editor is set up by `.pages.yml` in this repository.

## Where things live

| What you want to change | File |
| --- | --- |
| A project's text, title, category or image | `src/content/projects/<project>.md` |
| Project images, your photo | `public/images/...` |
| Resume and other files | `public/files/...` |
| Home page text, contact links, colors | `src/data/site.json` |
| Colors, fonts, page width | `src/styles/global.css` (settings at the top) |
| Menu links | `src/components/Header.astro` |

## Add a new project

1. On GitHub, open `src/content/projects/`.
2. Open any project file, copy everything, then go back and click **Add file → Create new file**.
3. Name it something like `heart-valve.md`. The name becomes the page address (`/Portfolio/projects/heart-valve/`).
4. Paste and edit the top section:

   ```yaml
   ---
   title: Heart valve tester
   category: Hardware
   summary: One sentence about what it is and why it matters.
   image: /images/projects/heart-valve.jpg
   imageAlt: Describe the image for screen readers
   proudest: false   # true puts it in "Proudest projects" at the bottom
   order: 7          # lower numbers show first
   role: Lead designer
   team: 4 students
   timeline: Spring 2026
   tools: SolidWorks, Arduino
   ---
   ```

5. Below the second `---`, write the project story. `## ` starts a heading. Add images with `![description](/images/projects/your-image.jpg)`.
6. Click **Commit changes**.

## Add or replace images

Open `public/images/projects/`, click **Add file → Upload files**, drop your images in and commit. Then set the `image:` line in the project file to the new file name, for example `/images/projects/heart-valve.jpg`. Images around 1600px wide in JPG are a good size.

Your photo and resume are set in **Home page & settings** in Pages CMS (or in `src/data/site.json`).

## Change colors or fonts

The gold, purple and background colors can be changed in **Home page & settings** in Pages CMS. Fonts, spacing and the remaining settings are at the top of `src/styles/global.css`.

## Preview on your own computer (optional)

Install Node.js, then run in this folder:

```
npm install
npm run dev
```

Open http://localhost:4321/Portfolio/. Changes show up as soon as you save.

## Paths and the /Portfolio address

The site lives at https://anveshsharma05.github.io/Portfolio/. Keep writing image and link paths as `/images/...` in project files; `/Portfolio` is added automatically when the site is built.

## First-time setup

In this repository, go to **Settings → Pages** and set **Source** to **GitHub Actions**.
