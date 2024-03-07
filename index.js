const express = require('express');
const app = express();
const ext = require('./ext.json');
const extOther = require('./extOther.json');

app.get(['/all', '/'], (req, res) => {
  const allExtensions = Object.values(ext)
    .map(category => category.ext)
    .flat();
  res.json({ ext: allExtensions });
});

app.get('/:category', (req, res) => {
  const categoryName = req.params.category.toLowerCase();
  const singularCategory = extOther[categoryName];
  const pluralCategory = extOther[`${categoryName}s`];

  if (categoryName === 'program') {
    const programmingExtensions = ext.programming.ext;
    const executableExtensions = ext.executable.ext;
    const combinedExtensions = [...programmingExtensions, ...executableExtensions];
    return res.json({ ext: combinedExtensions });
  }

  const mappedCategory = singularCategory || pluralCategory || categoryName;
  const categoryData = ext[mappedCategory];

  if (categoryData) {
    return res.json(categoryData);
  }

  res.status(404).json({ error: 'Category not found' });
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
