class HotelsController < ApplicationController

  def index
    @selections = Selection.order("id ASC")
  end

  def show
    @hotel = Hotel.includes([:reviews, :rooms, :photos]). find(params[:id])
    @photos = @hotel.photos
    respond_to do |format|
      format.html
      format.json
    end
  end

  def service
    @hotels = Hotel.order("id DESC")
  end

  def brandstory
  end

end
