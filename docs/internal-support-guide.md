# Savaal Guide - Internal Support Team Documentation

> **Confidential** - For internal use by the Savaal support team only.

---

## Table of Contents

1. [Platform Overview](#platform-overview)
2. [Site Navigation Map](#site-navigation-map)
3. [Admin Panel Access](#admin-panel-access)
4. [Managing Guide Items (Restaurants, Hotels, Bars)](#managing-guide-items)
5. [Managing Events](#managing-events)
6. [Managing Judges](#managing-judges)
7. [Managing Utilities (Cuisines, Cities, Countries)](#managing-utilities)
8. [Judging & Scoring System](#judging--scoring-system)
9. [Contact Form & Email Handling](#contact-form--email-handling)
10. [Publishing & Visibility Controls](#publishing--visibility-controls)
11. [Common Support Scenarios](#common-support-scenarios)
12. [Technical Reference](#technical-reference)

---

## Platform Overview

Savaal Guide is a cultural hospitality platform celebrating excellence in African hospitality, focused on Southern Africa (primarily Zimbabwe). The site features curated restaurant, bar, and hotel listings with professional ratings, a transparent judging system, events, partnerships, and educational programs.

**Key areas of the site:**

| Section | URL | Purpose |
|---------|-----|---------|
| Homepage | `/` | Landing page with hero, ecosystem overview, distinctions |
| Guide | `/guide` | Searchable directory of rated restaurants, hotels, and bars |
| About Us | `/about-us` | Mission, services, academy, testimonials |
| Judging | `/judging` | Explanation of the judging framework |
| Events | `/events` | Gatherings and training events |
| Partnerships | `/partnerships` | Business and personal partnership info |
| Contact | `/contact` | Public contact form |
| Admin Panel | `/admin` | Content management (protected) |

---

## Site Navigation Map

```
Home (/)
|
+-- Guide (/guide)
|   +-- Individual Listing (/guide/[id])
|
+-- About Us (/about-us)
|   +-- Services (/about-us/services)
|   |   +-- Consulting (/about-us/services/consulting)
|   +-- Academy + Training (/about-us/academy-training)
|   +-- Testimonials (/about-us/testimonials)
|
+-- Judging (/judging)
|   +-- For Businesses (/judging/businesses)
|   +-- For Prospective Judges (/judging/prospective-judges)
|
+-- Events (/events)
|   +-- Individual Event (/events/[id])
|
+-- Partnerships (/partnerships)
|
+-- Contact (/contact)
|
+-- Admin Panel (/admin) [Protected]
    +-- Guide Management (/admin/guide)
    |   +-- Create New (/admin/guide/new)
    |   +-- Edit (/admin/guide/[id]/edit)
    +-- Events Management (/admin/events)
    |   +-- Create New (/admin/events/new)
    |   +-- Edit (/admin/events/[id]/edit)
    +-- Judges Management (/admin/judges)
    +-- Utilities Management (/admin/utilities)
```

**Navbar links visible to all users:** Guide, About Us (dropdown), Judging (dropdown), Events (dropdown), Partnerships (dropdown), "Get in Touch" button.

**Footer links:** Guide, Experiences, Partnerships, The Standard, The Academy, Contact, Instagram.

---

## Admin Panel Access

### How to Log In

1. Navigate to any `/admin` page (e.g., `/admin/guide`).
2. The system checks for a `savaal_admin` cookie in the browser.
3. If the cookie is not present, you will not be able to access admin features.
4. Authentication is handled via the `ADMIN_PASSWORD` environment variable on the server.

### Admin Security

- All admin data mutations (create, update, delete) require an `ADMIN_TOKEN` that is validated server-side by Convex.
- The admin cookie is named `savaal_admin`.
- If a team member reports they cannot access the admin panel, verify their browser has the correct cookie set.

---

## Managing Guide Items

**Location:** `/admin/guide`

Guide items represent restaurants, hotels, and bars listed on the public Guide page.

### Viewing All Items

- Navigate to `/admin/guide` to see a list of all guide items.
- Items show their name, category, published status, and sort order.

### Creating a New Item

1. Go to `/admin/guide/new`.
2. Fill in all required fields:

| Field | Description | Notes |
|-------|-------------|-------|
| **Name** | Venue name | Required |
| **Category** | Restaurant, Hotel, or Bar | Required |
| **Cuisine** | Type of cuisine | Must exist in Utilities first |
| **City** | City location | Must exist in Utilities; Southern Africa only |
| **Country** | Auto-populated | Resolved from the selected city |
| **Region** | Geographic region | e.g., "southern-africa" |
| **Location** | Specific address/area | Free text |
| **Cover Image** | Main image URL | Used as the card thumbnail |
| **Rating** | Overall rating | 0 to 5 |
| **Price Level** | Cost indicator | 1 (budget) to 5 (luxury) |
| **Description** | Venue description | Displayed on the detail page |
| **Scores** | 7 scoring categories | See Scoring System section below |
| **Total Score** | Aggregate score | Text field |
| **Judge Comments** | Up to 3 comments | Judge name + comment + rating |
| **Gallery** | Additional photo URLs | Displayed in the photo gallery |
| **Menu** | Menu items | Name, description, price per item |
| **Sort Order** | Display ordering | Lower numbers appear first |
| **Published** | Visibility toggle | Only published items appear on the public site |

3. Click Save/Submit.

### Editing an Item

1. Go to `/admin/guide`.
2. Click the edit action on the desired item.
3. You will be taken to `/admin/guide/[id]/edit`.
4. Make your changes and save.

### Deleting an Item

- Use the delete action on the guide list page.
- **This is permanent.** There is no soft-delete or trash/recycle bin.

### Important Notes

- If a cuisine or city is not available in the dropdown, it must be added via **Utilities** first.
- Only **published** items appear on the public `/guide` page.
- The cover image and gallery images are referenced by URL. Ensure image URLs are valid and accessible.

---

## Managing Events

**Location:** `/admin/events`

Events are divided into two categories: **Gatherings** (dinners, salons) and **Training** (workshops, academy sessions).

### Creating a New Event

1. Go to `/admin/events/new`.
2. Fill in the fields:

| Field | Description | Notes |
|-------|-------------|-------|
| **Slug** | URL-friendly identifier | Must be unique; used in the public URL |
| **Title** | Event name | Required |
| **Category** | Gathering or Training | Determines which tab it appears under |
| **Presented By** | Presenter name | Required |
| **Host** | Event host | Required |
| **Theme** | Event theme | Required |
| **Image** | Event image URL | Required |
| **Description** | Multi-paragraph description | Each paragraph on a separate line |
| **Highlights** | Key highlights/features | Each highlight on a separate line |
| **Date** | Event date | Text string |
| **Time** | Event time | Text string |
| **Price** | Simple price display | Optional; use if no ticket tiers needed |
| **Tickets** | Ticket tiers | Optional; label, price, seats per tier |
| **Location** | Venue name and address | Two fields: venue + address |
| **Notes** | Additional info | Each note on a separate line |
| **CTA** | Call-to-action button | Label text + destination URL |
| **Published** | Visibility toggle | Only published events appear publicly |
| **Show on Homepage** | Homepage feature toggle | Controls if event appears on the homepage |
| **Sort Order** | Display ordering | Lower numbers appear first |

3. Click Save/Submit.

### Editing & Deleting Events

- Edit via `/admin/events/[id]/edit`.
- Delete from the events list page. **Deletion is permanent.**

### Important Notes

- Slugs must be unique across all events. The system will reject duplicate slugs.
- The **Show on Homepage** toggle is separate from **Published**. An event can be published but not shown on the homepage.
- Events are displayed publicly under two tabs: "Gatherings" and "Training" based on the category field.

---

## Managing Judges

**Location:** `/admin/judges`

Judges are individuals who assess and rate venues in the Guide.

### Adding a Judge

1. Go to `/admin/judges`.
2. Enter the judge's name.
3. Submit to create.

### Editing a Judge

- Update the judge's name from the judges list.

### Deleting a Judge

- Remove from the list. **Deletion is permanent.**

### Important Notes

- Judge names are used in **Guide Item judge comments**. If a judge is deleted, any existing comments referencing them in guide items will still display the original name string.
- The judges list is used for reference and display purposes on the admin side.

---

## Managing Utilities

**Location:** `/admin/utilities`

Utilities are the reference data that guide items depend on: cuisines, countries, and cities.

### Cuisines

- **Add:** Enter a cuisine name; a URL slug is auto-generated.
- **Edit:** Change name or toggle active/inactive status.
- **Delete:** Permanently remove.
- Only **active** cuisines appear as options when creating/editing guide items.

### Countries

- Limited to **Southern Africa** only: South Africa, Zimbabwe, Botswana, Namibia, Mozambique, Zambia, Malawi, Lesotho, Eswatini, Angola.
- Toggle active/inactive status.
- Countries cannot have their names changed (they are fixed references).

### Cities

- Cities are linked to a parent country.
- **Add:** Provide city name and select the parent country.
- **Edit:** Change name or toggle active/inactive.
- **Delete:** Permanently remove.
- Only **active** cities in **active** countries appear when creating/editing guide items.

### Seeding Default Data

- The system has a seed function that populates default cuisines and all Southern African countries with their major cities.
- This is an idempotent operation (safe to run multiple times without creating duplicates).

---

## Judging & Scoring System

Savaal uses a **100-point scoring system** across 7 categories:

| Category | Maximum Score | Weight |
|----------|:------------:|:------:|
| Taste & Technique | 35 | Highest |
| Service | 25 | High |
| Beverage Experience | 10 | Medium |
| Menu Composition | 10 | Medium |
| Presentation | 10 | Medium |
| Ambience | 5 | Lower |
| Perceived Value | 5 | Lower |
| **Total** | **100** | |

### Savaal Distinctions

Based on overall scores, venues receive one of two distinctions:

- **Savaal Star** (1-3 stars) - Venues that meet the highest standards of excellence. Stars are awarded based on total score thresholds.
- **Savaal Selected** - Quality venues that meet Savaal's baseline standards but have not yet achieved star status.

### Score Validation

- When entering scores in the admin panel, each category score must not exceed its maximum.
- The system validates these limits on submission.

---

## Contact Form & Email Handling

### How It Works

1. A visitor fills out the contact form at `/contact`.
2. The form collects: Name, Email, Contact Type (Individual/Company), Company Name (if applicable), Request Type, and Message.
3. On submission, a `POST` request is sent to `/api/contact`.
4. The server uses the **Resend** email service to send the inquiry to `avdingiswayo54@gmail.com`.
5. The visitor sees a success or error message.

### Request Types Available

The contact form offers several request types via a dropdown (defined in the form component). These help categorize incoming inquiries.

### If Emails Are Not Being Received

- Verify the `RESEND_API_KEY` environment variable is correctly set.
- Check the Resend dashboard for delivery status and errors.
- Confirm the recipient email address is correct in the API route.

---

## Publishing & Visibility Controls

### Guide Items

| Field | Effect |
|-------|--------|
| `published: true` | Item appears on `/guide` and is searchable |
| `published: false` | Item is hidden from the public site, visible only in admin |

### Events

| Field | Effect |
|-------|--------|
| `published: true` | Event appears on `/events` |
| `published: false` | Event is hidden from the public site |
| `showOnHomepage: true` | Event appears in the homepage events section |
| `showOnHomepage: false` | Event does not appear on the homepage (may still appear on `/events` if published) |

### Sort Order

- Both guide items and events use a `sortOrder` numeric field.
- **Lower numbers appear first** in listings.
- Use this to control the display order of items on the public site.

---

## Common Support Scenarios

### "A restaurant is not showing up on the site"

1. Go to `/admin/guide` and find the item.
2. Check if the **Published** toggle is set to `true`.
3. Verify the item has all required fields filled in (name, category, city, cuisine, cover image).
4. Confirm the cuisine and city used are **active** in Utilities.

### "An event is not appearing on the homepage"

1. Go to `/admin/events` and find the event.
2. Verify **Published** is `true`.
3. Verify **Show on Homepage** is `true`.
4. Check the **Sort Order** - it may be sorted below the visible threshold.

### "I can't add a new cuisine or city"

- You must add cuisines and cities via `/admin/utilities` before they become available in the guide item form.

### "I can't access the admin panel"

1. Verify the `savaal_admin` cookie is set in the browser.
2. Clear the browser cache and try again.
3. Confirm the `ADMIN_PASSWORD` and `ADMIN_TOKEN` environment variables are correctly configured on the server.

### "Contact form submissions are not arriving"

1. Check the Resend dashboard for errors.
2. Verify the `RESEND_API_KEY` is valid and not expired.
3. Check the recipient email address in `/app/api/contact/route.ts`.

### "Images are broken or not displaying"

- Guide items and events reference images by URL. Verify the URLs are valid and publicly accessible.
- For images stored in Convex storage, they are served via the `/getImage?storageId=<id>` HTTP endpoint. Verify the storage ID is correct.

---

## Technical Reference

### Tech Stack

| Component | Technology |
|-----------|-----------|
| Frontend | Next.js 16, React 19, TypeScript |
| Styling | Tailwind CSS 4, Framer Motion |
| Backend/Database | Convex (Backend-as-a-Service) |
| Email | Resend |
| Hosting | Vercel |

### Environment Variables

| Variable | Purpose |
|----------|---------|
| `ADMIN_TOKEN` | Authenticates admin mutations to Convex |
| `ADMIN_PASSWORD` | Used for initial admin login |
| `RESEND_API_KEY` | API key for the Resend email service |

### Key File Locations

| Purpose | Path |
|---------|------|
| Database schema | `convex/schema.ts` |
| Guide item logic | `convex/guideItems.ts` |
| Events logic | `convex/events.ts` |
| Judges logic | `convex/judges.ts` |
| Utilities logic | `convex/utilities.ts` |
| Contact API route | `app/api/contact/route.ts` |
| Admin guide pages | `app/admin/guide/` |
| Admin events pages | `app/admin/events/` |
| Admin judges page | `app/admin/judges/` |
| Admin utilities page | `app/admin/utilities/` |
| Navbar | `components/navbar.tsx` |
| Footer | `components/footer.tsx` |
| Static content | `content/` |

### Database Collections

| Collection | Purpose |
|------------|---------|
| `guideItems` | Restaurants, hotels, bars |
| `events` | Gatherings and training events |
| `judges` | Judge profiles |
| `utilities_cuisines` | Cuisine reference data |
| `utilities_countries` | Country reference data |
| `utilities_cities` | City reference data |
