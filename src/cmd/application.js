const micro = require('../lib/micro');
const application = require('../core/application');

micro.cmd('portal.application.find', async ctx => {
	const filter = {};

	if (ctx.params?.name)
		filter.name = ctx.params.name;
	
	if (ctx.params?.id)
		filter.id = ctx.params.id;

	const applications = await application.find(filter);

	ctx.reply(applications);
});

micro.cmd('portal.application.create', async ctx => {
	if (!ctx.params)
		return ctx.reply(false);

	if (!ctx.params.name)
		return ctx.reply(false);
	
	if (!ctx.params.url)
		return ctx.reply(false);

	try {
		await application.create(ctx.params.name, ctx.params.title, ctx.params.description, ctx.params.url, ctx.params.image, ctx.params.color, ctx.params.role);
		ctx.reply(true);
	} catch(e) {
		console.error(e);
		ctx.reply(false);
	}

});

micro.cmd('portal.application.remove', async ctx => {
	if (!ctx.params)
		return ctx.reply(false);

	if (!ctx.params.name)
		return ctx.reply(false);

	try {
		await application.remove(ctx.params.name);
		ctx.reply(true);
	} catch(e) {
		ctx.reply(false);
	}

});