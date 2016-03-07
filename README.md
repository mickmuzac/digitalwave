# digitalwave

Digital Wave is a project created during [Hack the Arena](http://hackthearena.co) and is the next generation of "The Wave." Feel free to peruse this README. You may also find more information on this [project's DevPost page](http://devpost.com/software/digital-wave).

Ideal Workflow:

0. Customers visit site and enter in their section, row, and seat number
0. Customers point the front-facing camera on their phones to the Jumbotron
0. The Jumbotron displays an obvious most vibrant color
0. Phones will then detect the most vibrant color and display it on their screens, creating an orchestra of colors in the arena

## Client:

### Target:
Our MVP only targets Google Chrome and Firefox for Android devices (and technically anything with a camera). Unfortunately, Safari does not support [getUserMedia](https://developer.mozilla.org/en-US/docs/Web/API/MediaDevices/getUserMedia), so it is impossible to interface with the cameras of iOS devices and Macs from the web (using Chrome on those devices may be a possibility).

0. The client has access to the user's camera and get the information from the Camera
0. The browser processes the image and determines the most vibrant color
0. The client renders a color that covers the entire screen

## Server:

### Server to Client

0. After recieving a connection, the Server broadcasts color info via Socket.io to all devices (in the backup case)
0. Users will connect via Socket.io to enter in their seat number
0. Server will tell users their color.

Note that if the best case plan of attack is realized, then the server does nothing more than serve computer vision code to the client. The client and Jumbotron then take full responsibility of Digital Wave. 

### Server to Jumbotron-server
The Server may eventually broadcast video to Jumbotron.

## Jumbotron Subsystem
The Jumbotron expects to read raw video information from the Server.

## Plan of Attack

### Best Case
We interact with the camera via the browser and use basic computer vision to detect a most vibrant color.

### Backup Case
If the best case does not work, it's also possible for the Server to directly broadcast color streams to clients.
