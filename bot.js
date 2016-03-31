var HTTPS = require('https');
var cool = require('cool-ascii-faces');

var botID = process.env.BOT_ID;

function respond() {
  var request = JSON.parse(this.req.chunks[0]),
      botRegexmfl = /^\/mflpa/;  botRegexDL = /^\/DDL/i; botRegexSalt = /^\/salt/; botRegexRules = /^\/rules/
      botRegexAd=/^\/advance/; botRegexGTA = /^\/gta/; botRegexsdl = /^\/sdl/i; botODB = /(.*\s+)(.*odb)(\s+.*)/i; botDuck = /^\/duck/;
      botRegexP = /^\/PDL/i;  botRegexTw = /^\/twitch/i; botRegexporp = /^\/purpose/; botRegexSh = /^\/shrug/; botRegexWk = /^\/users/; botRegextrades = /^\/trades/; botRegexFats = /^\/404/; botRegexWAT = /^\/wat/;
      botRegexPurp = /^\/porpoise/; botRegexProp = /^\/propose/; botRegexDDL = /^\/ddl/i;
      botRegexSiege = /^\/siege/
      siege1 = 'https://i.groupme.com/350x419.png.adc8c73a6c1547e0a9e04320296329f8'; siege2 = 'https://i.groupme.com/1279x752.jpeg.aa5d0401e0df495bba4b4e09dc5a6bd7'
      siege3 = 'https://i.groupme.com/960x960.png.006e180e05d841c6a2962e844bf1e6fd';
  var teamAb = ["NE","NO","ARI","PHI","CLE","TEN","OAK","DAL","IND","SEA","CIN","PIT","JAC"
                ,"BAL","SD","DEN","MIN","ATL","KC","NYG","GB","DET","HOU","STL","CHI","CAR",
                "MIA","BUF","SF","WAS","NYJ","TB"]
  if(request.text && botRegexmfl.test(request.text)) {
    this.res.writeHead(200);
    postMessage("https://daddyleagues.com/MFLPA");
    this.res.end();
  } 
  else if(request.text && botRegexDL.test(request.text)) {
    this.res.writeHead(200);
    postMessage("https://daddyleagues.com/MFLPA");
    this.res.end();
  } 
  else if(request.text && botRegexSalt.test(request.text)) {
    this.res.writeHead(200);
    postMessage("https://i.imgur.com/B5BSVqH.png");
    this.res.end();
  } 
  else if(request.text && botRegexAd.test(request.text)) {
    this.res.writeHead(200);
    postMessage("http://www.hackcollege.com/wp-content/uploads/2013/02/kno_advance.jpg");
    this.res.end();
  }
  else if(request.text && botRegexRules.test(request.text)) {
    this.res.writeHead(200);
    postMessage("http://daddyleagues.com/MFLPA/rules");
    this.res.end();
  } 
  else if(request.text && botRegexGTA.test(request.text)) {
    this.res.writeHead(200);
    postMessage("https://i.groupme.com/220x147.jpeg.a2dd2add32b14fff9e329535186d793c.large");
    this.res.end();
  } 
  else if(request.text && botRegexsdl.test(request.text)) {
    this.res.writeHead(200);
    postMessage("http://daddyleagues.com/MFLPA/team/"+request.text.substring(5,8)+"/schedule");
    this.res.end();
  }
  else if(request.text && botRegexP.test(request.text)) {
    this.res.writeHead(200);
    var req = request.text.substring(5,request.text.length);
    var rep = req.replace(/ /,"+");
    postMessage("http://daddyleagues.com/MFLPA/players?name="+rep+"&position=all&team=all");
    this.res.end();
  }  

  else if(request.text && botRegexTw.test(request.text)) {
    this.res.writeHead(200);
    postMessage("http://www.twitch.tv/"+request.text.substring(8,request.text.length));
    this.res.end();
  } 
  else if(request.text && botRegexporp.test(request.text)) {
    this.res.writeHead(200);
    postMessage("http://assets.worldwildlife.org/photos/7505/images/story_full_width/Wang_Xiaoqiang_(IHB).jpg?1412017255");
    this.res.end();
  } 
  else if(request.text && botRegexSh.test(request.text)) {
    this.res.writeHead(200);
    postMessage("¯\\_(ツ)_/¯");
    this.res.end();
  } 
  else if(request.text && botRegexWk.test(request.text)) {
    this.res.writeHead(200);
    postMessage("https://docs.google.com/spreadsheets/d/1kJqQWCq3RKiTrd4f71FFNKr-Y0ppJzjk0fSF0rP6Bto/edit?usp=sharing");
    this.res.end();
  } 
  else if(request.text && botODB.test(request.text)) {
    this.res.writeHead(200);
    postMessage("OBJ*");
    this.res.end();
  } 
  else if(request.text && botDuck.test(request.text)) {
    this.res.writeHead(200);
    postMessage("http://media3.giphy.com/media/YCseTHF2I6CCA/giphy.gif");
    this.res.end();
  }
  else if(request.text && botRegextrades.test(request.text)) {
    this.res.writeHead(200);
    postMessage("http://bit.ly/1ZKz98I");
    this.res.end();
  }
  else if(request.text && botRegexFats.test(request.text)) {
    this.res.writeHead(200);
    postMessage("https://media.giphy.com/media/YyKPbc5OOTSQE/giphy.gif");
    this.res.end();
  }
    else if(request.text && botRegexWAT.test(request.text)) {
    this.res.writeHead(200);
    postMessage("http://i.imgur.com/AxtzziK.gif");
    this.res.end();
  }
  else if(request.text && botRegexPurp.test(request.text)) {
    this.res.writeHead(200);
    postMessage("http://engaged.robbinsbrothers.com/wp-content/uploads/2014/01/propose-live-on-tv.jpeg");
    this.res.end();
  }
  else if(request.text && botRegexProp.test(request.text)) {
    this.res.writeHead(200);
    postMessage("https://media-mediatemple.netdna-ssl.com/wp-content/uploads/2014/05/00_closed-large.png");
    this.res.end();
  } 
  else if(request.text && botRegexDDL.test(request.text)) {
    this.res.writeHead(200);
    postMessage("http://daddyleagues.com/MFLPA/team/"+request.text.substring(5,8)+"/depthchart");
    this.res.end();  
  }
  else if(request.text && botRegexSiege.test(request.text)) {
    this.res.writeHead(200);
    if(0.6 >= Math.random() > 0.3)
      postMessage(siege1);
    else if(Math.random() >0.6)
      postMessage(siege3)
    else
      postMessage(siege2);
    this.res.end();
  }
  
  else {
    console.log("don't care");
    this.res.writeHead(200);
    this.res.end();
  }
}

function postMessage(response) {
  var botResponse,options, body, botReq;

  botResponse = response

  options = {
    hostname: 'api.groupme.com',
    path: '/v3/bots/post',
    method: 'POST'
  };

  body = {
    "bot_id" : botID,
    "text" : botResponse
  };

  console.log('sending ' + botResponse + ' to ' + botID);

  botReq = HTTPS.request(options, function(res) {
      if(res.statusCode == 202) {
        //neat
      } else {
        console.log('rejecting bad status code ' + res.statusCode);
      }
  });

  botReq.on('error', function(err) {
    console.log('error posting message '  + JSON.stringify(err));
  });
  botReq.on('timeout', function(err) {
    console.log('timeout posting message '  + JSON.stringify(err));
  });
  botReq.end(JSON.stringify(body));
}

function getRandomInt(min, max) {
  return Math.floor(Math.random() * (max - min)) + min;
}


exports.respond = respond;
