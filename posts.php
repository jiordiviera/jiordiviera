<?php

$apiUrl = 'https://portfolio.jd-devs.com/api/posts';
$posts = file_get_contents($apiUrl);
$postsData = json_decode($posts, true);

// Create the content for README.md
$readmeContent = "## 📄 Latest Blog Posts\n\n";
$readmeContent .= "Here are my most recent blog posts:\n\n";

foreach ($postsData as $post) {
    $readmeContent .= "1. [{$post['title']}]({$post['url']})\n";
}

$readmeContent .= "\n🔗 Check out more on my [blog](https://portfolio.jd-devs.com).\n";

// Update the README.md file
file_put_contents('README.md', $readmeContent);