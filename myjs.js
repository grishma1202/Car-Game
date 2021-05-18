m=0;
var y;
function start()
{
    y=setInterval(run,100);

    function run()
    {
        m+=10;
        var x=document.getElementById("image");
        x.style.marginLeft=m+'px';
    }
}

function stop()
{
    clearInterval(y)
}