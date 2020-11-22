# Disqus Server Client - Strongly Typed
Strongly typed client that helps your server to connect to the Disqus API.

## Features
<a href="https://disqus.com/api/docs/">The Disqus API</a> - although not very documented - is very easy to implement. This implementation has a view advantages:

- [x] Implemented using TypeScript, so we have types and you have auto-complete
- [x] Uses Axios which gives use `Promises`, so you can use `async` and `await`
- [x] Uses Node Cache to cache some endpoints, so your performance is better.
- [x] All end points were generated from the <a href="https://disqus.com/api/docs/">Disqus API docs</a>, so you don't have to look them up.
- [x] Forward compatible. If Disqus creates new end points, you can still use them by calling the `post`, `get` or the `request` method.

Drawbacks from this method:
- [ ] Not all end points are documented.
- [ ] Not all end points have examples, so we could not generate all return typed.

## API
Let's show some code.

New up a client:

```typescript
// Node.js
const { Disqus } = require("disqus-server-client")

// Or TypeScript:
import { Disqus } from 'disqus-server-client'

const config = {
    accessToken: "...",
    apiKey:      "...",
    apiSecret:   "..."
}

const disqus = new Disqus(config)
```

Getting the posts:
```typescript
const r = await disqus.post.list({ forum: "keestalkstech" })
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
const r = await disqus.threads.details({ thread: id })
const thread = {
    title: r.response.title,
    url: r.response.link,
};

console.log(title);
```

## Maintenance
This project is maintained by <a href="https://keestalkstech.com/">Kees C. Bakker</a>.