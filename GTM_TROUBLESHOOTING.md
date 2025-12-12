# GTM "Tag wasn't found" Error - Troubleshooting Guide

## 🚨 **Error Description**
Google Tag Manager is showing "Tag wasn't found" error, which means GTM is not loading properly.

## 🔍 **Step-by-Step Troubleshooting**

### 1. **Verify GTM Container ID**
- ✅ **Your GTM ID**: `GTM-MZ8QVQXN`
- ✅ **HTML Updated**: GTM script is in index.html
- ✅ **Script Format**: Using standard GTM script format

### 2. **Check Browser Console**
Open DevTools (F12) and look for:
- ❌ **Script errors**: JavaScript errors preventing GTM from loading
- ❌ **Network errors**: Failed requests to googletagmanager.com
- ❌ **CSP errors**: Content Security Policy blocking external scripts

### 3. **Check Network Tab**
1. Open DevTools → Network tab
2. Refresh the page
3. Look for requests to:
   - `https://www.googletagmanager.com/gtm.js?id=GTM-MZ8QVQXN`
   - `https://www.googletagmanager.com/gtm.js`

**Expected**: Should see successful 200 response
**Problem**: If you see 404, 403, or failed requests

### 4. **Verify GTM Container Status**
1. Go to [Google Tag Manager](https://tagmanager.google.com/)
2. Check if container `GTM-MZ8QVQXN` exists
3. Verify container is published
4. Check container status (Active/Inactive)

### 5. **Test GTM Script Manually**
Run this in browser console:
```javascript
// Check if dataLayer exists
console.log('dataLayer:', window.dataLayer);

// Check if gtag exists  
console.log('gtag:', window.gtag);

// Try to push an event
if (window.dataLayer) {
  window.dataLayer.push({'event': 'test'});
  console.log('Event pushed successfully');
} else {
  console.log('dataLayer not available');
}
```

### 6. **Common Issues & Solutions**

#### **Issue 1: GTM Container Not Published**
- **Symptom**: Script loads but no tags fire
- **Solution**: Publish your GTM container

#### **Issue 2: Wrong Container ID**
- **Symptom**: 404 errors in Network tab
- **Solution**: Double-check GTM ID in Google Tag Manager

#### **Issue 3: Script Blocked by Ad Blocker**
- **Symptom**: Script never loads
- **Solution**: Disable ad blocker temporarily for testing

#### **Issue 4: CSP (Content Security Policy)**
- **Symptom**: Script blocked by security policy
- **Solution**: Add googletagmanager.com to allowed domains

#### **Issue 5: Development vs Production**
- **Symptom**: Works in production but not development
- **Solution**: Check if GTM is configured for localhost

### 7. **Quick Fixes to Try**

#### **Fix 1: Clear Browser Cache**
1. Hard refresh: `Ctrl+Shift+R` (Windows) or `Cmd+Shift+R` (Mac)
2. Clear browser cache and cookies
3. Try incognito/private browsing mode

#### **Fix 2: Check GTM Container Settings**
1. Go to GTM → Admin → Container Settings
2. Verify container ID matches `GTM-MZ8QVQXN`
3. Check if container is active

#### **Fix 3: Test with Simple HTML**
Create a minimal test file:
```html
<!DOCTYPE html>
<html>
<head>
  <title>GTM Test</title>
  <!-- Google Tag Manager -->
  <script>
    (function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
    new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
    j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
    'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
    })(window,document,'script','dataLayer','GTM-MZ8QVQXN');
  </script>
  <!-- End Google Tag Manager -->
</head>
<body>
  <h1>GTM Test Page</h1>
  <!-- Google Tag Manager (noscript) -->
  <noscript>
    <iframe src="https://www.googletagmanager.com/ns.html?id=GTM-MZ8QVQXN"
      height="0" width="0" style="display:none;visibility:hidden"></iframe>
  </noscript>
  <!-- End Google Tag Manager (noscript) -->
</body>
</html>
```

### 8. **Advanced Debugging**

#### **Check GTM Preview Mode**
1. In GTM, click "Preview"
2. Enter your website URL
3. Check if GTM loads in preview mode
4. Look for any error messages

#### **Verify GTM Account Permissions**
1. Check if you have access to the GTM container
2. Verify you're using the correct Google account
3. Check if the container is shared with your account

#### **Test with Different Browsers**
1. Try Chrome, Firefox, Safari
2. Check if issue is browser-specific
3. Test in incognito/private mode

### 9. **Expected Results After Fix**

✅ **Console shows**: `dataLayer: Array`  
✅ **Network shows**: Successful gtm.js request  
✅ **GTM loads**: No "Tag wasn't found" errors  
✅ **Events fire**: Test events appear in GTM  

### 10. **Still Having Issues?**

If none of the above fixes work:

1. **Check GTM Container Logs**
   - Go to GTM → Admin → Container Settings
   - Look for any error messages or warnings

2. **Contact GTM Support**
   - Use GTM's built-in help system
   - Check GTM community forums

3. **Verify Domain Configuration**
   - Ensure GTM is configured for your domain
   - Check if localhost is allowed for testing

## 🎯 **Next Steps**

1. **Run the test script** in your browser console
2. **Check Network tab** for GTM requests
3. **Verify GTM container** is published and active
4. **Test with simple HTML** file first
5. **Use GTM Preview mode** to debug

## 📞 **Need Help?**

- **GTM Help**: [support.google.com/tagmanager](https://support.google.com/tagmanager)
- **GTM Community**: [support.google.com/tagmanager/community](https://support.google.com/tagmanager/community)
- **Exotiq Support**: hello@exotiq.ai

