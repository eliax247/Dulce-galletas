Send email script

Set these environment variables before running:

- `SMTP_HOST` (e.g. smtp.gmail.com)
- `SMTP_PORT` (default 587, or 465 for SSL)
- `SMTP_USER` (SMTP username)
- `SMTP_PASS` (SMTP password or app-specific password)
- `FROM_EMAIL` (e.g. "Dulce Galletas <hello@yourdomain.example>")

Example:

```bash
export SMTP_HOST=smtp.example.com
export SMTP_PORT=587
export SMTP_USER=you@example.com
export SMTP_PASS=supersecret
export FROM_EMAIL="Dulce Galletas <hello@yourdomain.example>"

python3 scripts/send_email.py --to recipient@example.com --subject "Ya está en línea: Dulce Galletas" --html email/launch.html --text email/launch.txt
```

Note: Do not commit credentials to the repository. Use secrets or environment variables.
