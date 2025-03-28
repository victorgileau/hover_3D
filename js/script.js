const app = Vue.createApp({
    data() {
      return {
        contentArr: [
          {
            number: "card--1",
            title: "Knight",
            textContent: "The Knight is a tank class, starting with the highest vitality value of all classes, as well as the most robust equipment.",
          },
          {
            number: "card--2",
            title: "Auron",
            textContent: "Auron [\ˈɔː.ɹən] is a playable character in Final Fantasy X. He is a former warrior monk of Yevon, a guardian of Summoner Braska, and Tidus's caretaker.",
          },
          {
            number: "card--3",
            title: "Kain Highwind",
            textContent: "Kain Highwind is a playable character in Final Fantasy IV and Final Fantasy IV: The After Years. He is a Dragoon from the kingdom of Baron, Cecil Harvey's childhood friend.",
          },
          {
            number: "card--4",
            title: "Solid Snake",
            textContent: "Solid Snake, real name David, also known as Old Snake, and briefly known as Iroquois Pliskin, or simply Snake, was a former spy, special operations soldier, and mercenary.",
          },
          {
            number: "card--5",
            title: "Master Chief",
            textContent: "Master Chief Petty Officer John-117,[Note 1] more commonly known as Master Chief, is a SPARTAN-II commando of the UNSC Naval Special Warfare Command.",
          },
          {
            number: "card--6",
            title: "Deadpool",
            textContent: "Deadpool, or Wade Wilson is a character from the Marvel Comics. first appeared in New Mutants #98 in December 1990 and was created by artist and writer Rob Liefeld, as well as writer Fabian Nicieza.",
          },
          {
            number: "card--7",
            title: "Astérix",
            textContent: "Astérix est l'un des membres du village le plus intelligent et le plus sensible, et est donc généralement choisi pour toutes missions périlleuses.",
          },
          {
            number: "card--8",
            title: "Sauron",
            textContent: "Sauron (Quenya; [\'saʊron] or [\'θaʊron]), the eponymous Lord of the Rings, was the greatest fallen Maia, maker of the One Ring, renowned disciple of Aulë, and chief agent of Morgoth in the Elder Days.",
          },
          {
            number: "card--9",
            title: "MSN-04 Sazabi",
            textContent: "After Char Aznable returned as the leader of his own Neo Zeon faction in U.C. 0093, he ordered his engineers to create a new mobile suit which would fit his piloting skills and Newtype powers.",
          },
          {
            number: "card--10",
            title: "BT",
            textContent: "Upon Lastimosa's death and under extreme circumstances, BT linked to then-Rifleman Jack Cooper, and the duo fought their way across Typhon to complete Special Operation 217.",
          },
          {
            number: "card--11",
            title: "Jack Cooper",
            textContent: "Jack Cooper is the Pilot protagonist and the playable character of Titanfall 2's single-player campaign. Beginning his military career as a Rifleman in the Frontier Militia, he is the (eventual) Pilot of BT-7274.",
          },
        ]
      }
    },
  });
  
  app.component("persocard", {
    props: ["pnumber", "ptitle", "ptextcontent"],
    template: `
    <div class="card" :class="pnumber">
      <h1>{{ptitle}}</h1>
      <p>{{ptextcontent}}</p>
    </div>
    `
  });
  
  app.mount(".app");