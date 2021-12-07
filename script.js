var oyuncu;

var seçenek = ["taş", "kağıt", "makas"];

var bilgisayar = Math.floor(Math.random() * seçenek.length);



var taş = document.querySelector("#taş");

var kağıt = document.querySelector("#kağıt");

var makas = document.querySelector("#makas");



taş.addEventListener("click", taş1);

kağıt.addEventListener("click", kağıt1);

makas.addEventListener("click", makas1);


console.log(bilgisayar);



        function taş1(){
        
            var oyuncu = this.attributes["data-name"].value;
    
            if(oyuncu == "0" && bilgisayar == "0"){

                console.log("berabere");
                document.getElementById("result").innerHTML = "Berabere !";

            }else if(oyuncu = "0" && bilgisayar == "1"){

                console.log("kaybettin");
                document.getElementById("result").innerHTML = "Bilgisayar Kazandı !";

            }else if(oyuncu = "0" && bilgisayar == "2"){

                console.log("kazandın");
                document.getElementById("result").innerHTML = "Oyuncu Kazandı !";

            }
        };
        
        function kağıt1(){

            var oyuncu = this.attributes["data-name"].value;
    
            if(oyuncu == "1" && bilgisayar == "0"){

                console.log("kazandın");
                document.getElementById("result").innerHTML = "Oyuncu Kazandı !";

            }else if(oyuncu = "1" && bilgisayar == "1"){

                console.log("berabere");
                document.getElementById("result").innerHTML = "Berabere !";

            }else if(oyuncu = "1" && bilgisayar == "2"){

                console.log("kaybettin");
                document.getElementById("result").innerHTML = "Bilgisayar Kazandı !";

            }
        };
        
        function makas1(){

            var oyuncu = this.attributes["data-name"].value;
    
            if(oyuncu == "2" && bilgisayar == "0"){

                console.log("kaybettin");
                document.getElementById("result").innerHTML = "Bilgisayar Kazandı !";

            }else if(oyuncu = "2" && bilgisayar == "1"){

                console.log("kazandın");
                document.getElementById("result").innerHTML = "Oyuncu Kazandı !";

            }else if(oyuncu = "2" && bilgisayar == "2"){

                console.log("berabere");
                document.getElementById("result").innerHTML = "Berabere !";

        };

    };
