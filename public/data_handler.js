$.getJSON("php/data.json", {
    format: "json"
  }, function(data) {
    localStorage.setItem("userData", JSON.stringify(data.users));
  });

function addFavorite(user, favorite) {
  if(user != null) {
    var data = JSON.parse(localStorage.userData);
    data.forEach(function(item, index){
      if(item.username == user.username) {
        item.fav.put(favorite);
        return;
      }
    });
    localStorage.setItem("userData", JSON.stringify(data));
  }
  return user;
}

function removeFavorite(user, url) {
  var data = JSON.parse(localStorage.userData);
  data.forEach(function(item, index){
    if(item.username == user.username) {
      item.fav.forEach(function(item, index) {
        if(item.url == favorite.url) {
          delete item.fav[index];
          return;
        }
      });
    }
  });
  localStorage.setItem("userData", JSON.stringify(data));
  return user;
}

function login(username, password, callback) {
  if(localStorage.userData != null) {
    var stuff = null;
    JSON.parse(localStorage.userData).forEach(function (item, index) {
      if(item.name == username) {
        if(item.password == password) {
          stuff = item;
          return;
        } else {
          stuff = "incorrect password";
        }
      }
    });
    if(stuff == null) stuff = "user not found";
    callback(stuff);
  } else {
    $.getJSON("php/data.json", {
        format: "json"
      })
      .done( function(data) {
        var stuff = null;
        data.users.forEach(function (item, index) {
          if(item.name == username) {
            if(item.password == password) {
              stuff = item;
              return;
            } else {
              stuff = "incorrect password";
            }
          }
        });
        if(stuff == null) stuff = "user not found";
        callback(stuff);
      });
  }
};

function register(username, password) {
  var data = JSON.parse(localStorage.userData);
  data.forEach(function(item, index) {
    if(item.name == username) {
      data = "user already exists";
      return;
    }
  });
  if(typeof data != String) {
    data.put({"name": username, "password": password, "fav": []});
    localStorage.setItem("userData", JSON.stringify(data));
  }
  return data;
};
