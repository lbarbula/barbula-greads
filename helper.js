module.exports = {
  findAuthor: function (name, list) {
    for (var i = 0; i < list.length; i++) {
      if (name === list[i].first_name) {
        return list[i].id
      }
    }
  },
  findBook: function (name, list) {
    for (var i = 0; i < list.length; i++) {
      if (name === list[i].book_name) {
        return list[i].id
      }
    }
  },
  findGenre: function(name, list) {
    for (var i = 0;i < list.length;i++) {
      if(name === list[i].name){
        return list[i].id
      }
    }
  }
}
