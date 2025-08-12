# Investor Backend Setup Guide

## 🚀 What We've Built

We've created a complete investor management system with:

1. **Database Tables**: `investor_contacts` and `investor_emails`
2. **Edge Function**: `handle-investor-submission` for processing submissions
3. **Email System**: Welcome emails + notification emails
4. **Frontend Integration**: Ready to connect to your investor form

## 📋 Setup Steps

### 1. Create Database Tables

Run this SQL in your Supabase SQL Editor:

```sql
-- Create investor_contacts table
CREATE TABLE IF NOT EXISTS investor_contacts (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    first_name TEXT NOT NULL,
    last_name TEXT NOT NULL,
    email TEXT NOT NULL UNIQUE,
    company_name TEXT,
    phone TEXT,
    investment_amount_range TEXT,
    investment_timeline TEXT,
    investment_type TEXT,
    additional_notes TEXT,
    source TEXT DEFAULT 'website',
    status TEXT DEFAULT 'new' CHECK (status IN ('new', 'contacted', 'qualified', 'not_interested')),
    ip_address TEXT,
    user_agent TEXT,
    created_at TIMESTAMPTZ DEFAULT now(),
    updated_at TIMESTAMPTZ DEFAULT now()
);

-- Create investor_emails table for tracking email notifications
CREATE TABLE IF NOT EXISTS investor_emails (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    investor_contact_id UUID REFERENCES investor_contacts(id) ON DELETE CASCADE,
    email_type TEXT NOT NULL CHECK (email_type IN ('welcome', 'follow_up', 'notification')),
    sent_to TEXT NOT NULL,
    subject TEXT NOT NULL,
    body TEXT NOT NULL,
    sent_at TIMESTAMPTZ DEFAULT now(),
    status TEXT DEFAULT 'sent' CHECK (status IN ('sent', 'delivered', 'bounced', 'failed'))
);

-- Create indexes for better performance
CREATE INDEX IF NOT EXISTS idx_investor_contacts_email ON investor_contacts(email);
CREATE INDEX IF NOT EXISTS idx_investor_contacts_status ON investor_contacts(status);
CREATE INDEX IF NOT EXISTS idx_investor_contacts_created_at ON investor_contacts(created_at);
CREATE INDEX IF NOT EXISTS idx_investor_emails_contact_id ON investor_emails(investor_contact_id);
CREATE INDEX IF NOT EXISTS idx_investor_emails_sent_at ON investor_emails(sent_at);

-- Create function to update updated_at timestamp
CREATE OR REPLACE FUNCTION update_updated_at_column()
RETURNS TRIGGER AS $$
BEGIN
    NEW.updated_at = now();
    RETURN NEW;
END;
$$ language 'plpgsql';

-- Create trigger for updated_at
CREATE TRIGGER update_investor_contacts_updated_at 
    BEFORE UPDATE ON investor_contacts 
    FOR EACH ROW 
    EXECUTE FUNCTION update_updated_at_column();

-- Enable Row Level Security
ALTER TABLE investor_contacts ENABLE ROW LEVEL SECURITY;
ALTER TABLE investor_emails ENABLE ROW LEVEL SECURITY;

-- Create RLS policies for investor_contacts
CREATE POLICY "Allow insert for all users" ON investor_contacts
    FOR INSERT WITH CHECK (true);

CREATE POLICY "Allow select for authenticated users" ON investor_contacts
    FOR SELECT USING (auth.role() = 'authenticated');

CREATE POLICY "Allow update for authenticated users" ON investor_contacts
    FOR UPDATE USING (auth.role() = 'authenticated');

-- Create RLS policies for investor_emails
CREATE POLICY "Allow insert for all users" ON investor_emails
    FOR INSERT WITH CHECK (true);

CREATE POLICY "Allow select for authenticated users" ON investor_emails
    FOR SELECT USING (auth.role() = 'authenticated');
```

### 2. Deploy Edge Function

The Edge Function is already created at `supabase/functions/handle-investor-submission/index.ts`.

Deploy it using Supabase CLI:

```bash
supabase functions deploy handle-investor-submission
```

### 3. Set Environment Variables

In your Supabase project settings, add these environment variables:

- `RESEND_API_KEY`: Your Resend API key for email sending
- `SUPABASE_URL`: Your Supabase project URL
- `SUPABASE_SERVICE_ROLE_KEY`: Your Supabase service role key

### 4. Frontend Integration

Update your investor form to call the Edge Function:

```typescript
const submitInvestorForm = async (formData: InvestorFormData) => {
  try {
    const response = await fetch('/functions/v1/handle-investor-submission', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        firstName: formData.firstName,
        lastName: formData.lastName,
        email: formData.email,
        companyName: formData.companyName,
        phone: formData.phone,
        investmentAmountRange: formData.investmentAmountRange,
        investmentTimeline: formData.investmentTimeline,
        investmentType: formData.investmentType,
        additionalNotes: formData.additionalNotes,
        source: 'website'
      })
    });

    const result = await response.json();
    
    if (result.success) {
      // Show success message
      console.log('Investor submission successful:', result.investorId);
    } else {
      // Handle error
      console.error('Submission failed:', result.error);
    }
  } catch (error) {
    console.error('Network error:', error);
  }
};
```

## 🎯 What Happens When Someone Submits

1. **Form Submission** → Edge Function receives data
2. **Database Insert** → Creates record in `investor_contacts`
3. **Email Notifications** → Sends welcome email to investor + notification to team
4. **Email Logging** → Records email details in `investor_emails` table
5. **Success Response** → Returns investor ID and confirmation

## 📧 Email Templates

### Welcome Email (to investor)
- Professional welcome message
- Next steps explanation
- Links to website and contact info

### Notification Email (to team)
- Complete investor details
- Direct reply links
- Calendar scheduling link
- Investment ID for tracking

## 🔧 Environment Variables Needed

```bash
RESEND_API_KEY=your_resend_api_key
SUPABASE_URL=https://your-project.supabase.co
SUPABASE_SERVICE_ROLE_KEY=your_service_role_key
```

## 🧪 Testing

Test the Edge Function with:

```bash
curl -X POST https://your-project.supabase.co/functions/v1/handle-investor-submission \
  -H "Content-Type: application/json" \
  -d '{
    "firstName": "John",
    "lastName": "Doe",
    "email": "john@example.com",
    "companyName": "Test Corp",
    "investmentAmountRange": "$100k-$500k",
    "investmentTimeline": "3-6 months",
    "investmentType": "Equity",
    "additionalNotes": "Interested in fleet management space"
  }'
```

## 📊 Database Schema

### investor_contacts
- `id`: UUID primary key
- `first_name`, `last_name`, `email`: Required fields
- `company_name`, `phone`: Optional contact info
- `investment_*`: Investment details
- `status`: Lead status tracking
- `source`: Where the lead came from
- `ip_address`, `user_agent`: Tracking info
- `created_at`, `updated_at`: Timestamps

### investor_emails
- `id`: UUID primary key
- `investor_contact_id`: Foreign key to contact
- `email_type`: welcome/follow_up/notification
- `sent_to`, `subject`, `body`: Email details
- `sent_at`: When email was sent
- `status`: Email delivery status

## 🎉 You're Ready!

Once you run the SQL and deploy the function, your investor backend will be fully operational!

**Next Steps:**
1. Run the SQL migration
2. Deploy the Edge Function
3. Set environment variables
4. Connect your frontend form
5. Test with a sample submission

The system will automatically handle email notifications, database storage, and lead tracking! 🚀 