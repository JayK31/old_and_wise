class QuotesController < ApplicationController
  def index
    @quote = Quote.all.sample

    respond_to do |format|
      format.html
      format.json { render json: [@quote, @quote.author] }
    end
  end
end