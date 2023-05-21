# Notes about Raspberry Pi Configuration

## PM2 used to reliably start node-red
PM2 makes sure it loads when the Pi reboots using the following configuration file.
```
/etc/systemd/system/pm2-pi.service
```

## Node-Red configuration
Node-Red stores the current flow in the following configuration files.
```
/home/pi/.node-red/flows_sunroof.json
/home/pi/.node-red/flows_sunroof_cred.json
```
