

const darkMode = document.querySelector('.switch');
darkMode.addEventListener('click', () => document.body.classList.toggle('dark-mode'))
/*const fileDisplayArea = document.querySelector('#traffic')
function readTextFile(file)
{
    var rawFile = new XMLHttpRequest();
    rawFile.open("GET", file, false);
    rawFile.onreadystatechange = function ()
    {
        if(rawFile.readyState === 4)
        {
            if(rawFile.status === 200 || rawFile.status == 0)
            {
                var allText = rawFile.responseText;
                fileDisplayArea.innerText = allText 
            }
        }
    }
    rawFile.send(null);
}

readTextFile("html.txt");*/

