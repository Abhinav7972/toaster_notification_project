function createToaster(config)
{

    return function (str) {
        let div = document.createElement("div");
        div.textContent = str;
       const classes = `inline-block ${config.theme ==='dark'? "bg-gray-800 text-white": "bg-white text-gray-800"}  px-6 py-4 rounded shadow-lg pointer-events-none transition-opacity`;
        div.classList.add(...classes.split(/\s+/));
     
     
        document.querySelector('.parent').appendChild(div);

        if(config.positionX !=='left' || config.positionY!=='top')
        {
            document.querySelector('.parent').classList.add('fixed');
            document.querySelector('.parent').classList.add(`${config.positionX === 'right' ? 'right-5' : 'left-5'}`);
            document.querySelector('.parent').classList.add(`${config.positionY === 'bottom' ? 'bottom-5' : 'top-5'}`);
            
        }

        setTimeout(() => {
           document.querySelector('.parent').removeChild(div);
        },config.duration * 1000)
    };

}

let toaster =createToaster({
    positionX: "right",
    positionY: "top",
    theme: "dark",
    duration: 5,
    
});


toaster('download done');

setTimeout(() => {
toaster('updating...');

},2000)
