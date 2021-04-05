class PagesController < ApplicationController
    require 'date'

    def home
        @today = Date.today
        @today_home = Date.today.strftime("%d  %B  %Y")
        @day = @today.day
        @month = @today.month
        @year = @today.year

    end
end
