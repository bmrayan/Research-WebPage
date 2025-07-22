# Blog Posts

This directory contains all your blog post pages.

## How to Create a New Post

1. **Duplicate the template**: Copy `first-post.html` and rename it (e.g., `my-new-post.html`)

2. **Update the content**: Edit your new file and change:
   - `<title>` in the head section
   - `<h1 class="post-main-title">` - Main title
   - `<span class="post-publish-date">` - Publication date
   - `<span class="post-read-time">` - Reading time estimate
   - Replace the content in each `<section class="post-section">`
   - Update image sources and captions

3. **Update images**: 
   - Place your post images in the main `photos/` directory
   - Update the `src` attributes in `<img>` tags
   - Update the `alt` attributes and captions

4. **Add to blog page**: Update `blog.html` to add a new post preview:
   ```html
   <div class="blog-post-preview">
       <div class="post-preview-content">
           <h3 class="post-title">Your Post Title</h3>
           <p class="post-excerpt">Brief description...</p>
           <div class="post-meta">
               <span class="post-date">Date</span>
           </div>
           <a href="blog-posts/your-post-file.html" class="read-btn">
               <i class="fas fa-book-open"></i> Read
           </a>
       </div>
   </div>
   ```

## Template Structure

Each post follows this structure:
- **Header**: Navigation, title, and meta info
- **Introduction**: Italic intro paragraph with highlight styling
- **Content sections**: Mix of text and images
- **Two image placeholders**: With captions
- **Footer**: Navigation back to blog/home

The template is fully responsive and works perfectly on mobile devices!