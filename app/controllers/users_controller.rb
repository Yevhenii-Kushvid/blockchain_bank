class UsersController < ApplicationController
  def index 
    if User.count == 0
      users = JSON.parse(`node ./contracts/scripts/load_accounts.js`)
      users.each do |address, ballance|
        User.find_or_create_by(address: address, ballance: ballance)
      end
    end

    @users = User.all
  end

  def show
    @user = User.find(params[:id])
    if @user.id == 1
      @loans = Loan.all
      render 'admin'
    else
      @loans = Loan.where(to: @user)
    end
  end
end
