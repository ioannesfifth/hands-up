if [ $1 = '-f' ]; then
    ./stop.sh
    ./remove.sh
fi

docker run --name hands-up --detach -p 80:3000 ioannesfifth/hands-up