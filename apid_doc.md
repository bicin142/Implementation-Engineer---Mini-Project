# Postr API Documentation

## Endpoints :

List of available endpoints:

1. `POST /users`
2. `GET /users`
3. `GET /users/:userId`

4. `POST /posts`
5. `GET /posts/latest`

6. `GET /replies/post/:postId`
7. `POST /replies/post/:postId`

&nbsp;

## 1. POST /users

Description:

- Create new user with a random username

_Response (201 - Created)_

```json
{
    "message": "New username <username> has been created",
    "data": {
        "id": <integer>,
        "username": <string>,
        "updatedAt": <dateTime>,
        "createdAt": <dateTime>
    }
}
```

&nbsp;

## 2. GET /users

Description:

- Get list of all existing users

_Response (200 - OK)_

```json
{
    "message": "All users listed below",
    "data": [
        {
            "id": <integer>,
            "username": <string>,
            "updatedAt": <dateTime>,
            "createdAt": <dateTime>
        },
        {
            "id": <integer>,
            "username": <string>,
            "updatedAt": <dateTime>,
            "createdAt": <dateTime>
        },
        {
            "id": <integer>,
            "username": <string>,
            "updatedAt": <dateTime>,
            "createdAt": <dateTime>
        },
        ...
    ]
}
```

&nbsp;

## 3. GET /users/:userId

Description:

- Get single user by userId

Request:

- params:

```json
{
    "userId": <integer>
}
```

_Response (200 - OK)_

```json
{
    "message": "User with userId <userId> found below",
    "data": {
        "id": <integer>,
        "username": <string>,
        "updatedAt": <dateTime>,
        "createdAt": <dateTime>
    }
}
```

_Response (400 - BAD REQUEST)_

```json
{
  "name": "BAD REQUEST",
  "message": "Invalid id"
}
```

_Response (404 - NOT FOUND)_

```json
{
  "name": "NOT FOUND",
  "message": "User with userId <userId> not found"
}
```

&nbsp;

## 4. POST /posts

Description:

- Create new post by an existing user
- User has to be existing user
- Maximum character limit of 100

Request:

- body:

```json
{
    "userId": <integer>,
    "content": <text> (maximum 100 characters)
}
```

_Response (201 - Created)_

```json
{
    "message": "New post by <username> has been created below",
    "data": {
        "id": <integer>,
        "userId": <userId>,
        "content": <text>,
        "updatedAt":  <dateTime>,
        "createdAt":  <dateTime>,
        "postedBy": <username>
    }
}
```

_Response (400 - Bad Request)_

```json
{
    "name": "BAD REQUEST",
    "message": "Content of post cannot exceed 100 characters."
}
OR
{
    "name": "BAD REQUEST",
    "message": "Invalid userId provided. User with userId <userId> not found"
}
```

&nbsp;

## 5. GET /posts/latest

Description:

- Get the latest posts by all users
- Optional pagination. If not provided, will show 10 results of the first page
- Each individual post will also show the LAST reply to it (if any)

Request:

- query:

```json
{
    "size": <integer>,
    "page": <integer>
}
```

_Response (200 - OK)_

```json
{
 "message": "Latest posts below",
    "data": {
        "totalItems": <integer>,
        "totalPages": <integer>,
        "currentPage": <integer>,
        "posts": [
            {
                "id": <integer>,
                "userId": <integer>,
                "content": <text>,
                "createdAt": <dateTime>,
                "updatedAt":  <dateTime>,
                "Replies": [
                    {
                        "userId": <integer>,
                        "content": <text>
                    }
                ]
            },
            {
                "id": <integer>,
                "userId": <integer>,
                "content": <text>,
                "createdAt": <dateTime>,
                "updatedAt":  <dateTime>,
                "Replies": []
            },
                        {
                "id": <integer>,
                "userId": <integer>,
                "content": <text>,
                "createdAt": <dateTime>,
                "updatedAt":  <dateTime>,
                "Replies": []
            },
            ...
        ]
    }
}
```

&nbsp;

## 6. GET /replies/post/:postId

Description:

- Get the replies to a specific post
- Optional pagination. If not provided, will show 10 results of the first page
- Each individual reply will also show the user detail
- The post selected must be an existing post

Request:

- query:

```json
{
    "size": <integer>,
    "page": <integer>
}
```
- params:

```json
{
    "postId": <integer>
}
```

_Response (200 - OK)_

```json
{
"message": "Replies to postId <postId> below.",
    "data": {
        "totalItems": <integer>,
        "totalPages": <integer>,
        "currentPage": <integer>,
        "replies": [
            {
                "id": <integer>,
                "content": <text>,
                "createdAt": <dateTime>,
                "User": {
                    "id": <integer>,
                    "username": <username>
                }
            },
            {
                "id": <integer>,
                "content": <text>,
                "createdAt": <dateTime>,
                "User": {
                    "id": <integer>,
                    "username": <username>
                }
            },
            {
                "id": <integer>,
                "content": <text>,
                "createdAt": <dateTime>,
                "User": {
                    "id": <integer>,
                    "username": <username>
                }
            },
            ...
        ]
    }
}
```

_Response (400 - Bad Request)_

```json
{
  "name": "BAD REQUEST",
  "message": "Invalid postId provided. Post with postId <postId> not found"
}
```

## 7. POST /replies/post/:postId

Description:

- Create new reply by an existing user to an existing post
- User has to be existing user
- Post that is replied to has to be existing post
- Maximum character limit of 100

Request:

- body:

```json
{
    "userId": <integer>,
    "content": <text> (maximum 100 characters)
}
```
- params:

```json
{
    "postId": <integer>
}
```

_Response (201 - Created)_

```json
{
    "message": "New reply by <username> to post <postId> has been created below",
    "data": {
        "id": <integer>,
        "userId": <integer>,
        "content": <text>,
        "postId": <integer>,
        "updatedAt": <dateTime>,
        "createdAt": <dateTime>,
        "repliedBy": <username>
    }
}
```

_Response (400 - Bad Request)_

```json
{
    "name": "BAD REQUEST",
    "message": "Content of reply cannot exceed 100 characters."
}
OR
{
    "name": "BAD REQUEST",
    "message": "Invalid userId provided. User with userId <userId> not found"
}
OR
{
    "name": "BAD REQUEST",
    "message": "Invalid postId provided. Post with postId <postId> not found"
}
```
## Global Error

_Response (500 - Internal Server Error)_

```json
{
  "name": "INTERNAL SERVER ERROR",
  "message": <string>
}
```