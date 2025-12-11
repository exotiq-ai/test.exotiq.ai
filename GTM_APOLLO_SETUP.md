# Google Tag Manager & Apollo Tracking Setup Guide

This guide will help you set up Google Tag Manager (GTM) and integrate the Apollo tracking script for lead generation and sales intelligence.

## Prerequisites

- Google Tag Manager account
- Apollo.io account with your App ID: `665f9a5b2a272a0c71bf8798`

## Step 1: Google Tag Manager Setup ✅ COMPLETED

### 1.1 GTM Container Status
✅ **GTM Container ID**: `GTM-MZ8QVQXN` (Already configured in index.html)

### 1.2 HTML Configuration
✅ **GTM Script**: Already added to `<head>` section
✅ **GTM Noscript**: Already added to `<body>` section

Your GTM setup is complete and ready for Apollo integration!

## Step 2: Apollo Tracking Setup

### 2.1 Environment Configuration
Add the following to your `.env` file:

```bash
VITE_ENABLE_APOLLO=true
```

### 2.2 GTM Custom HTML Tag
1. In GTM, go to **Tags** → **New**
2. Choose **Custom HTML** as tag type
3. Name: "Apollo Tracking Script"
4. HTML Code:
```html
<script>
function initApollo(){
  var n=Math.random().toString(36).substring(7),
      o=document.createElement("script");
  o.src="https://assets.apollo.io/micro/website-tracker/tracker.iife.js?nocache="+n;
  o.async=!0;
  o.defer=!0;
  o.onload=function(){
    if(window.trackingFunctions && window.trackingFunctions.onLoad) {
      window.trackingFunctions.onLoad({appId:"665f9a5b2a272a0c71bf8798"});
    }
  };
  document.head.appendChild(o);
}
initApollo();
</script>
```

### 2.3 Trigger Configuration
1. **Trigger Type**: Custom Event
2. **Event Name**: `cookie_consent_marketing`
3. **Fire on**: All Custom Events

### 2.4 Advanced Settings
- **Tag firing priority**: 1
- **Tag firing options**: Once per event
- **Enable built-in variables**: Yes

## Step 3: Cookie Consent Integration

### 3.1 Data Layer Events
The following events are automatically pushed to the data layer:

```javascript
// When marketing cookies are accepted
dataLayer.push({
  'event': 'cookie_consent_marketing',
  'cookie_consent': 'accepted'
});

// When marketing cookies are denied
dataLayer.push({
  'event': 'cookie_consent_marketing',
  'cookie_consent': 'denied'
});
```

### 3.2 Custom Events
Track specific user interactions:

```javascript
// Page views
dataLayer.push({
  'event': 'apollo_page_view',
  'page': '/contact',
  'title': 'Contact Us'
});

// Form submissions
dataLayer.push({
  'event': 'apollo_form_submission',
  'form_type': 'contact_form',
  'value': 100
});

// Conversions
dataLayer.push({
  'event': 'apollo_conversion',
  'conversion_type': 'beta_signup',
  'value': 500
});
```

## Step 4: Testing & Verification

### 4.1 GTM Preview Mode
1. Click **Preview** in GTM
2. Enter your website URL
3. Accept marketing cookies
4. Verify Apollo script loads in Network tab

### 4.2 Console Verification
Check browser console for:
```
Apollo tracking initialized successfully
```

### 4.3 Network Requests
Verify requests to:
- `https://assets.apollo.io/micro/website-tracker/tracker.iife.js`

## Step 5: Advanced Configuration

### 5.1 Custom Variables
Create GTM variables for dynamic tracking:

```javascript
// User ID Variable
function() {
  return {{User ID}} || 'anonymous';
}

// Page Category Variable
function() {
  var path = {{Page Path}};
  if (path.includes('/contact')) return 'contact';
  if (path.includes('/features')) return 'features';
  return 'general';
}
```

### 5.2 Enhanced Ecommerce
Track ecommerce events:

```javascript
dataLayer.push({
  'event': 'apollo_ecommerce',
  'ecommerce': {
    'currency': 'USD',
    'value': 99.99,
    'items': [{
      'item_name': 'Premium Plan',
      'price': 99.99,
      'quantity': 1
    }]
  }
});
```

## Step 6: Performance Optimization

### 6.1 Script Loading
- Apollo script loads asynchronously
- Cache-busting prevents caching issues
- Only loads when marketing cookies are accepted

### 6.2 Error Handling
- Graceful fallback if script fails to load
- Console warnings for debugging
- Automatic retry logic

## Step 7: Privacy & Compliance

### 7.1 GDPR Compliance
- Apollo only loads after explicit consent
- Users can revoke consent anytime
- Data processing is transparent

### 7.2 Cookie Management
- Respects user cookie preferences
- Integrates with existing consent banner
- Automatic cleanup on consent withdrawal

## Troubleshooting

### Common Issues

1. **Script not loading**
   - ✅ GTM Container ID is correct: `GTM-MZ8QVQXN`
   - Verify trigger configuration
   - Check browser console for errors

2. **Events not firing**
   - Ensure data layer is properly configured
   - Check trigger conditions
   - Verify event names match

3. **Performance issues**
   - Check script loading time
   - Monitor network requests
   - Verify cache settings

### Debug Commands

```javascript
// Check Apollo status
console.log(apolloService.getStatus());

// Manually trigger Apollo
apolloService.init();

// Test event tracking
apolloService.trackEvent('test_event', {test: true});
```

## Support

For technical support:
- GTM: [Google Tag Manager Help](https://support.google.com/tagmanager/)
- Apollo: [Apollo Support](https://help.apollo.io/)
- Exotiq: hello@exotiq.ai

## Version History

- v1.0.0: Initial setup with GTM and Apollo integration
- v1.1.0: Added cookie consent integration
- v1.2.0: Enhanced error handling and performance monitoring
- v1.3.0: Updated with actual GTM Container ID GTM-MZ8QVQXN
