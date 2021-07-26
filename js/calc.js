function calcCost () {
	//$('html,body').scrollTop(0);
	var smNum = document.getElementById("smNum").value;
	var smPrice = document.getElementById("smCost").value;
	var mdNum = document.getElementById("mdNum").value;
	var mdPrice = document.getElementById("mdCost").value;
	var lgNum = document.getElementById("lgNum").value;
	var lgPrice = document.getElementById("lgCost").value;
	var xlNum = document.getElementById("xlNum").value;
	var xlPrice = document.getElementById("xlCost").value;
	var xxlNum = document.getElementById("2xlNum").value;
	var xxlPrice = document.getElementById("2xlCost").value;
	var xxxlNum = document.getElementById("3xlNum").value;
	var xxxlPrice = document.getElementById("3xlCost").value;
	var placements = document.getElementById("placements").value;
	var colorNum = document.getElementById("colorNum").value;
	var additionalScreeningNum = document.getElementById("additionalScreeningNum").value;
	var markup = document.getElementById("markup").value;

	var smLineCost = smNum * smPrice;
	var mdLineCost = mdNum * mdPrice;
	var lgLineCost = lgNum * lgPrice;
	var xlLineCost = xlNum * xlPrice;
	var xxlLineCost = xxlNum * xxlPrice;
	var xxxlLineCost = xxxlNum * xxxlPrice;
	var placementsLineCost = placements * 1.5;
	var colorLineCost = colorNum * 1.5;
	var additionalScreeningLineCost = additionalScreeningNum * 60;
	var sum = 75 + smLineCost + mdLineCost + lgLineCost + xlLineCost + xxlLineCost + xxxlLineCost + placementsLineCost + colorLineCost + additionalScreeningLineCost; 
	var markupLineCost = sum * markup * .01;
	var total = sum + markupLineCost;


	var smLineItem = '<p class="ml-2" >' + smNum + ' SM shirts at $' + smPrice + ' = $' + smLineCost + '</p>';
	var mdLineItem = '<p class="ml-2" >' + mdNum + ' MD shirts at $' + mdPrice + ' = $' + mdLineCost + '</p>';
	var lgLineItem = '<p class="ml-2" >' + lgNum + ' LG shirts at $' + lgPrice + ' = $' + lgLineCost + '</p>';
	var xlLineItem = '<p class="ml-2" >' + xlNum + ' XL shirts at $' + xlPrice + ' = $' + xlLineCost + '</p>';
	var xxlLineItem = '<p class="ml-2" >' + xxlNum + ' 2XL shirts at $' + xxlPrice + ' = $' + xxlLineCost + '</p>';
	var xxxlLineItem = '<p class="ml-2" >' + xxxlNum + ' 3XL shirts at $' + xxxlPrice + ' = $' + xxxlLineCost + '</p>';

	var blankLineItem = '<p class="ml-2" ></p>';
	var initialLineItem = '<p class="ml-2" >Initial Screening Cost: $75</p>';
	var placementsLineItem = '<p class="ml-2" >' +  placements + ' placements at $1.50 per = $' + placements * 1.5 + '</p>';
	var colorLineItem = '<p class="ml-2" >' +  colorNum + ' colors at $1.50 per = $' + colorNum * 1.5 + '</p>';
	var additionalScreeningLineItem = '<p class="ml-2" >' +  additionalScreeningNum + ' additional screenings at $60 per = $' + additionalScreeningNum * 60 + '</p>';
	var markupLineItem = '<p class="ml-2" >Markup of ' + markup + '% = $' + markupLineCost + '</p>';
	var totalLineItem = '<p class="ml-2" >Total = $' + total + '</p>';

	document.getElementById("cost").innerHTML =  "<textarea>" + smLineItem + mdLineItem + lgLineItem + xlLineItem + xxlLineItem + xxxlLineItem + initialLineItem + placementsLineItem + colorLineItem + additionalScreeningLineItem + markupLineItem + totalLineItem + "</textarea>";

}

