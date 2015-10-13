var colorTimes = [

	{
		"time":"green-time",
		"start":"10",
		"end":"2",
		"colors":{
			"dark":"#266352",
			"mid_dark":"#128061",
			"mid_light":"#53C0A2",
			"light":"#B5F7E6",
			"water":"#51DACF",
			"sun":"#E8FFB1"
		}
	},
	{
		"time":"midday",
		"start":"10",
		"end":"2",
		"colors":{
			"dark":"#152744",
			"mid_dark":"#367591",
			"mid_light":"#61D2B4",
			"light":"#9DFDC7",
			"water":"#F5F093"
		}
	}


]


function Landscape(time){
	if(time >= 4 && time < 10){
		this.colors = colorTimes[0].colors;
	} else if(time >= 10 && time < 14){
		this.colors = colorTimes[0].colors;
	} else if(time >= 14 && time < 18){
		this.colors = colorTimes[0].colors;
	} else if(time >= 18 && time < 24){
		this.colors = colorTimes[0].colors;
	} else if(time == 24 || time < 4){
		this.colors = colorTimes[0].colors;
	}
}




//Get Time in Hours
S.ready(function(){
	var date = new Date();

	var hours = date.getHours();

	var landscape = new Landscape(hours);

	var skroll = skrollr.init();

	s('#backmountains').css('fill',landscape.colors.light);
	s('#mountain2').css('fill',landscape.colors.mid_light);
	s('#mountain1').css('fill',landscape.colors.mid_dark);
	s('#trees polygon').css('fill',landscape.colors.mid_dark);
	s('#foreground').css('fill',landscape.colors.dark);
	s('.content').css('background-color',landscape.colors.dark);
	
	s('.landscape').css('background','-webkit-linear-gradient(' + landscape.colors.water + ',' + landscape.colors.sun + ')');
	s('#forelake').css('fill',landscape.colors.water);
	s('#midlakelake').css('fill',landscape.colors.water);
	s('#backlake_1_').css('fill',landscape.colors.water);

});