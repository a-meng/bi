<template>
    <div class="PageLayout"> 
        <div class="PageLeft">
            <div>logo</div>
            <div class="PageMenu"></div>
        </div>
        <div class="PageRight">
            <div class="PageHeader"></div>
            <div class="PageViewTabs"></div>
            <div class="PageMain">
                <slot></slot>
            </div>
        </div>
    </div>
</template>
<style>
.PageLayout{
    width:100%;
    height:100%;
}

</style>