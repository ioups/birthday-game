class Bday < ApplicationRecord
    validates :name, presence: true
    validates :birth_date, presence: true
end
