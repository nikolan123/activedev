# ActiveDev
A simple opensource script to get the Discord Active Developer badge
Instructions
1. Download the latest version from releases and extract
2. Download the portable NodeJS LTS Version from https://nodejs.org/dist/v18.16.0/node-v18.16.0-win-x64.zip
3. Extract it and move all files to /node/ folder from downloaded release
4. Open discord.dev and go to applications (top left)
5. Press on New Application (top right)
6. Name however you want and agree to terms
7. Go to OAth2>General and set authorization method to In-App Authorization
8. Tick both bot and application.commands and select Administrator, then save changes
9. Go to bot and tick all Privileged Gateway Intents, then save changes
10. Go to OAth2>URL Generator and tick bot and application.commands, then Administrator and copy URL from bottom
11. In Discord make a new serverr and go to server settings>enable community, leave everything to default
12. Send copied link in general chat, click on it and grant everything, select current server
13. In Disord Developer Portal go to Bot>Reset Token, then copy it
14. Run /badge.cmd
15. Enter copied token
16. Back in Discord run /get-badge
17. You should get your badge after 24 hours, however i had to wait double that. Get it from https://discord.com/developers/active-developer
18. Make sure to run /refresh every 30 days, otherwise you will lose your badge
