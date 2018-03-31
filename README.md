# Sensor Master Server

This is a small server to store sensor data.

# Requirements on the program

Start server without db preexisting
Start server with existing db (dont need to check consistency)


API to....
- Dump all data
- Record one new row
- Supply Schema for new data
- provide schema if trying to post malformed data (validate input!s)
- whitelist endpoints
- whitelist http methods

# Dev & Test

At this moment I only do end-to-end tests using powershell after spinning up the server.
They are kept in `e2eTest.ps1`

I have put some good-to-have stuff in the "utils" folder for the time being. They might be nice to have when developing. Not used in actual production.

Hosting is on azure. Deploy via git to get it all up and running! Contect me for info.
