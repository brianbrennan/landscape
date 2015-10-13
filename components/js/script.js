function Landscape(time){
	if(time >= 4 && time < 10){
		this.color = "pink";
	} else if(time >= 10 && time < 14){
		this.color = "aqua";
	} else if(time >= 14 && time < 18){
		this.color = "orange";
	} else if(time >= 18 && time < 24){
		this.color = 'black';
	} else if(time == 24 || time < 4){
		this.color = 'purple';
	}
}


//Get Time in Hours
S.ready(function(){
	var date = new Date();

	var hours = date.getHours();

	var landscape = new Landscape(hours);

	var skroll = skrollr.init();

});