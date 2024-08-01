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
                            <img src="https://i.pinimg.com/564x/ec/ed/c4/ecedc42adb79c1374a918d9a89c28193.jpg">
                            <img src="https://i.pinimg.com/564x/d6/1a/0a/d61a0aa93e305de21c8f614b4025c73b.jpg">
                            <img src="https://i.pinimg.com/736x/37/bb/6e/37bb6e6cf9e9b1c3e0d026f205cc2775.jpg">
                            <img src="https://i.pinimg.com/564x/ac/a4/b8/aca4b8b6fb9cbbfabfc729041c5d4cda.jpg">
                            <img src="https://i.pinimg.com/736x/e6/6e/36/e66e365ae5fb394e89d92ed523cd433a.jpg">
                            <img src="https://i.pinimg.com/236x/31/ae/3d/31ae3dbae21e52e6b94afd60156c34e0.jpg">
                            <img src="https://i.pinimg.com/236x/17/3d/35/173d359e5046121860f793e3a4a6352e.jpg">
                            <img src="https://i.pinimg.com/736x/99/ef/78/99ef78163ccf014624d111197415f4eb.jpg">
                            <img src="https://i.pinimg.com/564x/48/26/73/482673ce537c6605dad60e14dc9e4d5d.jpg">
                            <img src="https://i.pinimg.com/564x/0c/b1/38/0cb138d93ce0e10fc175c99ada16c74d.jpg">
                            <img src="https://i.pinimg.com/564x/1a/8e/03/1a8e03a95c387bd3617ff0e304b95eaa.jpg">
                            <img src="https://i.pinimg.com/736x/8a/f8/a8/8af8a8942fb563d2f7ecd1c6d6da52cd.jpg">
                            <img src="https://i.pinimg.com/474x/c2/2d/e6/c22de66abb399d4e565521b64c57f4b9.jpg">
                            <img src="https://i.pinimg.com/564x/c4/c0/aa/c4c0aa6d3b728d9aa6ab8163b694172b.jpg">
                            <img src="https://i.pinimg.com/564x/71/f9/b0/71f9b0e90443e5c0c59cef07eea29c49.jpg">
                            <img src="https://i.pinimg.com/564x/4e/a5/c1/4ea5c18f4424168ddbb2745378a4c66d.jpg">
                            <img src="https://i.pinimg.com/564x/5e/4d/39/5e4d393ea1dedd150641f90f07251429.jpg">
                            <img src="https://i.pinimg.com/236x/f0/27/65/f027651ae16d0cbdb33be01338945f22.jpg">
                            </div>
                           
                        </p>`,
                        
    `<h2 class="section-title">Новости</h2>
                        <p class="section-content">

                        <div class="news">
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
                           
                        </div>

                        </p>`,
    `<h2 class="section-title">Больше</h2>
                        <p class="section-content">
                           <iframe src="https://mapgenie.io/elden-ring/maps/the-shadow-realm?embed=light" height="500" style="position: relative; width: 100%;"></iframe>
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
