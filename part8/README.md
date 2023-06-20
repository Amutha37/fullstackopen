<h1 align="center"> $\textcolor{orange}{Book List\ Project\ Backend\ GraphQL\ Mongo DB }$
</h1>

<details>
<summary>

# $\color{cyan}{GraphQL - philosophy }$

 </summary>

\*\*\* Copyright of University Helsinki Fullstack note Part8a

In recent years, GraphQL, developed by Facebook, has become popular for communication between web applications and servers.

The GraphQL philosophy is very different from REST. REST is resource-based. Every resource, for example a user, has its own address which identifies it, for example /users/10. All operations done to the resource are done with HTTP requests to its URL. The action depends on the HTTP method used.

The resource-basedness of REST works well in most situations. However, it can be a bit awkward sometimes.

Let's consider the following example: our bloglist application contains some kind of social media functionality, and we would like to show a list of all the blogs that were added by users who have commented on any of the blogs we follow.

If the server implemented a REST API, we would probably have to do multiple HTTP requests from the browser before we had all the data we wanted. The requests would also return a lot of unnecessary data, and the code on the browser would probably be quite complicated.

If this was an often-used functionality, there could be a REST endpoint for it. If there were a lot of these kinds of scenarios however, it would become very laborious to implement REST endpoints for all of them.

A GraphQL server is well-suited for these kinds of situations.

The main principle of GraphQL is that the code on the browser forms a query describing the data wanted, and sends it to the API with an HTTP POST request. Unlike REST, all GraphQL queries are sent to the same address, and their type is POST.

The data described in the above scenario could be fetched with (roughly) the following query:

query FetchBlogsQuery {
user(username: "mluukkai") {
followedUsers {
blogs {
comments {
user {
blogs {
title
}
}
}
}
}
}
}

</details>

<details>
<summary>

# $\color{cyan}{GraphQL - Part8 }$

# $\color{white}{(repository\ order\ list)}$

</summary>

# $\color{aquamarine}{Part8a}$

- bookauthor-backend

# $\color{aquamarine}{ Part8b}$

- bookauthor-frontend

# $\color{aquamarine}{Part8c}$

- graphql-mongodb-bookauthor-backend

# $\color{aquamarine}{Part8d}$

- graphql-mongodb-bookauthor-frontend

# $\color{aquamarine}{Part8d}$

- graphql-mongodb-bookauthor-front and back end work on subsciption

</details>
