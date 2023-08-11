//1-задание
var starBucks = {
    coffee:{
        capuchino: 'Капучино- она имеет ярко выраженный кофейный вкус. Молоко лишь подчеркивает аромат эспрессо. Если пить капучино без сахара, то в нем явственно ощущаются ореховые ноты, которые сопровождают крепкий эспрессо.Пенка в капучино плотная, с хорошо выраженным молочным вкусом, которую разнообразят с помощью шоколада, корицы или какао, насыпая их сверху.',
        latte: 'Лате- лёгкий кофейно-сливочный вкус а также кто предпочитает сливочный вкус. Подойдёт для тех, кто не любит яркий вкус кофе.Его готовят в чашку объёмом 250–300 мл и используют одну порцию эспрессо. Остальной объем напитка составляет молоко и немного молочной пены.',
        americano: 'Американо- своими мягкими нотками американо по вкусу напоминает фильтрованный кофе, и близок к нему по крепости. По объему американо больше, чем эспрессо, и вы можете наслаждаться напитком дольше.Американо получил свое название от напитка, который американские солдаты пили в Италии во время Второй мировой войны. Традиционный итальянский эспрессо оказался слишком крепким для солдат, привыкших к более мягкому американскому кофе.',
        cortado:'Кортадо- напиток на базе эспрессо. Готовится всего из двух ингредиентов – кофе и топлёного молока. Напоминает капучино и макиато. От того, какие зёрна используются, зависят вкусовые и ароматические оттенки. Напиток может быть со слегка цитрусовыми, ягодными, шоколадными, ванильными нотами.',
        flat_white:'Флэт уайт Флэт уайт — насыщенный вкус кофе, смягчённый молоком. Флэт уайт — самый насыщенный по вкусу молочный напиток на основе эспрессо. Его особенно любят ценители вкуса эспрессо в чашке. Флэт уайт готовят такого же объёма, как и стандартный капучино — 150–180 мл, но используют две порции эспрессо.',
        vanilla_copuchino:'Ванильный капучино- она имеет весьма нежный, тонкий, тягучий вкус. Его вкус снимет усталость в конце трудного дня, украсит дружеские посиделки, добавит бодрости ранним утром и настроит на позитивный лад на деловом ланче. Это напиток на все случаи жизни. Наслаждаться им можно хоть каждый день, капучино не надоест никогда.'
    },
    tea:{
        black_tea:'Чёрный чай- она лишена горечи, настой имеет оранжевый или красный цвет. Чай обладает сложным действием, одновременно тонизирующим и успокаивающим.',
        white_tea:'Белый чай- вкус белого чая освежающий, нежный, но в то же время полный, богатый вкусовыми оттенками цветов, мёда, дыни, персика, ягод, берёзового сока. Цвет — нежный жёлто-персиковый, может быть практически незаметным, может напоминать свежий мёд или янтарь, настой прозрачный. Белый чай относится к самым дорогим видам чая. Как правило, чем выше цена чая, а, следовательно, и качество, тем ярче его аромат и вкус.',
        green_tea:'Зелёный чай— с лёгким цветочным вкусом, светлого цвета, как и другие малоферментированные чаи, он часто более ароматный. В этом случае листья (как правило, молодые) просто собирают, слегка обжаривают и сушат.',
        red_tea:'Красный чай- Красные чаи имеют богатый вкус, в которых различают ноты сухофруктов (чернослива, инжира, кураги, яблок), поджаренной ржаной хлебной корочки, меда, полевых цветов, клубники, карамели. Если чай проходил дополнительное копчение, вкус обогащается терпкими дымными нотами.',
        oolong_tea:'Улун чай- Вкус сильный, бодрящий, ярко-медовый, оттенки сухофруктов, есть лёгкая перчинка. Запоминающееся послевкусие.Заваривание. Заваривают улуны по-разному, в зависимости от степени ферментации. Менее ферментированные улуны заваривают не слишком горячей водой 60—80 °C, время заваривания до 3 минут.'
    },
}
console.log(starBucks)

//2-задание
var cities = ['Bishkek', 'Los Angeles', 'Chicago',  'New York', 'Houston', 'Dallas', 'Philadelphia', 'Seattle']
for (var i = 0; i < cities.length; i++){
    if (cities[i].length > 7){
        console.log(cities[i])
    }
}

//3-задание
var ask = prompt('Введите число 1 до 7 чтобы узнать день недели')
switch (ask){
    case '1':
        console.log('Понидельник')
        break
    case '2':
        console.log('Вторник')
        break
    case '3':
        console.log('Среда')
        break
    case '4':
        console.log('Четверг')
        break
    case '5':
        console.log('Пятница')
        break
    case '6':
        console.log('Суббота')
        break
    case '7':
        console.log('Воскресенье')
        break
    default:
        console.error('ВВЕДИТЕ ОТ 1-7!!!')
}




