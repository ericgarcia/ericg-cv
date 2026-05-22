# linkedin-update

Update `src/data/resume.ts` from a LinkedIn profile PDF export, with interactive review.

## Usage
`/linkedin-update`

---

## Instructions

You are updating the resume data in `src/data/resume.ts` using a LinkedIn profile PDF. Follow these steps interactively.

### Step 1 — Ask for the PDF

Tell the user:

> "To get started, export your LinkedIn profile as a PDF:
> 1. Go to your LinkedIn profile
> 2. Click the **More** button (next to Edit profile)
> 3. Select **Save to PDF**
>
> Once it's downloaded, what's the path to the file?"

Wait for the user to provide a file path.

### Step 2 — Read the PDF

Use the Read tool on the path the user provided. LinkedIn profile PDFs are typically 1–3 pages.

If the file doesn't exist or can't be read, ask the user to double-check the path and try again.

### Step 3 — Extract profile data

From the PDF content, extract and structure:
- **Name**, **headline/title**
- **Location**
- **About / Summary**
- **Experience**: for each role — company, title, dates, description/bullets
- **Education**: for each — institution, degree, field, dates
- **Skills** (if present — note these separately, they likely won't go in the resume)

Present the extracted data as a clean summary so the user can verify it looks right before proceeding.

### Step 4 — Read the current resume

Read `src/data/resume.ts` to understand what's currently in the resume.

### Step 5 — Identify what's new or changed

Compare the LinkedIn PDF data to the current resume and clearly call out:
- Roles/entries **on LinkedIn but missing from the resume**
- Descriptions that **differ significantly** between the two
- Things **in the resume but absent from LinkedIn** (may be intentional — flag but don't assume they should be removed)

Keep this diff short and scannable — not a wall of text.

### Step 6 — Interactive review: what to cut or reduce

Say to the user:

> "LinkedIn profiles tend to be more verbose than resumes — and this one needs to fit on a single page. Let's go through the new and changed content section by section. For each one, just tell me: keep it, cut it, shorten it, or use the current resume version."

Work through sections in this order: **Summary → Experience (newest first) → Education**

For each item, quote the LinkedIn version, note what (if anything) is in the current resume, and wait for the user's call before moving on. Accept freeform input:
- "keep it" / "use that"
- "cut it" / "drop it"
- "shorten to one sentence"
- "use the current version"
- or any freeform edit instruction

Don't move to the next item until you have a clear decision on the current one.

### Step 7 — Apply changes

Once all sections are reviewed, update `src/data/resume.ts` with the agreed changes. Preserve the existing TypeScript structure exactly — only change data values.

Summarize what changed: "Updated 2 role descriptions, added Keeper Security bullet, kept education as-is" etc.

### Step 8 — One-page check

Remind the user:

> "This resume is designed to fit one page when printed. Open http://localhost:3001/ericg-cv, click 'Export PDF', and check it still lands on one page. If it spills, we can trim further."
