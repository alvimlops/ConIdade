function Verificar(){
    var data = new Date()
    var ano = data.getFullYear()
    var fano = document.getElementById ('txtano')
    var res = document.querySelector('div#res')
    if (fano.value.length == 0 || Number(fano.value) > ano){
        window.alert('[ERRO] Verifique os dados e tente novamente!')
    } else {
        var fsex = document.getElementsByName ('radsex')
        var idade = ano - Number(fano.value)
        var genero = ''
        var img = document.createElement('img')
        img.setAttribute ('id', 'foto')
        if (fsex[0].checked){
            genero = 'Homen'
            if (idade >=0 && idade < 10){
                //criança
                img.setAttribute ('srs', 'boyfive.png')
            } else if (idade < 21) {
                //Jovem
                img.setAttribute ('srs', 'adolecenteboy.png')
            } else if ( idade < 50){
                // adulto
                img.setAttribute ('srs', 'men.png')
            } else {
                //idoso
                img.setAttribute ('srs', 'velhoman.png')
            }

        } else if (fsex[1].checked){
            genero = 'Mulher'
            if (idade >=0 && idade < 10){
                //criança
                img.setAttribute ('srs', 'gilrfive.png')
            } else if (idade < 21) {
                //Jovem
                img.setAttribute ('srs', 'adolecentegirl.png')
            } else if ( idade < 50){
                // adulto
                img.setAttribute ('srs', 'women.png')
            } else {
                //idoso
                img.setAttribute ('srs', 'veiawomen.png')
            }
        }
        res.styler.textAlign = 'center'
        res.innerHTML = `Detectamos ${genero} com ${idade} anos.`
        res.appendChild(img)
    }
}