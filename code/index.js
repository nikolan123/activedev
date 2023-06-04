console.log("Logging in...");

const { token } = require('./token.json');
const { Client, Events, GatewayIntentBits, slashCommandBuilder, SlashCommandBuilder } = require('discord.js');

const client = new Client({ intents: [GatewayIntentBits.Guilds] });

client.once(Events.ClientReady, c => {
    console.log(`Logged in as ${c.user.tag}`);
    console.log('Listening for commands...')

    const getbadge = new SlashCommandBuilder()
        .setName('get-badge')
        .setDescription('Gives you the Active Developer Badge! Run only once.');

    const refresh = new SlashCommandBuilder()
        .setName('refresh')
        .setDescription('Refreshes your Active Developer Badge! Run every 30 days.');

    client.application.commands.create(getbadge);
    client.application.commands.create(refresh);
});

client.on(Events.InteractionCreate, interaction => {
    if(!interaction.isChatInputCommand()) return;
    if(interaction.commandName === "get-badge"){
        interaction.reply(`${interaction.user.username} just ran /get-badge. Next step is to go to https://discord.com/developers/active-developer/ to claim your badge. According to Discord you need to wait 24 hours so it shows you're eligible but i had to wait more that 48 so be patient, there's nothing you can do to speed up the process.`);
        console.log(`${interaction.user.username} just ran /get-badge. Next step is to go to https://discord.com/developers/active-developer/ to claim your badge. According to Discord you need to wait 24 hours so it shows you're eligible but i had to wait more that 48 so be patient, there's nothing you can do to speed up the process.`);
    }

    if(interaction.commandName === "refresh"){
        interaction.reply(`${interaction.user.username} just ran /refresh. Make sure to run it every 30 days, otherwise you will lose your badge!`);
        console.log(`${interaction.user.username} just ran /refresh. Make sure to run it every 30 days, otherwise you will lose your badge!`);
    }

});

client.login(token);