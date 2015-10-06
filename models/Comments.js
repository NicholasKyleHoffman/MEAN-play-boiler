/** 
*   MEAN-play-boiler App
*   @author Nick Hoffman <hoffman.nick10@gmail.com>
**/

var mongoose = require('mongoose');

var CommentSchema = new mongoose.Schema({    // schema for formatting how comment data is stored
  body: String,
  author: String,
  upvotes: {type: Number, default: 0},
  post: { type: mongoose.Schema.Types.ObjectId, ref: 'Post' }
});

mongoose.model('Comment', CommentSchema);
