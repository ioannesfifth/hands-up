if [ $# -eq 0 ]; then
    echo "No parameters supplied?"
    exit
fi

./scripts/$1.sh "$@"