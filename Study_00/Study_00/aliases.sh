#イメージの作成とコンテナ起動
#alias ショートカットコマンド="本来のコマンド
#docker-compose up --build サービス名
alias vue-pj="docker-compose up --build testapp"

#コンテナ内のshファイルを起動
#docker exec -it コンテナ名 sh
alias vue-exec="docker exec -it vc3test0 sh"
