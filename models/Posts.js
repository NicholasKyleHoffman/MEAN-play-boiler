/** 
*   MEAN-play-boiler App
*   @author Nick Hoffman <hoffman.nick10@gmail.com>
**/

var mongoose = require('mongoose');

var PostSchema = new mongoose.Schema({
  title: String,
  link: String,
  upvotes: {type: Number, default: 0},
  comments: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Comment' }]
});

mongoose.model('Post', PostSchema);
