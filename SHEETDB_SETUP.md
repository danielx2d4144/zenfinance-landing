# SheetDB Email Collection Setup Guide

## Quick Setup (5 minutes)

### Step 1: Create Google Sheet
1. Go to [Google Sheets](https://sheets.google.com)
2. Create a new spreadsheet
3. Name it "ZenFinance Email Whitelist"
4. In Row 1, add these headers:
   - Column A: `email`
   - Column B: `timestamp`

Your sheet should look like:
```
| email              | timestamp           |
|--------------------|---------------------|
|                    |                     |
```

### Step 2: Make Sheet Public
1. Click "Share" button in top-right
2. Change "General access" to **"Anyone with the link"**
3. Set permission to **"Viewer"** (not Editor)
4. Click "Done"
5. Copy the sheet URL from your browser

### Step 3: Create SheetDB API
1. Go to [SheetDB.io](https://sheetdb.io/)
2. Click "Create Free Database"
3. Paste your Google Sheet URL
4. Click "Create Database"
5. **Copy your API URL** (looks like: `https://sheetdb.io/api/v1/xxxxx`)

### Step 4: Add API URL to Code
1. Open `components/FooterCTA.tsx`
2. Find line with: `const SHEETDB_API_URL = 'YOUR_SHEETDB_API_URL_HERE';`
3. Replace with your actual API URL:
   ```typescript
   const SHEETDB_API_URL = 'https://sheetdb.io/api/v1/xxxxx';
   ```

### Step 5: Test It!
1. Refresh your landing page
2. Enter an email in the subscription form
3. Click "SUBSCRIBE"
4. Check your Google Sheet - the email should appear!

---

## SheetDB Free Tier Limits
- ✅ Unlimited API calls per month
- ✅ 500 rows
- ✅ Create, read, update, delete operations

---

## Alternative: Direct Google Sheets API (No SheetDB)

If you prefer not to use SheetDB, you can use Google Apps Script:

### Using Google Apps Script
1. Open your Google Sheet
2. Click **Extensions → Apps Script**
3. Paste this code:

```javascript
function doPost(e) {
  var sheet = SpreadsheetApp.getActiveSheet();
  var data = JSON.parse(e.postData.contents);
  
  sheet.appendRow([
    data.email,
    data.timestamp
  ]);
  
  return ContentService.createTextOutput(JSON.stringify({success: true}))
    .setMimeType(ContentService.MimeType.JSON);
}
```

4. Click **Deploy → New deployment**
5. Choose type: **Web app**
6. Set "Execute as": **Me**
7. Set "Who has access": **Anyone**
8. Click **Deploy**
9. Copy the **Web app URL**
10. Use this URL as your `SHEETDB_API_URL`

---

## Viewing Your Whitelist
- Open your Google Sheet anytime
- Emails appear in real-time as users subscribe
- Export to CSV: **File → Download → CSV**

---

## Troubleshooting

**"Something went wrong" error?**
- Check console in browser DevTools (F12)
- Verify API URL is correct
- Make sure Google Sheet is set to "Anyone with link"

**Emails not appearing?**
- Wait a few seconds and refresh the sheet
- Check column headers are exactly `email` and `timestamp`

**CORS errors?**
- SheetDB handles CORS automatically
- If using Google Apps Script, CORS is handled by default
