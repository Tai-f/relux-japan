class SelectionsController < ApplicationController
  def index
    @selections = Selection.order("id ASC")
  end

  def show
    @selections = Selection.order("id ASC")
    @selection = Selection.find(params[:id])
    @hotels = @selection.hotels.order("id ASC")
  end
end
