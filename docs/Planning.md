# Routes

## Auth & User Info

| Method   | Route                 | Purpose                               | Request Body                               | Response Body                     | Status  |
| :------- | :------------------ | :------------------------------------ | :----------------------------------------- | :-------------------------------- | :------ |
| **POST** | `/api/signup`       | Creates a new user account            | `{username:<string>, password:<string>}`   | `{jwt: <string>}`                 | 200,409 |
| **POST** | `/api/login`        | Logs in with username and password    | `{username: <string>, password: <string>}` | `{jwt: <string>}`                 | 200,403 |
| **POST** | `/api/validateToken` | Checks if the jwt is on the header and it is valid | `{jwt: <string>}`                          | `{ok: <bool>, [error: <string>]}` | 200,403 |

Signup{
      'username',
    'password',
    'firstName',
    'lastName',
    'age',
}

login{
      'username',
    'password',
}

> **Note**: May want to include some sort of `/api/settings` to store things like the user's theme, layout, etc...Not sure yet, implementation will inform if this exists or not.

---

## Data Set Meta

| Method     | Route              | Purpose                  | Request Body       | Response Body     | Status  |
| :--------- | :----------------- | :----------------------- | :----------------- | :---------------- | :------ |
| **POST**   | `/api/datasets`     | Create new data set      | `<NewDataSetForm>` | `<DataSetMeta>`   |
| **GET**    | `/api/datasets`     | Get all user data sets   | --                 | `<DataSetMeta[]>` | 200,403 |
| **GET**    | `/api/datasets/:dataset` | Get data set by ID       | --                 | `<DataSetMeta>`   | 200,403 |
| **PUT**    | `/api/datasets/:dataset` | Get data set by ID       | --                 | `<DataSetMeta>`   | 200,403 |
| **DELETE** | `/api/datasets/:dataset` | Delete existing data set | --                 | --                | 200,403 |


## Data Set Points
| **POST**    | `/api/datasets/:dataset/points$` | Get data set by ID       | --                 | `<DataSetMeta>`   | 200,403 |
| **GET**    | `/api/datasets/:dataset/points$` | Get data set by ID       | --                 | `<DataSetMeta>`   | 200,403 |
| **DELETE** | `/api/datasets/:dataset/points$` | Delete existing data set | --                 | --                | 200,403 |


| **GET**    | `/api/datasets/:dataset/points/:point` | Get data set by ID       | --                 | `<DataSetMeta>`   | 200,403 |
| **PUT**    | `/api/datasets/:dataset/points/:point` | Get data set by ID       | --                 | `<DataSetMeta>`   | 200,403 |
| **DELETE** | `/api/datasets/:dataset/points/:point` | Delete existing data set | --                 | --                | 200,403 |

---
## Request Body Types

### `NewDataSetForm`
{
      'name',
    'graphColor',
    'type',
    'aggregateFunc',
}

```js
{
  'name': ''
}
```
## Response Body Types

### `DataSetMeta`

```js
meta: {
    // the name of the data set
    name: 'water',
    // the graph/icon color
    graphColor: 'blue',
     // timestamp
    createdAt: 321901293875,
    // type of the data points
    type: 'number',
    // the aggregate function that dictates how to group data points
    aggregateFunc: 'sum',
  },
```
