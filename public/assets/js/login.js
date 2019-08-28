(function($){
  var veri = '';

    console.log('ready');
  $.ready(()=>{
    $.get('/api/veri/new')
      .done((data) => {
        veri = data;
        $.cookie('verification', 'veri', {expire: 1});
        console.log(veri);
      })
  });
  
})(jQuery);