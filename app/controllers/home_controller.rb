class HomeController < ApplicationController
  def index
    users = JSON.parse(`node ./contracts/scripts/load_accounts.js`)

    users.each do |address, ballance|
      User.find_or_create_by(address: address, ballance: ballance)
    end

    @users = User.all
  end
end
