<template>
    <div ref="container" id="container">
        <Sidebar />
        <div id="container__row" class="row p-3" style="width: 100vw; margin: 0 auto">
            <div id="container__row__col" class="col-12">
                <div id="container__loading" ref="container__loading" class="text-center">
                    <img src="../assets/images/loading.gif">
                </div>
                <div ref="container__interface" id="container__interface" class="text-center">
                    <div ref="container__interface__game-title" id="container__interface__game-title">
                        <div id="container__interface__game-title--image"><img :src=game_image></div>
                        <div id="container__interface__game-title--normal">Du kan väl för fan spela lite </div>
                        <a :href=game_link id="container__interface__game-title--generated">{{ game_title }}</a>
                    </div>
                    <br>
                    <button v-on:click="refresh()" ref="container__interface__button" id="container__interface__button">Jag
                        vill spela något annat för fan!
                        <span>
                            <img id="container__interface__button__refresh" src="../assets/images/refresh-icon.svg">
                        </span>
                    </button>
                </div>
            </div>
        </div>
    </div>
</template>

<script lang="ts">
import games from '../static/data.json';

export default {
    data() {
        return {
            game_title: '',
            game_link: '',
            game_image: ''
        }
    },
    props: {
        filter: {
            type: String,
            required: true
        }
    },
    async mounted() {
        this.handlePortSize()
        let list = this.handleFilter(games)

        // Get random game
        const randomId = Math.floor(Math.random() * games.length);
        const response = games[randomId];
        this.game_title = response.name;
        this.game_link = response.url;

        var img = new Image();
        img.src = response.image;
        img.onload = () => {
            this.game_image = response.image;
            (this.$refs['container__interface'] as HTMLElement).classList.add('show-interface');
            (this.$refs['container__interface__button'] as HTMLElement).classList.add('show-button');
            (this.$refs['container__loading'] as HTMLElement).classList.add('hide-loading');
        }
    },

    methods: {
        refresh() {
            location.reload();
        },
        handlePortSize() {
            window.addEventListener('resize', () => {
                let vh = window.innerHeight * 0.01;
                document.documentElement.style.setProperty('--vh', `${vh}px`);
            });
        },
        handleFilter(games: { name: string; url: string; image: string; price: string;}[]) {
            if (this.filter == 'all') {
                return games
            } else if(this.filter == 'free') {
                return games.filter(game => game.price == 'free')
            }
        }
    }
}
</script>

<style scoped lang="sass">
:root 
    --vh: 0px

$red: #DC3131 
@media screen and (max-width: 1300px) and (min-height: 400px)
    #container__interface__game-title 
        font-size: 2.2rem !important

@media screen and (max-width: 700px), (max-height: 500px)
    #container__interface__game-title 
        font-size: 2.2rem !important

        #container__interface__game-title--image
            display: none

@media screen and (max-height: 700px) 
    #container__interface__game-title 
        font-size: 2.2rem !important

        #container__interface__game-title--image
            width: 30vw !important
            height: 30vw !important

#container
    transition: 0.2s cubic-bezier(0.25,0.80,1,1)

#container__row
    height: 100vh
    height: calc(var(--vh, 1vh) * 100)
    
    #container__row__col
        position: absolute
        top: 50%
        left: 50%
        transform: translate(-50%, -50%)

#container__loading
    filter: blur(2px)
    position: absolute
    top: 50%
    left: 50%
    transform: translate(-50%, -50%)

    img
        width: 100px
        height: 100px
    
#container__interface
    opacity: 0

    #container__interface__game-title
        font-weight: bold
        font-size: 3rem

        #container__interface__game-title--generated
            color: $red
            transition: 0.2s ease-in-out

            &:hover
                text-decoration: none
                color: #ffffffda
                transition: 0.2s ease-in-out
        
        #container__interface__game-title--image
            width: 300px
            height: 300px
            border-radius: 50%
            background: #fff
            margin: 0 auto
            overflow: hidden
            border: 2px solid #fff
            max-width: 300px
            max-height: 300px

            img
                width: 100%
                height: 100%
                object-fit: cover

#container__interface__button
    border: #fff 2px solid
    background: transparent
    transition: 0.2s ease-in-out
    border-radius: 5px
    font-size: 1.2rem
    padding: 10px
    transform: scale(0)

    #container__interface__button__refresh
        width: 1.5rem
        height: 1.5rem
        width: 0px
        transition: 0.3s ease-in-out
        color: #fff

    &:hover
        background: $red
        transition: 0.2s ease-in-out
        border: $red 2px solid

        #container__interface__button__refresh
            transition: 0.3s ease-in-out
            transform: rotate(360deg)    
            width: 1.5rem
            margin-left: 0.5rem
    
.hide-loading
    animation: hide-loading 0.5s
    animation-timing-function: ease-out
    animation-fill-mode: forwards

.show-button
    animation: expand 0.5s
    animation-timing-function: ease-out
    animation-fill-mode: forwards

.show-interface
    animation: move-in 0.5s
    animation-timing-function: ease-out
    animation-fill-mode: forwards

@keyframes move-in 
  0% 
    opacity: 0
    transform: translateY(-100px)
  
  100% 
    opacity: 1
    transform: translateY(0px)

@keyframes expand
  0% 
    transform: scale(0)
  
  100% 
    transform: scale(1)

@keyframes hide-loading
    0% 
        opacity: 1
    
    100% 
        opacity: 0
</style>
  