const {Telegraf, session, Stage, Scenes, Markup} = require('telegraf');
const { Keyboard, Key } = require('telegram-keyboard');

const creationMenu = new Scenes.BaseScene('creationMenu');

creationMenu.enter( async (ctx) => {
    const reqInlineKeyboard = Keyboard.make(
        [
            [Key.callback('Text', 'createText'), Key.callback('Inline', 'createInline'), Key.callback('Keyboard', 'createKeyboard')],
            [Key.callback('Image', 'createImage'), Key.callback('ImageGroup', 'createImageGroup'), Key.callback('Video', 'createVideo')],
            [Key.callback('Back', 'returnBack')]
        ],
        {
            columns: 3
        }
    );

    await ctx.reply('Enter what u want to do:', reqInlineKeyboard.inline());
})

creationMenu.action('Text');

module.exports = creationMenu;