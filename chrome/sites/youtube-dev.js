$(document).ready(function() {
	var pmParam = getUrlParam('proxmate');

	if (pmParam == "active") 
	{
		console.info("dev code");
		var scripts = $("#watch-video script");
		var script = scripts[1]; // Get the second script tag inside the #watch-video element
		var test = $(script).contents()[0].data; // Get the script content (a.k.a the function)
		
		// videoplayback%253F
		var n = test.replace(/videoplayback%253F/g,"videoplayback%253Fproxmate%253Dactive%2526"); // Append our proxmate param so the pac script wil care of it
		console.info(n);
		eval(n);
	} 
	else
	{
		// Load the overlay

		$('<link>').attr('rel','stylesheet')
		  .attr('type','text/css')
		  .attr('href',getUrlFor("elements/overlay.css"))
		  .appendTo('head');

		$.get(getUrlFor("elements/overlay.html"), function(data) {
			console.info(data);
			$("body").append(data);
			$("#pmOverlay").fadeIn("slow");
			$("#pmOverlay").click(function() {
				window.location = window.location + "&proxmate=active";
			});
		});
	}

});