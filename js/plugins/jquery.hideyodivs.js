/**
 * jquery.hideYoDivs.js
 * Author: Hlynur Tryggvason
 *
 */
(function($){

	var $t,
		timer,
		settings = {
	    	timeout: 2000,
            fadeInSpeed: 400,
            fadeOutSpeed: 400
	    };

	var methods = {
    	init: function(options) {
    		
    		if ( options ) { 
				$.extend( settings, options );
			}

			timer = setTimeout(methods.hide, settings.timeout);

    		$(window).bind('mousemove.hideYoDivs', function() {
				methods.show();
			});
			
			return $t;
    	},
    	destroy: function() {
    		
            clearTimeout(timer);
    		$(window).unbind('.hideYoDivs');
            $t.show();

    		return $t;
    	},
    	show: function() {
    		
    		return $t.each(function() {
                clearTimeout(timer);
    			$(this).fadeIn(settings.fadeInSpeed);
    			timer = setTimeout(methods.hide, settings.timeout)
    		});
    	},
    	hide: function() {
    		
    		return $t.each(function() {
    			$(this).fadeOut(settings.fadeOutSpeed);
    		});
    	}
    };

	$.fn.hideYoDivs = function( method ) {  

		$t = this;

		if ( methods[method] ) {
	    	return methods[method].apply( this, Array.prototype.slice.call( arguments, 1 ));
	    } else if ( typeof method === 'object' || ! method ) {
	    	return methods.init.apply( this, arguments );
	    } else {
	    	$.error( 'Method ' +  method + ' does not exist on jQuery.hideYoDivs' );
	    }
  	};
})(jQuery);