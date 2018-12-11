define(["coreJS/adapt"], function(Adapt) {

    var Adapt = require('coreJS/adapt');
    var Backbone = require('backbone');

    var menuVideo = Backbone.View.extend({

        className: "extension",

        initialize: function() {
          this.remove();
          console.log(this.model);
          var template = Handlebars.templates.menuVideo;
          $('.menu-item-graphic').first().html(this.$el.html(template(this.model)));
        }
    });


    Adapt.on("menuView:ready", function() {
      if(!Adapt.course.get('_menuVideo') || !Adapt.course.get('_menuVideo')._isEnabled) return;
		  new menuVideo({model: Adapt.course.get('_menuVideo')});
    });

    return menuVideo;
});
