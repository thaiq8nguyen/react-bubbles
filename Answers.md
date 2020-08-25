- [ ] Explain what a token is used for.

        A token is used to allow a consistent user experience while keeping the web app secure. Implementing a token replaces the need for a user to login at every route change.


- [ ] What steps can you take in your web apps to keep your data secure?

        I can keep my web apps secure by implementing tokens and private routes.


- [ ] Describe how web servers work.

        Web servers are very strict, ridged, and forgetful (meaning it makes no friends and won't remember who you are...Have your token ready at the port). This makes them a perfect candidate to store, process and deliver web pages to clients.


- [ ] Which HTTP methods can be mapped to the CRUD acronym that we use when interfacing with APIs/Servers.

        Create = PUT with a new URI
                POST to a base URI returning a newly created URI
        Read   = GET
        Update = PUT with an existing URI
        Delete = DELETE