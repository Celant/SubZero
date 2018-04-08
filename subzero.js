var Discord = require("discord.js");
var _ = require("lodash");

class subZeroModule {
	constructor(bot) {
		this.bot = bot;
		this.commands = bot.commands;
		this.perms = bot.commands.perms;
		this.restrictedRole = "restricted";
		if (this.bot.config.moduleConfigs.subzero && this.bot.config.moduleConfigs.subzero.restrictedRole) {
			this.restrictedRole = this.bot.config.moduleConfigs.subzero.restrictedRole;
		}
	}

	preInit() {

	}

	init() {
		this.registerCommands();
	}

	postInit() {
	
	}

	registerCommands() {
		var self = this;

		self.commands.addCommand({
			trigger: "!accept",
			function: self.acceptCommand,
			permCheck: self.perms.pass
		});
		self.commands.addCommand({
			trigger: "!deny",
			function: self.denyCommand,
			permCheck: self.perms.pass
		});
	}

	acceptCommand(msg) {
		var self = this;

		//if (msg.member.roles.exists('name', self.restrictedRole)) {
		//	msg.member.

	}

	denyCommand(msg) {
		var self = this;

	}
}
module.exports = subZeroModule;
