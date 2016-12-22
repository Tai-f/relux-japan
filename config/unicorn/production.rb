$worker = 2

$timeout = 30

$app_dir = "/var/www/relux-japan/current"

$listen = File.expand_path 'tmp/sockets/unicorn.sock', $app_dir

$pid = File.expand_path 'tmp/pids/unicorn.pid', $app_dir

$std_log = File.expand_path 'log/unicorn.log', $app_dir

worker_processes $worker
working_directory $app_dir
stderr_path $std_log
stdout_path $std_log
timeout $timeout
listen $listen
pid $pid

