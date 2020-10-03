# Routes

## Auth & User Info

| Method   | Route               | Purpose                               | Request Body                               | Response Body                     | Status  |
| :------- | :------------------ | :------------------------------------ | :----------------------------------------- | :-------------------------------- | :------ |
| **POST** | `/api/signup`       | Creates a new user account            | `{username:<string>, password:<string>}`   | `{jwt: <string>}`                 | 200,409 |
| **POST** | `/api/login`        | Logs in with username and password    | `{username: <string>, password: <string>}` | `{jwt: <string>}`                 | 200,403 |
| **POST** | `/api/authenticate` | Authenticates an existing login token | `{jwt: <string>}`                          | `{ok: <bool>, [error: <string>]}` | 200,403 |

> **Note**: May want to include some sort of `/api/settings` to store things like the user's theme, layout, etc...Not sure yet, implementation will inform if this exists or not.

---

## Data Set Meta

| Method     | Route              | Purpose                  | Request Body       | Response Body     | Status  |
| :--------- | :----------------- | :----------------------- | :----------------- | :---------------- | :------ |
| **POST**   | `/api/dataset`     | Create new data set      | `<NewDataSetForm>` | `<DataSetMeta>`   |
| **PUT**    | `/api/dataset`     | Update existing data set | `<NewDataSetForm>` | `<DataSetMeta>`   | 200,403 |
| **GET**    | `/api/dataset`     | Get all user data sets   | --                 | `<DataSetMeta[]>` | 200,403 |
| **GET**    | `/api/dataset/:id` | Get data set by ID       | --                 | `<DataSetMeta>`   | 200,403 |
| **DELETE** | `/api/dataset/:id` | Delete existing data set | --                 | --                | 200,403 |

---

## Data Set Points

| Method     | Route                                                       | Purpose                                                      | Request Body    | Response Body   | Status          |
| :--------- | :---------------------------------------------------------- | :----------------------------------------------------------- | :-------------- | :-------------- | :-------------- |
| **POST**   | `/api/dataset/:id/point`                                    | Create a new point in the data set `id`                      | `<Point>`       | `<Point>`       | 200,400         |
| **GET**    | `/api/dataset/:id/point/?start=<timestamp>&end=<timestamp>` | Get points from the data set `id` within the specified range | --              | `<Point[]>`     | 200,403         |
| **GET**    | `/api/dataset/:id/point/:timestamp`                         | Get a point by `timestamp` in the data set `id`              |                 | --              | `<DataSetMeta>` | 200,403 |
| **PUT**    | `/api/dataset:id/point/:timestamp`                          | Update existing point by `timestamp` in the data set `id`    | `<Point>`       | `<DataSetMeta>` | 200,403         |
| **DELETE** | `/api/points`                                               | Delete existing data set                                     | `<DeletePoint>` | --              | 200,403         |

---

## Request Body Types

### `NewDataSetForm`

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
