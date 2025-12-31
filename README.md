# Navin's Blog

Personal blog built with Hugo, hosted at [blog.nabinpoudel004.com.np](https://blog.nabinpoudel004.com.np).

---

## 🚀 Initial Setup (One-Time)

### Step 1: Create GitHub Repository

1. Go to [github.com/new](https://github.com/new)
2. Create a new repository named `navin99x-blog-hugo` (or any name you prefer)
3. Keep it **Public** (required for GitHub Pages on free tier)
4. **Don't** initialize with README (we already have one)

### Step 2: Push Your Code

```bash
cd /home/navin/vn/navin99x-blog-hugo

# Initialize git (if not already done)
git init

# Add all files
git add .

# Commit
git commit -m "Initial commit: Hugo blog setup"

# Add remote (replace with your repo URL)
git remote add origin git@github.com:navin99x/navin99x-blog-hugo.git

# Push to main branch
git push -u origin main
```

### Step 3: Enable GitHub Pages

1. Go to your repository on GitHub
2. Navigate to **Settings** → **Pages**
3. Under "Build and deployment":
   - **Source**: Select **GitHub Actions**
4. The workflow will run automatically on push

### Step 4: Configure Custom Domain (DNS)

Add a **CNAME record** in your DNS provider (where nabinpoudel004.com.np is managed):

| Type  | Name   | Value               |
|-------|--------|---------------------|
| CNAME | blog   | navin99x.github.io  |

> ⏳ DNS propagation can take up to 24-48 hours, but usually works within minutes.

### Step 5: Verify Custom Domain on GitHub

1. Go to **Settings** → **Pages**
2. Under "Custom domain", enter: `blog.nabinpoudel004.com.np`
3. Click **Save**
4. Wait for DNS check to pass
5. ✅ Check **Enforce HTTPS** once available

---

## ✍️ Daily Workflow: Creating New Posts

This is all you need to do regularly:

### Option A: Using Hugo Command (Recommended)

```bash
cd /home/navin/vn/navin99x-blog-hugo

# Create a new post
hugo new posts/my-awesome-post.md
```

This creates a file at `content/posts/my-awesome-post.md` with the template.

### Option B: Manually Create File

Create a new `.md` file in `content/posts/`:

```markdown
+++
title = "My Awesome Post"
date = 2026-01-01T10:00:00+05:45
draft = false
tags = ["tag1", "tag2"]
summary = "A brief description of this post for the listing page."
+++

Your content here in Markdown...

## Headings work

- Lists work
- Code blocks work

```python
print("Code highlighting works too!")
```
```

### Post Front Matter Reference

| Field     | Required | Description                                    |
|-----------|----------|------------------------------------------------|
| `title`   | ✅       | Post title                                     |
| `date`    | ✅       | Publication date (used for sorting)            |
| `draft`   | ✅       | Set to `false` to publish, `true` to hide      |
| `tags`    | Optional | Array of tags: `["hugo", "tutorial"]`          |
| `summary` | Optional | Custom summary (otherwise auto-generated)      |

---

## 🔄 Publishing Workflow

After creating or editing a post:

```bash
# 1. Preview locally (optional but recommended)
hugo server -D
# Open http://localhost:1313 to preview

# 2. Stage your changes
git add content/posts/my-new-post.md

# 3. Commit
git commit -m "Add: My awesome new post"

# 4. Push to GitHub
git push
```

**That's it!** GitHub Actions will automatically:
1. Build your Hugo site
2. Deploy to GitHub Pages
3. Your post will be live at `blog.nabinpoudel004.com.np` within 1-2 minutes

---

## 📁 Project Structure (What You Need to Know)

```
navin99x-blog-hugo/
├── content/
│   └── posts/              ← 📝 YOU ONLY TOUCH THIS FOLDER
│       ├── my-post.md
│       └── another-post.md
├── static/
│   └── CNAME               ← Custom domain config
├── layouts/                ← Templates (don't touch)
├── hugo.toml               ← Site config (rarely touch)
└── .github/workflows/      ← Auto-deploy (don't touch)
```

---

## 🛠️ Useful Commands

```bash
# Create new post
hugo new posts/post-name.md

# Preview locally (includes drafts)
hugo server -D

# Preview locally (production mode, no drafts)
hugo server

# Build site (outputs to public/)
hugo --minify

# Check Hugo version
hugo version
```

---

## 📝 Writing Tips

### Adding Images

1. Put images in `static/images/`
2. Reference in markdown: `![Alt text](/images/my-image.png)`

### Code Blocks

````markdown
```python
def hello():
    print("Hello, World!")
```
````

### Links

```markdown
[Link text](https://example.com)
```

### Blockquotes

```markdown
> This is a quote
```

---

## ⚠️ Troubleshooting

### Post not showing up?

1. Check `draft = false` in front matter
2. Check the date isn't in the future
3. Make sure you pushed to GitHub

### Build failing on GitHub?

1. Go to **Actions** tab in your repository
2. Click on the failed workflow
3. Check the error logs

### Custom domain not working?

1. Verify DNS CNAME record is correct
2. Check `static/CNAME` contains `blog.nabinpoudel004.com.np`
3. Wait for DNS propagation (can take time)

---

## 📞 Quick Reference

| Task | Command |
|------|---------|
| New post | `hugo new posts/name.md` |
| Preview | `hugo server -D` |
| Publish | `git add . && git commit -m "msg" && git push` |

---

© 2026 Nabin Poudel. All rights reserved.
