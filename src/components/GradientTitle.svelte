<script>
    export let title = "Nahmii";
    export let marginTop = "";
    export let marginBottom = "";
    export let textAlign = "left";
    export let fontSize = "32px";
    export let fontWeight = "500";
    export let letterSpacing = "0";
</script>

<h1 class="title" 
    style="{marginTop ? `margin-top: ${marginTop};` : ""}
    {marginBottom ? `margin-bottom: ${marginBottom};` : ""}
    {textAlign ? `text-align: ${textAlign};` : ""}
    {fontSize ? `font-size: ${fontSize};` : ""}
    {fontWeight ? `font-weight: ${fontWeight};` : ""}
    {letterSpacing ? `letter-spacing: ${letterSpacing};` : ""}">
    <slot>{title}</slot>
</h1>

<style>
    .title {
        display: inline-block;
        background: -webkit-linear-gradient(45deg, #ff44c9 0%, #00b8fa 100%);
        background-clip: unset;
        -webkit-background-clip: text;
        -webkit-text-fill-color: transparent;
        left: 0px;
        top: 0px;
        font-family: Roboto;
        font-style: normal;
        letter-spacing: 0.15px;
        text-align: center;
    }
</style>
