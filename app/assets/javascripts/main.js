$(function() {

  $("#rando-quote-button").click(function(e) {
    e.preventDefault();
    $("#intro").hide();
    var authorId = $("#author").data("authorId");
    var quoteId = $("#quote").data("quoteId");
    $.ajax({
      url: "/quotes?author_id="+authorId+"&quote_id="+quoteId,
      method: "GET",
      dataType: "json",
    }).done(function(data) {
      var quote = data[0].text;
      var quote_id = data[0].id;
      var author = data[1].name;
      var author_id = data[1].id;
      var wiki = data[1].wiki_desc;
      var url = data[1].wiki_url;
      $("#quote").text(quote).data("quoteId", quote_id);
      $("#author").text(author).data("authorId", author_id);
      $("#author-name").text(author);
      $("#wiki").text(wiki.substring(0, 500)+"...");
      $("[data-author='wiki']").attr("href", url).text("wiki/"+author);
      $("#tweet").show().attr("href", "http://twitter.com/home/?status="+quote+" -"+author+"#ancientwitties").
        attr("target", "_blank");
        $("#tweet").attr("data-tooltip", "").attr("title", "Click me!");
        if($("#quote-paragraph").height() >= 300) {
          $.growl.notice({title: "There's More!", message: "Scroll to see the rest of the quote!"})
        }
    });
  });
})