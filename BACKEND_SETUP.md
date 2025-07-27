# Backend OpenAI Integration Setup

## 🔐 Secure OpenAI API Key Management

Your OpenAI API key is now securely stored in the backend using Supabase Edge Functions. This is the production-ready approach that keeps your API key safe.

## 🚀 Setup Instructions

### 1. Add OpenAI API Key to Supabase

You need to add your OpenAI API key as a secret in your Supabase project:

**Option A: Using Supabase CLI (Recommended)**
```bash
# Install Supabase CLI if you haven't already
npm install -g supabase

# Login to Supabase
supabase login

# Link your project (replace with your project reference)
supabase link --project-ref your-project-ref

# Add your OpenAI API key as a secret
supabase secrets set OPENAI_API_KEY=your_openai_api_key_here
```

**Option B: Using Supabase Dashboard**
1. Go to your Supabase project dashboard
2. Navigate to Settings → Edge Functions
3. Go to the "Secrets" tab
4. Add a new secret:
   - Name: `OPENAI_API_KEY`
   - Value: Your OpenAI API key

### 2. Deploy the Edge Function

The edge function is already created in your project. To deploy it:

```bash
# Deploy the chatbot-ai function
supabase functions deploy chatbot-ai
```

### 3. Update Environment Variables

Remove the OpenAI API key from your frontend environment and ensure you have:

```env
# .env.local
VITE_SUPABASE_URL=your_supabase_url
VITE_SUPABASE_ANON_KEY=your_supabase_anon_key
VITE_ENABLE_AI_RESPONSES=true
```

## 🔄 How It Works

### Before (Frontend API calls)
```
User Message → Frontend → OpenAI API → Response
```
❌ API key exposed in browser
❌ CORS issues
❌ Rate limiting per user

### After (Backend API calls)
```
User Message → Frontend → Supabase Edge Function → OpenAI API → Response
```
✅ API key secure in backend
✅ No CORS issues
✅ Centralized rate limiting
✅ Usage monitoring
✅ Cost control

## 📊 Benefits of Backend Integration

### Security
- **API Key Protection**: Your OpenAI API key never leaves the server
- **Request Validation**: Backend validates all requests before calling OpenAI
- **Rate Limiting**: Prevent abuse and control costs

### Performance
- **Caching**: Backend can cache responses for common queries
- **Optimization**: Server-side prompt optimization
- **Monitoring**: Track usage and costs centrally

### Scalability
- **Load Balancing**: Distribute requests across multiple instances
- **Failover**: Graceful fallback to rule-based responses
- **Cost Control**: Monitor and limit OpenAI usage

## 🛠 Edge Function Features

### Smart Conversation Management
- Maintains conversation context across messages
- Limits conversation history to manage token usage
- Includes user context in system prompts

### Error Handling
- Graceful fallback to rule-based responses
- Detailed error logging for debugging
- User-friendly error messages

### Usage Monitoring
- Logs token usage for cost tracking
- Session-based analytics
- Performance monitoring

## 🔧 Customization Options

### Adjust AI Model Settings
Edit `supabase/functions/chatbot-ai/index.ts`:

```typescript
const response = await openai.chat.completions.create({
  model: 'gpt-4o-mini', // or 'gpt-4' for better quality
  max_tokens: 500,      // Adjust response length
  temperature: 0.7,     // Creativity level (0-1)
  // ... other settings
})
```

### Modify System Prompt
Update the `SYSTEM_PROMPT` constant in the edge function to customize FleetCopilot's personality and knowledge.

### Add Rate Limiting
Implement rate limiting by tracking requests per session/IP:

```typescript
// Add to edge function
const requestCount = await getRequestCount(sessionId)
if (requestCount > MAX_REQUESTS_PER_HOUR) {
  throw new Error('Rate limit exceeded')
}
```

## 🚨 Important Notes

### Cost Management
- Monitor your OpenAI usage in the OpenAI dashboard
- Set up billing alerts
- Consider implementing usage limits per user

### Testing
- Test the edge function locally: `supabase functions serve`
- Use the Supabase dashboard to monitor function logs
- Test fallback responses when OpenAI is unavailable

### Production Deployment
- Ensure your Supabase project is on a paid plan for production use
- Monitor edge function performance and errors
- Set up alerts for function failures

## 🎯 Next Steps

1. **Deploy the edge function** using the instructions above
2. **Add your OpenAI API key** to Supabase secrets
3. **Test the integration** in your development environment
4. **Monitor usage** and adjust settings as needed
5. **Deploy to production** when ready

Your ChatBot now uses enterprise-grade security for AI integration! 🎉