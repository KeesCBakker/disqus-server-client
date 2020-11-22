# Disqus Server Client - Core
Core client that helps your server to connect to the Disqus API.

## Features
<a href="https://disqus.com/api/docs/">The Disqus API</a> - although not very documented - is very easy to implement. This implementation has a view advantages:

- [x] Implemented using TypeScript, so we have types and you have auto-complete
- [x] Uses Axios which gives use `Promises`, so you can use `async` and `await`
- [x] Uses Node Cache to cache some endpoints, so your performance is better.

## API
Let's show some code.

New up a client:

```typescript
// Node.js
const { DisqusCode } = require("disqus-server-client-core")

// Or TypeScript:
import { DisqusCore } from 'disqus-server-client-core'

const config = {
    accessToken: "...",
    apiKey:      "...",
    apiSecret:   "..."
}

const disqus = new DisqusCore(config)
```

Getting the posts:
```typescript
const r = await disqus.request("posts/list", { forum: "keestalkstech" })
const posts = r.response.map(post => ({
    msg: post.msg,
    by: post.author.name || post.author.username,
    thread: post.thread
}))

console.log(posts);
```

Getting the details of a thread:
```typescript
const id = "...";
const r = await disqus.request("threads/details", { thread: id })
const thread = {
    title: r.response.title,
    url: r.response.link,
};

console.log(title);
```

## What actions can I do?
You can find them here: https://disqus.com/api/docs/


## Maintenance
This project is maintained by <a href="https://keestalkstech.com/">Kees C. Bakker</a>.