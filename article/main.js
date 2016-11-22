(function article() {

	var main = document.getElementById('main');

	var all = document.querySelectorAll(".mini-img img");

  all.forEach(function(current) {

  	current.addEventListener("click", function(){

    main.setAttribute("src", current.src);

     });
  });
})();
