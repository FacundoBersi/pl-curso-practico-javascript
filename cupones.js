function calcularPrecioConDescuento(precio, descuento) {
    const porcentajePrecioConDescuento = 100 - descuento;
    const precioConDescuento = (precio * porcentajePrecioConDescuento) / 100;

    return precioConDescuento;
}

// SOLUCION #2
// const coupons = [
//     "JuanDC_es_Batman",
//     "pero_no_le_digas_a_nadie",
//     "es_un_secreto",
// ];

function onClickButtonPriceDiscount() {
    const inputPrice = document.getElementById("InputPrice");
    const priceValue = inputPrice.value;

    const inputCoupon = document.getElementById("InputCoupon");
    const couponValue = inputCoupon.value;

    let descuento;

    if(couponValue == "d1") {
        descuento = 10;
    } else if(couponValue == "d2") {
        descuento = 15;
    } else if(couponValue == "d3") {
        descuento = 20;
    } else {
        descuento = 0;
    }

    // SOLUCION #2
    // if (!coupons.includes(couponValue)) {
    //     alert("El cupón " + couponValue + "no es válido");
    //  } else if (couponValue === "JuanDC_es_Batman") {
    //     descuento = 15;
    //  } else if (couponValue === "pero_no_le_digas_a_nadie") {
    //     descuento = 30;
    //  } else if (couponValue === "es_un_secreto") {
    //     descuento = 25;
    //  }

    const precioConDescuento = calcularPrecioConDescuento(priceValue, descuento);

    const resultP = document.getElementById("ResultP");
    resultP.innerText = "El precio con descuento son: $" + precioConDescuento;
}