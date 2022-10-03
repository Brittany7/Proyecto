
function compraJit(j) {

		let jit = parseInt(j); /* valor */
		let x = 20; /* precio */
		let espacio = document.getElementById("resJit");
		let valor = document.getElementById("diaJit").value;

		if (valor >= 2 && valor <6) {
			let normal = jit * x;
			let desc = normal * (2/100);
			let definitivo = normal - desc;

			espacio.innerHTML = "El precio a pagar por " +j+ "kg de jitomate es $" +definitivo+ "<br><br>";

		} else {
			let normal = jit * x;
			let desc = normal * (5/100);
			let definitivo = normal - desc;
			
			espacio.innerHTML = "El precio a pagar por " +j+ "kg de jitomate es $" +definitivo+ "<br><br>";
		}
		
		/* document.write(precioPagado+" pesos"); */
	}


function compraManzana(m){
			let man=parseInt(m);
			let x=50;
			let d= x * 0.02;
			let p=x - d;
			let res=d*1;
			let precioPagado="";
		switch(man){
			case 1: precioPagado="El precio a pagar por 1kg de manzana es: " + p*1 ; break;
			case 2: precioPagado="El precio a pagar por 2kg de manzana es: " + p*2 ; break;
			case 3: precioPagado="El precio a pagar por 3kg de manzana es: " + p*3 ; break;
			case 4: precioPagado="El precio a pagar por 4kg de manzana es: " + p*4 ; break;
			case 5: precioPagado="El precio a pagar por 5kg de manzana es: " + p*5 ; break;
			case 6: precioPagado="El precio a pagar por 6kg de manzana es: " + p*6 ; break;
			case 7: precioPagado="El precio a pagar por 7kg de manzana es: " + p*7 ; break;
			case 8: precioPagado="El precio a pagar por 8kg de manzana es: " + p*8 ; break;
			case 9: precioPagado="El precio a pagar por 9kg de manzana es: " + p*9 ; break;
			case 10: precioPagado="El precio a pagar por 10kg de manzana es: " + p*10 ; break;
			default: precioPagado="No hay producto para esa cantidad";
		}
		document.write(precioPagado+" pesos");

	}

function compraCeb(c){
			let ceb=parseInt(c);
			let x=10;
			let d= x * 0.02;
			let p=x - d;
			let res=d*1;
			let precioPagado="";
		switch(ceb){
			case 1: precioPagado="El precio a pagar por 1kg de cebolla es: " + p*1 ; break;
			case 2: precioPagado="El precio a pagar por 2kg de cebolla es: " + p*2 ; break;
			case 3: precioPagado="El precio a pagar por 3kg de cebolla es: " + p*3 ; break;
			case 4: precioPagado="El precio a pagar por 4kg de cebolla es: " + p*4 ; break;
			case 5: precioPagado="El precio a pagar por 5kg de cebolla es: " + p*5 ; break;
			case 6: precioPagado="El precio a pagar por 6kg de cebolla es: " + p*6 ; break;
			case 7: precioPagado="El precio a pagar por 7kg de cebolla es: " + p*7 ; break;
			case 8: precioPagado="El precio a pagar por 8kg de cebolla es: " + p*8 ; break;
			case 9: precioPagado="El precio a pagar por 9kg de cebolla es: " + p*9 ; break;
			case 10: precioPagado="El precio a pagar por 10kg de cebolla es: " + p*10 ; break;
			default: precioPagado="No hay producto para esa cantidad";
		}
		document.write(precioPagado+" pesos");

	}

function compraNop(n){
			let nop=parseInt(n);
			let x=1;
			let d= x * 0.02;
			let p=x - d;
			let res=d*1;
			let precioPagado="";
		switch(nop){
			case 1: precioPagado="El precio a pagar por 1 pieza de nopales es: " + p*1 ; break;
			case 2: precioPagado="El precio a pagar por 2 piezas de nopales es: " + p*2 ; break;
			case 3: precioPagado="El precio a pagar por 3 piezas de nopales es: " + p*3 ; break;
			case 4: precioPagado="El precio a pagar por 4 piezas de nopales es: " + p*4 ; break;
			case 5: precioPagado="El precio a pagar por 5 piezas de nopales es: " + p*5 ; break;
			case 6: precioPagado="El precio a pagar por 6 piezas de nopales es: " + p*6 ; break;
			case 7: precioPagado="El precio a pagar por 7 piezas de nopales es: " + p*7 ; break;
			case 8: precioPagado="El precio a pagar por 8 piezas de nopales es: " + p*8 ; break;
			case 9: precioPagado="El precio a pagar por 9 piezas de nopales es: " + p*9 ; break;
			case 10: precioPagado="El precio a pagar por 10 piezas de nopales es: " + p*10 ; break;
			default: precioPagado="No hay producto para esa cantidad";
		}
		document.write(precioPagado+" pesos");

	}
