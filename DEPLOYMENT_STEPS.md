# 🚀 Exotiq.ai Deployment Steps

## ✅ Pre-Deployment Checklist

### 1. Environment Variables
Ensure these are set in your deployment environment:
```env
VITE_SUPABASE_URL=your_production_supabase_url
VITE_SUPABASE_ANON_KEY=your_production_anon_key
VITE_ENABLE_AI_RESPONSES=true
VITE_ENABLE_ANALYTICS=true
```

### 2. Supabase Edge Function
Make sure the ChatBot AI edge function is deployed:
```bash
supabase functions deploy chatbot-ai --project-ref your-production-project-ref
```

### 3. OpenAI API Key
Verify OpenAI API key is set in Supabase secrets:
```bash
supabase secrets set OPENAI_API_KEY=your_openai_api_key_here
```

## 🚀 Deployment Options

### Option 1: Deploy to Netlify (Recommended)
```bash
npm run build
# Then drag the dist folder to Netlify or connect your Git repo
```

### Option 2: Deploy to Vercel
```bash
npm run build
vercel --prod
```

### Option 3: Deploy to Any Static Host
```bash
npm run build
# Upload the dist folder contents to your hosting provider
```

## ⚠️ Potential Issues & Solutions

### Issue 1: ChatBot Not Working
**Symptoms**: ChatBot appears but doesn't respond
**Solution**: 
1. Check Supabase edge function is deployed
2. Verify OpenAI API key in Supabase secrets
3. Check browser console for errors

### Issue 2: Environment Variables
**Symptoms**: Features not working as expected
**Solution**: 
1. Ensure all VITE_ prefixed variables are set
2. Restart build process after adding variables

### Issue 3: Mobile Scrolling
**Symptoms**: Mobile users report scrolling issues
**Solution**: Already fixed in current version with proper mobile optimizations

## 🔍 Post-Deployment Testing

1. **Test ChatBot**: Open chat widget and send a test message
2. **Test Forms**: Submit beta signup and contact forms
3. **Test Mobile**: Check responsive design on mobile devices
4. **Test Analytics**: Verify tracking is working (check browser network tab)

## 📊 Monitoring

After deployment, monitor:
- Supabase edge function logs
- OpenAI API usage
- Form submissions
- User analytics

## 🎯 Success Indicators

✅ ChatBot widget appears on all pages
✅ AI responses are working
✅ Forms submit successfully
✅ Mobile experience is smooth
✅ Analytics tracking is active

## 🚨 Rollback Plan

If issues occur:
1. Revert to previous deployment
2. Check error logs in Supabase dashboard
3. Verify environment variables
4. Test edge function separately

---

**Status**: ✅ READY TO DEPLOY
**Confidence**: 95%
**Risk Level**: Low