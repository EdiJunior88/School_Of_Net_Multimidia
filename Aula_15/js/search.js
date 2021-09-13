function search() {
  var search = document.getElementById('search').value;
  
  if(search == '') {
    document.getElementById('search').style.display = 'none';
  }
  else {
    document.getElementById('iframeId').style.display = 'inline-block';
  }

  var url = 'http://www.youtube.com/embed?list=search&list=';
  document.getElementById('iframeId').src = url + search;
}