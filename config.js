//#ENJOY
/**

░▒▓█▓▒░░▒▓█▓▒░░▒▓█▓▒░░▒▓██████▓▒░ ░▒▓███████▓▒░▒▓█▓▒░ 
░▒▓█▓▒░░▒▓█▓▒░░▒▓█▓▒░▒▓█▓▒░░▒▓█▓▒░▒▓█▓▒░      ░▒▓█▓▒░ 
░▒▓█▓▒░░▒▓█▓▒░░▒▓█▓▒░▒▓█▓▒░░▒▓█▓▒░▒▓█▓▒░      ░▒▓█▓▒░ 
░▒▓█▓▒░░▒▓█▓▒░░▒▓█▓▒░▒▓████████▓▒░░▒▓██████▓▒░░▒▓█▓▒░ 
░▒▓█▓▒░░▒▓█▓▒░░▒▓█▓▒░▒▓█▓▒░░▒▓█▓▒░      ░▒▓█▓▒░▒▓█▓▒░ 
░▒▓█▓▒░░▒▓█▓▒░░▒▓█▓▒░▒▓█▓▒░░▒▓█▓▒░      ░▒▓█▓▒░▒▓█▓▒░ 
 ░▒▓█████████████▓▒░░▒▓█▓▒░░▒▓█▓▒░▒▓███████▓▒░░▒▓█▓▒░ 
                                                      

**/

const fs = require("fs-extra");
if (fs.existsSync(".env"))
  require("dotenv").config({ path: __dirname + "/.env" });
global.audio = "";
global.video = "";
global.port = process.env.PORT;
global.appUrl = process.env.APP_URL || "";
global.email = "wasixml@gmail.com";
global.location = "Lahore,Pakistan.";
global.mongodb = process.env.MONGODB_URI || "";
global.allowJids = process.env.ALLOW_JID || "94776734030@s.whatsapp.net";
global.blockJids = process.env.BLOCK_JID || "null";
global.DATABASE_URL = process.env.DATABASE_URL || "";
global.timezone = process.env.TZ || process.env.TIME_ZONE || "Asia/Karachi";
global.github = process.env.GITHUB || "https://github.com/Itxxwasi/WASI-MD-V2";
global.gurl = process.env.GURL || "https://whatsapp.com/channel/0029VaDK8ZUDjiOhwFS1cP2j";
global.website = process.env.GURL || "https://whatsapp.com/channel/0029VaDK8ZUDjiOhwFS1cP2j";
global.THUMB_IMAGE = process.env.THUMB_IMAGE || process.env.IMAGE || "https://telegra.ph/file/1f4e6e1cc2ed1662adb36.jpg";
global.devs = "923135673658";
global.sudo = process.env.SUDO || "94776734030";
global.owner = process.env.OWNER_NUMBER || "94776734030";
global.style = process.env.STYLE || "3";
global.gdbye = process.env.GOODBYE || "false";
global.wlcm = process.env.WELCOME || "false";
global.warncount = process.env.WARN_COUNT || 3;
global.disablepm = process.env.DISABLE_PM || "false";
global.disablegroup = process.env.DISABLE_GROUPS || "false",
global.MsgsInLog = process.env.MSGS_IN_LOG || "true";
global.userImages = process.env.USER_IMAGES || "";
global.waPresence = process.env.WAPRESENCE || "recording";
global.readcmds = process.env.READ_COMMAND || "false";
global.readmessage = process.env.READ_MESSAGE || "false";
global.readmessagefrom = process.env.READ_MESSAGE_FROM || "";
global.read_status = process.env.AUTO_READ_STATUS || "true";
global.save_status = process.env.AUTO_SAVE_STATUS || "false";
global.save_status_from = process.env.SAVE_STATUS_FROM || "";
global.read_status_from = process.env.READ_STATUS_FROM || "";
global.autoreaction = process.env.autoreaction || "true";

global.api_smd = "https://api-smd-1.vercel.app";
global.scan = "https://pair-qr-wasi-md.onrender.com";

global.SESSION_ID =
  process.env.SESSION_ID ||
  "eyJub2lzZUtleSI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiQ0NLUG5wT3E1b1JnbjY4UVkyeW9nem5pUVJKcjh4U2E0d2dibnR4V0cyND0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoibVF4ZDhqV0FkVkNXbmdPanA3ZEsva085dHZqN0plN2Uva1FoZCtKelBsMD0ifX0sInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyIjp7InByaXZhdGUiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJtRlp2cEZkUWNLUTJhajZsNngzQlJvdm5VZE1jZk8rWFFIYWVlYm1jRG1NPSJ9LCJwdWJsaWMiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJsRVc4THRZaXVLSStnQmNhZmtnVmtEMStqQVpTQ0lqbjh5U25vS2tJdUUwPSJ9fSwic2lnbmVkSWRlbnRpdHlLZXkiOnsicHJpdmF0ZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IlFBRUdVdGkzK1ZjRjdPUnBsbDdlT3lRZDJrd2MrcnBEbzVPRldCMWRSVWs9In0sInB1YmxpYyI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IlAyRUprb0pnQzZIbVpTZzhUd1NTbnVwZkhIeFJCeUV4QmNtZE5xQUlyVXc9In19LCJzaWduZWRQcmVLZXkiOnsia2V5UGFpciI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoib0dUZDJ3dzduUkFaazJNcWMzcm9tQUROcE03cFhkckN1ZXpaMEE4bzJVWT0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiNExvaTBIc0FLRUwwZnU0Zk9wV0hyVUlKdzEzQ084Y0VReDdyMDlGQjBtTT0ifX0sInNpZ25hdHVyZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6ImRPNW54Mm11ci9pdHVYSDZ4akJMK3NvdFUvMm5lc3VTdVRjS3pzYjZuOG1iUnIvTHhLUzljL0FhV1c3UDgveDVRQXRrKzdIVFhvYUJKdWxCQ0IvTmhBPT0ifSwia2V5SWQiOjF9LCJyZWdpc3RyYXRpb25JZCI6MTQ1LCJhZHZTZWNyZXRLZXkiOiJtTm95NEIyd0FMV0FZRmczK240NVRmaG1qaUhGV1plTUFneHVqSXR4Rm5zPSIsInByb2Nlc3NlZEhpc3RvcnlNZXNzYWdlcyI6W10sIm5leHRQcmVLZXlJZCI6MzEsImZpcnN0VW51cGxvYWRlZFByZUtleUlkIjozMSwiYWNjb3VudFN5bmNDb3VudGVyIjowLCJhY2NvdW50U2V0dGluZ3MiOnsidW5hcmNoaXZlQ2hhdHMiOmZhbHNlfSwiZGV2aWNlSWQiOiI0Rmhnb09HOFJmeVMzb25WWE0zemNnIiwicGhvbmVJZCI6IjY0ZmVmYTNkLTcxOTYtNGMyNy1hNWFhLWRiNmQ2ZGQ2NDIxNiIsImlkZW50aXR5SWQiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJiNlJmNXc1L1pjbXBSY0l0eTZBWFYvQngyNHc9In0sInJlZ2lzdGVyZWQiOnRydWUsImJhY2t1cFRva2VuIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiZlM0YXY5NTgvN3UwTnliT1cwczVETU8wUE9vPSJ9LCJyZWdpc3RyYXRpb24iOnt9LCJwYWlyaW5nQ29kZSI6IjNXSFBLVzNRIiwibWUiOnsiaWQiOiI5NDc3NjczNDAzMDoyMEBzLndoYXRzYXBwLm5ldCIsIm5hbWUiOiLwnZqF8J2ZuPCdmbzwnZmwIPCdmbzwnZm+8J2Zs/CdmoIo8J2ao/Cdmbwg8J2ag/CdmbTwnZmw8J2ZvCkg8J2ajPCdmpjwnZqX8J2anPCdmp0g8J2anPCdmp3wnZqb8J2akvCdmpfwnZqQ8J2anCBcIvCdmofwnZqH8J2ah1wiXiJ9LCJhY2NvdW50Ijp7ImRldGFpbHMiOiJDT2ZPdVA0Q0VQdkd3TFFHR0FNZ0FDZ0EiLCJhY2NvdW50U2lnbmF0dXJlS2V5IjoiZ1llWFQvbHlxN294aHRpYlFzcTNYbDFFM25PQkFkNHBrUmptV0xxNjVYTT0iLCJhY2NvdW50U2lnbmF0dXJlIjoib01EYis3eXFodTFGUVNhL2lYd0p2RzY3LzVjTlhFYUxPSjFYU2JvaTB0YjVxK1JhRnZiMDVXSVU5M3BPTnpLRFJLSk9mMEgweTBOekg0NTNVUmdnQkE9PSIsImRldmljZVNpZ25hdHVyZSI6IldPaUR3ZC9yZkdCYlEwa2JPM0cyaUJVWHlBRGRFRitoWTQzM3BUZUNIRFR5RVRMTVJzTFdtZzk0TTQ4eTRhc3BNZFg2aURhWnhycUMxaXhjMWZwcWlnPT0ifSwic2lnbmFsSWRlbnRpdGllcyI6W3siaWRlbnRpZmllciI6eyJuYW1lIjoiOTQ3NzY3MzQwMzA6MjBAcy53aGF0c2FwcC5uZXQiLCJkZXZpY2VJZCI6MH0sImlkZW50aWZpZXJLZXkiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJCWUdIbDAvNWNxdTZNWWJZbTBMS3QxNWRSTjV6Z1FIZUtaRVk1bGk2dXVWeiJ9fV0sInBsYXRmb3JtIjoic21iYSIsImxhc3RBY2NvdW50U3luY1RpbWVzdGFtcCI6MTcyMDcyMjMxMywibXlBcHBTdGF0ZUtleUlkIjoiQUFBQUFNTDYifQ=="
module.exports = {
  menu: process.env.MENU || "",
  HANDLERS: process.env.PREFIX || ".",
  BRANCH: process.env.BRANCH || "main",
  VERSION: process.env.VERSION || "1.0.0",
  caption: process.env.CAPTION || "𝚅𝙸𝙼𝙰𝙼𝙾𝙳𝚂 𝚆𝙷𝙰𝚃𝚂𝙰𝙿𝙿 𝙱𝙾𝚃",
  author: process.env.PACK_AUTHER || "WASO",
  packname: process.env.PACK_NAME || "♥️",
  botname: process.env.BOT_NAME || "𝚅𝙸𝙼𝙰𝙼𝙾𝙳𝚂𝙼𝙳",
  ownername: process.env.OWNER_NAME || "𝚅𝙸𝙼𝙰",
  errorChat: process.env.ERROR_CHAT || "94776734030",
  KOYEB_API: process.env.KOYEB_API || "false",
  REMOVE_BG_KEY: process.env.REMOVE_BG_KEY || "",
  OPENAI_API_KEY: process.env.OPENAI_API_KEY || "",
  HEROKU_API_KEY: process.env.HEROKU_API_KEY || "",
  HEROKU_APP_NAME: process.env.HEROKU_APP_NAME || "",
  antilink_values: process.env.ANTILINK_VALUES || "chat.whatsapp.com",
  HEROKU: process.env.HEROKU_APP_NAME && process.env.HEROKU_API_KEY,
  aitts_Voice_Id: process.env.AITTS_ID || "37",
  ELEVENLAB_API_KEY: process.env.ELEVENLAB_API_KEY || "",
  WORKTYPE: process.env.WORKTYPE || process.env.MODE || "private",
  AUTOREACTION: process.env.AUTOREACTION || process.env.AUTOREACTION || "true",
  LANG: (process.env.THEME || "𝚅𝙸𝙼𝙰").toUpperCase(),
};
global.rank = "updated";
global.isMongodb = false;
let file = require.resolve(__filename);
fs.watchFile(file, () => {
  fs.unwatchFile(file);
  console.log(`Update'${__filename}'`);
  delete require.cache[file];
  require(file);
});
