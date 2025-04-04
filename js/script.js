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
        {
          number: "card--13",
          title: "Harley Quinn",
          textContent: "Harley Quinn is a criminal psychologist turned flamboyant criminal menace and the former girlfriend and sidekick to the Joker. While her intentions are typically good, her methods often betray her insanity, Quinn has acted as both ally and enemy to Batman.",
        },
        {
          number: "card--14",
          title: "Phoenix Wright",
          textContent: "Phoenix Wright is a veteran defense attorney who heads the Wright Anything Agency. Mostly specializing in criminal trials, Wright is renowned for his ability to turn seemingly hopeless cases around.",
        },
        {
          number: "card--15",
          title: "Gryf",
          textContent: "Gryfenfer, (de son vrai nom Anoth-Cha) est un Jaguarian et membre des Légendaires. Fils de l'ancien roi de Jaguarys et frère jumeau de l'actuel, il a été monslave durant sa jeunesse, sous les ordres de Menthos.",
        },
        {
          number: "card--16",
          title: "Batman",
          textContent: "Batman is the superhero protector of Gotham City, a tortured, brooding vigilante dressed as a bat who fights against evil and strikes fear into the hearts of criminals everywhere. In his public identity, he is Bruce Wayne.",
        },
        {
          number: "card--17",
          title: "Mumbo Jumbo",
          textContent: "MumboJumbo, known as Mumbo for short, is a YouTuber and member of the Hermitcraft server, known for his redstone videos. He joined at the start of Season 2. He has 9,310,000 subscribers and is the most subscribed of the Hermits.",
        },
        {
          number: "card--18",
          title: "Employee",
          textContent: "Employees are playable characters and the main protagonists in Lethal Company. An employee's job is to venture out and explore moons, collect scrap and sell it to the Company in order to meet the profit quota.",
        },
        {
          number: "card--19",
          title: "Mega Man",
          textContent: "Mega Man, known as Rockman (ロックマン Rokkuman) in Japan, or Mega (Rock in Japan) for short, is the main titular protagonist of the original Mega Man series.",
        },
        {
          number: "card--20",
          title: "Luke Triton",
          textContent: "Luke Triton is the deuteragonist of the Professor Layton series. He is the son of Professor Layton's friend Clark Triton and is the professor's self-proclaimed apprentice.",
        },
        {
          number: "card--21",
          title: "Waldo",
          textContent: "You found me!",
        },
        {
          number: "card--22",
          title: "Coach",
          textContent: "I'm gonna teach your ass how to read.",
        },
        {
          number: "card--23",
          title: "Megamind",
          textContent: "Rise! Rise, my glorious creation, and come to Papa! | Spider? Y-uhh, yes, the, the spee-ider. Even the smallest bite from Arachnus deathicus will instantly paralyze - OW! Get if off! Ow, it bit me!",
        },
      ]
    }
  },
});

app.component("persocard", {
  props: ["pnumber", "ptitle", "ptextcontent"],
  template: `
  <div class="containCard">
    <div class="card" :class="pnumber">
      <h1>{{ptitle}}</h1>
      <p>{{ptextcontent}}</p>
    </div>
  </div>
  `
});

app.mount(".app");

const widthNormal = document.querySelector('#widthNormal');
widthNormal.value = "350px";
const widthSmall = document.querySelector('#widthSmall');
widthSmall.value = "350px";
const root = document.querySelector(':root');

widthNormal.addEventListener('change', () => {
  let valueNormal = widthNormal.value;
  if (Number.isInteger(valueNormal) == true || valueNormal == null) {
    valueNormal = "350px";
  }
  root.style.setProperty('--widthNormal', `${valueNormal}`);
  console.log(typeof valueNormal, " ", valueNormal);
});

widthSmall.addEventListener('change', () => {
  let valueSmall = widthSmall.value;
  if (Number.isInteger(valueSmall) == true || valueSmall == null) {
    valueSmall = "350px";
  }
  root.style.setProperty('--widthSmall', `${valueSmall}`);
  console.log(typeof valueSmall, " ", valueSmall);
});