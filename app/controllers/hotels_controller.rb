class HotelsController < ApplicationController

  def index
    @selections = Selection.order("id ASC")
  end

  def show
  end

  def service
  end

  def brandstory
  end

end
