# DY TOY’S Premium Blue Website

Responsive static website with animated hero, 3D hover product cards, product category filters, product gallery, mobile menu, WhatsApp enquiry builder, Instagram link, Google Maps embed and Google review listing link.

## Run locally

Open `index.html` in a browser, or run `python -m http.server 8000` in this directory and visit http://localhost:8000.

## Configure before publishing

1. In `script.js`, replace the empty `WHATSAPP_NUMBER` with the verified store number in international format, digits only (India example: `919876543210`). Until then the form offers a copyable enquiry; it does not pretend to send a message.
2. Replace sample emoji product illustrations and sample descriptions with your real product images and accurate stock details. Use images you own or have permission to use.
3. Confirm the shop address in `index.html`. Google Maps is a place search, not a verified unique listing pin; replace map/directions/review links with the exact Google Business Profile links when available.
4. Check the Instagram handle and replace the brand symbol with your actual logo if desired.
5. The review section deliberately does not invent customer testimonials or ratings. To show live reviews, use an authorized Google Places integration or a compliant third-party widget; do not expose an API key in browser code.
6. Test all links and contact flows on a phone before launch.

## Deploy on GitHub Pages

1. Create a GitHub repository (e.g. `dy-toys-website`).
2. Upload `index.html`, `styles.css`, and `script.js` to the repository root and commit.
3. In repository **Settings → Pages**, select **Deploy from a branch**, branch `main`, folder `/ (root)`, then Save.
4. After publishing, GitHub will show your public Pages URL. Allow a few minutes for deployment.
5. To connect a custom domain, configure it in **Settings → Pages → Custom domain** and follow GitHub's DNS guidance. Enable HTTPS when available.

## Notes

No backend, payments or stock sync is included. All products are illustrative demo entries. The site is a working static frontend and can be extended later.