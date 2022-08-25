const urls=['https://api.mercadolibre.com/items?ids=MLA863712882', 'https://api.mercadolibre.com/items/MLA646715969']
urls.map((url, y)=>{
    fetch(url).then(result=>result.json()).then(async(result)=>{
    let body = (result[0]&& result[0].body)||result
    let photo = body.pictures
    let price = body.price;
    let originalPrice = body.base_price === price?'':body.base_price
    let infoSeller = await fetch(`https://api.mercadolibre.com/users/${body.seller_id}/shipping_options?zip_code=1754&dimensions=16x16x16,1500`).then(response=>response.json())
    let entrega = infoSeller.options[0].estimated_delivery_time.date
    console.log(entrega)
    let hoy = new Date()

    let entregaEstimada = hoy.toISOString().split('T')[0]=== entrega.split('T')[0]?'hoy':'mañana'

    let porcentajeDescuento = originalPrice!==price&&originalPrice!==''?100/(originalPrice/(originalPrice-price)):'';
    console.log(porcentajeDescuento)
    console.log(body.pictures[0])
    let full = body.shipping.logistic_type==='fulfillment'&&body.status!=='paused'?'Full':'Publicación pausada'
    $('.productos').append(`
    <div class='producto'>  
        <div class = 'productsPhotoContainer${y}'>
        ${photo.map((x)=>{
            return `
            <div class= 'product photo'>
                <img src=${x.url} alt='producto1' class='productPhoto'>
            </div>
            `
        })}
        </div>
        <hr>
        <p class='originalPrice'>${originalPrice}</p>
        <p class='price'>$ ${price}</p>
        <p class='descuento'>${porcentajeDescuento&&porcentajeDescuento+'% OFF'}</p>
        <p class="entrega">Llega ${entregaEstimada}</p>
        <img src=${full==='Full'?'/challenge/Full/full.JPG':'/challenge/Full/pausada.JPG'} class = ${full === "Full"?'fullImg':'pausada'}></img>
        <h2 class='productTitle'>${body.title}</h2>
        <hr>
    </>
        `)   
    urls.forEach((x,y)=>$(`.productsPhotoContainer${y}`).slick())
    a=$('.productsPhotoContainer')[0]
    console.log(result)})

});