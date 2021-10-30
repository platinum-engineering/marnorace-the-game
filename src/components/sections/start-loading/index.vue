<template>
    <div class="section-start-loading">
        <div class="section-start-loading__item section-start-loading__item--left"><span></span></div>
        <div class="section-start-loading__item section-start-loading__item--right"><span></span></div>
    </div>
</template>

<script>
export default {}
</script>

<style lang="scss" scoped>
$logo-duration: 6s;
$bg-duration: 2s;
@keyframes rot {
    from {
        transform: rotate(0deg);
    }
    to {
        transform: rotate(720deg);
    }
}

@keyframes trl {
    from {
        transform: translateX(0);
        opacity: 1;
    }
    to {
        transform: translateX(-100%);
        //opacity: 0;
    }
}

@keyframes trr {
    from {
        opacity: 1;
        transform: translateX(0);
    }
    to {
        //opacity: 0;
        transform: translateX(100%);
    }
}

.section-start-loading {
    position: fixed;
    top: 0;
    left: 0;
    z-index: 100;
    display: flex;
    width: 100%;
    max-width: 100%;
    height: 100vh;
    overflow: hidden;
    pointer-events: none;

    &__item {
        display: flex;
        align-items: center;
        width: 50%;
        height: inherit;
        background-color: rgba(0, 0, 0, 0.96);
        overflow: hidden;
        animation-duration: $bg-duration;
        animation-delay: $bg-duration;
        //animation-timing-function: linear;
        pointer-events: auto;
        animation-fill-mode: forwards;

        span {
            display: inline-flex;
            width: 200px;
            height: 200px;
            background-image: url('/images/main-logo.png');
            background-repeat: no-repeat;
            background-size: contain;
            animation-name: rot;
            animation-duration: $logo-duration;
            animation-timing-function: linear;
            animation-fill-mode: forwards;

        }

        &--left {
            justify-content: flex-end;
            animation-name: trl;

            span {
                margin-right: -100px;
            }
        }

        &--right {
            animation-name: trr;

            span {
                margin-left: -100px;
            }
        }
    }
}
</style>
