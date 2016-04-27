if(localStorage.userData == null) {
  $.getJSON("php/data.json", {
      format: "json"
    }, function(data) {
      localStorage.setItem("userData", JSON.stringify(data));
    });
}


function addFavorite(user, favorite) {
  if(user != null) {
    var data = JSON.parse(localStorage.userData);
    data.forEach(function(item, index){
      if(item.username == user.username) {
        item.fav.push(favorite);
        user.fav.push(favorite);
        return;
      }
    });
    localStorage.setItem("userData", JSON.stringify(data));
  }
  return user;
}

function removeFavorite(user, favorite) {
  var data = JSON.parse(localStorage.userData);
  data.forEach(function(item, index){
    if(item.username == user.username) {
      item.fav.forEach(function(fav_item, index) {
        if(fav_item.url == favorite.url) {
          item.fav.splice(index, 1);
          user.fav.splice(index, 1);
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
      if(item.username == username) {
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
          if(item.username == username) {
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
  var user = null;
  data.forEach(function(item, index) {
    if(item.username == username) {
      data = "user already exists";
      return;
    }
  });
  console.log(data);
  if(typeof data != 'string') {
    var user = {"username": username, "password": password, "fav": []};
    data.push(user);
    localStorage.setItem("userData", JSON.stringify(data));
    data = user;
  }
  return data;
};
