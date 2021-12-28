//requiremants
const {Telegraf, session, Stage, Scenes} = require('telegraf');

const __BOT_TOKEN = '5031568168:AAFYilY9GxfKO4smkXKU2iaxvvT4MxzE-5A';

const bot = new Telegraf(__BOT_TOKEN);
const stage = new Scenes.Stage([require('./src/Scenes/Creation/creationMenu.scene')]);

bot.use(session());
bot.use(stage.middleware());
// bot.use(require('./src/Composers/start.composer'));

bot.command('enter', async (ctx) => {
    ctx.scene.enter('creationMenu');
});

bot.launch();

module.exports = bot;