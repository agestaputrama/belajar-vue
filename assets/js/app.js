var app = new Vue({
    el : '#app',
    data : {
        content : '',
        komentars : ['komentar 1', 'komentar 2', 'komentar 3'],
        tanggal : 'tes',
        score : 0
    },
    methods :{
        sumTambah : function(){
            return this.score + 1;
        },
        sumKurang : function(){
            return this.score - 1;
        },
        addKomen : function(){
            this.komentars.push(this.content);
            this.content = '';
        },
    },
    
});