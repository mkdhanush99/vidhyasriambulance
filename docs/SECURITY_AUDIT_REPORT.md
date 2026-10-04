# Comprehensive Security Audit & Hardening Report — Vidhya Sri Ambulance

## 1. Executive Summary & Audit Context
- **Target Application**: Vidhya Sri Ambulance (`https://vidhyasriambulance.com`)
- **Technology Stack**: Next.js 16.3.8 App Router, React 19, TypeScript, Resend API, Hostinger DNS & Anycast Edge CDN.
- **Audit Methodology**: Cloudflare Security Audit Skill Framework (`.agents/skills/security-audit`).
- **Audit Scope**:
  1. API Security & Serverless Endpoints (`/api/enquiry`)
  2. Injection Vectors (HTML Email Injection, CRLF Header Injection)
  3. Cross-Site Request Forgery (CSRF) & Cross-Origin Protections
  4. Denial of Service (DoS), Rate Limiting, and Memory Safety
  5. HTTP Security Headers & Content Security Policy (CSP)
  6. Secrets Management & Credential Exposure
  7. Client-Side Data Storage & Healthcare Privacy (DPDP Act)

---

## 2. Threat Modeling & Trust Boundaries

```
[ Public Internet / Untrusted Client ]
                │
                ▼ (HTTPS / TLS 1.3 / Edge CDN)
       [ HTTP Security Headers ]
   (CSP, HSTS, X-Frame-Options, etc.)
                │
                ├───> Static SSG Pages (No user data execution)
                │
                └───> [ Serverless API: /api/enquiry ]
                            │
                            ├── 1. Rate Limiting Check (IP-based, window-capped)
                            ├── 2. Anti-Spam Honeypot Filter
                            ├── 3. CSRF / Origin Header Validation
                            ├── 4. Strict Input Bounds (Length capping & regex)
                            ├── 5. HTML Entity Sanitization (escapeHtml)
                            ├── 6. CRLF Stripping on Email Headers
                            ▼
                    [ External Resend API ] ──> Admin Inbox & Customer Confirmation
```

---

## 3. Findings, Risk Assessment & Implemented Hardening

### Finding 1: Unescaped User Input in HTML Email Templates (HTML Injection / Phishing)
- **Attack Class**: Template Injection / HTML Injection
- **Severity**: **MEDIUM**
- **Vulnerability**: User input submitted via `/api/enquiry` (`notes`, `organization`, `name`, `route`) was interpolated directly into HTML email templates sent to administrative recipients and users. An attacker could inject malicious anchor links, phishing forms, or HTML tags.
- **Remediation Implemented**:
  - Implemented strict HTML entity escaping (`escapeHtml()`) applied to all fields prior to string template interpolation (`&`, `<`, `>`, `"`, `'`).
  - Added strict input length truncation (`name` <= 100, `notes` <= 2000, `organization` <= 150, `route` <= 300) to prevent payload bloat.

### Finding 2: Cross-Origin Form Submission / CSRF on `/api/enquiry`
- **Attack Class**: Cross-Site Request Forgery / Abuse
- **Severity**: **MEDIUM**
- **Vulnerability**: `/api/enquiry` had no verification of request `Origin` or `Host`, allowing external domains to trigger automated submissions or spam the dispatch inbox.
- **Remediation Implemented**:
  - Added strict Origin verification matching the expected host (`vidhyasriambulance.com` / `localhost`). Cross-origin requests from arbitrary third-party domains are rejected with `HTTP 403 Forbidden`.

### Finding 3: CRLF Injection in Email Subject Lines
- **Attack Class**: Header Injection
- **Severity**: **LOW**
- **Vulnerability**: Service and organization names were passed into email subject strings. Newline characters (`\r\n`) could allow header splitting in mail handlers.
- **Remediation Implemented**:
  - Sanitized subject line strings with `.replace(/[\r\n]/g, " ")` and truncated to a safe length.

### Finding 4: In-Memory Rate Limiting Memory Leak Risk
- **Attack Class**: Resource Exhaustion / Unbounded Memory Growth
- **Severity**: **LOW**
- **Vulnerability**: The in-memory IP rate limiter map had no automated eviction for expired timestamps. Under high distributed scanning, the map could grow indefinitely.
- **Remediation Implemented**:
  - Added automated cache eviction when map size exceeds 500 entries, purging stale window records.
  - Extracted the true client IP from `x-forwarded-for` by taking the first comma-separated hop.

### Finding 5: Missing Advanced HTTP Security Headers
- **Attack Class**: Web Protocol Security
- **Severity**: **LOW**
- **Remediation Implemented** in `next.config.ts`:
  - **`Strict-Transport-Security`**: `max-age=63072000; includeSubDomains; preload` (enforces HTTPS strictly for 2 years).
  - **`Content-Security-Policy`**: Enforces trusted sources for scripts (self, Google Tag Manager, GA), styles (self, Google Fonts), fonts (self, Google Fonts gstatic), and frames (prevents framing).
  - **`Cross-Origin-Opener-Policy`**: `same-origin`.
  - **`X-DNS-Prefetch-Control`**: `on`.
  - **`X-Content-Type-Options`**: `nosniff`.
  - **`X-Frame-Options`**: `SAMEORIGIN`.
  - **`Permissions-Policy`**: `camera=(), microphone=(), geolocation=()`.

### Finding 6: Secrets & Credential Management
- **Audit Result**: **PASS (CLEAN)**
- `process.env.RESEND_API_KEY` is strictly accessed within serverless API route handlers. No API keys, credentials, or service account tokens are bundled into client-side JavaScript or committed to git.
- `.env` and `.env*.local` are verified in `.gitignore`.

---

## 4. Residual Risks & Operational Recommendations
1. **DDoS Protection**: Production DNS is backed by Hostinger Anycast Edge with automated L3/L4 DDoS mitigation.
2. **Resend Quota Monitoring**: The in-memory rate limiter protects individual serverless instances. For multi-region serverless scale, a Redis/KV store (e.g. Upstash) can be added if inquiry traffic exceeds 10,000/day.
3. **DKIM / SPF / DMARC**: Verified aligned on Hostinger DNS records for `vidhyasriambulance.com` to ensure maximum email deliverability and spoof prevention.
