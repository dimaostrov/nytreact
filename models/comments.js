const mongoose = require('mongoose');

const commentSchema = mongoose.Schema({ 
  body: {type: String, unique: true },
  date: {type: Date, default: Date.now()},
  article: [{ type: Schema.Types.ObjectId, ref: 'Article' }]
});

const Comment = mongoose.model('Comment', commentSchema);


module.exports = Comment;