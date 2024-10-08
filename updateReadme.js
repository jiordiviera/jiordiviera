const fs = require('fs');

// Read latest posts from the API response (stored as JSON)
const latestPosts = JSON.parse(fs.readFileSync('latest-posts.json', 'utf-8'));

// Generate the new blog section
let blogSection = `### ✍️ Latest Blog Posts\n\n`;

latestPosts.forEach(post => {
  blogSection += `- [${post.title}](https://portfolio.jd-devs.com/post/${post.slug})\n`;
});

// Load the existing README
let readme = fs.readFileSync('README.md', 'utf-8');

// Replace the old blog posts section
const newReadme = readme.replace(
  /### ✍️ Latest Blog Posts[\s\S]*?(?=\n###|$)/,
  blogSection
);

// Write the updated README
fs.writeFileSync('README.md', newReadme);
