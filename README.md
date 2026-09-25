# Sarah McGuire Baked Goods: website mock

This is a mock website for **Sarah McGuire Baked Goods**, a made-to-order home bakery in Midtown Tulsa, Oklahoma. It shows what the finished site could look like. The copy, prices, contact details and photo slots are all placeholders that Sarah will replace with her own.

The site is plain static HTML with no build step. It deploys to Netlify as-is (see `netlify.toml`).

## Pages

| Page | File | What it holds |
| --- | --- | --- |
| Shell (header, nav, footer, everyday menu data) | `index.html` | Announcement bar, logo, navigation, footer contact details, and the **everyday menu list** (`EVERYDAY` near the bottom of the file) |
| Home | `SiteHome.dc.html` | Hero, "Made for your day" cards, how ordering works, pickup band |
| Menu & Prices | `SiteMenu.dc.html` | Everyday bakes grid, custom-order starting prices, flavors and fillings |
| About | `SiteAbout.dc.html` | Sarah's story, kitchen photo slot |
| Pickup & FAQ | `SitePickup.dc.html` | Pickup and delivery details, frequently asked questions |
| Contact | `SiteContact.dc.html` | Contact form, email address |
| Order request | `SiteOrder.dc.html` | "Your box", custom order, pickup/delivery, date and details form |

## Replacing placeholders

- **Everyday menu (names, prices, units, descriptions):** edit the `EVERYDAY` list in `index.html`.
- **Custom-order prices, flavors, fillings:** edit `SiteMenu.dc.html`.
- **Email, Instagram, pickup area and hours:** the footer in `index.html`, plus `SiteContact.dc.html` and `SitePickup.dc.html`.
- **Photos:** the cream boxes that show the faint logo mark and a caption such as `PHOTO · A CELEBRATION CAKE` are photo slots. Put real photos in `assets/photos/` and replace each slot's `<img src="assets/logo/mark-dusty-rose.png" …>` with the photo (for example `<img src="assets/photos/celebration-cake.jpg" alt="…" style="width:100%;height:100%;object-fit:cover">`). Product cards on the Home and Menu pages use the same placeholder mark.
- **Logos:** the brand logos are in `assets/logo/`.

## Site settings

The root component in `index.html` has three switches, each with its default in `renderVals()`:

- `showAnnouncement` (default `true`): the green notice bar at the top.
- `heroStyle` (`'photo'` or `'logo'`): shows a photo slot or the full logo on the home page.
- `offerDelivery` (default `true`): turns the local delivery option on or off across the site.

## Forms

The **Order request** and **Contact** forms send to [Netlify Forms](https://docs.netlify.com/forms/setup/). Each one shows its thank-you message only after Netlify accepts the submission; if sending fails, the visitor sees an error that points them to the email address instead.

- **Reading submissions:** Netlify dashboard → the site → **Forms** → `order` or `contact`.
- **Getting them by email:** Netlify dashboard → **Project configuration → Notifications → Emails and webhooks → Form submission notifications**. Add Sarah's email address there.
- **Adding or renaming a field:** Netlify learns the fields from the hidden `<form data-netlify="true">` copies near the bottom of `index.html`. Any field the page sends (see `send` in `SiteOrder.dc.html` / `SiteContact.dc.html`) must also appear in that hidden copy, or Netlify drops it.
- Form detection has to be turned on for the site in Netlify (**Forms → Enable form detection**). It is already on for this site.
- Submitting the forms only works on the deployed site. With a local preview server the page shows the "didn't go through" error, which is expected.

## Page addresses

Each page has its own address, so links and the browser's back button work: `/` (home), `/#menu`, `/#pickup`, `/#about`, `/#contact` and `/#order`. The page names and browser-tab titles are listed in `PAGES` near the bottom of `index.html`.

## Project layout

```
index.html            site shell and root page (also holds the hidden Netlify form copies)
forms.js              sends the Order and Contact forms to Netlify
Site*.dc.html         one file per page, loaded by the shell
support.js            page runtime (generated; don't edit)
design-system.js      brand components: buttons, cards, logo, icons (generated)
vendor/               React 18 (self-hosted)
assets/fonts/         Cormorant Garamond, IM Fell English SC, Ms Madi
assets/icons/         Lucide line icons
assets/logo/          brand logos
netlify.toml          Netlify deploy settings
```

Everything is self-hosted, so the site makes no requests to outside servers.

## Previewing locally

The page files are fetched by the browser, so open the site through a local web server rather than by double-clicking `index.html`:

```sh
python3 -m http.server 8000
# then open http://localhost:8000
```

## Deploying to Netlify

1. In Netlify, choose **Add new site → Import an existing project** and pick this GitHub repository.
2. Leave the build command empty and set the publish directory to `.`. `netlify.toml` already sets both.
3. Deploy. Every push to the production branch redeploys the site.
