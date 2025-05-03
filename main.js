const testimonials = [
    {
        name: "- Iori Yagami",
        photoUrl: "images/iori.jpg",
        text: " A rose blooms best near death. You're in full bloom, pal!"

    },
    {
        name: "- Kyo Kusanagi",
        photoUrl: "images/kyo.jpg",
        text: "Burn in the fury of my flames, you worthless weakling!"

    },
    {
        name: "- K'dash",
        photoUrl: "images/kdash.jpg",
        text: "Everyone wants it, but there's no shortcut to freedom."

    },
    {
        name: "- Terry Bogard",
        photoUrl: "images/terry.jpg",
        text: "I won't lose until I avenge my father's death."

    },
    {
        name: "- Rock Howard",
        photoUrl: "images/rock.jpg",
        text: "Until my limit...I'll fly on!"

    },
    {
        name: "- Shun'ei",
        photoUrl: "images/shunei.jpg",
        text: "You only lost a battle. It's a waste to get depressed over every little thing."

    },
    {
        name: "- Benimaru Nikaido",
        photoUrl: "images/benimaru.jpg",
        text: "Bond with your teammates. Trust is what wins battles!"

    },
    {
        name: "- Ralf Jones",
        photoUrl: "images/ralf.jpg",
        text: "I'm a one-man battalion!"

    },
    {
        name: "- Ash Crimson",
        photoUrl: "images/ash.jpg",
        text: "Don't play your trump card till the end...the very end!"
    },
    {
        name: "- Robert Garcia",
        photoUrl: "images/robert.jpg",
        text: "True fighters need composure."
    },
    {
        name: "- Yuri Sakazaki",
        photoUrl: "images/yuri.jpg",
        text: "Why am I so strong? Talent, just pure talent."
    },
    {
        name: "- Mai Shiranui",
        photoUrl: "images/mai.jpg",
        text: "Heh heh! Were you enchanted? A martial artist is nothing without discipline!"
    },
    {
        name: "- Leona Heidern",
        photoUrl: "images/leona.jpg",
        text: "I, Leona Heidern, shall always fulfill my mission."
    },
    {
        name: "- Joe Higashi",
        photoUrl: "images/joe.jpg",
        text: "Can you hear it? Huh? Those cheers are for me!"
    },
    {
        name: "- Chizuru Kagura",
        photoUrl: "images/chizuru.jpg",
        text: "Those with reasons to live have the true power to win!"
    },
    {
        name: "- Shingo Yabuki",
        photoUrl: "images/shingo.jpg",
        text: "Your efforts aren't in vain! You just may win next time!"
    },
    {
        name: "- King",
        photoUrl: "images/king.jpg",
        text: "In battle, one's sex means nothing. Who's left standing is what matters."
    },
    {
        name: "- Kula Diamond",
        photoUrl: "images/kula.jpg",
        text: "The only way to go on living is to keep on winning."
    },
    {
        name: "- Athena Asamiya",
        photoUrl: "images/athena.jpg",
        text: " thought I might lose...but, if you believe in miracles, they can happen!"
    },
    {
        name: "- Takuma Sakazaki",
        photoUrl: "images/takuma.jpg",
        text: "Kyokugen Karate is the true way of battle!"
    },
    {
        name: "- Ryo Sakazaki",
        photoUrl: "images/ryo.jpg",
        text: "Fight, fight, fight. It's the only way to get tough!"
    },
    {
        name: "- Kim Kaphwan",
        photoUrl: "images/kim.jpg",
        text: "I'm about to teach you the terror of Tai Kwan Do."
    },
    {
        name: "- Andy Bogard",
        photoUrl: "images/andy.jpg",
        text: "Mental strength's the secret. Experience taught me that!"
    },
    {
        name: "- Sie Kensou",
        photoUrl: "images/sie.jpg",
        text: "Dragons. Tigers. Just beasts. But I am a creature of reason." 
    },
    {
        name: "- Geese Howard",
        photoUrl: "images/geese.jpg",
        text: "It's a sin that you don't know your place in this world. You should learn your limits!"
    },
    {
        name: "- Ryuji Yamazaki",
        photoUrl: "images/ryuji.jpg",
        text: "Was I fighting unfairly? I don't care about that." 
    },
    {
        name: "- Clark Still",
        photoUrl: "images/clark.jpg",
        text: "Losers have no rights. That's what history's all about."
    },
    {
        name: "- Elisabeth Blanctorche",
        photoUrl: "images/lizy.jpg",
        text: "Showing calm in the eye of the storm. That is the mark of a true fighter, no?"
    },
    {
        name: "- Luong",
        photoUrl: "images/luong.jpg",
        text: "You’ve got talent; why don’t you try Tae Kwon Do? I’ll teach you everything I know."
    },
    {
        name: "- Shermie",
        photoUrl: "images/shermie.jpg",
        text: "If you wanna be famous, your skills have to match up."
    },
    {
        name: "- Rugal bernstein",
        photoUrl: "images/rugal.jpg",
        text: "Happiness is but a dream. Pain is the true reality!"
    },
    {
        name: "- Vice",
        photoUrl: "images/vice.jpg",
        text: "Through time man's only true nature has been evil."
    },
    {
        name: "- Mature",
        photoUrl: "images/mature.jpg",
        text: "You must pay for your sins. The time of atonement has come!"
    },
    {
        name: "- Blue Mary",
        photoUrl: "images/mary.jpg",
        text: "Please, no tears. Just laugh it off!"
    },
    {
        name: "- Vanessa",
        photoUrl: "images/vanessa.jpg",
        text: "Believe. Work. Get back up when you fall... That's life!"
    },
    {
        name: "- Duo Lon",
        photoUrl: "images/duolon.jpg",
        text: "Listen to the moans of the dead as they roam this world. You too, will join them someday."
    },
    {
        name: "- Shen Woo",
        photoUrl: "images/shen.jpg",
        text: "You wanna know one of my strengths? I have absolutely no problem hitting women!"
    },
    {
        name: "- Goro Daimon",
        photoUrl: "images/goro.jpg",
        text: "Your greatest strength is your consistency. Don't forget that."
    },
    {
        name: "- Maxima",
        photoUrl: "images/maxima.jpg",
        text: "All systems functional. I'm ready for 10 more matches!"
    },
    {
        name: "- Nakoruru",
        photoUrl: "images/nako.jpg",
        text: "Until there's peace,I'll fight!"
    },
    {
        name: "- Yashiro Nanakase",
        photoUrl: "images/yash.jpg",
        text: "Size! Speed! Guts! I've got 'em all!"
    },
    {
        name: "- Chris",
        photoUrl: "images/chris.jpg",
        text: "Things are looking up for me, huh?"
    },
    {
        name: "- Krizalid",
        photoUrl: "images/kri.jpg",
        text: "Your ambitions...exceed your strength."
    },

];

const imgElement=document.querySelector("img");
const textElement=document.querySelector(".text");
const usernameElement=document.querySelector(".username")
let idx=0;
updateTestimonial();
function updateTestimonial(){
    const {name , photoUrl , text}= testimonials[idx];
    imgElement.src = photoUrl;
    textElement.innerText= text;
    usernameElement.innerText=name;
    idx++;
    if(idx==testimonials.length){
        idx=0;
    }
    setTimeout(()=>{
        updateTestimonial()
    },500)
}
