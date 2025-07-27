# SSL Certificate Setup for ExotIQ.ai

This directory contains the configuration and scripts needed to generate SSL certificates for HTTPS development.

## Quick Start

1. **Generate certificates:**
   ```bash
   chmod +x ssl/generate-certificates.sh
   ./ssl/generate-certificates.sh
   ```

2. **Install CA certificate in your browser:**
   - Import `ssl/certs/ca-cert.pem` into your browser's certificate store
   - Mark it as trusted for identifying websites

3. **Use certificates in your application:**
   - Certificate: `ssl/certs/server-cert.pem`
   - Private Key: `ssl/certs/server-key.pem`
   - Full Chain: `ssl/certs/fullchain.pem`

## Files Generated

### Certificate Authority (CA)
- `ssl/ca/ca-key.pem` - CA private key (keep secure!)
- `ssl/ca/ca-cert.pem` - CA certificate (install in browser)

### Server Certificate
- `ssl/server/server-key.pem` - Server private key
- `ssl/server/server-cert.pem` - Server certificate
- `ssl/server/server.csr` - Certificate Signing Request

### Ready-to-use Certificates
- `ssl/certs/ca-cert.pem` - CA certificate
- `ssl/certs/server-cert.pem` - Server certificate
- `ssl/certs/server-key.pem` - Server private key
- `ssl/certs/fullchain.pem` - Combined certificate chain

## Configuration Details

### Domains Covered
The server certificate includes these Subject Alternative Names (SANs):
- `exotiq.ai`
- `www.exotiq.ai`
- `api.exotiq.ai`
- `app.exotiq.ai`
- `*.exotiq.ai` (wildcard)
- `localhost`

### IP Addresses
- `127.0.0.1` (IPv4 localhost)
- `::1` (IPv6 localhost)

## Using with Node.js/Express

```javascript
const https = require('https');
const fs = require('fs');
const express = require('express');

const app = express();

const options = {
  key: fs.readFileSync('ssl/certs/server-key.pem'),
  cert: fs.readFileSync('ssl/certs/server-cert.pem')
};

https.createServer(options, app).listen(443, () => {
  console.log('HTTPS Server running on port 443');
});
```

## Using with Vite Development Server

Add to your `vite.config.ts`:

```typescript
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import fs from 'fs';

export default defineConfig({
  plugins: [react()],
  server: {
    https: {
      key: fs.readFileSync('ssl/certs/server-key.pem'),
      cert: fs.readFileSync('ssl/certs/server-cert.pem'),
    },
    host: true,
    port: 3000
  }
});
```

## Browser Setup

### Chrome/Edge
1. Go to Settings → Privacy and Security → Security → Manage Certificates
2. Go to "Trusted Root Certification Authorities" tab
3. Click "Import" and select `ssl/certs/ca-cert.pem`
4. Restart browser

### Firefox
1. Go to Settings → Privacy & Security → Certificates → View Certificates
2. Go to "Authorities" tab
3. Click "Import" and select `ssl/certs/ca-cert.pem`
4. Check "Trust this CA to identify websites"
5. Restart browser

### Safari (macOS)
1. Double-click `ssl/certs/ca-cert.pem` to open Keychain Access
2. Find the certificate in "login" keychain
3. Double-click it and expand "Trust"
4. Set "When using this certificate" to "Always Trust"

## Security Notes

⚠️ **Important Security Considerations:**

1. **Development Only**: These are self-signed certificates for development use only
2. **Keep Private Keys Secure**: Never commit private keys to version control
3. **Production**: Use certificates from trusted CAs (Let's Encrypt, DigiCert, etc.) for production
4. **Rotate Regularly**: Regenerate certificates periodically
5. **Backup**: Keep secure backups of your CA key if you plan to issue multiple certificates

## Troubleshooting

### "Certificate not trusted" errors
- Ensure you've imported the CA certificate into your browser/system trust store
- Clear browser cache and restart browser
- Check that the domain matches the certificate SANs

### Permission errors
- Ensure certificate files have correct permissions (600 for keys, 644 for certificates)
- Run the generation script with appropriate user permissions

### OpenSSL not found
- Install OpenSSL: `brew install openssl` (macOS) or `apt-get install openssl` (Ubuntu)
- Ensure OpenSSL is in your PATH

## Certificate Validity

- **CA Certificate**: Valid for 10 years (3650 days)
- **Server Certificate**: Valid for 1 year (365 days)

Remember to renew certificates before they expire!