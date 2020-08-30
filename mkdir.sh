#!/bin/bash
uname

numbers='901.32.02'
firstdigit="${numbers:0:1}"

printf 'The first digit is "%s"\n' "$firstdigit"

vum=`npm -v`
vum2="${vum:0:1}"

echo "${vum2}"

if [ "${vum2}" == "55" ]
  then
	echo "You have node installed already!"
    # npx npop

    read -r -p "Do you want to install nPoP now? [y/N] " response
case "$response" in
    [yY][eE][sS]|[yY]) 
    echo installing npop

        ;;
    *)
       echo byeeeeeeeeeee
        ;;
esac

else
    echo "you dont have that thing"

       read -r -p "Do you want to install Node.js via curl? [y/N] " response
case "$response" in
    [yY][eE][sS]|[yY]) 
    curl -o node.msi 'https://nodejs.org/dist/v14.9.0/node-v14.9.0-x64.msi'
    echo donne downloading
    echo see the node installer pop up.
        start node.msi
    read -n 1 -s -r -p "When node is done installing, Press any key to continue"
      npx npop  ;;
    *)
       echo byeeeeeeeeeee
        ;;
esac
fi

$SHELL