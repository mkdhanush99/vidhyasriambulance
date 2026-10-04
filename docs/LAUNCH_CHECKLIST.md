# Google Search Console & Production Launch Checklist

## Step 1: Search Console Domain Property Verification
- [ ] Log in to [Google Search Console](https://search.google.com/search-console).
- [ ] Select **Domain Property** verification for `vidhyasriambulance.com`.
- [ ] Add the DNS TXT verification record provided by Google into Hostinger DNS Management:
  - Name: `@`
  - Type: `TXT`
  - Value: `google-site-verification=...`
- [ ] Click **Verify**.

---

## Step 2: XML Sitemap Submission
- [ ] In Search Console, navigate to **Index -> Sitemaps**.
- [ ] Enter `sitemap.xml` (Full path: `https://vidhyasriambulance.com/sitemap.xml`).
- [ ] Click **Submit**.
- [ ] Verify status displays **Success** with 43 discovered URLs.

---

## Step 3: Priority URL Inspection & Live Test
Using the URL Inspection tool in Search Console, perform a "Test Live URL" and request indexing for the top 5 high-priority pages:
1. `https://vidhyasriambulance.com` (Homepage & 24/7 Dispatch Hub)
2. `https://vidhyasriambulance.com/services/emergency-ambulance` (Emergency ALS Campaign)
3. `https://vidhyasriambulance.com/services/icu-ambulance` (ICU Transport Campaign)
4. `https://vidhyasriambulance.com/coverage/hyderabad` (Citywide Location Hub)
5. `https://vidhyasriambulance.com/contact` (Contact & Helplines)

---

## Step 4: Robots.txt & Schema Validation
- [ ] Open `https://vidhyasriambulance.com/robots.txt` in a browser and verify HTTP 200 response with `Allow: /` and `Disallow: /api/`.
- [ ] Open `https://vidhyasriambulance.com/llms.txt` and confirm machine readability.
- [ ] Run the [Google Rich Results Test](https://search.google.com/test/rich-results) on the homepage to verify `EmergencyService` / `LocalBusiness` JSON-LD structured data.

---

## Step 5: Ongoing Core Web Vitals Monitoring
- [ ] Navigate to **Experience -> Core Web Vitals** in Search Console.
- [ ] Monitor the 75th percentile mobile and desktop field metrics over 28-day aggregation periods.
- [ ] Verify that all 43 URLs maintain "Good" Core Web Vitals classification (LCP <= 2.5s, CLS <= 0.1, INP <= 200ms).
