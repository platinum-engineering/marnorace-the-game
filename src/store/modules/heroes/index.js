
export default {
    namespaced: true,
    state: {
        activeHero: null,
        items: [
            {
                name: 'Lazy Togue',
                nft: '#9523',
                desc: 'Leading a mission, being right in the thick of the action',
                class: 'Reporter',
                lives: 1,
                money: 200
            },
            {
                name: 'Crunchy',
                nft: '#1008',
                desc: 'No Fear, No Mercy',
                class: 'Warrior',
                lives: 3,
                money: 50
            },
            {
                name: 'Twinky Fan',
                nft: '#23',
                desc: 'Soft Power and Mighty Spirit',
                class: 'Monc',
                lives: 2,
                money: 150
            },
        ]
    },
    mutations: {
        SET_ACTIVE_HERO(state, payload) {
            state.activeHero = payload
        },
    },
}
