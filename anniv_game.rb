require 'date'
today = Date.today
puts "******** Welcome to the : is it your Birthday ? game !********"
puts "Today is : #{today.day} #{today.month} #{today.year}"
puts "*****************************************************"

puts "What's your date of birth ? (dd/mm/yy)"

date_imput = gets.chomp
birthday = Date.parse(date_imput)
# p birthday
puts "What's your name ?"

name = gets.chomp
bday = Date.new(Date.today.year, birthday.month, birthday.day)
if Date.today >= bday
    updated_year = bday.year + 1
else updated_year = bday.year
end
updated_bday = Date.new(updated_year, birthday.month, birthday.day )

# p updated_bday
days_untill_birthday = (updated_bday - Date.today).to_i


puts "******** Now your result ********"

if today.day == birthday.day && today.month == birthday.month
    puts "Happy Bithday #{name} !! you are #{today.year - birthday.year} years old, nice !"

else puts " Too bad #{name}, it's not your birthday untill #{days_untill_birthday} days"
end
puts "*****************************************************"

