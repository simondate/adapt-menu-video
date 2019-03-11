define(["coreJS/adapt"], function(Adapt) {

    var Adapt = require('coreJS/adapt');
    var Backbone = require('backbone');

    var menuVideo = Backbone.View.extend({

        className: "extension",

        initialize: function() {
          this.remove();
          var template = Handlebars.templates.menuVideo;
          $('.menu-item.nth-child-1').find('.menu-item-graphic').html(this.$el.html(template(this.model)));
        }
    });


    Adapt.on("menuView:ready", function() {
      if(!Adapt.course.get('_menuVideo') || !Adapt.course.get('_menuVideo')._isEnabled) return;
		  new menuVideo({model: Adapt.course.get('_menuVideo')});
    });

    return menuVideo;
});
