var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var TestimonialSchema = new Schema({
  body:  String,
  name:  String,
  image: String
});

module.exports = mongoose.model('Testimonial', TestimonialSchema);
