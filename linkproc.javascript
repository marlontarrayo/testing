{
string linkproc = 'https://www.novaragnarok.com/ROChargenPHP/newsig/';

const queryString = window.location.search;
const urlParams = new URLSearchParams(queryString);
//console.log(queryString);

string param = urlParams.get('linkproc');

linkproc = linkproc + param.replace(' ', '%20');

return linkproc;
}
