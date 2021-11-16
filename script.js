


/*function FadeOut() <<<<THIS WORKS
{
    let Thom = document.getElementById("ThomHead");
    Thom.style.opacity = "0";
}*/




const OpacityMgr =
{
    
    ToOne         : function (Element, OnComplete)
        {
        let Thom = document.getElementById("ThomHead");
        Thom.style.opacity = '1';
        FadedIn();

        },

//--------------------------------------------

    ToZero        : function ()
        {
        let Thom = document.getElementById("ThomHead");
        Thom.style.opacity = '0';
        FadedOut();
        }

};

function FadedIn ()
{
console.log ('Faded In' );
}

function FadedOut ()
{
console.log ('Faded Out' );
}
