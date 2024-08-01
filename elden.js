const switchContainer = document.querySelector('.switch-container')
const tabs = document.querySelectorAll('.tab')

const switchContainerInfo = [
    `<h2 class="section-title">Обзор</h2>
                        <p class="section-content">
                            Elden Ring — это будущая ролевая игра, разработанная FromSoftware и изданная Bandai Namco Entertainment. Игра представляет собой совместную работу
                            игровой режиссёр Хидэтака Миядзаки и писатель-фантаст Джордж Мартин. Elden Ring описывается как ролевая игра в жанре темного фэнтези с элементами открытого мира.
                            Мир, персонажи и история игры были созданы Джорджем Мартином, а игровой механикой и дизайном мира занимался Хидэтака Миядзаки. Элден Ринг
                            действие происходит в мире под названием «Земли Между», мире, которым правит королева Марика Вечная. Игрок берет на себя роль Запятнанного, изгоя, потерявшего свою благодать.
                            The Tarnished возглавляет загадочная фигура, известная как Мелина Золотой Орден, которая поручает игроку найти Древнее Кольцо, способное изменить форму.
                            мир. В игре представлено разнообразное оружие, магия и способности, а также верховой бой, когда игрок исследует открытый мир и сражается с различными врагами и врагами.
                            боссы. Elden Ring — крупнейшая игра, над которой работал Миядзаки, с более обширным миром, более сложным сюжетом и более глубокой ролевой механикой, чем в его предыдущих играх.
                        </p>`,
    `<h2 class="section-title">Медиа</h2>
                        <p class="section-content">

                            <div class="imageMedia"> 
                            <img src="https://i.pinimg.com/564x/09/80/21/098021573b89a54860a96d5db1b5488d.jpg">
                            <img src="https://i.pinimg.com/564x/d6/1a/0a/d61a0aa93e305de21c8f614b4025c73b.jpg">
                            <img src="https://i.pinimg.com/736x/37/bb/6e/37bb6e6cf9e9b1c3e0d026f205cc2775.jpg">
                            <img src="https://i.pinimg.com/564x/ac/a4/b8/aca4b8b6fb9cbbfabfc729041c5d4cda.jpg"></img>
                        </div>
                        </p>`,
                        
    `<h2 class="section-title">Новости</h2>
                        <p class="section-content">
                           15:06 Геймер подал в суд на авторов Elden Ring из-за того, что игра слишком сложная
                           <hr>
                           17:43 Геймеры нашли лёгкий способ победить Малению в Elden Ring — они буквально запинали босса
                           <hr>
                           12:34 Elden Ring не покидает первое место в свежем чарте Steam
                           <hr>
                           01:58 Авторы Elden Ring: Shadow of the Erdtree рассказали, как повысить FPS в дополнении
                           <hr>
                           09:33 Джордж Мартин странно прокомментировал слухи об экранизации Elden Ring
                           <hr>
                           18:48 «Иди траву потрогай»: стример Братишкин высказался о комьюнити Elden Ring
                        </p>`,
    `<h2 class="section-title">Больше</h2>
                        <p class="section-content">
                           К сожалению сайт еще на доработке, спасибо что использовали нашу демо-версию Jutsu-Games!
                        </p>`,
]

for (let i = 0; i < tabs.length; i++) {
    tabs[i].addEventListener('click', function() {
        for (let j = 0; j < tabs.length; j++) {
            tabs[j].classList.remove('active')
        }
        tabs[i].classList.add('active')
        switchContainer.innerHTML = switchContainerInfo[i]
    })
}
