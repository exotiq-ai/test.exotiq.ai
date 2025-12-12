// GTM Test Script - Run this in your browser console to test GTM

console.log('🔍 Testing GTM Integration...');

// Check if dataLayer exists
if (typeof window.dataLayer !== 'undefined') {
  console.log('✅ dataLayer found:', window.dataLayer);
} else {
  console.log('❌ dataLayer not found');
}

// Check if gtag exists
if (typeof window.gtag !== 'undefined') {
  console.log('✅ gtag found:', window.gtag);
} else {
  console.log('❌ gtag not found');
}

// Try to push a test event
try {
  if (window.dataLayer) {
    window.dataLayer.push({
      'event': 'gtm_test',
      'test_time': new Date().toISOString(),
      'test_page': window.location.href
    });
    console.log('✅ Test event pushed to dataLayer');
  } else {
    console.log('❌ Cannot push event - dataLayer not available');
  }
} catch (error) {
  console.log('❌ Error pushing event:', error);
}

// Check network requests for GTM
console.log('🔍 Check Network tab for requests to:');
console.log('   - https://www.googletagmanager.com/gtm.js');
console.log('   - https://www.googletagmanager.com/gtm.js?id=GTM-MZ8QVQXN');

// Manual GTM test
console.log('🔍 Manual GTM Test:');
console.log('1. Open Network tab in DevTools');
console.log('2. Refresh the page');
console.log('3. Look for requests to googletagmanager.com');
console.log('4. Check if gtm.js loads successfully');

// Check for GTM errors
console.log('🔍 Check Console tab for any GTM-related errors');
console.log('�� Look for "Tag wasn\'t found" or similar errors');

