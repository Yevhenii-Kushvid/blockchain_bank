Rails.application.routes.draw do
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
  root 'users#index'

  resources :users do
    resources :loans, on: :member do
      post 'open' => 'loans#open', as: 'open'
      post 'close' => 'loans#close', as: 'close'
    end
  end
end
