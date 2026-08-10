# BRATS by Shek — Men's Barber Studio Website

A responsive, static website designed for BRATS by Shek in Fredericton, NB.

## What's included

- Responsive desktop/tablet/mobile design
- BRATS by Shek logo supplied by you
- Services and prices
- Gallery with sample barber images
- About section
- Contact information
- Google Maps embed
- Instagram and phone links
- Appointment-booking button
- No server/database required

## 1. Add your booking schedule

The site is ready to connect to Google Calendar Appointment Schedules.

Open:

`script.js`

Find:

`const BOOKING_URL = "https://calendar.app.google/npcGB5fqBVnkVE4F7";`

Replace the placeholder with your Google Calendar booking-page URL.

Example:

`const BOOKING_URL = "https://calendar.google.com/calendar/appointments/schedules/....";`

## 2. Replace sample photos

The sample gallery photos currently load from Unsplash so the site looks complete immediately.

Later, you can replace the CSS background-image URLs in `style.css` with your own photos.

For example:

`.img-1 { background-image: url("images/my-haircut-photo.jpg"); }`

You can also replace the hero and studio image URLs in the same file.

## 3. Change services/prices

The service cards are in `index.html`.

Search for:

`<div class="service-grid">`

and edit the names, descriptions and prices.

## 4. Free hosting with GitHub Pages

1. Create a free GitHub account at https://github.com/
2. Create a new repository, for example `brats-barber-website`.
3. Upload everything inside this folder to the repository.
4. Go to the repository's Settings → Pages.
5. Under Build and deployment, choose "Deploy from a branch".
6. Select the `main` branch and `/ (root)`.
7. Save.
8. GitHub will provide a free `github.io` address.

## 5. Connect your purchased domain

In GitHub Pages, add your custom domain under Settings → Pages → Custom domain.

GitHub will show the DNS records required by your domain provider.

Do not delete your domain purchase or transfer it. You are only pointing the domain to the free GitHub Pages hosting.

## Important

This is a static website. It does not need paid hosting.

The Google Calendar appointment schedule handles real-time appointment availability. The website itself does not store customer information or appointment data.

## Files

- index.html
- style.css
- script.js
- images/logo-white.png
- images/logo-black.png


## Recommended service durations

These are starter recommendations shown on the website:

- Signature Hair Cut & Beard Trim — 60 min
- Beard Trim & Cuts — 30 min
- Hot Towel Shave — 45 min
- Basic Hair Cut — 30 min
- Moustache Grooming — 20 min
- De-tanning & Mask — 30 min
- Kid's Hair Cut — 20 min
- Ear Piercing — 30 min

### Important Google Calendar limitation

Google Calendar Appointment Schedules use one appointment duration per appointment schedule. A personal Google account or Business Starter account has one booking page; eligible paid plans can create multiple appointment schedules. Therefore, if you want the booking system to automatically reserve 60 minutes for a Signature Hair Cut & Beard Trim but only 20 minutes for Moustache Grooming, the cleanest Google Calendar setup is to create separate appointment schedules for the services (or groups of services) with different durations.

For the first version, the website's service cards show the recommended durations, while the main Book Appointment button opens your current booking page.

If you later create separate Google Calendar schedules, we can make each service card's "Book" button open the matching schedule.
