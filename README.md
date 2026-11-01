# Anvesh Sharma: portfolio

Built with Astro and published free with GitHub Pages. Every time you save (commit) a change on GitHub, the site rebuilds and goes live in about a minute.

## Where things live

| What you want to change | File |
| --- | --- |
| A project's text, title, category or image | `src/content/projects/<project>.md` |
| Project images, your photo, resume | `public/images/...`, `public/resume.pdf` |
| Colors, fonts, page width | `src/styles/global.css` (settings at the top) |
| Intro text on the home page | `src/pages/index.astro` |
| Email and LinkedIn links | `src/components/Footer.astro` |
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

Replace your photo by uploading `public/images/portrait.jpg` and changing `/images/portrait.svg` to `/images/portrait.jpg` in `src/pages/index.astro`.

Replace your resume by uploading your PDF as `public/resume.pdf`, keeping that exact name.

## Change colors or fonts

Open `src/styles/global.css`. The labeled settings at the top control the whole site, for example `--gold`, `--purple` and `--black`.

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
