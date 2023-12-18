$(document).ready(function() {
    $.get("https://jsonplaceholder.typicode.com/posts", function(data) {
      displayData(data, "#postList");
    });
  
    // Active button Posts
    $("#postsBtn").click(function() {
      $(this).addClass("active");
      $("#albumsBtn, #photosBtn").removeClass("active");
  
      $.get("https://jsonplaceholder.typicode.com/posts", function(data) {
        displayData(data, "#postList");
      });
    });
  
    // Active button Albums
    $("#albumsBtn").click(function() {
      $(this).addClass("active");
      $("#postsBtn, #photosBtn").removeClass("active");
  
      $.get("https://jsonplaceholder.typicode.com/albums", function(data) {
        displayData(data, "#postList");
      });
    });
  
    // Active button Photos
    $("#photosBtn").click(function() {
      $(this).addClass("active");
      $("#postsBtn, #albumsBtn").removeClass("active");
  
      $.get("https://jsonplaceholder.typicode.com/photos", function(data) {
        displayData(data, "#postList");
      });
    });

    // event click change Type
    document.getElementById('postsBtn').addEventListener('click', function() {
            changeType('Posts');
        });

        document.getElementById('albumsBtn').addEventListener('click', function() {
            changeType('Albums');
        });

        document.getElementById('photosBtn').addEventListener('click', function() {
            changeType('Photos');
        });

        function changeType(type) {
            document.getElementById('typeHeader').textContent = 'Type: ' + type;
        }

    // show data 
    function displayData(data, targetElement) {
      $(targetElement).empty();
      data.forEach(function(item) {
        $(targetElement).append("<li>" + item.title + "</li>");
      });
    }
});
  