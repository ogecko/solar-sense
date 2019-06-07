# solar-sense
Integrated Home Automation for sun blinds, louvers and shutters. 

This module is a sample flow for Node-Red running on a Raspberry Pi Zero W to control a sun blind. 
The control system includes the following features:

* Checks weather forecast and closes the blind if > 3% chance of rain
* Automatically aligns the sun blind with the angle of the sun every 30 minutes
* Automatically closes the sun blind at sunset
* Automatically opens the sun blind at sunrise
* Allows for manual override to a certain position
* Can be driven from universal IR remote control
* Also it can optionally calculate and allow reflected light
    * to bounce off the blind surface to a spot in the room
    * to come in vertically from the sky when the when the sun is too low on the horizon
