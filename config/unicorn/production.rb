$worker = 2

$timeout = 30

$app_dir = "/var/www/relux-japan/current"

$listen = File.expand_path 'tmp/sockets/unicorn.sock', $app_dir
