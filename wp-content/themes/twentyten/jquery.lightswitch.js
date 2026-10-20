/*
 * jQuery LightSwitch plugin
 * @author admin@catchmyfame.com - http://www.catchmyfame.com
 * @version 1.0.1
 * @date December 16, 2010
 * @category jQuery plugin
 * @copyright (c) 2010 admin@catchmyfame.com (www.catchmyfame.com)
 * @license CC Attribution-Share Alike 3.0 - http://creativecommons.org/licenses/by-sa/3.0/
 */
(function($){
	$.fn.extend({ 
		lightSwitch: function(options)
		{
			var defaults = 
			{   
				animSpeed : 120,
				hoverSpeed : 100,
				switchImg : 'data:image/png;base64,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',
				switchImgCover: 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAD8AAAASCAYAAADsbQY3AAAABGdBTUEAAK/INwWK6QAAABl0RVh0U29mdHdhcmUAQWRvYmUgSW1hZ2VSZWFkeXHJZTwAAAA5SURBVHja7M8BEQAwDAIxqH/PrJWx4+MgzpJk9cmUxo9HxciTJ0+ePHny5MmTJ0+e/O/5lN7zBBgAFroHICb6bpsAAAAASUVORK5CYII=',
				
			    switchImg :	'data:image/png;base64,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',
				
    switchImg :'data:image/png;base64,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',



switchImgCoverWidth : '65px',
				switchImgCoverHeight : '19px',
				disabledImg : 'disabled.png',
				onShift : '0px 0px',
				offShift : '-65px 0px',/*-37px*/
				peekOff : '-7px 0px',
				peekOn : '-60px 0px'/*-31px*/
			};
			var options = $.extend(defaults, options);
			

			
    		return this.each(function() {
				var o=options;
				var obj = $(this);
				
 
				if($(this).attr('disabled'))
				{
					$(this).css({'display':'none'}).after('<span><img src="'+o.disabledImg+'" /></span>');
				 
				}
				else
				{			
					$(this).css({'display':'none'}).after('<span class="switch"><img src="'+o.switchImgCover+'" width="'+o.switchImgCoverWidth+'" height="'+o.switchImgCoverHeight+'" /></span>'); //'display':'none'
 
                }
				
				$(this).next('span.switch').css({'display':'inline-block','background-image':'url("'+o.switchImg+'")','background-repeat':'no-repeat','overflow':'hidden','cursor':'pointer','margin-right':'2px'});

				$(this).next('span.switch').click(function(){

					// When we click any span image for a radio button, animate the previously selected radio button to 'off'. 
					if($(this).prev().is(':radio'))
					{ 
						radioGroupName = $(this).prev().attr('name');
						$('input[name="'+radioGroupName+'"]'+':checked + span').stop().animate({'background-position':o.offShift},o.animSpeed);
					}
					if($(this).prev().is(':checked'))
					{
						document.getElementById("enn1").style.display="block";
					    document.getElementById("arr1").style.display="none";
					     
						$(this).stop().animate({'background-position':o.offShift},o.animSpeed); // off
						$(this).prev().removeAttr('checked');
					}
					else
					{    
						document.getElementById("arr1").style.display="block";
					    document.getElementById("enn1").style.display="none";
					    
						$(this).stop().animate({'background-position':o.onShift},o.animSpeed); // on
						if($(this).prev().is(':radio')) $('input[name="'+radioGroupName+'"]'+':checked').removeAttr('checked');
						$(this).prev('input').attr('checked','checked');
					}
				}).hover(function(){
						$(this).stop().animate({'background-position': $(this).prev().is(':checked') ? o.peekOff : o.peekOn},o.hoverSpeed);
					},function(){
						$(this).stop().animate({'background-position': $(this).prev().is(':checked') ? o.onShift :o.offShift},o.hoverSpeed);
				});
				$(this).next('span.switch').css({'background-position': $(this).is(':checked') ? o.onShift : o.offShift }); // setup default states

				$('input + span').live("click", function() { return false; });

				$(this).change(function(){
					radioGroupName = $(this).attr('name'); 
					if($(this).is(':radio'))
					{
						$(this).stop().animate({'background-position':o.onShift},o.animSpeed);
						$('input[name="'+radioGroupName+'"]'+' + span').stop().animate({'background-position':o.offShift},o.animSpeed);
					}
					$(this).next('span').stop().animate({'background-position': $(this).is(':checked') ? o.onShift :o.offShift},o.animSpeed);
				});
  			});
    	}
	});
})(jQuery);
