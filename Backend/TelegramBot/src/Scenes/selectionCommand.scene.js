const {Telegraf, Composer, Scenes} = require('telegraf');
const {Keyboard, Key} = require('telegram-keyboard');

module.exports = new Scenes.WizardScene('selectionCommand',

    

);


selectionCommandScene.command('creation', async (ctx) => {
    ctx.reply('entered creationMenu');
});
selectionCommandScene.command('manage', async (ctx) => {
    ctx.reply('entered manageMenu');
});