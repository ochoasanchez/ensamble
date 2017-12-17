$(document).ready(function () {
	$.ajax({
		url: "https://api.instagram.com/v1/users/3141264057/media/recent/?access_token=3141264057.1677ed0.4f1317ab7e42451ebba58dc8b256ebfa&scope=basic&count=1",
		success: function(response) {
			var u = response;
			var url = u.data[0].images.standard_resolution.url;
			var profilePic = u.data[0].user.profile_picture;
			var link = u.data[0].link;
			$("#ig-post").attr('src',url);
			$("#ig-profile-pic").attr('src',profilePic);
			$("#ig-post-link").attr('src',link);
			$("#ig-post").addClass('ig-post');
			//console.log(u.data[0].images.low_resolution.url);
		}
	});
	/*$.getJSON('https://api.instagram.com/v1/users/3141264057/media/recent/?access_token=3141264057.1677ed0.4f1317ab7e42451ebba58dc8b256ebfa&count=1', function(data) {
		var u = JSON.parse(data);
		console.log(u);
	});*/
});

$(".navbar-toggler").click(function(){
	if ($(".navbar-toggler").attr("aria-expanded") == "false"){
		$("#carousel-caption").addClass("pushed");
	}
	else{
		$("#carousel-caption").removeClass("pushed");
	}
});