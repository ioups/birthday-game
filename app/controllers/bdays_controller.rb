class BdaysController < ApplicationController
  def new
    @bday = Bday.new
  end

  def index
    @bday = Bday.all
  end

  def create
    @bday = Bday.new(bday_params)
    if @bday.save
      redirect_to root_path
    else
      render :new
    end
  end


  def show
    @bday = Bday.find(params[:id])
  end

  private

  def bday_params
    params.require(:bday).permit(:name, :birth_date)
  end

end