const {Composer} = require('telegraf');
const {Keyboard, Key} = require('telegram-keyboard');

const composer = new Composer();

composer.command('start', async (ctx) => {
    const keyboard = Keyboard.make(
        [
            ['text', 'text+inline+image'],
            ['text+keyboard+image', 'text+keyboard'],
            ['text+keyboard+image', 'text+image'],
            ['image', 'image+inline']
        ]
    ).reply();

    await ctx.replyWithHTML('<b>Hello! 😊 Enter pls what u want</b>', keyboard);
});

composer.hears('text', (ctx) => {

    ctx.reply('Entering in CreationWizardScene');
});

composer.on('message', async (ctx) => {
    ctx.replyWithHTML('enter.what.u.want');
});

module.exports = composer;