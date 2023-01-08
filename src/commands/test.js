const { SlashCommandBuilder } = require('discord.js');
const sendData = require("../websocketManager")
const logger = require('../logger')

module.exports = {
    data: new SlashCommandBuilder()
        .setName('test')
        .setDescription('test command hehe')
        .addStringOption(option =>
            option
                .setName('username')
                .setDescription('Username')
                .setRequired(true)),
    async execute(interaction) {
        await sendData("test", interaction.options.getString('username'))
        await interaction.reply("Test :3");
        logger("log", `Ran test command.`)
    },
};