class BdaysController < ApplicationController
  require 'date'

  def new
    @bday = Bday.new
  end

  def index
    @bday = Bday.all
  end

  def create
    @bday = Bday.new(bday_params)
    if @bday.save
      redirect_to bday_path(@bday)
    else
      render :new
    end
  end


  def show
    
      @today = Date.today
      @bday = Bday.find(params[:id])
      calculate_next_bday(@bday.birth_date)
      calculate_days_till_birthday(@updated_bday)

  end

  private

  def bday_params
    params.require(:bday).permit(:name, :birth_date)
  end

  def calculate_next_bday(input)
    bday_show = Date.new(Date.today.year, input.month, input.day)
    if Date.today >= bday_show
      updated_year = bday_show.year + 1
    else updated_year = bday_show.year
    end
    @updated_bday = Date.new(updated_year, input.month, input.day )
  end

  def calculate_days_till_birthday(upbday)
    @days_untill_birthday = (upbday - Date.today).to_i
  end

end