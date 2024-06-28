document.addEventListener('keydown', function(event) {
    if (event.shiftKey && event.key === 'S') {
      document.getElementById('search').focus();
      event.preventDefault();
    }
});