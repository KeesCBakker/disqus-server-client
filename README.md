# Disqus Server Client
Clients that helps your server to connect to the Disqus API.

## Packages
We have two packages for you:

- <a href="https://www.npmjs.com/package/disqus-server-client">disqus-server-client<a/>: core client to interact from your server with the Disqus API.
- <a href="https://www.npmjs.com/package/disqus-server-client-core">disqus-server-client-core</a>: stongly typed client to interact from your server with the Disqus API.

## Keeping up to date
The. Disqus. API. Is. Not. Well. Documented!

But we'll use it anyway to generate the strongly typed clients:

1. Generation can be started using `npm run generate`.
1. We are parsing the resources on https://disqus.com/api/docs/
1. Each category is generated into a property of the client.
1. Each resource is generated ad a method on each category.
1. The following information is added to each resource:
    - The description (not always there).
    - Required and optional parameters -- they are converted into a Typescript interface.
    - The first example is parsed into a TypeScript interface as a return type.
    - The method (GET or POST).

## Problems?
Did you find something that was not right? Cool. Please file a bug with the details. If you have a PR. Event better.

## Maintenance
This project is maintained by <a href="https://keestalkstech.com/">Kees C. Bakker</a>.