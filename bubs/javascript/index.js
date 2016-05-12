
function images() {
	var img_src = document.getElementById("pics").src;
	var img_prefix = "./images/bubs_";
	var img_file = img_src.split("/");
  var len = img_file[img_file.length-1].length -4;
  var pic = img_file[img_file.length-1].substring(5, len);
	if (pic < 9) {
		img_file = Number(pic) +1;
	} 	else {
		img_file = 1;
	}
	document.getElementById("pics").src = img_prefix + img_file + ".jpg";

};

document.getElementById("pics").addEventListener('click',images);
