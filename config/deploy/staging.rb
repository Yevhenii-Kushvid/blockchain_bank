# Default branch is :master
set :stage, :staging

ask :branch, 'master'
set :user, 'blockchain_bank'

set :application, 'blockchain_bank_app'
set :deploy_to, '/home/blockchain_bank/blockchain_bank_app'

# RVM-specific config
set :rails_env, :production
set :branch, 'master'

set :rvm1_ruby_version, '2.3@blockchain_bank'

server 'server.sloboda-studio.com',
       user: 'blockchain_bank',
       port: 3333,
       roles: %w(web app db)