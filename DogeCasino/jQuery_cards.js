$(document).ready(function(){

	function getDeck()
	{
		var suits = [" ♥ ", " ♦ ", " ♠ ", " ♣ "];
		var values = ["A", "2", "3", "4", "5", "6", "7", "8", "9", "10", "J", "Q", "K"];
		var deck = new Array();
		for(var i = 0; i < suits.length; i++)
		{
			for(var x = 0; x < values.length; x++)
			{
				var card = {Value: values[x], Suit: suits[i]};
				deck.push(card);
			}
		}
		return deck;
		
	}
	console.log(getDeck())
	
	function shuffle()
	{
		var deck = getDeck();
		// for 1000 turns
		// switch the values of two random cards
		for (var i = 0; i < 1000; i++)
		{
			var location1 = Math.floor((Math.random() * deck.length));
			var location2 = Math.floor((Math.random() * deck.length));
			var tmp = deck[location1];
			
			deck[location1] = deck[location2];
			deck[location2] = tmp;
		}
		return deck;
	}
	console.log(shuffle())
	
	// var players = new Array();
	function createPlayers(num)
	{
		var players = [];
		for(var i = 1; i <= num; i++)
		{
			var hand = [];
			var player = { Name: 'Player ' + i, ID: i, Points: 0, Hand: hand };
			players.push(player);
		}
		return players;
	}
	console.log(createPlayers(2))
	
	var players=document.creatElement("div");
	players.id="players"
	
	function createPlayersUI()
	{
		console.log(players)
		document.getElementById('players').innerHTML = '';
		for(var i = 0; i < players.length; i++)
		{
			var div_player = document.createElement('div');
			var div_playerid = document.createElement('div');
			var div_hand = document.createElement('div');
			var div_points = document.createElement('div');
			
			div_points.className = 'points';
			div_points.id = 'points_' + i;
			div_player.id = 'player_' + i;
			div_player.className = 'player';
			div_hand.id = 'hand_' + i;
			
			div_playerid.innerHTML = players[i].ID;
			div_player.appendChild(div_playerid);
			div_player.appendChild(div_hand);
			div_player.appendChild(div_points);
			document.getElementById('players').appendChild(div_player);
		}
	}
	// createPlayersUI()
	
	function startblackjack()
	{
		document.getElementById('btnStart').innerHTML = 'Restart';
		document.getElementById("status").style.display="none";
		// deal 2 cards to every player object
		var currentPlayer = 0;
		shuffle();
		createPlayers(2);
		createPlayersUI();
		dealHands();
		// var element=document.getElementById('player_' + currentPlayer);
		// element.classList.add('active');
	}
	$('#btnStart').click(startblackjack)
	function dealHands()
	{
		// alternate handing cards to each player
		// 2 cards each
		for(var i = 0; i < 2; i++)
		{
			for (var x = 0; x < players.length; x++)
			{
				var card = deck.pop();
				players[x].Hand.push(card);
				renderCard(card, x);
				updatePoints();
			}
		}
		
		// updateDeck();
	}
})