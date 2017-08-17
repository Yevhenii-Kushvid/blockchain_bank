deploy_to  = "/home/blockchain_bank/blockchain_bank_app"
rails_root = "#{deploy_to}/current"

pid_file   = "#{deploy_to}/shared/pids/unicorn.pid"
socket_file= "#{deploy_to}/shared/unicorn.sock"

log_file   = "#{rails_root}/log/unicorn.log"
err_log    = "#{rails_root}/log/unicorn_error.log"

old_pid    = pid_file + '.oldbin'

timeout 600
worker_processes 2
listen socket_file, :backlog => 1024

# Should be 'production' by default, otherwise use other env

pid pid_file

stderr_path err_log
stdout_path log_file

preload_app true

GC.copy_on_write_friendly = true if GC.respond_to?(:copy_on_write_friendly=)

before_exec do |_|
  ENV["BUNDLE_GEMFILE"] = "#{rails_root}/Gemfile"
end

before_fork do |server, _|

  # Перед тем, как создать первый рабочий процесс, мастер отсоединяется от базы.
  defined?(ActiveRecord::Base) and
      ActiveRecord::Base.connection.disconnect!

  if File.exist?(old_pid) && server.pid != old_pid
    Process.kill("QUIT", File.read(old_pid).to_i)
  end
end

after_fork do |_, _|
  defined?(ActiveRecord::Base) and
      ActiveRecord::Base.establish_connection
end
