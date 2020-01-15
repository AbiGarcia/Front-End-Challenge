function sleep(milliseconds) {
  var start = new Date().getTime();
  for (var i = 0; i < 1e7; i++) {
    if ((new Date().getTime() - start) > milliseconds){
      break;
    }
  }
}

function slideRight(id_show,table){
	var capTableData = {
		classI: {
			seriesE: {
	 			"Juan Ramírez": 300000
		},
			seriesF: {
			  "Juan Ramírez": 100000,
			  "Julia Pérez": 50000,
			  "Oscar Gómez": 100000
			},
			seriesR: {
			  "Julia Pérez": 100000
			}
		},
		classII: {
			seriesE: {
			  "Juan Ramírez": 100000
			},
			seriesF: {
			  "Julia Pérez": 50000,
			  "Oscar Gómez": 100000
			}
		},
		classIII: {
			seriesA: {
			  "Juan Ramírez": 25000
			},
			seriesE: {
			  "Oscar Gómez": 50000
			},
			seriesF: {},
			seriesL: {
			  "Julia Pérez": 50000
			},
			seriesR: {
			  "Juan Ramírez": 25000,
			  "Oscar Gómez": 50000
			}
		}
	}
	var data_classX_series, data_classX_row1, data_classX_row2, data_classX_row3
	if(id_show == 'btn_11'){
		document.getElementById('btn_11').style.display = '';
		document.getElementById('btn_1').style.display = 'none';

		sleep(800);


		data_classX_series = '<tr style="background: #e8e8e8;"><td>Serie E</td><td>Serie F</td><td>Serie R</td></tr>';
		data_classX_row1 = '<tr style="background: #e8e8e8;"><td>'+capTableData.classI.seriesE["Juan Ramírez"]+'</td><td>'+capTableData.classI.seriesF["Juan Ramírez"]+'</td><td> - </td></tr>';

		data_classX_row2 = '<tr style="background: #e8e8e8;"><td> - </td><td>'+capTableData.classI.seriesF["Julia Pérez"]+'</td><td>'+ capTableData.classI.seriesR['Julia Pérez'] +'</td></tr>';

		data_classX_row3 = '<tr style="background: #e8e8e8;"><td> - </td><td>'+capTableData.classI.seriesF["Oscar Gómez"]+'</td><td> - </td></tr>';
		document.getElementById(table).innerHTML = data_classX_series+data_classX_row1+data_classX_row2+data_classX_row3;

		document.getElementById('btn_2').style.display = '';
		document.getElementById('btn_22').style.display = 'none';
		
		document.getElementById('btn_3').style.display = '';
		document.getElementById('btn_33').style.display = 'none';

	}else if(id_show == 'btn_22'){
		document.getElementById('btn_22').style.display = '';
		document.getElementById('btn_2').style.display = 'none';


		sleep(800);

		data_classX_series = '<tr style="background: #e8e8e8;"><td>Serie E</td><td>Serie F</td></tr>';
		data_classX_row1 = '<tr style="background: #e8e8e8;"><td> - </td><td> - </td></tr>';

		data_classX_row2 = '<tr style="background: #e8e8e8;"><td> - </td><td>'+capTableData.classII.seriesF["Julia Pérez"]+'</td></tr>';

		data_classX_row3 = '<tr style="background: #e8e8e8;"><td> - </td><td>'+capTableData.classII.seriesF["Oscar Gómez"]+'</td></tr>';
		document.getElementById(table).innerHTML = data_classX_series+data_classX_row1+data_classX_row2+data_classX_row3;


		document.getElementById('btn_1').style.display = '';
		document.getElementById('btn_11').style.display = 'none';
		
		document.getElementById('btn_3').style.display = '';
		document.getElementById('btn_33').style.display = 'none';

	}else if(id_show == 'btn_33'){
		document.getElementById('btn_33').style.display = '';
		document.getElementById('btn_3').style.display = 'none';

		sleep(800);

		data_classX_series = '<tr style="background: #e8e8e8;"><td>Serie A</td><td>Serie E</td><td>Serie F</td><td>Serie L</td><td>Serie R</td></tr>';
		data_classX_row1 = '<tr style="background: #e8e8e8;"><td>'+capTableData.classIII.seriesA["Juan Ramírez"]+'</td><td> - </td><td> - </td><td> - </td><td>'+capTableData.classIII.seriesR["Juan Ramírez"]+'</td></tr>';

		data_classX_row2 = '<tr style="background: #e8e8e8;"><td> - </td><td> - </td><td> - </td><td> '+capTableData.classIII.seriesL["Julia Pérez"]+' </td><td> - </td></tr>';

		data_classX_row3 = '<tr style="background: #e8e8e8;"><td> - </td>'+'<td>'+capTableData.classIII.seriesE["Oscar Gómez"]+'</td><td> - </td><td> - </td><td>'+capTableData.classIII.seriesR["Oscar Gómez"]+'</td></tr>';
		document.getElementById(table).innerHTML = data_classX_series+data_classX_row1+data_classX_row2+data_classX_row3;

		document.getElementById('btn_1').style.display = '';
		document.getElementById('btn_11').style.display = 'none';
		
		document.getElementById('btn_2').style.display = '';
		document.getElementById('btn_22').style.display = 'none';	
	}
}


