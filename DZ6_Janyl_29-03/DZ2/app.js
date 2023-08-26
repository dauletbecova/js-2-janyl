const bookFilter = (...books) => {
    let newarrey = []
    for (let book of books) {
        for (let letter of book) {
            if (letter === 'н' || letter === 'Н') {
                newarrey.push(book)
            }
        }
    }
    console.log(newarrey)
}
bookFilter('Алмазный тигр', 'Лолита' , 'Шантарам' , 'Гарри Потер')