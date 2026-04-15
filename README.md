# KeenKeeper - Keep Your Friendships Alive

KeenKeeper is a responsive friendship tracker built with React. It helps users keep meaningful relationships active by tracking friends, interaction goals, overdue contacts, and communication history.

## Project Overview

The app includes a complete multi-page experience inspired by the provided design:

- Home dashboard with summary cards and friend cards
- Friend details page with goals and quick check-in actions
- Timeline page with interaction history and filters
- Stats page with interaction analytics chart
- Custom 404 page for invalid routes

## Technologies Used

- React 19
- React Router DOM
- Tailwind CSS (via Vite plugin)
- Recharts (for analytics chart)
- Lucide React (navigation/action icons)
- Vite

## Key Features

1. **Responsive UI on all screen sizes**
   - Optimized layouts for mobile, tablet, and desktop.

2. **Dynamic interaction timeline**
   - Clicking **Call**, **Text**, or **Video** on the Friend Details page adds a new timeline entry automatically with current date and title.
   - Timeline supports filtering by interaction type.

3. **Live analytics**
   - Friendship Analytics page displays a pie chart of Call/Text/Video counts based on real timeline data.

## Data Structure

Friend data is fetched from `public/friends.json` and includes:

- `id`
- `name`
- `picture`
- `email`
- `days_since_contact`
- `status` (`overdue`, `almost due`, `on-track`)
- `tags`
- `bio`
- `goal`
- `next_due_date`

## Deployment/Reload Safety

SPA route fallback is included for deployment so page refresh on nested routes does not break:

- `public/_redirects` for Netlify
- `vercel.json` rewrite rule for Vercel

## Run Locally

```bash
npm install
npm run dev
```

## Build for Production

```bash
npm run build
npm run preview
```

