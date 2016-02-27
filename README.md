# digitalwave

We are the next generation of doing "The Wave". Users are

Ideal Use Case:
1. Customers enter in their Seat Number
1. Customers point their phones to the Jumbotron
2. The jumbotron displays a zebra like pattern on the side bands of the app.
3. Phones will then respond to the pattern to display their color.

## Client:

### Target:
Our MVP targets only Google Chrome for Android devices for now. Since that's what we got for now

1. The client has access to the user's camera and get the information from the Camera.
2. The browser processes the image and figures out a color. 
3. The client renders a color that covers the entire screen

## Server:
The Server broadcasts via socket.io to different devices to connect information.
Users will connect via socket.io to enter in their seat number
Server will tell users their color.


