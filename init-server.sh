#! /usr/bin/bash

: '
 Author: Nikhil Mohite
 GitHub: https://www.github.com/nkilm
 Date  : 30-07-2022
 Description: Bash script to start server
'

unameOut="$(uname -s)"
case "${unameOut}" in
MINGW*)
    cd "./backend-flask/" || return
    echo "Current Path: $(pwd)"
    pip install virtualenv
    virtualenv env
    .\\env\\Scripts\\activate
    pip install -r .\\requirements.txt
    sleep 0.5
    clear
    echo "Starting server on PORT 6060"
    python main.py
    ;;
*)
    echo 'Sorry, this Script is configured to run only on Windows Machines.'
    ;;
esac
