if [ $# -gt 1 ]; then
    if [ $2 = '-f' ]; then
        ./scripts/nuke.sh
    elif [ $2 = '-b' ]; then
        ./scripts/build.sh
    fi
fi


docker run --name hands-up --detach -p 80:3000 ioannesfifth/hands-up