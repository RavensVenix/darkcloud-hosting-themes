#!/bin/sh

echo "DarkCloud - Hosting Theme Installer"
sleep 1
echo "Welcome :)"
echo "Let's Go!!"
sleep 1

if [ ! -f "artisan" ]; then
    echo "Could not find the Artisan file, Moving to Default Location."
    cd /var/www/pterodactyl
fi

if [ ! -f "artisan" ]; then
    echo "We tried to find your Artisan file but we couldnt, Please move to the directory you installed the Panel and re-run this script. Have a Good Day!"
    cd /var/www/pterodactyl
    else

    echo "Your Artisan File has been found!"
    sleep 2

    echo "Checking you have ZIP Installed"
    yum install zip -y 2> /dev/null
    apt install zip -y 2> /dev/null
    sleep 2
	
    echo "Backing up previous panel files in the case that something goes wrong!"
    zip -r PterodactylBackup-$(date +"%Y-%m-%d").zip /var/www/pterodactyl 2> /dev/null
	
	echo "Removing DarkCloud Folder ( If Exists )"
	rm -rf tempdown/darkcloud
	echo "DarkCloud Folder Has Been Deleted!"
	sleep 2

    echo "Downloading DarkCloud - Hosting Theme"
    mkdir -p tempdown && cd tempdown && git clone https://github.com/RavensVenix/darkcloud-hosting-themes.git darkcloud && cd darkcloud
    cp -r * /var/www/pterodactyl
    
    echo "Files have been copied over!"
    sleep 2

    echo "Removing the temp folders created in the copy process"
    cd /var/www/pterodactyl && rm -rf tempdown
	echo "DarkCloud Folder Has Been Deleted!"

    echo "Complete! Have a good day and dont forget to refresh your browser cache! (CTRL + F5)"
    echo "DarkCloud - Hosting 2023"
	sleep 2
fi
