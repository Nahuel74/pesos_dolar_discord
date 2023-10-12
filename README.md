## Instructions

1. **Create a Discord Application and Bot**: Follow the steps outlined [here](https://discordjs.guide/preparations/setting-up-a-bot-application.html#creating-your-bot).

2. **Create a `.env` file in the main folder with the following contents**:

    ```
    DISCORD_API_KEY = "your_api_key"
    CLIENT_ID = "your_client_id"
    GUILD_ID = "your_guild_id"
    CHANNEL_ID = "main_channel_id"
    ```

3. Run the following commands in your terminal:

   - Install npm dependencies: `npm install`

   - Start the Discord bot: `node server/discord_commands.js`

   - Start your application: `npm start`
