

const miUrl = "https://covid-api.mmediagroup.fr/v1/cases?country=Argentina"

$.get(miUrl,function(resultado,estado){

    if(estado==="success"){
        $("body").append(
            `<div>Casos confirmados:  ${resultado.All.confirmed}</div>
            <div>Población total :  ${resultado.All.population}</div>
            <div>Muertes :  ${resultado.All.deaths}</div>`
        )
    }
}


)
