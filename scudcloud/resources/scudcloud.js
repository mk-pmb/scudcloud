ScudCloud={unloaded:!0,env:{mac_ssb_version:1},hasPreference:function(a){return!1},getPreference:function(a){return!1},setPreference:function(a,b){return!1},canShowHtmlNotifications:function(){return!1},app:{getModifierKeys:function(){}},call:function(a,b){switch(ScudCloud.log(a,b),a){case"reload":return ScudCloud.reload();case"didStartLoading":return ScudCloud.didStartLoading();case"didFinishLoading":return ScudCloud.didFinishLoading();case"setConnectionStatus":return ScudCloud.setConnectionStatus(b);case"notify":return ScudCloud.notify(b);case"setBadgeCount":return ScudCloud.setBadgeCount(b);case"displayTeam":return ScudCloud.displayTeam(b);case"signInTeam":return ScudCloud.signInTeam()}return!1},reload:function(){window.location.reload()},didStartLoading:function(){},didFinishLoading:function(){TS.ui.banner.close(),ScudCloud.populate(),ScudCloud.unloaded=!1},setConnectionStatus:function(a){switch(a){case"online":desktop.enableMenus(!0);break;default:desktop.enableMenus(!1)}},notify:function(a){desktop.sendMessage(a.title,a.content)},setBadgeCount:function(a){desktop.count(a.all_unread_highlights_cnt,a.all_unread_cnt)},signInTeam:function(){desktop.addTeam()},displayTeam:function(a){},log:function(a,b){try{"object"==typeof b&&(b=JSON.stringify(b))}catch(a){b=""}console.log("ScudCloud."+a+", args: "+b)},populate:function(){setTimeout(function(){desktop.populate(JSON.stringify({channels:ScudCloud.listChannels(),teams:ScudCloud.listTeams(),icon:TS.model.team.icon.image_44}))},500)},createSnippet:function(){return TS.ui.snippet_dialog.start()},listChannels:function(){var a=TS.channels.getUnarchivedChannelsForUser();return a.push(TS.channels.getChannelById(TS.model.active_channel_id)),a},listTeams:function(){var a={id:TS.boot_data.user_id,team_color:null,team_icon:TS.model.team.icon,team_id:TS.model.team.id,team_name:TS.model.team.name,team_url:"https://"+TS.model.team.domain+".slack.com/"},b=[a];for(var c in TS.boot_data.other_accounts)b.push(TS.boot_data.other_accounts[c]);return b},quicklist:function(){desktop.quicklist(ScudCloud.listChannels())},join:function(a){return TS.channels.join(a)},setClipboard:function(a){TS.client.ui.file_pasted_sig.dispatch(a,TS.model.shift_key_pressed)},sendTickle:function(){return TS.ms.sendTickle()},preferences:function(){return TS.ui.prefs_dialog.start()},addTeam:function(){document.location=TS.boot_data.signin_url},getCurrentTeam:function(){return TS.boot_data.user_id?TS.boot_data.user_id:""},logout:function(){document.location=TS.boot_data.logout_url},help:function(){return TS.help_dialog.start()}},document.onpaste=function(a){desktop.pasted(!1)},$("body").delegate('a[href="/files/create/space"]',"click",function(){desktop.open(TS.boot_data.team_url+"files/create/space")}),$("body").delegate("#client-ui","DOMNodeInserted",function(){var a=$(".member_preview_link.member_image.thumb_512");if(a.length>0){var b=a.attr("style");-1==b.indexOf("-webkit-linear-gradient")&&a.attr("style",b.replace("linear-gradient","-webkit-linear-gradient"))}}),$("body").delegate("#channel_calls_button","click",function(){desktop.open(TS.boot_data.team_url+"call/"+TS.model.active_cid)}),window.winssb=TSSSB=ScudCloud,ScudCloud.unloaded&&ScudCloud.didFinishLoading();