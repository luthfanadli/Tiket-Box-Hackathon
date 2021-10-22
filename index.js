let data = [
    {
        image: "https://media.matamata.com/thumbs/2021/09/27/44614-sinopsis-the-medium-imdb/o-img-44614-sinopsis-the-medium-imdb.jpg",
        judul: "The Medium",
        harga: 60000
    },
    {
        image: "https://media.21cineplex.com/webcontent/gallery/pictures/163307215533128_287x421.jpg",
        judul: "Dune",
        harga: 50000
    },
    {
        image: 'https://i.pinimg.com/236x/f5/b0/f1/f5b0f1a11a25f24de961d2d624be23a5.jpg',
        judul: "Winter in tokyo",
        harga: 100000
    },
]

//function untuk merender list film
function renderList () {
    let list = document.getElementById('list-container')
    for (let i = 0; i < data.length; i++){
        list.innerHTML += `
        <div class="list">
            <img src=${data[i].image} alt="The Medium">
            <div>
                <h6>${data[i].judul}</h6>
                <p>${data[i].harga}</p>
            </div>
        </div>`
    }
    return list
}
renderList()

//function untuk dropdown list film
function dropdown () {
    let list = document.getElementById('dropdown')
    for (let i = 0; i < data.length; i++){
        list.innerHTML += `
        <option>${data[i].judul}</option>
        `
    }
    return list
}
dropdown()

function totalHarga (quantity, film, data){
    let result
    for (let i = 0; i < data.length; i++){
        if(data[i].judul === film){
            result = data[i].harga * quantity
        }
    }
    return result
}


let simpleModal = document.getElementById('modal')
let closeBtn = document.getElementsByClassName('closeBtn')[0]

function checkoutBtn () {
    const name = document.getElementById('name').value
    const jumlahTiket = document.getElementById('tiket').value
    const selectedFilm = document.getElementById('dropdown').value
    const waktu = document.querySelector('input[name=waktu]:checked').value

    const biaya = totalHarga(jumlahTiket, selectedFilm, data)

    simpleModal.style.display = 'block'
    let modal = document.getElementById('modalCard')
    modal.innerHTML = `
    <span class="closeBtn" onclick="closeModalBtn()">&times;</span>
    <p>Username : ${name}</p>
    <p>Jumlah tiket yang dibeli: ${jumlahTiket}</p>
    <p>Film yang dipilih : ${selectedFilm}</p>
    <p>Waktu Penayangan : ${waktu}</p>
    <p>Total Harga: ${biaya}</p>
    `

}

function closeModalBtn () {
    simpleModal.style.display = 'none'
}


