const {Telegraf, Composer, session, Stage, Scenes, Markup} = require('telegraf');

const creationScene = new Scenes.BaseScene('selectionScene');

creationScene.enter((ctx) => {
    ctx.reply('Enter a creating element:');
});

creationScene.hears('text', (ctx) => {
    // ctx.scene.enter();
    ctx.reply('Entering in textWizardScene');
});

creationScene.hears('text+inline+image', (ctx) => {

});

creationScene.hears('text+keyboard+image', (ctx) => {

});

creationScene.hears('text+keyboard', (ctx) => {

});

creationScene.hears('text+keyboard+image', (ctx) => {

});

creationScene.hears('text+image', (ctx) => {

});

creationScene.hears('image', (ctx) => {

});

creationScene.hears('image+inline', (ctx) => {

});

creationScene.hears('image+keyboard', (ctx) => {

});

creationScene.hears('imageGroup', (ctx) => {

});

creationScene.hears('video', (ctx) => {

});



creationScene.hears('deleteMessage', (ctx) => {

});

creationScene.hears('editMessage', (ctx) => {

});

creationScene.hears('chatAction', (ctx) => {

});

exports = creationScene;