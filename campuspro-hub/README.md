# CampusPro Hub

Smart campus document service website — INS3009 Entrepreneurship Final Project, VNU-IS Group.

## Tech stack

Plain HTML + CSS + JS. No build step, no dependencies. Deploys instantly to GitHub Pages or Vercel.

## Files

```
campuspro-hub/
├── index.html   — main page
├── style.css    — all styles
├── main.js      — mobile nav + form + scroll animations
└── README.md
```

## Deploy on GitHub Pages

1. Push this folder to a GitHub repo (e.g. `campuspro-hub`)
2. Go to **Settings → Pages**
3. Under **Source**, choose **Deploy from a branch**
4. Select branch `main`, folder `/ (root)`, click **Save**
5. Your site will be live at `https://<your-username>.github.io/campuspro-hub/`

## Deploy on Vercel (recommended — faster, custom domain support)

### Option A — Vercel CLI
```bash
npm i -g vercel
cd campuspro-hub
vercel
```
Follow the prompts. Vercel auto-detects static HTML and deploys in ~30 seconds.

### Option B — Vercel dashboard (no CLI needed)
1. Push this repo to GitHub
2. Go to [vercel.com](https://vercel.com) → **Add New Project**
3. Import your GitHub repo
4. Framework preset: **Other** (leave as-is)
5. Click **Deploy** — done

Your site will get a free `*.vercel.app` URL. You can also connect a custom domain in Vercel settings.

## Customise before launch

Search for these placeholders and replace with real info:

| Placeholder | Replace with |
|---|---|
| `09xxxxxxxx` | Your Zalo / phone number |
| `campusprohub@gmail.com` | Real email |
| `Hanoi · Near VNU campus` | Specific address |
| `From 15,000₫` etc. | Your actual pricing |
| Package prices | Confirmed VND amounts |

## Connect a real form backend (optional)

The booking form currently shows a success screen client-side only. To receive submissions by email, replace the `bookingForm` submit handler in `main.js` with a free service:

- **[Formspree](https://formspree.io)** — add `action="https://formspree.io/f/YOUR_ID"` to the `<form>` tag and remove the JS submit handler
- **[Web3Forms](https://web3forms.com)** — similar, free tier
- **EmailJS** — no backend needed, sends straight to Gmail

## License

For academic / educational use — INS3009 Entrepreneurship, VNU International School.
