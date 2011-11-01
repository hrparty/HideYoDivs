# HideYoDivs

This is a jQuery plugin that hides elements on a page if the mouse hasn't been moved for a certain time. It is inspired by similar functionality on [xheight.co.uk](http://xheight.co.uk/). The name is inspired by [Antoine Dodson](http://en.wikipedia.org/wiki/Antoine_Dodson). Despite the name, it should hide whatever element you want it to hide on your page, not just divs.

## Achtung

A little disclaimer: This script was thrown together for a friend that wanted this functionality on his blawg. It hasn't been tested real well, you might run into all kinds of trouble with it. Use at own risk. If you do find bugs, feel free to fix them and do a pull request. Or file an issue and I might take a look, although I can't promise.

## Usage

See HideYoDivs in action on this test page: [herraparty.com/hideyodivs](http://herraparty.com/hideyodivs). The plugin itself is located in [/js/plugins/jquery.hideyodivs.js](https://github.com/hrparty/HideYoDivs/tree/master/js/plugins). 

To use the plugin simply do this:
	
	$('#sidebar').hideYoDivs();

This would hide the #sidebar element on your page if the mouse is idle for 2 seconds. 

### Options

You can pass in an object with some configuration options:

	$('#sidebar').hideYoDivs({
		timeout: 2000,
        fadeInSpeed: 400,
        fadeOutSpeed: 400
	});

Possible options are:

* **timeout:** Sets the time from when the mouse was last moved until the elements disappear, in milliseconds. Default is 2000 (2 seconds).
* **fadeInSpeed:** Sets the speed of the fade in effect, in milliseconds. Default is 400. Anything below 100 will appear instantaneous (no effect).
* **fadeOutSpeed:** Sets the speed of the fade out effect, in milliseconds. Default is 400. Anything below 100 will appear instantaneous (no effect).

### Methods

There are 4 methods available for calling directly:

* **init:** This is called automatically when you initialize the plugin.
 
		$('#sidebar').hideYoDivs() == $('#sidebar').hideYoDivs('init');

* **destroy:** Call this to stop using hideYoDivs at any time. See the effects on calling this by clicking 'Disable HideYoDivs' in the demo.

		$('#sidebar').hideYoDivs('destroy');

* **show:** Immediately shows your elements and restarts the timeout.

		$('#sidebar').hideYoDivs('show');

* **hide:** Immediately hides your elements.

		$('#sidebar').hideYoDivs('hide');


## Credits

* Inspired by similar functionality at [xheight.co.uk](http://xheight.co.uk/).
* Name inspired by [Antoine Dodson](http://en.wikipedia.org/wiki/Antoine_Dodson).
* Demo/test page is based on [html5boilerplate](http://h5bp.com).