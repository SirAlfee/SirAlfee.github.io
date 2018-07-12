#!/bin/bash
#
# Nick
#
# 04/07/17
#
#Changes made Apr, 28, 2017 12:59:00 Fixed Yes or No
#USER CHANGE="Nick"
#
#

u="$USER" #saves user name under "u"

read -p "Do You Have Axel? Yes or No:       "  opt
    case $opt in
        yes)
            ;;
        no)
            sudo apt-get install axel
            sudo apt update
            sudo apt dist-upgrade
            ;;

        *) echo invalid option;;
    esac

sleep 5
clear

read -p "Do You Have Figlet? Yes or No:       "  opt
    case $opt in
        yes)
            ;;
        no)
            sudo apt-get install figlet
            sudo apt update
            sudo apt dist-upgrade
            ;;

        *) echo invalid option;;
    esac


sleep 5 #clears

clear

 
mkdir /home/$u/Desktop/wizzard
cd /home/$u/Desktop/wizzard/
axel -s 3000 http://deepthought.wtahs.com/~moynni20/system.sh
cd /home/$u/Desktop/
axel -s 3000 http://deepthought.wtahs.com/~moynni20/reset.sh
cd
figlet Game and Hardware
cd Desktop
chmod 777 install.sh #changes file permissions
chmod 777 wizzard
cd /home/$u/Desktop/wizzard/
chmod 777 system.sh
cd 
PS3='Please enter your choice: '
options=("Sytstem Finder" "Game And Hardware" "Reset" "Quit")
select opt in "${options[@]}"
do
    case $opt in
        "Sytstem Finder")
            echo "Hacking"
            cd Desktop
            ./wizzard/system.sh
            ;;
        "Game And Hardware")
            echo "link"
            google-chrome http://deepthought.wtahs.com/~moynni20/GT/Home/index.html #open the browser and goes to the html so you dont have to click it
            sleep 3
            exit
            ;;
        "Reset")
	    cd
            cd Desktop 
            echo "Deleting Files"
            chmod 775 reset.sh
            ./reset.sh
            notify-send "Restarting"
            sleep 10
	    ./install.sh
            ;;
        "Quit")
            notify-send "Deleting Files"
            cd /home/$USER/Desktop
            ./reset.sh
            sleep 10
            exit
            ;;
        *) echo invalid option;;
    esac
done
