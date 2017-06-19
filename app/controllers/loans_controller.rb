class LoansController < ApplicationController
  def index
    @loans = Loan.all
  end

  def show
    @loan = Loan.find(params[:id])
    $redis.set('contract', @loan.address)
    render plain: `node ./contracts/scripts/get_loan_status.js`
  end

  def new
    @loan = Loan.new
  end

  def create
    @loan = Loan.create(amount: loan_params[:amount], status: 'review', to: params[:user_id].to_i, from: User.first.id)
    redirect_to user_path(params[:user_id])
  end

  def open
    # if user id = 1 create loan in blockchain and change status to open
    loan = Loan.find(params[:loan_id])
    if params[:user_id].to_i == 1 && loan.status == 'review'
      result = `node ./contracts/scripts/create_loan.js "#{User.find(loan.from).address}" "#{User.find(loan.to).address}" "#{loan.amount}"`
      loan.address = $redis.get('contract')
      loan.status = 'open'
      loan.save
    end
    redirect_to user_loan_path(params[:user_id], loan)
  end

  def close
    loan = Loan.find(params[:loan_id])
    $redis.set('contract', loan.address)
    # if user id = 1 close loan in blockchain and change status to close
    if params[:user_id].to_i == 1
      `node ./contracts/scripts/close_loan.js`
      loan.status = 'close'
      loan.save
    end
    redirect_to user_loan_path(params[:user_id], loan)
  end

  private

  def loan_params
    params.require(:loan).permit(:amount, :user_id)
  end
end