var Router = Backbone.Router.extend({
    routes: {
      '': 'home',
      'home': 'home',
      'sign_up': 'sign_up',
      'sign_in': 'sign_in',
      'upload': 'upload',
      'about': 'about',
      'show_album' :'show_album'
    },

    sign_in: function(){
      "use strict";
      var template = Handlebars.compile($("#sign_inTemplate").html());
        $('#handlebarsContainer').html(template({

        }));

    },

  upload: function(){
    "use strict";
    // $('#handlebarsContainer').empty();
    var template = Handlebars.compile($('#uploadTemplate').html());
      $('#handlebarsContainer').html(template({


      }));
      // console.log($('input[name="uploadedImage"]').val())
      console.log($('#upImg1').val())
      $('#submitupImg').on('click', function(){
          var image_set_id = 0;

          $.ajax({
            url: "https://polar-chamber-4218.herokuapp.com/image_sets",
            type: "POST",
            data: {
             image_set: {
                question: $('#question').val()
            }
        }
          })
          .done(function(result){

            image_set_id = result.id
            var imageOne = $('#upImg1').val()
            var imageTwo = $('#upImg2').val()
            var imageThree = $('#upImg3').val()
            var arrayOfImages = [imageOne,imageTwo,imageThree]
            // var question = $('#question').val()
            // console.log(arrayOfImages, question)

          for(var i=0; i<arrayOfImages.length; i++){
            var file = getImageData(arrayOfImages[i],image_set_id)
            console.log(file);
          }
          });

          // window.location.replace("#/show_album");

      });

      // $.ajax({
      //     url: 'https://polar-chamber-4218.herokuapp.com/image_sets',
      //     type: 'POST',
      //     data:data
      //   })
      //   alert("upload worked")




  },


  show_album: function(){
    var template = Handlebars.compile($('#show_albumTemplate').html());
      $('#handlebarsContainer').html(template({
      }));

    $.ajax({
      url: 'https://polar-chamber-4218.herokuapp.com/image_sets',
      type: 'GET'
    }).done(function(response) {

        });

  }


});


var router = new Router();
Backbone.history = Backbone.history || new Backbone.History({});
Backbone.history.start();

