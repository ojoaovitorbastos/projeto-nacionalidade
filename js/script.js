let t1 = document.getElementById("t1");
      let t2 = document.getElementById("t2");
      const bnt = document.getElementById("bnt");
      let p = document.getElementById("p");
      let p2 = document.getElementById("p2");

      bnt.addEventListener("click", function () {
        if (t1.value.toLowerCase() == "" || t2.value.toLowerCase() == "") {
          window.alert("Digite algo para continuar");
        } else {
          switch (t1.value.toLowerCase()) {
            case "brasil":
            case "br":
              p.innerHTML = "Você é Brasileiro! 🇧🇷";
              switch (t2.value.toLowerCase()) {
                case "acre":
                case "ac":
                  p2.innerHTML = "E também Acreano! 🏞️";
                  break;
                case "alagoas":
                case "al":
                  p2.innerHTML = "E também Alagoano! 🌊";
                  break;
                case "amapá":
                case "ap":
                  p2.innerHTML = "E também Amapaense! 🌴";
                  break;
                case "amazonas":
                case "am":
                  p2.innerHTML = "E também Amazonense! 🌳";
                  break;
                case "bahia":
                case "ba":
                  p2.innerHTML = "E também Baiano! 🥥";
                  break;
                case "ceará":
                case "ce":
                  p2.innerHTML = "E também Cearense! 🌅";
                  break;
                case "distrito federal":
                case "df":
                  p2.innerHTML = "E também Brasiliense! 🏛️";
                  break;
                case "espírito santo":
                case "es":
                  p2.innerHTML = "E também Capixaba! 🏖️";
                  break;
                case "goiás":
                case "go":
                  p2.innerHTML = "E também Goiano! 🏞️";
                  break;
                case "maranhão":
                case "ma":
                  p2.innerHTML = "E também Maranhense! 🍍";
                  break;
                case "mato grosso":
                case "mt":
                  p2.innerHTML = "E também Mato-grossense! 🌄";
                  break;
                case "mato grosso do sul":
                case "ms":
                  p2.innerHTML = "E também Sul-mato-grossense! 🌵";
                  break;
                case "minas gerais":
                case "mg":
                  p2.innerHTML = "E também Mineiro! ⛏️";
                  break;
                case "pará":
                case "pa":
                  p2.innerHTML = "E também Paraense! 🌲";
                  break;
                case "paraíba":
                case "pb":
                  p2.innerHTML = "E também Paraibano! 🏖️";
                  break;
                case "paraná":
                case "pr":
                  p2.innerHTML = "E também Paranaense! 🌲";
                  break;
                case "pernambuco":
                case "pe":
                  p2.innerHTML = "E também Pernambucano! 🌊";
                  break;
                case "piauí":
                case "pi":
                  p2.innerHTML = "E também Piauiense! 🏜️";
                  break;
                case "rio de janeiro":
                case "rj":
                  p2.innerHTML = "E também Carioca! 🏖️";
                  break;
                case "rio grande do norte":
                case "rn":
                  p2.innerHTML = "E também Potiguar! 🌴";
                  break;
                case "rio grande do sul":
                case "rs":
                  p2.innerHTML = "E também Gaúcho! 🧉";
                  break;
                case "rondônia":
                case "ro":
                  p2.innerHTML = "E também Rondoniense! 🏞️";
                  break;
                case "roraima":
                case "rr":
                  p2.innerHTML = "E também Roraimense! 🏔️";
                  break;
                case "santa catarina":
                case "sc":
                  p2.innerHTML = "E também Catarinense! 🏖️";
                  break;
                case "são paulo":
                case "sp":
                  p2.innerHTML = "E também Paulista! 🏙️";
                  break;
                case "sergipe":
                case "se":
                  p2.innerHTML = "E também Sergipano! 🏝️";
                  break;
                case "tocantins":
                case "to":
                  p2.innerHTML = "E também Tocantinense! 🌳";
                  break;
                default:
                  p2.innerHTML = "";
                  break;
              }
              break;
            default:
              p.innerHTML = "Você é estrangeiro! ✈️";
              p2.innerHTML = "";
              break;
          }
        }
      });