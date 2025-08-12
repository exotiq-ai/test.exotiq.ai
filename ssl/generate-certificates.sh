#!/bin/bash

# Create SSL directory structure
mkdir -p ssl/{ca,server,certs}

echo "🔐 Generating SSL certificates for Exotiq.ai..."

# Generate CA private key
echo "📝 Generating CA private key..."
openssl genrsa -out ssl/ca/ca-key.pem 4096

# Generate CA certificate
echo "📜 Generating CA certificate..."
openssl req -new -x509 -days 3650 -key ssl/ca/ca-key.pem -out ssl/ca/ca-cert.pem -config ssl/ca.conf

# Generate server private key
echo "🔑 Generating server private key..."
openssl genrsa -out ssl/server/server-key.pem 2048

# Generate Certificate Signing Request (CSR)
echo "📋 Generating Certificate Signing Request (CSR)..."
openssl req -new -key ssl/server/server-key.pem -out ssl/server/server.csr -config ssl/server.conf

# Generate server certificate signed by CA
echo "✅ Generating server certificate signed by CA..."
openssl x509 -req -days 365 -in ssl/server/server.csr -CA ssl/ca/ca-cert.pem -CAkey ssl/ca/ca-key.pem -CAcreateserial -out ssl/server/server-cert.pem -extensions v3_req -extfile ssl/server.conf

# Copy certificates to certs directory for easy access
cp ssl/ca/ca-cert.pem ssl/certs/
cp ssl/server/server-cert.pem ssl/certs/
cp ssl/server/server-key.pem ssl/certs/

# Create combined certificate chain
cat ssl/server/server-cert.pem ssl/ca/ca-cert.pem > ssl/certs/fullchain.pem

# Set appropriate permissions
chmod 600 ssl/ca/ca-key.pem ssl/server/server-key.pem ssl/certs/server-key.pem
chmod 644 ssl/ca/ca-cert.pem ssl/server/server-cert.pem ssl/certs/*.pem

echo "🎉 SSL certificates generated successfully!"
echo ""
echo "📁 Certificate files:"
echo "   CA Certificate: ssl/certs/ca-cert.pem"
echo "   Server Certificate: ssl/certs/server-cert.pem"
echo "   Server Private Key: ssl/certs/server-key.pem"
echo "   Full Chain: ssl/certs/fullchain.pem"
echo ""
echo "🔧 To use with your application:"
echo "   - Import ssl/certs/ca-cert.pem into your browser/system trust store"
echo "   - Use ssl/certs/server-cert.pem and ssl/certs/server-key.pem for your HTTPS server"
echo ""
echo "⚠️  Note: These are self-signed certificates for development use only."
echo "   For production, use certificates from a trusted CA like Let's Encrypt."