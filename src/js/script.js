fetch('https://pokeapi.co/api/v2/pokemon')
.then((response) => {
    if (response.status != 200) {
        console.log('Opp' + response.status);
        return
    }

    response.json().then((data) => {
        let pokemons = data.results;       
        pokemons.forEach(pokemon => {
            document.querySelector('tbody').insertAdjacentHTML('beforeend', `
                <tr>
                    <td class="border border-slate-700 font-bold"><button onclick='detail("${pokemon.url}")' class="rounded-full bg-blue-300 p-2">${pokemon.name}</button></td>                                       
                    <td class="border-slate-700 text-center" id="detailPokemon"></td>                                                                             
                </tr>
            `)
        });
    })
})
.catch((err) => {
    console.log(err);
})

function detail(url) {
    let detail = document.querySelector('#detailPokemon');    
    fetch(url)
    .then(responese => {
        responese.json().then((pokemon) => {
            detail.innerHTML = '';
            detail.insertAdjacentHTML('beforeend', 
                `
                    <h3 class='uppercase font-bold'>${pokemon.name}</h3>
                    <img src='${pokemon.sprites.front_default}' class='m-auto'>
                    <p>Jurus : ${pokemon.moves[0].move.name}</p>
                    <p>Tinggi : ${pokemon.height}</p>
                    <p>Berat : ${pokemon.weight}</p>
                `
            )
        })
    })
}




// tst.appendChild(td)
