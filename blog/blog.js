// Renders the `posts` array (from posts-data.js) into #blog-grid.
// Sorts newest-first by date automatically — never needs manual editing.

function formatPostDate(iso) {
    const d = new Date(iso + "T00:00:00");
    return d.toLocaleDateString("en-US", { year: "numeric", month: "long", day: "numeric" });
  }
  
  function renderBlogGrid() {
    const grid = document.getElementById("blog-grid");
    if (!grid || typeof posts === "undefined") return;
  
    const sorted = [...posts].sort((a, b) => new Date(b.date) - new Date(a.date));
  
    grid.innerHTML = sorted.map(post => `
      <a class="post-card blog-post-card" href="${post.slug}">
        <div class="post-thumb-wrap">
          <img class="post-thumb" src="${post.image}" alt="${post.title}" loading="lazy" />
        </div>
        <div class="post-body">
          <div class="post-meta">
            <span class="post-tag">${post.tag}</span>
            <span>${formatPostDate(post.date)}</span>
            <span>·</span>
            <span>${post.readTime}</span>
          </div>
          <h3>${post.title}</h3>
          <p>${post.excerpt}</p>
          <span class="read-more">Read more →</span>
        </div>
      </a>
    `).join("");
  }
  
  document.addEventListener("DOMContentLoaded", renderBlogGrid);