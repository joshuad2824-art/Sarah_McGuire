# Sarah McGuire Baked Goods: website mock

This is a mock website for **Sarah McGuire Baked Goods**, a made-to-order home bakery in Midtown Tulsa, Oklahoma. It shows what the finished site could look like. The copy, prices, contact details and photo slots are all placeholders that Sarah will replace with her own.

The website is plain static HTML in `site/`, with no build step. A small admin API in `netlify/functions/` lets a logged-in admin edit the text and photos from the site itself (see **Admin editing** below). Netlify deploys both (see `netlify.toml`).

## Pages

| Page | File | What it holds |
| --- | --- | --- |
| Shell (header, nav, footer, everyday menu data) | `site/index.html` | Announcement bar, logo, navigation, footer contact details, and the **everyday menu list** (`EVERYDAY` near the bottom of the file) |
| Home | `site/SiteHome.dc.html` | Hero, "Made for your day" cards, how ordering works, pickup band |
| Menu & Prices | `site/SiteMenu.dc.html` | Everyday bakes grid, custom-order starting prices, flavors and fillings |
| About | `site/SiteAbout.dc.html` | Sarah's story, kitchen photo slot |
| Pickup & FAQ | `site/SitePickup.dc.html` | Pickup and delivery details, frequently asked questions |
| Contact | `site/SiteContact.dc.html` | Contact form, email address |
| Order request | `site/SiteOrder.dc.html` | "Your box", custom order, pickup/delivery, date and details form |

## Admin editing

The quickest way to change the site is to edit it in place:

1. On the home page, scroll to the bottom and click **Admin** (next to the copyright line).
2. Enter the admin passphrase.
3. A dark toolbar appears at the bottom of every page. With editing on:
   - **Click any text** to change it, then **Save**. **Restore original** puts back the wording from the page files.
   - **Click any photo placeholder** (the cream boxes with the faint logo) to upload a photo, change it, or remove it. Photos are resized in the browser (up to 2000px) before uploading.
   - Use **Go to page…** to move between pages, or **Turn editing off** to click around the site normally.
4. **Log out** when you're done. A login lasts 12 hours on that browser.

Edits are saved to Netlify (Netlify Blobs) and everyone sees them straight away. They sit on top of the page files, so the files themselves don't change.

**Passphrase:** set by the `ADMIN_PASSPHRASE` environment variable in Netlify (**Project configuration → Environment variables**). It isn't stored in this repository. To change it, update the variable and redeploy; changing it logs every admin out. If the variable is missing, admin login is switched off.

**How edits are matched to the page:** each piece of text is identified by where it appears (a page, or the header and footer, which are shared by every page), its original wording, and which occurrence of that wording it is. A few things to know:
- Editing text in the header or footer changes it on every page.
- If you later change a piece of text in the page files themselves, any admin edit made to the old wording no longer applies, and the new wording shows.
- Prices typed into the menu text don't change the math on the Order page. The order total still uses the numbers in `EVERYDAY` in `site/index.html`.
- Form field placeholders (the grey hint text inside empty boxes) and drop-down choices can't be edited this way; change those in the page files.

## Replacing placeholders in the files

For permanent changes, or anything the admin editor can't reach, edit the files directly:

- **Everyday menu (names, prices, units, descriptions):** edit the `EVERYDAY` list in `site/index.html`.
- **Custom-order prices, flavors, fillings:** edit `site/SiteMenu.dc.html`.
- **Email, Instagram, pickup area and hours:** the footer in `site/index.html`, plus `site/SiteContact.dc.html` and `site/SitePickup.dc.html`.
- **Photos:** the cream boxes that show the faint logo mark and a caption such as `PHOTO · A CELEBRATION CAKE` are photo slots. The easiest way is the admin editor above. To build a photo into the files instead, put it in `site/assets/photos/` and replace each slot's `<img src="assets/logo/mark-dusty-rose.png" …>` with the photo (for example `<img src="assets/photos/celebration-cake.jpg" alt="…" style="width:100%;height:100%;object-fit:cover">`). Product cards on the Home and Menu pages use the same placeholder mark.
- **Logos:** the brand logos are in `site/assets/logo/`.

## Site settings

The root component in `site/index.html` has three switches, each with its default in `renderVals()`:

- `showAnnouncement` (default `true`): the green notice bar at the top.
- `heroStyle` (`'photo'` or `'logo'`): shows a photo slot or the full logo on the home page.
- `offerDelivery` (default `true`): turns the local delivery option on or off across the site.

## Forms

The **Order request** and **Contact** forms send to [Netlify Forms](https://docs.netlify.com/forms/setup/). Each one shows its thank-you message only after Netlify accepts the submission; if sending fails, the visitor sees an error that points them to the email address instead.

- **Reading submissions:** Netlify dashboard → the site → **Forms** → `order` or `contact`.
- **Getting them by email:** Netlify dashboard → **Project configuration → Notifications → Emails and webhooks → Form submission notifications**. Add Sarah's email address there.
- **Adding or renaming a field:** Netlify learns the fields from the hidden `<form data-netlify="true">` copies near the bottom of `site/index.html`. Any field the page sends (see `send` in `site/SiteOrder.dc.html` / `site/SiteContact.dc.html`) must also appear in that hidden copy, or Netlify drops it.
- Form detection has to be turned on for the site in Netlify (**Forms → Enable form detection**). It is already on for this site.
- Submitting the forms only works on the deployed site. With a local preview server the page shows the "didn't go through" error, which is expected.

## Page addresses

Each page has its own address, so links and the browser's back button work: `/` (home), `/#menu`, `/#pickup`, `/#about`, `/#contact` and `/#order`. The page names and browser-tab titles are listed in `PAGES` near the bottom of `site/index.html`.

## Project layout

```
site/                     the website (this is what Netlify publishes)
  index.html              site shell and root page (also holds the hidden Netlify form copies)
  Site*.dc.html           one file per page, loaded by the shell
  admin.js                admin login, click-to-edit text and photo uploads
  forms.js                sends the Order and Contact forms to Netlify
  support.js              page runtime (generated; don't edit)
  design-system.js        brand components: buttons, cards, logo, icons (generated)
  vendor/                 React 18 (self-hosted)
  assets/                 fonts, icons, logos
netlify/functions/        admin API: login, saved text, photo uploads
netlify/lib/admin.mjs     passphrase check, login sessions, storage helpers
package.json              the one server dependency (@netlify/blobs)
netlify.toml              Netlify deploy settings
```

Everything the visitor's browser loads is self-hosted, so the site makes no requests to outside servers.

## Previewing locally

The page files are fetched by the browser, so open the site through a local web server rather than by double-clicking `index.html`:

```sh
python3 -m http.server 8000 --directory site
# then open http://localhost:8000
```

A plain local server shows the site as written in the files. The forms and admin editing need Netlify's functions, so they only work on the deployed site (or with `netlify dev` from the Netlify CLI).

## Deploying to Netlify

1. In Netlify, choose **Add new site → Import an existing project** and pick this GitHub repository.
2. `netlify.toml` already sets the publish directory (`site`) and the functions directory, and Netlify installs `@netlify/blobs` from `package.json` automatically.
3. Set the `ADMIN_PASSPHRASE` environment variable (see **Admin editing**).
4. Deploy. Every push to the production branch redeploys the site.
