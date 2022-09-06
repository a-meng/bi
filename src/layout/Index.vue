<template>
    <div class="PageLayout">
        <div class="PageLeft">
            <div class="PageLogo">logo</div>
            <div class="PageMenu">
                menu
                <div style="width:300px;height:1000px;background:gray;"></div>
            </div>
        </div>
        <div class="PageRight">
            <div class="PageHeader">PageHeader</div>
            <div class="PageViewTabs">PageViewTabs</div>
            <div class="PageMain">
                <!-- <div class="PageBody"> -->
                <slot></slot>
                <!-- </div> -->
            </div>
        </div>
    </div>
</template>
<style>
.PageLayout {
    display: flex;
    width: 100%;
    height: 100%;
}
.PageLogo{
    background:#fff;
    border: 1px solid #ddd;
    margin: 5px;
    padding: 5px;
    position: sticky;
    top:0;
    left:0;
    width:100%;
}
.PageLeft {
    border: 1px solid #ddd;
    width: 250px;
    overflow: auto;
    margin: 5px;
    padding: 5px;
}

.PageRight {
    flex-grow: 1;
    width: 0;
    border: 1px solid #ddd;
    margin: 5px;
    padding: 5px;
    display: flex;
    flex-direction: column;
}

.PageHeader {
    border: 1px solid #ddd;
    margin: 5px;
    padding: 20px;

}

.PageViewTabs {
    border: 1px solid #ddd;
    margin: 5px;
    padding: 5px;
}

.PageMain {
    border: 1px solid #ddd;
    margin: 5px;
    padding: 5px;
    flex-grow: 1;
    height: 0;
    overflow: auto;
}
</style>