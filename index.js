const { Client, GatewayIntentBits, EmbedBuilder } = require('discord.js');

const cliente = new Client({
  intents: [
    GatewayIntentBits.Guilds,
    GatewayIntentBits.GuildMembers
  ]
});

cliente.once('ready', () => {
  console.log('Bot encendido correctamente');
});

// 🟢 BIENVENIDA
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

// 🔴 DESPEDIDA
cliente.on('guildMemberRemove', async (miembro) => {

  const canal = miembro.guild.channels.cache.find(
    ch => ch.name === "bienvenida"
  );

  if (!canal) return;

  const despedida = new EmbedBuilder()
    .setTitle("💔 Se fue un miembro...jaja te ira mejor en el cerro")
    .setDescription(`
${miembro.user.tag} ha salido del servidor...

😢 Esperamos volver a verte algún día.
`)
    .setColor("#5865F2")
    
    // 👇 PON TU IMAGEN AQUÍ
    .setImage("https://i.imgur.com/lJpTE6R.jpeg");

  canal.send({ embeds: [despedida] });

});

// 🔐 LOGIN (SIEMPRE AL FINAL)
cliente.login(process.env.TOKEN);
