class QuotesController < ApplicationController
  def index
    @quote = Quote.all.sample
    if author_or_quote_present?
      @quote = Quote.where("id != ?", params[:quote_id]).where("author_id != ?", params[:author_id]).sample
    end

    respond_to do |format|
      format.html
      format.json { render json: [@quote, @quote.author] }
    end
  end

  private
  def author_or_quote_present?
    return true if params[:author_id].present? || params[:quote_id].present?
  end
end