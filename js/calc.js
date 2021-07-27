
	var today = new Date();
	var dd = today.getDate();

	var mm = today.getMonth() + 1; 
	var yyyy = today.getFullYear();
	if(dd<10) 
		{
		    dd='0' + dd;
		} 

	if(mm<10) 
		{
		    mm='0' + mm;
		} 
	today = yyyy + mm + dd;

	const formatter = new Intl.NumberFormat('en-US', {
		  style: 'currency',
		  currency: 'USD',
		  minimumFractionDigits: 2
		})

	var clientName = '';
    var subjectLine = '&subject=' + 'Shirt Quote ' + today;
    var resultsText =  "";
    var body = '&body=' + resultsText;
    var mailtoLink = '<a class="btn btn-dark" target="_blank" href="mailto:?' +  subjectLine + body + '"">Email Results</a>';

function calcCost () {
	//$('html,body').scrollTop(0);
	var smNum = parseInt(document.getElementById("smNum").value);
	var smPrice = document.getElementById("smCost").value;
	var mdNum = parseInt(document.getElementById("mdNum").value);
	var mdPrice = document.getElementById("mdCost").value;
	var lgNum = parseInt(document.getElementById("lgNum").value);
	var lgPrice = document.getElementById("lgCost").value;
	var xlNum = parseInt(document.getElementById("xlNum").value);
	var xlPrice = document.getElementById("xlCost").value;
	var xxlNum = parseInt(document.getElementById("2xlNum").value);
	var xxlPrice = document.getElementById("2xlCost").value;
	var xxxlNum = parseInt(document.getElementById("3xlNum").value);
	var xxxlPrice = document.getElementById("3xlCost").value;
	var customNum = parseInt(document.getElementById("customNum").value);
	var customPrice = document.getElementById("customCost").value;
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
	var customLineCost = customNum * customPrice;
	var shirtNum = customNum + smNum + mdNum + lgNum + xlNum + xxlNum + xxxlNum;
	var placementsLineCost = placements * 1.5 * shirtNum;
	var colorLineCost = colorNum * 1.5 * shirtNum;
	var additionalScreeningLineCost = additionalScreeningNum * 60;
	var sum = 75 + smLineCost + mdLineCost + lgLineCost + xlLineCost + xxlLineCost + xxxlLineCost + customLineCost + placementsLineCost + colorLineCost + additionalScreeningLineCost; 
	var markupLineCost = sum * markup * .01;
	var total = parseInt(sum) + parseInt(markupLineCost);
	var totalFormatted = formatter.format(total);
	var individualShirtCost = total / shirtNum;

	var smLineItem = smNum + ' S shirts at $' + smPrice + ' = ' + formatter.format(smLineCost);
	var mdLineItem = mdNum + ' M shirts at $' + mdPrice + ' = ' + formatter.format(mdLineCost);
	var lgLineItem = lgNum + ' L shirts at $' + lgPrice + ' = ' + formatter.format(lgLineCost);
	var xlLineItem = xlNum + ' XL shirts at $' + xlPrice + ' = ' + formatter.format(xlLineCost);
	var xxlLineItem = xxlNum + ' 2XL shirts at $' + xxlPrice + ' = ' + formatter.format(xxlLineCost);
	var xxxlLineItem = xxxlNum + ' 3XL shirts at $' + xxxlPrice + ' = ' + formatter.format(xxxlLineCost);
	var customLineItem = customNum + ' custom shirts at $' + customPrice + ' = ' + formatter.format(customLineCost);
	var shirtNumLine = 'TOTAL NUMBER OF SHIRTS: ' + shirtNum;

	var blankLineItem = '<p class="ml-2" ></p>';
	var initialLineItem = 'Initial Screening Cost = $75.00';
	var placementsLineItem =  placements + ' placements at $1.50 for ' + shirtNum + ' shirts = ' + formatter.format(placementsLineCost);
	var colorLineItem =  colorNum + ' colors at $1.50 for ' + shirtNum + ' shirts = ' + formatter.format(colorLineCost);
	var additionalScreeningLineItem =  additionalScreeningNum + ' additional screenings at $60 = ' + formatter.format(additionalScreeningLineCost);
	var markupLineItem = 'Markup of ' + markup + '% = ' + formatter.format(markupLineCost);
	var totalLineItem = 'Total = ' + formatter.format(total);
	var individualShirtCostLineItem = 'Individual Cost Per Shirt = ' + formatter.format(individualShirtCost);


	document.getElementById("cost").innerHTML =  smLineItem + '<br>' + mdLineItem + '<br>' + lgLineItem + '<br>' + xlLineItem + '<br>' + xxlLineItem + '<br>' + xxxlLineItem + '<br>' + customLineItem + '<br>' + shirtNumLine + '<br>' + '<br>' + placementsLineItem + '<br>' + '<br>' + colorLineItem + '<br>' + '<br>' + initialLineItem+ '<br>' + '<br>' + additionalScreeningLineItem + '<br>' + '<br>' + markupLineItem + '<br>' + '<br>' + totalLineItem + '<br>' + '<br>' + individualShirtCostLineItem;

	var smLineEmail = smNum + '%20S%20shirts%20at%20$' + smPrice + '%20=%20' + formatter.format(smLineCost);
	var mdLineEmail = mdNum + '%20M%20shirts%20at%20$' + mdPrice + '%20=%20' + formatter.format(mdLineCost);
	var lgLineEmail = lgNum + '%20L%20shirts%20at%20$' + lgPrice + '%20=%20' + formatter.format(lgLineCost);
	var xlLineEmail = xlNum + '%20XL%20shirts%20at%20$' + xlPrice + '%20=%20' + formatter.format(xlLineCost);
	var xxlLineEmail = xxlNum + '%202XL%20shirts%20at%20$' + xxlPrice + '%20=%20' + formatter.format(xxlLineCost);
	var xxxlLineEmail = xxxlNum + '%203XL%20shirts%20at%20$' + xxxlPrice + '%20=%20' + formatter.format(xxxlLineCost);
	var customLineEmail = customNum + '%20custom%20shirts%20at%20$' + customPrice + ' = ' + formatter.format(customLineCost);
	var shirtNumEmail = 'TOTAL%20NUMBER%20OF%20SHIRTS:%20' + shirtNum;
	var initialLineEmail = 'Initial%20Screening%20Cost%20=%20$75.00';
	var placementsLineEmail = placements + '%20placements%20at%20$1.50%20for%20' + shirtNum + '%20shirts%20=%20' + formatter.format(placementsLineCost);
	var colorLineEmail = colorNum + '%20colors%20at%20$1.50%20for%20' + shirtNum + '%20shirts = ' + formatter.format(colorLineCost);
	var additionalScreeningLineEmail = additionalScreeningNum + '%20additional%20screenings%20at%20$60%20=%20' + formatter.format(additionalScreeningLineCost);
	var markupLineEmail = 'Markup%20of%20' + markup + '%25%20=%20' + formatter.format(markupLineCost);
	var totalLineEmail = 'Total%20=%20' + totalFormatted;
	var individualShirtCostLineEmail = 'Individual%20Cost%20Per%20Shirt%20=%20' + formatter.format(individualShirtCost);

	var lineBreak = '%0D';
	clientName = $( "#client" ).text();
	subjectLine = '&subject=' + 'Shirt Quote: ' + clientName + ' ' + today;
	body = '&body=' + smLineEmail + lineBreak + mdLineEmail + lineBreak + lgLineEmail + lineBreak + xlLineEmail + lineBreak + xxlLineEmail + lineBreak + xxxlLineEmail + lineBreak + customLineEmail + lineBreak + shirtNumEmail + lineBreak + lineBreak + placementsLineEmail + lineBreak + lineBreak + colorLineEmail + lineBreak + lineBreak + initialLineEmail+ lineBreak + lineBreak + additionalScreeningLineEmail + lineBreak + lineBreak + markupLineEmail + lineBreak + lineBreak + totalLineEmail + lineBreak + lineBreak + individualShirtCostLineEmail;	
	mailtoLink = '<a class="btn btn-dark" target="_blank" href="mailto:?' +  subjectLine + body + '"">Email Results</a>';

	document.getElementById("emailButton").innerHTML = mailtoLink;

}

function addClientName () {
	var clientName = document.getElementById("clientName").value;
	document.getElementById("clientLabel").innerHTML = 'Client: ';
	document.getElementById("client").innerHTML = clientName;
	document.getElementById("date").innerHTML = '<br>Today: ' + today + '<br>';
	calcCost ();
}





	document.getElementById("emailButton").innerHTML = mailtoLink;

