function calculateSum() {

		// Получаем значение даты рождения
		var username = document.getElementById('username').value;
		var birthdate = document.getElementById('birthdate').value;
		var birthmonth = document.getElementById('birthmonth').value;
		var birthyear = document.getElementById('birthyear').value;

		let pimg = [];
		pimg[0] = '';
		pimg[1] =	'//res2.weblium.site/res/64cb8ed4c14740000f01a652/67166ac02e69e842635e8936';
		pimg[2] =	'//res2.weblium.site/res/64cb8ed4c14740000f01a652/67166abf8472c0c434223d1f';
		pimg[3] =	'//res2.weblium.site/res/64cb8ed4c14740000f01a652/67166ab7fa32f36305f3c9fc';
		pimg[4] =	'//res2.weblium.site/res/64cb8ed4c14740000f01a652/67166ab3a520addf486e9ae9';
		pimg[5] =	'//res2.weblium.site/res/64cb8ed4c14740000f01a652/67166ab02e69e842635e88c9';
		pimg[6] =	'//res2.weblium.site/res/64cb8ed4c14740000f01a652/67166aaea520addf486e9ab7';
		pimg[7] =	'//res2.weblium.site/res/64cb8ed4c14740000f01a652/67166a9dfa32f36305f3c976';
		pimg[8] =	'//res2.weblium.site/res/64cb8ed4c14740000f01a652/67166a9bfa32f36305f3c946';
		pimg[9] =	'//res2.weblium.site/res/64cb8ed4c14740000f01a652/67166a9979127363c5ec325c';
		pimg[10] =	'//res2.weblium.site/res/64cb8ed4c14740000f01a652/67166a9779127363c5ec3246';
		pimg[11] =	'//res2.weblium.site/res/64cb8ed4c14740000f01a652/67166a958472c0c434223c40';
		pimg[12] =	'//res2.weblium.site/res/64cb8ed4c14740000f01a652/67166a7ea520addf486e9987';
		pimg[13] =	'//res2.weblium.site/res/64cb8ed4c14740000f01a652/67166a7c2e69e842635e87bf';
		pimg[14] =	'//res2.weblium.site/res/64cb8ed4c14740000f01a652/67166a7a79127363c5ec31de';
		pimg[15] =	'//res2.weblium.site/res/64cb8ed4c14740000f01a652/67166a78fa32f36305f3c859';
		pimg[16] =	'//res2.weblium.site/res/64cb8ed4c14740000f01a652/67166a77fa32f36305f3c83f';
		pimg[17] =	'//res2.weblium.site/res/64cb8ed4c14740000f01a652/67166a4f79127363c5ec3137';
		pimg[18] =	'//res2.weblium.site/res/64cb8ed4c14740000f01a652/67166a4d2e69e842635e8704';
		pimg[19] =	'//res2.weblium.site/res/64cb8ed4c14740000f01a652/67166a4aa520addf486e989d';
		pimg[20] =	'//res2.weblium.site/res/64cb8ed4c14740000f01a652/67166a488472c0c434223b09';
		pimg[21] =	'//res2.weblium.site/res/64cb8ed4c14740000f01a652/67166a43fa32f36305f3c760';
		pimg[22] =	'//res2.weblium.site/res/64cb8ed4c14740000f01a652/67166a412e69e842635e86ce';

		let cardnames = [];
		cardnames[0] =	'';
		cardnames[1] =	'Маг';
		cardnames[2] =	'Верховная жрица';
		cardnames[3] =	'Императрица';
		cardnames[4] =	'Император';
		cardnames[5] =	'Жрец';
		cardnames[6] =	'Влюблённые';
		cardnames[7] =	'Колесница';
		cardnames[8] =	'Справедливость';
		cardnames[9] =	'Отшельник';
		cardnames[10] =	'Колесо фортуны';
		cardnames[11] =	'Сила';
		cardnames[12] =	'Повешенный';
		cardnames[13] =	'Смерть';
		cardnames[14] =	'Умеренность';
		cardnames[15] =	'Дьявол';
		cardnames[16] =	'Башня';
		cardnames[17] =	'Звезда';
		cardnames[18] =	'Луна';
		cardnames[19] =	'Солнце';
		cardnames[20] =	'Суд';
		cardnames[21] =	'Мир';
		cardnames[22] =	'Шут';

		// ========== AGE
		const today = new Date();
		const birthDate = new Date(birthyear, birthmonth - 1, birthdate);

		let age = today.getFullYear() - birthDate.getFullYear();
		const monthDiff = today.getMonth() - birthDate.getMonth();

		// Если день рождения еще не наступил в этом году
		if (monthDiff < 0 || (monthDiff === 0 && today.getDate() < birthDate.getDate())) {
			age--;
		}


		// =========== CHOOSEN

		// [1] [2] Получаем значения
		result01 = parseInt(birthdate);
		while ( result01 > 22 ) { result01 = result01 - 22 };
		result02 = parseInt(birthmonth);
		while ( result02 > 22 ) { result02 = result02 - 22 };

		// [3]
		var yearsum = 0;
		for (var i = 0; i < birthyear.length; i++) {
			yearsum += parseInt(birthyear[i]);
		}
		result03 = yearsum;
		while ( result03 > 22 ) { result03 = result03 - 22 };

		// [4]
		result04 = result01 + result02
		if ( result04 == 0 ) { result04 = 22 };
		while ( result04 > 22 ) { result04 = result04 - 22 };

		// [5]
		result05 = result02 + result03
		if ( result05 > 22 ) { result05 = result05 - 22 };
		if ( result05 == 0 ) { result05 = 22 };
		while ( result05 > 22 ) { result05 = result05 - 22 };

		// [6]
		result06 = result04 + result05
		if ( result06 == 0 ) { result06 = 22 };
		while ( result06 > 22 ) { result06 = result06 - 22 };

		// [7]
		result07 = result01 + result05
		if ( result07 == 0 ) { result07 = 22 };
		while ( result07 > 22 ) { result07 = result07 - 22 };

		// [8]
		result08 = result02 + result06
		if ( result08 == 0 ) { result08 = 22 };
		while ( result08 > 22 ) { result08 = result08 - 22 };

		// [9]
		result09 = result07 + result08
		if ( result09 == 0 ) { result09 = 22 };
		while ( result09 > 22 ) { result09 = result09 - 22 };

		// [10]
		result10 = result01 + result04 + result06
		if ( result10 == 0 ) { result10 = 22 };
		while ( result10 > 22 ) { result10 = result10 - 22 };

		// [11]
		result11 = result03 + result05 + result06
		if ( result11 == 0 ) { result11 = 22 };
		while ( result11 > 22 ) { result11 = result11 - 22 };

		// [12]
		result12 = result01 + result02 + result03 + result04 + result05 + result06
		if ( result12 == 0 ) { result12 = 22 };
		while ( result12 > 22 ) { result12 = result12 - 22 };


		// ========== KARMA

		// [13]
		result13 = result01 - result02
		if ( result13 < 0 ) { result13 = result13 - result13 - result13 };
		if ( result13 == 0 ) { result13 = 22 };
		while ( result13 > 22 ) { result13 = result13 - 22 };

		// [14]
		result14 = result02 - result03
		if ( result14 < 0 ) { result14 = result14 - result14 - result14 };
		if ( result14 == 0 ) { result14 = 22 };
		while ( result14 > 22 ) { result14 = result14 - 22 };

		// [15]
		result15 = result13 - result14
		if ( result15 < 0 ) { result15 = result15 - result15 - result15 };
		if ( result15 == 0 ) { result15 = 22 };
		while ( result15 > 22 ) { result15 = result15 - 22 };

		// Делаем массив из результатов
		const resultarr = [
			result01, result02, result03, result04, result05,
			result06, result07, result08, result09, result10,
			result11, result12, result13, result14, result15
		];

		// ============= ЯДРО
		const duhmat = [0, 0, 0, 1, 1, 0, 1, 0, 1, 0, 1, 1, 0, 0, 0, 1, 1, 0, 1, 0, 1, 0, 1];
		//yadro = duhmat[result01] +'|'+ duhmat[result02] +'|'+ duhmat[result03] +'|'+ duhmat[result04] +'|'+ duhmat[result05] +'|'+ duhmat[result06];
		yadro = duhmat[result01] + duhmat[result02] + duhmat[result03] + duhmat[result04] + duhmat[result05] + duhmat[result06];
		if ( yadro < 3 ) { ryadro = "духовное"};
		if ( yadro == 3 ) { ryadro = "50/50"};
		if ( yadro > 3 ) { ryadro = "материальное"};

		// ============= ОСИ
		rtvorchestvo	= convertToRoman(result10) + '・' + convertToRoman(result01) + '・' + convertToRoman(result06) + '・' + convertToRoman(result08);
		rprofessia 		= convertToRoman(result12) + '・' + convertToRoman(result02) + '・' + convertToRoman(result05) + '・' + convertToRoman(result09);
		rfinansy	 		= convertToRoman(result07) + '・' + convertToRoman(result04) + '・' + convertToRoman(result03) + '・' + convertToRoman(result11);

		//  ============= ПЕЧАТИ
		const stamphealth = [11, 13, 15];
		stamphealthres01 = stamphealth.includes(result01) ? ' 1・' : '';
			if (stamphealthres01) {document.getElementById('r01').classList.add('stamphealth')};
		stamphealthres02 = stamphealth.includes(result02) ? ' 2・' : '';
			if (stamphealthres02) {document.getElementById('r02').classList.add('stamphealth')};
		stamphealthres03 = stamphealth.includes(result03) ? ' 3・' : '';
			if (stamphealthres03) {document.getElementById('r03').classList.add('stamphealth')};
//	stamphealthres04 = stamphealth.includes(result04) ? ' 4・' : '';
//		if (stamphealthres0604{document.getElementById('r0604.classList.add('stamphealth')};
		stamphealthres05 = stamphealth.includes(result05) ? ' 5・' : '';
			if (stamphealthres05) {document.getElementById('r05').classList.add('stamphealth')};
		stamphealthres06 = stamphealth.includes(result06) ? ' 6・' : '';
			if (stamphealthres06) {document.getElementById('r06').classList.add('stamphealth')};
		stamphealthres07 = stamphealth.includes(result07) ? ' 7・' : '';
			if (stamphealthres07) {document.getElementById('r07').classList.add('stamphealth')};
		stamphealthres08 = stamphealth.includes(result08) ? ' 8・' : '';
			if (stamphealthres08) {document.getElementById('r08').classList.add('stamphealth')};
		stamphealthres09 = stamphealth.includes(result09) ? ' 9・' : '';
			if (stamphealthres09) {document.getElementById('r09').classList.add('stamphealth')};
		stamphealthres10 = stamphealth.includes(result10) ? '10・' : '';
			if (stamphealthres10) {document.getElementById('r10').classList.add('stamphealth')};
		stamphealthres11 = stamphealth.includes(result11) ? '11・' : '';
			if (stamphealthres11) {document.getElementById('r11').classList.add('stamphealth')};
		stamphealthres12 = stamphealth.includes(result12) ? '12・' : '';
			if (stamphealthres12) {document.getElementById('r12').classList.add('stamphealth')};

		stamphealthres = stamphealthres01 + stamphealthres02 + stamphealthres03 + stamphealthres05 + stamphealthres06 + stamphealthres07 + stamphealthres08 + stamphealthres09 + stamphealthres10 + stamphealthres11 + stamphealthres12;
		if ( stamphealthres == '' ) { stamphealthres = "нет"};


		const stamprich = [3, 10, 15];
		stamprichres01 = stamprich.includes(result01) ? ' 1・' : '';
			if (stamprichres01) {document.getElementById('r01').classList.add('stamprich')};
		stamprichres02 = stamprich.includes(result02) ? ' 2・' : '';
			if (stamprichres02) {document.getElementById('r02').classList.add('stamprich')};
		stamprichres03 = stamprich.includes(result03) ? ' 3・' : '';
			if (stamprichres03) {document.getElementById('r03').classList.add('stamprich')};
		stamprichres04 = stamprich.includes(result04) ? ' 4・' : '';
			if (stamprichres04) {document.getElementById('r04').classList.add('stamprich')};
		stamprichres05 = stamprich.includes(result05) ? ' 5・' : '';
			if (stamprichres05) {document.getElementById('r05').classList.add('stamprich')};
		stamprichres06 = stamprich.includes(result06) ? ' 6・' : '';
			if (stamprichres06) {document.getElementById('r06').classList.add('stamprich')};
		stamprichres07 = stamprich.includes(result07) ? ' 7・' : '';
			if (stamprichres07) {document.getElementById('r07').classList.add('stamprich')};
		stamprichres08 = stamprich.includes(result08) ? ' 8・' : '';
			if (stamprichres08) {document.getElementById('r08').classList.add('stamprich')};
		stamprichres09 = stamprich.includes(result09) ? ' 9・' : '';
			if (stamprichres09) {document.getElementById('r09').classList.add('stamprich')};
		stamprichres10 = stamprich.includes(result10) ? '10・' : '';
			if (stamprichres10) {document.getElementById('r10').classList.add('stamprich')};
		stamprichres11 = stamprich.includes(result11) ? '11・' : '';
			if (stamprichres11) {document.getElementById('r11').classList.add('stamprich')};
		stamprichres12 = stamprich.includes(result12) ? '12・' : '';
			if (stamprichres12) {document.getElementById('r12').classList.add('stamprich')};

		stamprichres = stamprichres01 + stamprichres02 + stamprichres03 + stamprichres04 + stamprichres05 + stamprichres06 + stamprichres07 + stamprichres08 + stamprichres09 + stamprichres10 + stamprichres11 + stamprichres12;
		if ( stamprichres == '' ) { stamprichres = "нет"};

		const stampesoteric = [2, 9, 12];
		stampesotericres01 = stampesoteric.includes(result01) ? ' 1・' : '';
			if (stampesotericres01) {document.getElementById('r01').classList.add('stampesoteric')};
		stampesotericres02 = stampesoteric.includes(result02) ? ' 2・' : '';
			if (stampesotericres02) {document.getElementById('r02').classList.add('stampesoteric')};
		stampesotericres03 = stampesoteric.includes(result03) ? ' 3・' : '';
			if (stampesotericres03) {document.getElementById('r03').classList.add('stampesoteric')};
		stampesotericres04 = stampesoteric.includes(result04) ? ' 4・' : '';
			if (stampesotericres04) {document.getElementById('r04').classList.add('stampesoteric')};
		stampesotericres05 = stampesoteric.includes(result05) ? ' 5・' : '';
			if (stampesotericres05) {document.getElementById('r05').classList.add('stampesoteric')};
		stampesotericres06 = stampesoteric.includes(result06) ? ' 6・' : '';
			if (stampesotericres06) {document.getElementById('r06').classList.add('stampesoteric')};
		stampesotericres07 = stampesoteric.includes(result07) ? ' 7・' : '';
			if (stampesotericres07) {document.getElementById('r07').classList.add('stampesoteric')};
		stampesotericres08 = stampesoteric.includes(result08) ? ' 8・' : '';
			if (stampesotericres08) {document.getElementById('r08').classList.add('stampesoteric')};
		stampesotericres09 = stampesoteric.includes(result09) ? ' 9・' : '';
			if (stampesotericres09) {document.getElementById('r09').classList.add('stampesoteric')};
		stampesotericres10 = stampesoteric.includes(result10) ? '10・' : '';
			if (stampesotericres10) {document.getElementById('r10').classList.add('stampesoteric')};
		stampesotericres11 = stampesoteric.includes(result11) ? '11・' : '';
			if (stampesotericres11) {document.getElementById('r11').classList.add('stampesoteric')};
		stampesotericres12 = stampesoteric.includes(result12) ? '12・' : '';
			if (stampesotericres12) {document.getElementById('r12').classList.add('stampesoteric')};


		stampesotericres = stampesotericres01 + stampesotericres02 + stampesotericres03 + stampesotericres04 + stampesotericres05 + stampesotericres06 + stampesotericres07 + stampesotericres08 + stampesotericres09 + stampesotericres10 + stampesotericres11 + stampesotericres12;
		if ( stampesotericres == '' ) { stampesotericres = "нет"};

		// ========== ПОЗИЦИИ
		pos01 = convertToRoman(result01) + ' – ' + cardnames[result01];
		pos02 = convertToRoman(result02) + ' – ' + cardnames[result02];
		pos03 = convertToRoman(result03) + ' – ' + cardnames[result03];
		pos04 = convertToRoman(result04) + ' – ' + cardnames[result04];
		pos05 = convertToRoman(result05) + ' – ' + cardnames[result05];
		pos06 = convertToRoman(result06) + ' – ' + cardnames[result06];
		pos07 = convertToRoman(result07) + ' – ' + cardnames[result07];
		pos08 = convertToRoman(result08) + ' – ' + cardnames[result08];
		pos09 = convertToRoman(result09) + ' – ' + cardnames[result09];
		pos10 = convertToRoman(result10) + ' – ' + cardnames[result10];
		pos11 = convertToRoman(result11) + ' – ' + cardnames[result11];
		pos12 = convertToRoman(result12) + ' – ' + cardnames[result12];

		// ========== ЛУЧИ
		ray01 = convertToRoman(result01) + ' – ' + cardnames[result01]  + ' <br> ' + convertToRoman(result10) + ' – ' + cardnames[result10];
		ray02 = convertToRoman(result02) + ' – ' + cardnames[result02]  + ' <br> ' + convertToRoman(result12) + ' – ' + cardnames[result12];
		ray03 = convertToRoman(result03) + ' – ' + cardnames[result03]  + ' <br> ' + convertToRoman(result11) + ' – ' + cardnames[result11];
		ray04 = convertToRoman(result04) + ' – ' + cardnames[result04]  + ' <br> ' + convertToRoman(result07) + ' – ' + cardnames[result07];
		ray05 = convertToRoman(result05) + ' – ' + cardnames[result05]  + ' <br> ' + convertToRoman(result09) + ' – ' + cardnames[result09];
		ray06 = convertToRoman(result06) + ' – ' + cardnames[result06]  + ' <br> ' + convertToRoman(result08) + ' – ' + cardnames[result08];

		// ========== Выводим результат на экран
		document.getElementById('fr01').textContent = username;
		document.getElementById('fr02').textContent = age;
		document.getElementById('fr03').textContent = ryadro;

		document.getElementById('fr04').textContent = rtvorchestvo;
		document.getElementById('fr05').textContent = rprofessia;
		document.getElementById('fr06').textContent = rfinansy;

		document.getElementById('fr08').textContent = stamphealthres;
		document.getElementById('fr09').textContent = stamprichres;
		document.getElementById('fr10').textContent = stampesotericres;

		document.getElementById('pr01').textContent = pos01;
		document.getElementById('pr02').textContent = pos02;
		document.getElementById('pr03').textContent = pos03;
		document.getElementById('pr04').textContent = pos04;
		document.getElementById('pr05').textContent = pos05;
		document.getElementById('pr06').textContent = pos06;
		document.getElementById('pr07').textContent = pos07;
		document.getElementById('pr08').textContent = pos08;
		document.getElementById('pr09').textContent = pos09;
		document.getElementById('pr10').textContent = pos10;
		document.getElementById('pr11').textContent = pos11;
		document.getElementById('pr12').textContent = pos12;

		document.getElementById('ray01').innerHTML = ray01;
		document.getElementById('ray02').innerHTML = ray02;
		document.getElementById('ray03').innerHTML = ray03;
		document.getElementById('ray04').innerHTML = ray04;
		document.getElementById('ray05').innerHTML = ray05;
		document.getElementById('ray06').innerHTML = ray06;


		document.getElementById('rr01').textContent = convertToRoman(result01);
			document.getElementById('rs01').textContent = convertToSub(result01);
			document.getElementById('ri01').src = pimg[result01];
		document.getElementById('rr02').textContent = convertToRoman(result02);
			document.getElementById('rs02').textContent = convertToSub(result02);
			document.getElementById('ri02').src = pimg[result02];
		document.getElementById('rr03').textContent = convertToRoman(result03);
			document.getElementById('rs03').textContent = convertToSub(result03);
			document.getElementById('ri03').src = pimg[result03];
		document.getElementById('rr04').textContent = convertToRoman(result04);
			document.getElementById('rs04').textContent = convertToSub(result04);
			document.getElementById('ri04').src = pimg[result04];
		document.getElementById('rr05').textContent = convertToRoman(result05);
			document.getElementById('rs05').textContent = convertToSub(result05);
			document.getElementById('ri05').src = pimg[result05];
		document.getElementById('rr06').textContent = convertToRoman(result06);
			document.getElementById('rs06').textContent = convertToSub(result06);
			document.getElementById('ri06').src = pimg[result06];
		document.getElementById('rr07').textContent = convertToRoman(result07);
			document.getElementById('rs07').textContent = convertToSub(result07);
			document.getElementById('ri07').src = pimg[result07];
		document.getElementById('rr08').textContent = convertToRoman(result08);
			document.getElementById('rs08').textContent = convertToSub(result08);
			document.getElementById('ri08').src = pimg[result08];
		document.getElementById('rr09').textContent = convertToRoman(result09);
			document.getElementById('rs09').textContent = convertToSub(result09);
			document.getElementById('ri09').src = pimg[result09];
		document.getElementById('rr10').textContent = convertToRoman(result10);
			document.getElementById('rs10').textContent = convertToSub(result10);
			document.getElementById('ri10').src = pimg[result10];
		document.getElementById('rr11').textContent = convertToRoman(result11);
			document.getElementById('rs11').textContent = convertToSub(result11);
			document.getElementById('ri11').src = pimg[result11];
		document.getElementById('rr12').textContent = convertToRoman(result12);
			document.getElementById('rs12').textContent = convertToSub(result12);
			document.getElementById('ri12').src = pimg[result12];
		document.getElementById('rr13').textContent = convertToRoman(result13);
			document.getElementById('rs13').textContent = convertToSub(result13);
			document.getElementById('ri13').src = pimg[result13];
		document.getElementById('rr14').textContent = convertToRoman(result14);
			document.getElementById('rs14').textContent = convertToSub(result14);
			document.getElementById('ri14').src = pimg[result14];
		document.getElementById('rr15').textContent = convertToRoman(result15);
			document.getElementById('rs15').textContent = convertToSub(result15);
			document.getElementById('ri15').src = pimg[result15];

}

function convertToRoman(num) {
	const romanNumerals = {
		M: 1000,
		CM: 900,
		D: 500,
		CD: 400,
		C: 100,
		XC: 90,
		L: 50,
		XL: 40,
		X: 10,
		IX: 9,
		V: 5,
		IV: 4,
		I: 1
	};
	let roman = '';

	for (let key in romanNumerals) {
		while (num >= romanNumerals[key]) {
			roman += key;
			num -= romanNumerals[key];
		}
	}

	return roman;
}

function convertToSub(card) {
	const SubNumerals = {
		1: 'M ☿ 🧘',
		2: 'Ж ☾ 🧘',
		3: 'Ж ♀ 🌳',
		4: 'М ♈️ 🌳',
		5: 'М ♉️ 🧘',
		6: 'Н ♊️ 🌳',
		7: 'М ♋️ 🧘',
		8: 'Ж ♎️ 🌳',
		9: 'Н ♍ 🧘',
		10: 'Н ♃ 🌳',
		11: 'М ♌️ 🌳',
		12: 'Н ♆ 🧘',
		13: 'Ж ♏️ 🧘',
		14: 'Н ♐️ 🧘',
		15: 'М ♑️ 🌳',
		16: 'Н ♂ 🌳',
		17: 'Ж ♒️ 🧘',
		18: 'Ж ♓️ 🌳',
		19: 'М ☉ 🧘',
		20: 'Н ♇ 🌳',
		21: 'Н ♄ 🧘',
		22: 'Н ♅ 🌳',
	};

	return SubNumerals[card];
}

document.addEventListener('DOMContentLoaded', function() {

	document.getElementById('btnradio1').addEventListener('click', function() {
		document.getElementById('r01').classList.toggle('axisyellow');
		document.getElementById('r06').classList.toggle('axisyellow');
		document.getElementById('r08').classList.toggle('axisyellow');
		document.getElementById('r10').classList.toggle('axisyellow');
	});

	document.getElementById('btnradio2').addEventListener('click', function() {
		document.getElementById('r02').classList.toggle('axisblue');
		document.getElementById('r05').classList.toggle('axisblue');
		document.getElementById('r09').classList.toggle('axisblue');
		document.getElementById('r12').classList.toggle('axisblue');
	});

	document.getElementById('btnradio3').addEventListener('click', function() {
		document.getElementById('r03').classList.toggle('axisgreen');
		document.getElementById('r04').classList.toggle('axisgreen');
		document.getElementById('r07').classList.toggle('axisgreen');
		document.getElementById('r11').classList.toggle('axisgreen');
	});

	document.getElementById('btnradio4').addEventListener('click', function() {
		document.getElementById('r01').classList.toggle('axisviolet');
		document.getElementById('r02').classList.toggle('axisviolet');
		document.getElementById('r03').classList.toggle('axisviolet');
		document.getElementById('r04').classList.toggle('axisviolet');
		document.getElementById('r05').classList.toggle('axisviolet');
		document.getElementById('r06').classList.toggle('axisviolet');
	});

	document.getElementById('btnradio5').addEventListener('click', function() {
		document.getElementById('r13').classList.toggle('d-none');
		document.getElementById('r14').classList.toggle('d-none');
		document.getElementById('r15').classList.toggle('d-none');
	});

});
