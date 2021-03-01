var string_inner_container = document.getElementById('string_inner_container');
string_inner_container.innerHTML = 'Random String: ' + randomGen(8)



randomGen(5)
function randomGen(string_length) {
    var random_string = '';
    var characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789abcdefghijklmnopqrstuvwxyz';
    for(var i, i = 0; i < string_length; i++){
        random_string += characters.charAt(Math.floor(Math.random() * characters.length));
    }
    return (random_string);
}