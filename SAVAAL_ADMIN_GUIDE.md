# Savaal Admin Guide

A complete guide for managing venues, events, judges, and site utilities through the Savaal admin panel.

---

## Table of Contents

1. [Logging In](#1-logging-in)
2. [Admin Dashboard Overview](#2-admin-dashboard-overview)
3. [Managing Guide Items (Venues)](#3-managing-guide-items-venues)
4. [Managing Events](#4-managing-events)
5. [Managing Judges](#5-managing-judges)
6. [Managing Utilities](#6-managing-utilities)
7. [Common Workflows](#7-common-workflows)
8. [Troubleshooting](#8-troubleshooting)

---

## 1. Logging In

**URL:** Go to `yoursite.com/admin/guide`

You will see a screen titled **"Admin access required"** with a password field.

**Steps:**

1. Enter the admin password provided to you.
2. Click **"Unlock admin"**.
3. You will be redirected to the Guide Admin dashboard.

Your session is saved in a browser cookie, so you won't need to log in again until the cookie expires or you clear your browser data.

> **Note:** The same login session works across all admin sections (Guide, Events, Judges, Utilities).

---

## 2. Admin Dashboard Overview

Once logged in at `/admin/guide`, you will see:

- **"Add new venue"** button — creates a new guide item
- **"Manage Events"** button — goes to the events admin
- **"Manage Judges"** button — goes to the judges admin
- **"Manage Utilities"** button — goes to the utilities admin (cuisines, cities, countries)

Below the buttons is a **list of all guide items** with filters and search.

### Navigation Between Sections

| Section | URL | How to Get There |
|---------|-----|------------------|
| Guide Admin | `/admin/guide` | Main landing page after login |
| Events Admin | `/admin/events` | Button on Guide Admin page |
| Judges Admin | `/admin/judges` | Button on Guide Admin page |
| Utilities Admin | `/admin/utilities` | Button on Guide Admin page |

Each section has a **"Back to Guide Admin"** link to return to the main dashboard.

---

## 3. Managing Guide Items (Venues)

Guide items are the restaurants, stays (hotels/lodges), and bars featured in the Savaal Guide.

### 3.1 Viewing Guide Items

The Guide Admin page (`/admin/guide`) shows all items in a list. Each item displays its **name**, **category**, **region**, and **publish status** (Published or Draft).

**Filtering the list:**

- **Category** — Filter by All, Restaurant, Stay, or Bar
- **Published** — Filter by All, Published, or Unpublished
- **Search** — Type a name to search by title

The total count of matching items is shown on the right.

### 3.2 Adding a New Venue

1. Click **"Add new venue"** on the Guide Admin page.
2. Fill out the form (see Form Sections below).
3. Click **"Save guide item"** at the bottom.
4. You will be redirected back to the Guide Admin list.

### 3.3 Editing an Existing Venue

1. Find the venue in the list.
2. Click the **"Edit"** button on that item.
3. Modify any fields you need.
4. Click **"Save guide item"**.

### 3.4 Deleting a Venue

1. Open the venue's edit page.
2. Click the **"Delete"** button (red text, at the bottom of the form).
3. The venue is permanently removed and you are redirected back to the list.

> **Warning:** Deletion is permanent. There is no undo.

### 3.5 Guide Item Form — Section by Section

#### Section 1: Basic Details

| Field | Description | Required |
|-------|-------------|----------|
| **Name** | The venue's display name | Yes |
| **Category** | Restaurant, Stay, or Bar | Yes |
| **Cuisine** (Restaurant/Bar) | Select from the list of active cuisines configured in Utilities | Yes |
| **Stay Type** (Stay only) | Hotel, Lodge, Resort, Guest House, Boutique Hotel, Bed & Breakfast, Safari Lodge, or Villa | Yes |
| **Description** | A text description of the venue | Yes |

> If no cuisines appear in the dropdown, you need to add them in **Manage Utilities** first.

#### Section 2: Location

| Field | Description | Required |
|-------|-------------|----------|
| **City** | Select from the list of active cities configured in Utilities | Yes |
| **Country** | Automatically filled based on the selected city (read-only) | Auto |
| **Region** | Select from the available regions | Yes |
| **Location** | Street address or specific location description | Yes |
| **Google Maps Embed URL** | An embeddable Google Maps URL (see instructions below) | No |

**How to get a Google Maps Embed URL:**

1. Open Google Maps and find the venue's location.
2. Click **"Share"**.
3. Click the **"Embed a map"** tab.
4. Click **"Copy HTML"**.
5. From the copied code, extract only the URL inside the `src="..."` attribute.
6. It should look like: `https://www.google.com/maps/embed?pb=...`
7. Paste only that URL into the field.

> If no cities appear in the dropdown, you need to add countries and cities in **Manage Utilities** first.

#### Section 3: Rating & Pricing

| Field | Description | Required |
|-------|-------------|----------|
| **Rating** | Overall rating from 0 to 5 (supports decimals like 4.5) | Yes |
| **Price Level** | $ (Budget), $$ (Moderate), $$$ (Upscale), or $$$$ (Fine dining) | Yes |
| **Sort Order** | Controls the display order. Lower numbers appear first. Default is 0. | No |

#### Section 4: Cover Image

This is the main image displayed for the venue. You have two options:

- **Enter URL** — Paste a direct link to an image hosted elsewhere.
- **Upload file** — Upload an image from your device (max 10 MB).

After providing an image, a preview will appear below the input. Verify it looks correct before saving.

#### Section 5: Score Breakdown

Individual scores that add up to a total out of 100:

| Score Category | Maximum Points |
|----------------|---------------|
| Taste & Technique | 35 |
| Service | 25 |
| Beverage Experience | 10 |
| Menu Composition | 10 |
| Presentation | 10 |
| Ambience | 5 |
| Perceived Value | 5 |
| **Total** | **100** |

- Enter each score individually. Decimals are allowed (e.g., 28.5).
- The **Total score** is calculated automatically — you do not need to enter it.

#### Section 6: Judge Comments

You can add up to **3 judge comments** per venue.

1. Click **"Add comment"**.
2. Select a **Judge** from the dropdown (judges must be added in the Judges admin first).
3. Enter a **Rating** (0 to 5).
4. Write the **Comment** text.
5. To remove a comment, click **"Remove"** on that comment card.

> If no judges appear in the dropdown, you need to add them in **Manage Judges** first.

#### Section 7: Gallery

Add additional photos for the venue. You can add as many as you like.

- **Add by URL** — Paste an image URL and click **"Add"** (or press Enter).
- **Upload file** — Upload from your device (max 10 MB per image).

Images appear in a grid preview. Hover over an image and click the **X** button to remove it.

#### Section 8: Menu Highlights

Showcase standout menu items.

1. Click **"Add menu item"**.
2. Fill in **Name**, **Price** (e.g., "$25"), and **Description**.
3. Add as many items as needed.
4. Click **"Remove"** to delete an item.

#### Section 9: Publishing

- **Published checkbox** — When checked, the venue is visible on the public Guide page. When unchecked, it is saved as a draft and only visible in the admin panel.
- New venues are **published by default** (checkbox is pre-checked).

---

## 4. Managing Events

**URL:** `/admin/events`

### 4.1 Viewing Events

The events list shows all events with filters:

- **Category** — All, Gathering, or Training
- **Published** — All, Published, or Unpublished
- **Search** — Search by event title

Each event card shows its **title**, **category**, **date**, and **status**.

### 4.2 Adding a New Event

1. Click **"Add new event"** on the Events Admin page.
2. Fill out the form (see below).
3. Click **"Save event"**.

### 4.3 Editing an Event

1. Find the event in the list and click **"Edit"**.
2. Modify any fields.
3. Click **"Save event"**.

### 4.4 Deleting an Event

1. Open the event's edit page.
2. Click the **"Delete"** button.

### 4.5 Event Form Fields

| Field | Description | Required |
|-------|-------------|----------|
| **Title** | Event name | Yes |
| **Slug** | URL-friendly identifier (auto-generated from title) | Auto |
| **Category** | Gathering or Training | Yes |
| **Presented by** | Organizer/presenter name | No |
| **Host** | Host name | No |
| **Theme** | Event theme or tagline | No |
| **Cover Image** | Main event image (URL or upload, 10 MB max) | No |
| **Date** | Event date | Yes |
| **Time** | Event time | No |
| **Venue Name** | Name of the venue | No |
| **Venue Address** | Address of the venue | No |
| **Description** | Detailed event description (supports multiple paragraphs) | No |
| **Highlights** | Key event highlights | No |
| **Notes** | Additional notes | No |
| **CTA Label** | Call-to-action button text (e.g., "Buy Tickets") | No |
| **CTA Link** | URL the CTA button links to | No |
| **Sort Order** | Display order (lower = first) | No |
| **Published** | Makes the event visible on the public site | Yes |
| **Show on Homepage** | Features the event on the homepage | No |

#### Ticket Types

Events can have multiple ticket types. For each ticket:

1. Click **"Add ticket type"**.
2. Enter a **Label** (e.g., "General Admission", "VIP").
3. Enter a **Price** (e.g., "$50").
4. Enter **Seats** available.
5. Click **"Remove"** to delete a ticket type.

---

## 5. Managing Judges

**URL:** `/admin/judges`

Judges are the people who review and rate venues in the Guide. Their names appear in the judge comments dropdown when creating/editing guide items.

### 5.1 Adding a Judge

1. At the top of the Judges page, type the judge's name in the input field.
2. Click **"Add judge"**.
3. The judge immediately appears in the list below.

### 5.2 Editing a Judge

1. Click the **"Edit"** button next to the judge's name.
2. The name field becomes editable.
3. Change the name and click **"Save"**.
4. Or click **"Cancel"** to discard changes.

### 5.3 Deleting a Judge

1. Click the **"Delete"** button next to the judge's name.

> **Important:** Removing a judge does not remove their existing comments from guide items. However, you won't be able to select that judge for new comments.

---

## 6. Managing Utilities

**URL:** `/admin/utilities`

Utilities are the reference data used across the site — cuisines, countries, cities, and "good for" tags. These populate the dropdown menus in the Guide item form.

### 6.1 Seed Defaults

If starting fresh, click the **"Seed defaults"** button at the top to populate all sections with predefined data. This adds a set of common cuisines, Southern African countries, cities, and "good for" options.

### 6.2 Cuisines

Cuisines are the food categories assigned to Restaurants and Bars.

| Action | How |
|--------|-----|
| **Add** | Type a name in the input field, click "Add cuisine" |
| **Edit** | Click "Edit", change the name, click "Save" |
| **Activate/Deactivate** | Click the "Activate" or "Deactivate" toggle button |
| **Delete** | Click "Delete" |

- Only **active** cuisines appear in the Guide item form dropdown.
- Deactivating a cuisine hides it from new listings but does not affect existing guide items.

### 6.3 Countries

Countries are the parent category for cities.

| Action | How |
|--------|-----|
| **Add** | Select a country from the dropdown (limited to Southern African region), click "Add country" |
| **Activate/Deactivate** | Click the toggle button |
| **Delete** | Click "Delete" |

- The dropdown only shows countries that haven't been added yet.
- Only active countries appear when adding cities.

### 6.4 Cities

Cities are used for venue location selection in Guide items.

| Action | How |
|--------|-----|
| **Add** | Type a city name, select a country from the dropdown, click "Add city" |
| **Activate/Deactivate** | Click the toggle button |
| **Delete** | Click "Delete" |

- You must have at least one active country before adding cities.
- Only **active** cities appear in the Guide item form dropdown.
- Each city displays its associated country name.

### 6.5 Good For

Tags describing what a venue is good for (e.g., "Date Night", "Business Lunch").

| Action | How |
|--------|-----|
| **Add** | Type a name, click "Add good for" |
| **Edit** | Click "Edit", change the name, click "Save" |
| **Activate/Deactivate** | Click the toggle button |
| **Delete** | Click "Delete" |

---

## 7. Common Workflows

### Adding Your First Venue (From Scratch)

If the site is brand new, follow this order:

1. **Log in** at `/admin/guide`
2. Go to **Manage Utilities**
3. Click **"Seed defaults"** (or manually add countries, cities, and cuisines)
4. Go to **Manage Judges** and add at least one judge
5. Go back to **Guide Admin** and click **"Add new venue"**
6. Fill out the form and save

### Adding a New Restaurant

1. Go to `/admin/guide`
2. Click **"Add new venue"**
3. Set category to **Restaurant**
4. Select a **cuisine** from the dropdown
5. Fill in name, description, city, location, scores, and cover image
6. Optionally add judge comments, gallery photos, and menu highlights
7. Make sure **Published** is checked
8. Click **"Save guide item"**

### Saving a Venue as Draft

1. Fill out the form as usual
2. **Uncheck** the "Published" checkbox at the bottom
3. Save — the venue will only be visible in the admin panel, not on the public site
4. When ready to publish, edit the venue and check the box

### Creating an Event with Tickets

1. Go to `/admin/events`
2. Click **"Add new event"**
3. Fill in title, date, venue, and description
4. Under tickets, click **"Add ticket type"** for each tier (e.g., General, VIP)
5. Set the CTA label (e.g., "Get Tickets") and CTA link
6. Check **Published** and optionally **Show on Homepage**
7. Save

### Adding a New City

1. Go to **Manage Utilities**
2. Make sure the city's **country** exists and is active — if not, add it first
3. In the **Cities** section, type the city name
4. Select the country from the dropdown
5. Click **"Add city"**
6. The city will now appear in the Guide item form's city dropdown

---

## 8. Troubleshooting

### "No cuisines configured" message on the venue form
Go to **Manage Utilities** and add at least one cuisine (or click "Seed defaults").

### "No cities configured" message on the venue form
Go to **Manage Utilities**, add a country first, then add cities under that country.

### No judges in the comment dropdown
Go to **Manage Judges** and add at least one judge.

### Venue not appearing on the public site
Check that the **Published** checkbox is checked on the venue's edit page.

### Google Maps embed not showing
Make sure you copied the **embed URL** (starts with `https://www.google.com/maps/embed?pb=...`), not a regular Google Maps share link. Follow the steps in Section 3.5 under Location.

### Image upload fails
- Make sure the file is under **10 MB**.
- Supported formats: JPG, PNG, WebP, and other standard image formats.
- If upload fails, try using the **"Enter URL"** option instead and host the image elsewhere.

### Session expired / login prompt reappears
Your browser cookie has expired. Simply enter the admin password again to continue.

---

*This guide covers all admin functionality for the Savaal platform. For technical support or issues not covered here, contact your developer.*
