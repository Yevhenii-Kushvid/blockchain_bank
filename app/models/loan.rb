class Loan < ApplicationRecord
  belongs_to :loaner
  belongs_to :loanee
end
