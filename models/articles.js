const mongoose = require('mongoose');

const articleSchema = mongoose.Schema({ 
  title: {type: String, unique: true },
  date: {type: Date},
  url: String
});

const Article = mongoose.model('Article', articleSchema);


module.exports = Article;