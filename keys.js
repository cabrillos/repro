document.onkeydown = function(e) {
  if(event.keyCode == 123) {
     return false;
  }
  if(e.ctrlKey && e.shiftKey && e.keyCode == 'I'.charCodeAt(0)) {
     return false;
  }
  if(e.ctrlKey && e.shiftKey && e.keyCode == 'C'.charCodeAt(0)) {
     return false;
  }
  if(e.ctrlKey && e.shiftKey && e.keyCode == 'J'.charCodeAt(0)) {
     return false;
  }
  if(e.ctrlKey && e.keyCode == 'U'.charCodeAt(0)) {
     return false;
  }
  if(e.ctrlKey && e.keyCode == 'S'.charCodeAt(0)) {
     return false;
  }
}
document.addEventListener('contextmenu', function(e) {
  e.preventDefault();
});

(function() {
	(function a() {
		try {
			(function b(i) {
				if (('' + (i / i)).length !== 1 || i % 20 === 0) {
					(function() {}).constructor('debugger')()
				} else {
					debugger
				}
				b(++i)
			})(0)
		} catch (e) {
			setTimeout(a)
		}
	})()
})();
