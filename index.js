const express = require('express');
const app = express();
const ext = require('./ext.json');
const extOther = require('./extOther.json');

app.get('/:category', (req, res) => {
  const categoryName = req.params.category.toLowerCase();
  const singularCategory = extOther[categoryName];
  const pluralCategory = extOther[`${categoryName}s`];

  const mappedCategory = singularCategory || pluralCategory || categoryName;

  const categoryData = ext[mappedCategory];

  if (categoryData) {
    res.json(categoryData);
  } else {
    res.status(404).json({ error: 'Category not found' });
  }
});

const PORT = 3000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
