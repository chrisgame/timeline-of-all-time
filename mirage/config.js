export default function() {

  //fetch by page
  //fetch by cursor
  //fetch by timestamp

  //how to visualize compressed time axis

  this.get('/supereons', function(schema) {
    return schema.supereons.all();
  })
}
