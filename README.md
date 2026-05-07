# KeenKeeper — Keep Your Friendships Alive 💚

KeenKeeper is a responsive friendship tracker built with React 19 and Vite. It helps you stay on top of meaningful relationships by tracking friends, setting interaction goals, spotting overdue contacts, and logging your communication history — all in a clean, data-driven dashboard.

---

## 🖼️ Screenshot

> _Add a screenshot of your app here_
> `![KeenKeeper Screenshot](./assets/screenshot.png)`

---

## 🔗 Live Demo

👉 [View Live Project](https://assignment-007-keenkeeper.netlify.app)

---

## 🛠️ Technologies Used

| Technology | Purpose |
|---|---|
| React 19 | UI framework |
| React Router DOM v7 | Client-side routing |
| Tailwind CSS v4 | Utility-first styling |
| Recharts | Analytics pie chart |
| Lucide React | Icon library |
| Vite | Build tool & dev server |

---

## ✨ Key Features

- **Home Dashboard** — Summary cards showing total friends, overdue contacts, and upcoming check-ins, plus a grid of friend cards with status indicators.
- **Friend Details Page** — View bio, goal, and last contact info. Quickly log a new **Call**, **Text**, or **Video** interaction with one click.
- **Dynamic Timeline** — Clicking an interaction type on the details page instantly adds a timestamped entry to the timeline. Filter entries by interaction type.
- **Live Analytics** — A Recharts pie chart on the Stats page reflects real timeline data, breaking down Call / Text / Video counts in real time.
- **Responsive Layout** — Optimized for mobile, tablet, and desktop screen sizes.
- **Custom 404 Page** — Friendly fallback page for unmatched routes.
- **SPA Reload Safety** — Includes a `public/_redirects` file so nested route refreshes on Netlify don't break the app.

---

## 📦 Dependencies

### Production
```json
"react": "^19.2.4",
"react-dom": "^19.2.4",
"react-router-dom": "^7.14.1",
"recharts": "^3.8.1",
"lucide-react": "^1.8.0"
```

### Development
```json
"vite": "^8.0.4",
"tailwindcss": "^4.2.2",
"@tailwindcss/vite": "^4.2.2",
"@vitejs/plugin-react": "^6.0.1",
"eslint": "^9.39.4"
```

---

## 🗂️ Project Structure

```
ASSIGNMENT-007/
├── public/
│   ├── friends.json        # Static friend data source
│   └── _redirects          # SPA route fallback for Netlify
├── src/
│   ├── components/         # Reusable UI components
│   ├── pages/              # Route-level page components
│   └── main.jsx            # App entry point
├── assets/                 # Images and static assets
├── vite.config.js
└── package.json
```

---

## 🗃️ Data Structure

Friend data is loaded from `public/friends.json`. Each friend object includes:

```json
{
  "id": 1,
  "name": "Jane Doe",
  "picture": "https://...",
  "email": "jane@example.com",
  "days_since_contact": 12,
  "status": "overdue",
  "tags": ["college", "close"],
  "bio": "Met in 2018...",
  "goal": "Call once a week",
  "next_due_date": "2025-06-01"
}
```

**Status values:** `overdue` · `almost due` · `on-track`

---

## 🚀 Run Locally

**1. Clone the repository**
```bash
git clone https://github.com/TOMAL5085/ASSIGNMENT-007.git
cd ASSIGNMENT-007
```

**2. Install dependencies**
```bash
npm install
```

**3. Start the development server**
```bash
npm run dev
```

The app will be available at `http://localhost:5173`.

---

## 🏗️ Build for Production

```bash
npm run build
```

Preview the production build locally:
```bash
npm run preview
```

---

## ☁️ Deployment

This project is deployed on **Netlify**. A `public/_redirects` file is included to handle SPA routing correctly — all routes are redirected to `index.html` so React Router can take over after a page refresh.

```
/*    /index.html   200
```

---

## 📄 License

This project is open source and available under the [MIT License](LICENSE).
