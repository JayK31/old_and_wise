$(function() {
  $("#rando-quote").click(function(e) {
    e.preventDefault();
    $("#intro").hide();
    $.ajax({
      url: "/quotes",
      method: "GET",
      dataType: "json",
    }).done(function(data) {
      var quote = data[0].text;
      var author = data[1].name;
      var wiki = data[1].wiki_desc;
      var url = data[1].wiki_url;
      $("#quote").text(quote);
      $("#author").text(author);
      $("#author-name").text(author);
      $("#wiki").text(wiki.substring(0, 350)+"...");
      $("[data-author='wiki']").attr("href", url).addClass("button small radius");
      $("[data-author='wiki']").text("wiki/"+author);
      $("#tweet").show().attr("href", "http://twitter.com/home/?status="+quote+" -"+author+"#ancientwitties").
        attr("target", "_blank");
    });
  });    
})