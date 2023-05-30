document.querySelector('form').addEventListener('submit', function(event) {
    event.preventDefault();
    var videoLink = document.getElementById('video-link').value;
    var videoPlayer = document.getElementById('video-player');
    videoPlayer.innerHTML = '<iframe width="560" height="315" src="' + videoLink + '" frameborder="0" allowfullscreen></iframe>';
  });
  
  // Adicione o código do VLibras abaixo
  