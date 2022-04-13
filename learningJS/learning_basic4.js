const objA = {
    nama: 'Dhony',
    namaAnak2: ['Lita', 'Ani', 'Budi'],
    detailFisik: [{
        kulit: 'hitam'
    }]
};

function defaultPayloadCheckUser(name) {
    return {
        username: name
    }
}

let getTextFromElements = objA.namaAnak2;

console.log(getTextFromElements);

let akhir = getTextFromElements.map(element => {
    return defaultPayloadCheckUser(element)
}).forEach(async (data) => {
    // call API
    await postUsers(data);
})
