json.extract! loan, :id, :loaner_id, :loanee_id, :amount, :status, :created_at, :updated_at
json.url loan_url(loan, format: :json)
