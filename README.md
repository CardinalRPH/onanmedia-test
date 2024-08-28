
# Onanmedia Test

Project dengan FrameWork Next JS dan bahasa pemrograman TypeScript

## Getting Started

Pertama, jalankan development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```
Buka [http://localhost:3000](http://localhost:3000) dengan browser anda untuk melihatnya
## Reqres API End Point

#### Get List User

```http
  GET /api/user?page=
```

| Query | Type     | Description                |
| :-------- | :------- | :------------------------- |
| `page` | `number` | paging |

#### Get Single User

```http
  GET /api/user/${id}
```

| Parameter | Type     | Description                       |
| :-------- | :------- | :-------------------------------- |
| `id`      | `number` | **Required**. Id dari User |

#### Get List Resource

```http
  GET /api/unknown?page=
```

| Query | Type     | Description                |
| :-------- | :------- | :------------------------- |
| `page` | `number` | paging |

#### Get Single Resource

```http
  GET /api/unknown/${id}
```

| Parameter | Type     | Description                       |
| :-------- | :------- | :-------------------------------- |
| `id`      | `number` | **Required**. Id dari Resource |

#### Create User

```http
  POST /api/user
```
#### Update User

```http
  PUT /api/user/${id}
```

| Parameter | Type     | Description                       |
| :-------- | :------- | :-------------------------------- |
| `id`      | `number` | **Required**. Id dari User |

#### Update User

```http
  PATCH /api/user/${id}
```

| Parameter | Type     | Description                       |
| :-------- | :------- | :-------------------------------- |
| `id`      | `number` | **Required**. Id dari User |

#### Delete User

```http
  DELETE /api/user/${id}
```

| Parameter | Type     | Description                       |
| :-------- | :------- | :-------------------------------- |
| `id`      | `number` | **Required**. Id dari User |

#### Register User

```http
  POST /api/register/
```

| Body | Type     | Description                       |
| :-------- | :------- | :-------------------------------- |
| `email`      | `string` | **Required**. email dari User |
| `password`      | `string` | **Required**. random password |

#### Login User

```http
  POST /api/login/
```

| Body | Type     | Description                       |
| :-------- | :------- | :-------------------------------- |
| `email`      | `string` | **Required**. email dari User |
| `password`      | `string` | **Required**. random password |

#### Delay Response

```http
  GET /api/user?delay=
```

| Query | Type     | Description                       |
| :-------- | :------- | :-------------------------------- |
| `delay`      | `number` | delay respon dalam detik |

## Pembaca End Point

#### Create Pembaca

```http
  POST /api/pembaca/
```

| Body | Type     | Description                       |
| :-------- | :------- | :-------------------------------- |
| `judul`      | `string` | **Required** |
| `gambar`      | `string` | **Required** |
| `deskripsi`      | `string` | **Required** |
| `tag`      | `array<string>` | **Required** |
| `trending`      | `boolean` | **Required** |

#### Delete Pembaca

```http
  DELETE /api/pembaca/${id}
```

| Parameter | Type     | Description                       |
| :-------- | :------- | :-------------------------------- |
| `id`      | `string` | **Required**. Id dari pembaca |

#### Get List Pembaca

```http
  GET /api/pembaca?page=
```

| Query | Type     | Description                       |
| :-------- | :------- | :-------------------------------- |
| `page`      | `number` | paging |

#### Get Single Pembaca

```http
  GET /api/pembaca/${id}
```

| Parameter | Type     | Description                       |
| :-------- | :------- | :-------------------------------- |
| `id`      | `number` | **Required**. Id dari pembaca |

#### Update Pembaca

```http
  PUT /api/pembaca/${id}
```
| Parameter | Type     | Description                       |
| :-------- | :------- | :-------------------------------- |
| `id`      | `number` | **Required**. Id dari pembaca |

| Body | Type     | Description                       |
| :-------- | :------- | :-------------------------------- |
| `judul`      | `string` | **Optional** |
| `gambar`      | `string` | **Optional** |
| `deskripsi`      | `string` | **Optional** |
| `tag`      | `array<string>` | **Optional** |
| `trending`      | `boolean` | **Optional** |



