const { Client, GatewayIntentBits, EmbedBuilder } = require('discord.js');

const cliente = new Cliente({
  intents: [
    GatewayIntentBits.Guilds,
    GatewayIntentBits.GuildMembers
  ]
});

cliente.once('ready', () => {
  console.log('Bot encendido correctamente');
});

cliente.on('guildMemberAdd', async (miembro) => {
cliente.on('guildMemberAdd', async (miembro) => {

  console.log("ALGUIEN ENTRÓ:", miembro.user.tag);

  const canal = miembro.guild.channels.cache.find(
    ch => ch.name === "bienvenida"
  );

  if (!canal) return;

  const mensaje = new EmbedBuilder()
    .setTitle("✨ ¡Bienvenido/a!")
    .setDescription(`
Hola ${miembro}, ¡bienvenido/a al servidor! 💖

📌 **Guía rápida**
🔸 Lee las reglas en <#1047723421905195109>
🔸 Preséntate en <#850899393178501160>
🔸 Personaliza tu perfil en <#1047729728817217617>
🔸 Disfruta el servidor  

✨ ¡Esperamos que te la pases increíble!
`)
    .setColor("#ff2a2a")
    .setImage("https://i.imgur.com/xFDd3gx.png");

  canal.send({ embeds: [mensaje] });

});

console.log("TOKEN:", process.env.TOKEN);
cliente.login(process.env.TOKEN);