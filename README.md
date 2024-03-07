# File Category API

This API provides information about file categories based on category names.

## Usage

### Installation

```bash
npm install
node index.js
```

By default the server is running on http://localhost:3000


### Examples
Example:
```http
GET http://localhost:3000/images
```
Response:
```json
{
  "ext": ".png, .jpg, .jpeg, .gif, .bmp, .tiff, .svg"
}
```
If the category is not found, the API will return a 404 error with the following JSON response:
```json
{
  "error": "Category not found"
}
```

