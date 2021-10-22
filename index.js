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
        harga: 50000
    },
    {
        image: 'https://cdn0-production-images-kly.akamaized.net/JiCDYDWDmwp7DDNIBlTTGOzABGE=/640x853/smart/filters:quality(75):strip_icc():format(jpeg)/kly-media-production/medias/3434118/original/014340800_1618897521-EzVqwiaVoAIAv-E.jpg',
        judul: "Shang-chi",
        harga: 70000
    },
]

//function untuk merender list film
function renderList() {
    let list = document.getElementById('list-container')
    for (let i = 0; i < data.length; i++) {
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
function dropdown() {
    let list = document.getElementById('dropdown')
    for (let i = 0; i < data.length; i++) {
        list.innerHTML += `
        <option>${data[i].judul}</option>
        `
    }
    return list
}
dropdown()

function totalHarga(quantity, film, data) {
    let result
    for (let i = 0; i < data.length; i++) {
        if (data[i].judul === film) {
            result = data[i].harga * quantity
        }
    }
    return result
}


let simpleModal = document.getElementById('modal')
let closeBtn = document.getElementsByClassName('closeBtn')[0]

function checkoutBtn() {
    const name = document.getElementById('name').value
    const jumlahTiket = document.getElementById('tiket').value
    const selectedFilm = document.getElementById('dropdown').value
    const waktu = document.querySelector('input[name=waktu]:checked').value
    simpleModal.style.display = 'block'
    if (name == "") {
        return alert("INPUT NAMA!")
    }
    if (jumlahTiket == "") {
        return alert("ISI JUMLAH TIKET!")
    }
    if (selectedFilm == "none"){
        return alert("MAU NONTON APA!!!")
    }
    
    console.log(waktu)
        const biaya = totalHarga(jumlahTiket, selectedFilm, data)

    let modal = document.getElementById('modalCard')
    modal.innerHTML = `
    <p>Username : ${name}</p>
    <p>Jumlah tiket yang dibeli: ${jumlahTiket}</p>
    <p>Film yang dipilih : ${selectedFilm}</p>
    <p>Waktu Penayangan : ${waktu}</p>
    <p>Total Harga: ${biaya}</p>
    <button class="closeBtn" onclick="closeModalBtn()">Edit order</button>
    <button class="submit" onclick="submitOrder()">Submit order</button>
    `

}


let modalCheckout = document.getElementById('modalCheckout')
function submitOrder() {
    simpleModal.style.display = 'none'
    modalCheckout.style.display = 'block'
    let modal = document.getElementById('modalCardCheckout')
    modal.innerHTML = `
    Selamat order anda sudah diproses
    <button onclick="closeCheckoutBtn(); reset();">&times;</button>
    `
}
function closeModalBtn() {
    simpleModal.style.display = 'none'
}
function reset() {
    document.getElementById("form").reset();

}
function closeCheckoutBtn() {
    modalCheckout.style.display = 'none'
}