# File Extension API

This API provides information about file extensions based on category names.

## Usage

### Installation

```bash
npm install
node index.js
```

By default the server is running on http://localhost:3000


### Examples

Request:
```http
GET http://localhost:3000/images
```
Response:
```json
{
  "ext": ".png, .jpg, .jpeg, .gif, .bmp, .tiff, .svg"
}
```


Request:
```http
GET http://localhost:3000/all 
```
Or
```http
GET http://localhost:3000/ 
```

Response:
```json
// Gives all the extensions
{
"ext": [
".png",
".jpg",
".jpeg",
".gif",
".bmp",
".tiff",
".svg",
//Etc...
]
}
```


If the category is not found, the API will return a 404 error with the following JSON response:
```json
{
  "error": "Category not found"
}
```

## Note
This API is very simple and basic, please send me an issue if you have an idea of improving the code. Thanks!