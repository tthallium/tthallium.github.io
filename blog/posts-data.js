// ============================================================
// Blog posts — add a new post by adding one object to this list.
// No need to touch blog.html or blog.js. Order doesn't matter,
// blog.js sorts everything by date (newest first) automatically.
//
// Fields:
//   slug     - path to the post's page, e.g. "/blog/jwst/"
//   title    - post title
//   date     - "YYYY-MM-DD", used for sorting and display
//   tag      - short category label, e.g. "Exoplanets"
//   readTime - e.g. "8 min read"
//   image    - path to a thumbnail image, e.g. "/static/jwst_poster01.jpg"
//   credit   - optional photo credit (ESA/Hubble etc. require this to stay
//              attached to the image itself). Not shown on the listing card
//              anymore — display it on the individual post page, right next
//              to the full image.
//   excerpt  - one or two sentence summary
// ============================================================

const posts = [
    {
      slug: "/blog/jwst/",
      title: "James Webb Space Telescope: Window to the Past",
      date: "2025-07-08",
      tag: "Astrophysics",
      readTime: "8 min read",
      image: "/static/jwst_poster01.jpg",
      credit: "ESA (C. Carreau)",
      excerpt: "TODO: write a real one-line summary for this post."
    },
    {
      slug: "/blog/exoplanet-detection/",
      title: "To See the Invisible: How to Detect an Exoplanet?",
      date: "2025-01-01", // TODO: set the real publish date
      tag: "Exoplanets",
      readTime: "TODO: min read",
      image: "/static/Plato_key_visual (1).jpg",
      credit: "ESA",
      excerpt: "TODO: write a real one-line summary for this post."
    },
    {
      slug: "/blog/van-maanen/",
      title: "Great Debate, and the Century-Old Exoplanet",
      date: "2025-07-13",
      tag: "Exoplanets",
      readTime: "5 min read",
      image: "/static/heic2305a.jpg",
      credit: "NASA, ESA, L. Hustak (STScI)",
      excerpt: "TODO: write a real one-line summary for this post."
    },
    {
      slug: "/blog/Bessel/",
      title: "What Does Measuring Distances Tell Us About Hidden Worlds",
      date: "2025-07-12",
      tag: "Exoplanets",
      readTime: "3 min read",
      image: "/static/heic1916a.jpg",
      credit: "ESA/Hubble, M. Kornmesser",
      excerpt: "Is our Sun unique? The story of how a measurement can challenge our entire worldview and reveal hidden worlds lightyears away."
    }
  ];