/* SHAD @ TMU 2026 — the whole dataset. One copy; both pages read it.
   Keyed by ISO date. Each day = PA duty roster + sessions.
   Authoring doctrine lives in ../CLAUDE.md. Meals/breaks/sleep/travel are excluded. */

window.SHAD = {
  tz: "America/Toronto",
  ga_id: "G-N4EHLWPS2F",           // GA4 Measurement ID; gtag/js?id=<id> must return 200. Empty string disables analytics.
  program: { start: "2026-07-06", end: "2026-07-19" },  // Weeks 1–2 (more weeks appended as they arrive)

  days: {

    /* ===================== MONDAY — arrival & orientation ===================== */
    "2026-07-06": {
      week: 1,
      headline: "Day one — you just landed.",
      pa_duty: {
        room_checks: [ {floor:"6",pa:"Raquel"}, {floor:"7",pa:"Jacob"}, {floor:"8",pa:"Fadumo"} ],
        off: []
      },
      sessions: [
        { display_time:"8:30 AM", kind:"social", title:"Meet your teams + Welcome", location:"DCC",
          primer_gist:"Your first look at your house group and the month ahead — names, faces, the schedule." },
        { display_time:"10:00 AM", kind:"workshop", title:"Improv Icebreaker", speaker:"Bianca Stagliano", location:"DCC",
          speaker_gist:"Improv facilitator running your first real icebreaker.",
          primer_gist:"Improv runs on one rule — “yes, and”: accept what someone offers, then add to it. It's the lowest-stakes way to start meeting 130 strangers.",
          agenda:"Quick games, lots of laughing, meeting people fast.",
          buildoff:"“Yes, and” is also how good brainstorming works — you'll reuse it in your project all month." },
        { display_time:"1:30 PM", kind:"field-trip", title:"TMU Campus Tour & Orientation", speaker:"TMU Student Recruitment", location:"DCC 350/352",
          primer_gist:"Learn the buildings you'll live in for a month — DCC, SLC, KHE, MAC, Pitman. Where things are stops being a daily puzzle.",
          agenda:"Walking tour of campus + how SHAD@TMU logistics work." },
        { display_time:"4:00 PM", kind:"talk", title:"Fears about SHAD", speaker:"Zoe (Rec Director)", location:"DCC 350/352",
          primer_gist:"Everyone arrives nervous — about the work, the people, being away. Naming a fear out loud takes most of its power away.",
          buildoff:"Say the thing you're actually worried about. Odds are 100 other people are worried about the same one." },
        { display_time:"7:00 PM", kind:"social", title:"Astrodome — Astronomy in Action", location:"SLC Amphitheatre",
          primer_gist:"A guided planetarium-style show — Solar System, stars, galaxies, space exploration. Nothing to prep; just look up." }
      ]
    },

    /* ===================== TUESDAY — the rotation begins ===================== */
    "2026-07-07": {
      week: 1,
      headline: "The workshops kick in.",
      pa_duty: {
        room_checks: [ {floor:"6",pa:"Fatimah"}, {floor:"7",pa:"Niksha"}, {floor:"8",pa:"Jenna"} ],
        off: [ {pa:"Niksha", when:"8–9 PM"} ]
      },
      sessions: [
        { display_time:"9:00 AM", kind:"workshop", title:"STEM with Purpose: Building Assistive Technology Together", group:"Groups 1 & 2", location:"SLC 8th Floor",
          primer_gist:"Assistive tech works best when it's designed *with* the people who'll use it, not just for them. Expect disability-inclusive, human-first engineering.",
          agenda:"What assistive technology is, who it serves, and a hands-on build.",
          buildoff:"The “design with, not for” idea is gold for your project — the best solutions come from the user, not the whiteboard." },
        { display_time:"9:00 AM", kind:"workshop", title:"Texas Instruments", group:"Group 4", location:"DCC 103/104",
          primer_gist:"Hands-on with TI hardware — embedded electronics and signal/data tools. Real chips, real measurements.",
          agenda:"Guided build/experiment with TI kit.",
          buildoff:"If your project has any electronics, this is where you learn what's actually feasible to prototype." },
        { display_time:"10:00 AM", kind:"workshop", title:"Physics Lab", group:"Group 3", location:"KHE 235B",
          primer_gist:"A real university physics lab — the point is measurement and uncertainty, not memorized formulas. Every reading has error; good science says how much.",
          agenda:"A guided experiment with real apparatus.",
          buildoff:"Notice how they handle uncertainty — that rigor is exactly what your IB Physics labs are graded on." },
        { display_time:"2:00 PM", kind:"workshop", title:"Texas Instruments", group:"Group 1", location:"DCC 103/104",
          primer_gist:"Hands-on with TI hardware — embedded electronics and signal/data tools.",
          agenda:"Guided build/experiment with TI kit." },
        { display_time:"2:00 PM", kind:"workshop", title:"Physics Lab", group:"Group 2", location:"KHE 235B",
          primer_gist:"A real university physics lab — measurement and uncertainty over memorized formulas.",
          agenda:"A guided experiment with real apparatus." },
        { display_time:"2:00 PM", kind:"workshop", title:"STEM with Purpose: Building Assistive Technology Together", group:"Groups 3 & 4", location:"SLC 8th Floor",
          primer_gist:"Assistive tech designed *with* its users — disability-inclusive, human-first engineering.",
          agenda:"What assistive technology is, who it serves, and a hands-on build." },
        { display_time:"5:00 PM", kind:"talk", title:"Decoding Biology with AI", speaker:"Richard Dong", role:"PhD Student, Medical Biophysics — U of T & Vector Institute", location:"DCC 103/104",
          speaker_gist:"PhD student at U of T's Medical Biophysics and the Vector Institute — Canada's top AI research hub — working on AI applied to biology.",
          primer_gist:"“AI” here means systems that *learn* patterns from data instead of following rules a human wrote. You'll train a real image model in minutes and watch it get fooled.",
          primer_full:`<p><b>Traditional computing:</b> a human writes exact rules (“if pixel &gt; 200, it's bright”). <b>Machine learning:</b> you show the computer thousands of labelled examples and it <em>learns</em> the rule itself — useful when the rule is too fuzzy to write, like “this cell looks cancerous.”</p><p>You'll use <b>Teachable Machine</b> to train a vision model from your own webcam images, then probe where it breaks — that's the real lesson. AI is <em>confidently wrong</em> when it meets something unlike its training data, it inherits bias from that data, and it's hungry for lots of examples.</p><p>In biology this is huge: predicting protein shapes, reading medical scans, spotting patterns across millions of cells no human could scan.</p>`,
          agenda:"How AI differs from normal code → build a vision model in Teachable Machine → where it fails → uses in biology.",
          buildoff:"Try to break your own model on purpose — the failure tells you more than the success. Ask Richard what the Vector Institute actually works on.",
          questions:[
            "What can an AI model see in biological data that a trained human genuinely can't?",
            "When a model is confidently wrong, how do you catch it before it reaches a real patient?",
            "Did you come to the Vector Institute from biology or from computer science — and which is harder to learn second?"
          ] },
        { display_time:"8:00 PM", kind:"social", title:"Photo Scavenger Hunt", location:"DCC 350/352",
          primer_gist:"House groups race to complete photo challenges around campus. Great way to learn the map and your teammates at once." }
      ]
    },

    /* ===================== WEDNESDAY — rotation continues ===================== */
    "2026-07-08": {
      week: 1,
      headline: "Halfway through the first week.",
      pa_duty: {
        room_checks: [ {floor:"6",pa:"Faiqa"}, {floor:"7",pa:"Sirna"}, {floor:"8",pa:"Rishaan"} ],
        off: [ {pa:"Joella", when:"12–1:30"} ]
      },
      sessions: [
        { display_time:"9:00 AM", kind:"workshop", title:"Texas Instruments", group:"Group 3", location:"DCC 350/352",
          primer_gist:"Hands-on with TI hardware — embedded electronics and signal/data tools.",
          agenda:"Guided build/experiment with TI kit." },
        { display_time:"9:00 AM", kind:"workshop", title:"Data Dunkers", group:"Groups 1 & 2", location:"MAC",
          primer_gist:"Data science with a basketball flavour — you analyze real sports data (expect Python/pandas-style tools) and let the numbers tell a story.",
          agenda:"Load real data → find a pattern → visualize it.",
          buildoff:"Every claim you'll make in an IA or EE needs data behind it — this is a friendly on-ramp to “show me the numbers.”" },
        { display_time:"10:00 AM", kind:"workshop", title:"Physics Lab", group:"Group 4", location:"KHE 235B",
          primer_gist:"A real university physics lab — measurement and uncertainty over memorized formulas.",
          agenda:"A guided experiment with real apparatus." },
        { display_time:"2:00 PM", kind:"workshop", title:"Data Dunkers", group:"Groups 3 & 4", location:"MAC (upstairs at 4:00)",
          primer_gist:"Sports data science — analyze real data and let the numbers tell a story.",
          agenda:"Load real data → find a pattern → visualize it." },
        { display_time:"2:00 PM", kind:"workshop", title:"Physics Lab", group:"Group 1", location:"KHE 235B",
          primer_gist:"A real university physics lab — measurement and uncertainty over memorized formulas.",
          agenda:"A guided experiment with real apparatus." },
        { display_time:"2:00 PM", kind:"workshop", title:"Texas Instruments", group:"Group 2", location:"DCC 350/352",
          primer_gist:"Hands-on with TI hardware — embedded electronics and signal/data tools.",
          agenda:"Guided build/experiment with TI kit." },
        { display_time:"5:30 PM", kind:"social", title:"PA Workshop: Jeopardy", speaker:"Jenna Bindra", location:"DCC 350/352",
          primer_gist:"A PA-run Jeopardy night — low stakes, high fun. Bring your random knowledge." },
        { display_time:"8:00 PM", kind:"talk", title:"Hustle 101", speaker:"Haseeb", location:"DCC 350/352",
          primer_gist:"“Hustle” = making things happen with what you already have, before you feel ready. Expect stories about initiative and side projects.",
          buildoff:"Ask for the smallest first step he took — the honest answer is usually embarrassingly small, which is the point.",
          questions:[
            "What was the smallest, most embarrassing first step you actually took?",
            "How do you start something before you feel ready without it being reckless?",
            "What's a side project that flopped, and what did it teach you?"
          ] }
      ]
    },

    /* ===================== THURSDAY (today) — the showpiece day ===================== */
    "2026-07-09": {
      week: 1,
      headline: "Costumes, capital, design & open-heart surgery — in one day.",
      pa_duty: {
        room_checks: [ {floor:"6",pa:"Arianna"}, {floor:"7",pa:"Daniel"}, {floor:"8",pa:"Ayesha"} ],
        off: [ {pa:"Fadumo", when:"8 AM–12 PM"} ]
      },
      sessions: [
        {
          display_time:"9:00 AM", kind:"workshop",
          title:"We Do, We Undo, We Redo: Costume Making for the Stage",
          speaker:"Prof. Caroline O'Brien", role:"Chair, School of Performance — The Creative School, TMU",
          location:"DCC 350/352", email:"c4obrien@torontomu.ca",
          speaker_gist:"Costume designer who spent nearly 20 years as resident designer at Canada's National Ballet School; now chairs TMU's School of Performance.",
          speaker_full:`<p>O'Brien is an Associate Professor in <b>Costume Design and Making</b> and has chaired TMU's School of Performance since 2019. Before teaching she was resident costume designer and wardrobe supervisor at <b>Canada's National Ballet School</b> for almost two decades.</p><p>She has a long collaboration with <b>Peggy Baker Dance Projects</b>, and curated <em>Sixty Years of Designing the Ballet</em> for the National Ballet of Canada — work that won the Costume Society of America's Richard Martin citation. She also makes large-scale sculpture out of industrial metal textiles, exhibited internationally, and had designs chosen for the inaugural World Stage Design (2005).</p>`,
          primer_gist:"Costume isn't decoration — it builds a character's identity, and unlike fast fashion it's made slowly, by a whole team, to survive a full run of shows.",
          primer_full:`<p><b>Costume is the lens we read character through.</b> What a person wears tells you who they are before they speak — so it's <em>compressed exposition</em>, "show don't tell" in cloth. And nothing on the body is an accident: every detail is a deliberate signal, which is exactly why it's readable (you read most of it subconsciously).</p>

<p><b>What a costume tells you.</b> First it <em>locates</em> the character — <b>when</b> (period, time of day), <b>where</b> (place, culture), and the <b>who-facts</b> (age, gender, class/status, occupation). Get those wrong and belief breaks. Then it <em>reveals</em> them — <b>personality &amp; character</b>, the person inside. The facts are the believable baseline; personality is where design becomes authorship — and the richest storytelling is the <b>tension</b> between the two (dressing above your class, or a costume that fights the script).</p>

<p><b>Five techniques to watch for:</b></p>
<ul>
<li><b>Aspiration / identity</b> — <em>Breakfast at Tiffany's</em> (Givenchy): Holly's little black dress is armour — a small-town girl performing a sophisticate.</li>
<li><b>Colour + historic silhouette for legibility</b> — <em>The Hobbit</em>: colour-coded, period-shaped costumes let you read culture, status, and which character is which, instantly.</li>
<li><b>Distress = implied history</b> — <em>Indiana Jones</em> (Deborah Nadoolman): a new jacket aged to look worn for a lifetime, smuggling in a backstory you never see.</li>
<li><b>Ensemble + one accent</b> — a muted coat against a single red lip: your eye is directed to the mouth, restraint outside and heat underneath (the same "one bold thing, everything else quiet" rule as an accent colour in design).</li>
<li><b>Past / present / future in one outfit</b> — a palette that shifts to track an arc (<em>Breaking Bad</em>: meek beige → Heisenberg black).</li>
</ul>

<p><b>Two axes: meaning vs. making.</b> Everything above is <em>meaning</em>. The other axis is <b>craft</b> — the virtuosity of the <em>making</em>: the cut, the drape, hand-finishing, dyeing, the "breakdown" (aging by hand), and building something that <em>moves</em> with the actor, survives eight shows a week, and photographs right under lights. You never consciously see it; you feel it as authenticity. This is O'Brien's actual turf — Costume Design <em>and Making</em>, ~20 years building costumes at the National Ballet School. Her title, <em>"We Do, We Undo, We Redo,"</em> <b>is</b> that craft: fit, adjust, perfect, repeat. The detail even extends to the <em>room</em> — a working shop of cutting tables, dress forms, labelled fabric and notions, dye stations and fitting mirrors is itself arranged for precision, because you can't do fine work in chaos.</p>

<p><b>Who's in a pro costume shop</b> (she'll walk through these roles): the <em>designer</em> (concept + drawings), the <em>cutter/draper</em> (turns a drawing into a 3-D pattern), the <em>wardrobe supervisor</em> (runs the shop + the show), and <em>stitchers</em> (build it). A team craft, not one artist — a single classical tutu can take <b>a dozen specialists</b> to build — and a <b>hierarchy</b>: the more senior the role, the more creative input (and respect) you carry, from stitchers who execute up to the designer who decides. It's also the opposite of <b>fast fashion</b>: bespoke, repaired, re-used, built to last — a sustainability argument hiding inside an art form.</p>

<p><b>It's bigger than costume.</b> Costume is one instrument in the whole design system — <b>scenic</b> (the world), <b>lighting</b> (focus, time, emotion — the stage's real "lens"), <b>sound</b> (feeling &amp; rhythm), and <b>projection</b> (dynamic media). They interlock: the <em>same</em> costume reads differently under warm vs. cold light, or against a matching vs. clashing set. The "lens through which we see a story" is really all of them coordinated toward one vision — what film calls <em>mise-en-scène</em>, what Wagner called a <em>Gesamtkunstwerk</em> (total work of art).</p>

<p><b>In ballet specifically</b> (O'Brien's world): the costume answers to a <em>moving, athletic body</em> — it must free a jump and a turn, never restrict them, and enhance the <b>line</b> of the dance. And ballet is <b>ephemeral</b>: it exists live, then it's gone — so a third collaborator matters, the <b>photographer</b>, whose framing, timing and light are how the costume and the dance are preserved and seen beyond the theatre. Dancer (the living medium) + designer (movement made wearable) + photographer (the moment kept) — O'Brien has worked all three edges (National Ballet School, Peggy Baker Dance Projects, and curating <em>Sixty Years of Designing the Ballet</em>).</p>

<p><b>Sketch → living archive.</b> A design is not the garment: the shop <em>interprets</em> a designer's drawing into three dimensions (a designer like <em>Santo Loquasto</em> hands over designs that makers realise), and that interpretation is its own creative act. Productions keep a <b>"show bible"</b> recording a costume down to its materials and construction — the Sugar Plum Fairy tutu, say — so it can be rebuilt exactly, season after season. And because these are built to last, the <em>actual cloth</em> is often still danced in decades later: ballet costume is a living archive, the opposite of disposable.</p>

<p><b>Bring these questions:</b></p>
<ul>
<li>How does designing for a <em>moving dancer</em> differ from dressing a static character — what can't you do?</li>
<li>How do you decide what a costume makes us read <em>before</em> any dialogue — and when should it contradict the script?</li>
<li>How do you build a character's past, present, and arc into a single outfit?</li>
<li>How much do you design around the lighting and set — has a lighting choice ever flipped how a costume read on stage?</li>
<li>What detail are you proudest of that the audience will never consciously see?</li>
</ul>`,
          agenda:"How a costume goes concept → design → build; what it makes us read (period, place, status, character); the pro-shop roles; why it's the opposite of fast fashion.",
          buildoff:"She's a maker, not just a designer — push past “what does it mean” into “how is it built.” Bring one real question about the craft (a few are in the primer).",
          questions:[
            "How does dressing a moving dancer differ from a static character — what can't you do?",
            "When should a costume deliberately contradict the script instead of reinforcing it?",
            "What detail are you proudest of that the audience will never consciously notice?"
          ]
        },
        {
          display_time:"10:30 AM", kind:"talk",
          title:"Investing in the 21st Century: Getting Started",
          speaker:"Prof. Alan Kaplan", role:"Finance — Ted Rogers School of Management, TMU",
          location:"DCC 350/352",
          speaker_gist:"Finance professor at Ted Rogers who helps guide TMU's student-run fund — students manage a real portfolio worth over $900,000.",
          speaker_full:`<p>Kaplan teaches in TMU's School of Accounting &amp; Finance; his areas include ethics in finance, finance pedagogy, and sports finance.</p><p>Since Fall 2020 he's helped guide the <b>Student Managed Investment Fund (SMIF)</b> — students in the Applied Investment Management courses (FIN 650/750) run a real portfolio seeded with <b>$900,000</b> under a genuine investment policy. This talk is the on-ramp: what those students do, and how you could get involved at TMU later.</p>`,
          primer_gist:"The most powerful idea in investing is compounding: your returns earn their own returns. Starting early beats starting big — try the slider below and see.",
          primer_full:`<p><b>Compounding</b> is the whole game. Put money in, it earns a return; next year that return <em>also</em> earns a return, and so on. Over decades the curve bends upward hard — which is why a 16-year-old's biggest advantage isn't money, it's <em>time</em>.</p><p><b>Two ways in:</b> pick individual stocks (hard, risky, what the SMIF students practise), or buy a broad <em>index fund</em> that owns a slice of the whole market (cheap, boring, historically effective). His talk covers what a real managed portfolio looks like and how you'd start.</p><p><b>The three areas of finance</b> (where this talk sits): <b>personal finance</b> — your own money (budget, save, borrow, invest for yourself); <b>corporate finance</b> — a company's money (how it raises capital and chooses which projects to fund); and <b>investment finance</b> — markets and assets (valuing and managing securities). The SMIF lives in the third; your "$500 today" question is the first — same tools, different pot of money.</p><p><b>"Finance is a people business."</b> The numbers are table stakes — what actually moves deals and careers is <em>people</em>: trust, relationships, and being able to explain something complex simply and persuade. Every deal is done between people who have to trust each other, and the markets themselves run on human behaviour (fear and greed). It's also why Kaplan works on <em>ethics in finance</em> — the discipline is judgment about people, not just spreadsheets.</p><p><b>Ethical mutual funds</b> are where that ethics gets concrete: funds that <em>screen</em> what they buy — avoiding, say, weapons or fossil fuels and favouring companies that score well on environmental, social and governance (<b>ESG</b>) measures. You invest your money <em>and</em> your values; the live debate is whether it costs you returns (the evidence is mixed).</p><p><b>The hard skills are the "soft" ones.</b> The people side is really three skills: <b>speaking</b> (explain and persuade), <b>teamwork</b> (get things done through others), and <b>leadership</b> — and leadership is the genuinely hard one. You can't cram it: it's getting people to follow <em>without</em> ordering them, owning the outcome when it lands on you, and making the unpopular call. It's judgment built only through reps and responsibility — the same "learned by doing, not from a book" as any real craft.</p><p><b>Be respectful and gentle with yourself.</b> Because you grow these skills by doing, you grow them by <em>failing</em> along the way — so patience with yourself isn't softness, it's what keeps you in the game long enough to get good. Beating yourself up doesn't speed the reps; it just burns them.</p><p><b>What makes a good investor.</b> Keep <b>realistic expectations</b> — it's a slow, long game with no doubling overnight; unrealistic hopes are how people get scammed or panic-sell. And <b>never invest more than you can afford to lose</b>: only money you won't need soon, because real investing carries real risk. Boring and disciplined beats exciting.</p>`,
          widget:"compound-growth",
          agenda:"What the SMIF students actually do → what a real $900K portfolio looks like → how compounding works → how to start (and get involved at TMU later).",
          buildoff:"Play with the compounding slider before the talk so his numbers click. Then ask the real question: what should someone with $500 and no income do <em>today</em>?",
          questions:[
            "With $500 and no income, what's the single first move you'd actually endorse today?",
            "If index funds beat most active managers, what's the honest case for the students picking stocks?",
            "When the fund loses real money, what's the lesson that lands hardest?"
          ]
        },
        {
          display_time:"1:30 PM", kind:"workshop",
          title:"Design Thinking",
          speaker:"Prof. Steven Gedeon", role:"Director, TMU Entrepreneur Institute — Ted Rogers School of Management",
          location:"DCC 350/352",
          speaker_gist:"Runs TMU's Entrepreneur Institute; has founded a dozen+ organizations and his student teams have won 35+ entrepreneurship championships.",
          speaker_full:`<p>Gedeon is an Associate Professor and Director of the <b>TMU Entrepreneur Institute</b>, one of the world's larger student experiential-entrepreneurship programs. He's founded or led 12+ private, public, VC and non-profit organizations and published 100+ articles and patents.</p><p>He teaches TMU's <em>Design Thinking</em> course; his student teams have taken 35+ regional and national championships, many in social entrepreneurship.</p>`,
          primer_gist:"Design thinking means starting with the human, not the product: empathize → define → ideate → prototype → test — looping fast instead of planning perfectly.",
          primer_full:`<p>The five moves, in order, but you loop them constantly:</p><p><b>1. Empathize</b> — watch and talk to a real user; get their actual problem, not your guess. <b>2. Define</b> — write the problem as one sharp sentence. <b>3. Ideate</b> — generate many bad ideas fast (quantity first). <b>4. Prototype</b> — build the cheapest rough version. <b>5. Test</b> — put it in front of the user, learn, go back a step.</p><p>The mantra: <em>“fall in love with the problem, not the solution.”</em> Most teams skip empathizing and build something nobody needs.</p>`,
          agenda:"The five-stage loop → empathizing with a real user → rapid ideation → why a rough prototype beats a polished plan.",
          buildoff:"This is literally the method behind your SHAD project. Ask how to pick the *right* problem — that's where teams go wrong. Bring your group's one-sentence problem statement.",
          questions:[
            "How do you pick the <em>right</em> problem — the step where most teams go wrong?",
            "What's the most common way beginners fake the 'empathize' stage?",
            "Have you seen a great process produce a bad idea? What went wrong?"
          ]
        },
        {
          display_time:"6:30 PM", kind:"lecture",
          title:"Cardiac Surgery — Lecture & Q&A",
          speaker:"Dr. Bobby Yanagawa", role:"Division Head, Cardiac Surgery, St. Michael's Hospital · MD, PhD, FRCSC",
          location:"DCC 350/352",
          speaker_gist:"Head of cardiac surgery at St. Michael's Hospital and U of T's cardiac surgery program director — 90+ research papers on bypass and valve surgery.",
          speaker_full:`<p>Yanagawa did his BSc and PhD at UBC, then his MD and cardiac-surgery residency at the University of Toronto. He now leads the <b>Division of Cardiac Surgery at St. Michael's Hospital</b> and directs U of T's cardiac surgery program.</p><p>His clinical and research focus is <b>surgical revascularization</b> (bypass) and <b>valvular heart disease</b>. He's published 90+ peer-reviewed papers (including in <em>Nature Communications</em>, <em>Nature Medicine</em>, and <em>Circulation</em>) and directs the Canadian Society of Cardiac Surgeons' Equity-Diversity-Inclusion Taskforce and its National Residency Bootcamp.</p>`,
          primer_gist:"Two ideas cover most heart surgery: revascularization (rerouting blood around a blocked artery — a bypass) and valve repair (fixing the heart's one-way doors).",
          primer_full:`<p><b>The plumbing:</b> your heart muscle is fed by <em>coronary arteries</em>. If one clogs, that muscle starves — a heart attack. A <b>bypass (CABG)</b> grafts a spare blood vessel around the blockage, like a detour around a closed road.</p><p><b>The valves:</b> the heart has four one-way doors. They can leak (<em>regurgitation</em>) or stiffen and narrow (<em>stenosis</em>). Surgeons repair or replace them.</p><p><b>“Open-heart”</b> usually means the heart is stopped and a <em>heart-lung machine</em> does its job while the surgeon works — then it's restarted. Let that sink in before you walk in.</p>`,
          agenda:"What a cardiac surgeon actually does day to day → bypass vs. valve surgery → a real case → open Q&A.",
          buildoff:"It's a Q&A — the value is your question. Come with one real one: how does he decide repair vs. replace a valve? What's the hardest judgment call mid-operation?",
          questions:[
            "How do you decide to repair a valve versus replace it?",
            "What's the hardest judgment call you make mid-operation, with the chest already open?",
            "Where is AI or robotics actually changing heart surgery today — and where is it just hype?"
          ]
        },
        {
          display_time:"8:00 PM", kind:"social",
          title:"Team Building", location:"DCC 350/352",
          primer_gist:"House groups compete in challenges built for communication and bonding. No prep — just show up ready to be a good teammate.",
          buildoff:"Low-stakes reps at the exact collaboration your project needs. Watch who naturally organizes and who defuses tension — useful intel for crunch week."
        }
      ]
    },

    /* ===================== FRIDAY ===================== */
    "2026-07-10": {
      week: 1,
      headline: "Ideas into ventures — and a waterballoon fight.",
      pa_duty: {
        room_checks: [ {floor:"6",pa:"Joseph"}, {floor:"7",pa:"Joella"}, {floor:"8",pa:"Raquel"} ],
        off: [ {pa:"Jacob", when:"all day"}, {pa:"Sirna", when:"all day"}, {pa:"Ayesha", when:"all day"} ]
      },
      sessions: [
        { display_time:"2:00 PM", kind:"talk", title:"Entrepreneurship 101", speaker:"Michael McCarthy", role:"CEO, Hypatia · teaches entrepreneurship at TMU & U of T · Lab2Market mentor", location:"DCC 350/352",
          speaker_gist:"Serial software CEO and startup investor who teaches entrepreneurship at TMU and U of T, and mentors scientist-founders turning research into companies through Lab2Market.",
          speaker_full:`<p>McCarthy teaches entrepreneurship at <b>TMU's Faculty of Engineering</b> and is an adjunct professor of leadership and entrepreneurship in the <b>Department of Computer Science at the University of Toronto</b>. He's an executive advisor, board member and investor across Toronto's tech scene, and CEO of <b>Hypatia</b>.</p><p>Before advising founders he ran the companies himself — CEO of three enterprise-software firms (<b>Springer-Miller Systems</b> in Vermont, <b>MSI Solutions</b> in Arizona, and <b>Dealertrack Technologies Canada</b> in Toronto), with earlier executive roles at Davis+Henderson and Scotiabank, plus time as a venture capitalist and management consultant. As a mentor and facilitator with <b>Lab2Market</b>, he coaches scientist-founders on turning research into real ventures — “bringing science to market.”</p><p>He holds a B.Sc. and B.A. from U of T, an M.B.A. (McMaster &amp; Manchester Business School) and an M.A. (Royal Military College), and received U of T's Arbor Award in 2012.</p>`,
          primer_gist:"Entrepreneurship isn't the idea — it's finding a real customer who'll pay, and proving that cheaply before you build the whole thing.",
          primer_full:`<p><b>What McCarthy actually hammered</b> — the idea is the easy part; winning comes from obsessive detail, a bias for offense, and a value proposition sharp enough to break into a crowded market.</p>
<p><b>Attention to detail = fans for life.</b> His story: Van Halen's tour contract buried a clause banning <em>brown</em> M&amp;Ms backstage. Not diva nonsense — a <em>test</em>. Their show hauled tons of stage rigging with strict safety specs, so a stray brown M&amp;M told the band the venue hadn't read the contract carefully and every technical detail needed re-checking. The candy was a canary for sloppiness. Sweat the small stuff, earn trust — and trust is what turns customers into fans for life.</p>
<p><b>A venture has to play offense — hard.</b> Your only real edge over a big incumbent is speed, so protect it: minimize formal roles, strip out bureaucracy and process, throw away old work (old code) instead of defending it, maximize agility, and align every stakeholder around one common goal.</p>
<p><b>Ideation stands on three legs:</b> <em>purpose</em> (why this should exist), <em>value proposition</em> (the value you deliver), and <em>competitive advantage</em> (why you and not them).</p>
<p><b>Nail the value proposition.</b> Start from a real problem in the market, then a solution to it. The market is already competitive, so “as good as” loses — you have to do it <em>better</em>. Anchor it in actual dollar value (quantify what it's worth to the customer), and where you can, an environmental/social value too.</p>
<p><b>Differentiate to break in.</b> Pick an axis and win it clearly: <em>cheaper</em> price, <em>better service</em>, or a specific <em>demographic</em> you serve better than anyone.</p>
<p><b>Your “right to win.”</b> The honest question behind all of it: <em>why will WE win this when anyone could try the same idea?</em> Your right to win is the concrete, hard-to-copy advantage that makes success credible — a capability, asset, insight or relationship rivals can't easily replicate, in a market where it actually matters. Can't name yours? You're entering on hope, not strategy.</p>
<p>Most first ventures die the same way: building something nobody wanted. The idea is the cheap part — the risky assumption is always <em>“will anyone actually pay for this?”</em></p><p><b>The lean move:</b> talk to real potential customers first, then build the smallest thing that tests your riskiest assumption (a “minimum viable product”), and let their <em>behaviour</em> — not their politeness — tell you if it's real.</p><p><b>Funding climbs a staircase, not a ramp.</b> Plot a venture's growth against time and it steps up in stages — <em>seed → early → market → scale</em> — with a flat stretch between each jump until the next injection of money lets you climb again. Each step has its own typical source of cash:</p>
<ul>
<li><b>The 3 Fs</b> — friends, family &amp; fools: the very first money, people who back <em>you</em> before there's any proof.</li>
<li><b>Angels</b> — wealthy individuals betting their own money early (often with mentorship attached) in exchange for equity.</li>
<li><b>Venture capital</b> — professional funds writing bigger cheques once there's traction, buying equity to pour fuel on growth.</li>
<li><b>Bridge</b> — short-term financing to “bridge” the gap to the next round or milestone when you'd otherwise run out of cash.</li>
<li><b>Revenue</b> — the end goal: the business funds its own growth from money customers actually pay you, so you lean less on outside capital.</li>
</ul>
<p>Rule of thumb: the earlier and riskier the stage, the closer-to-home and more personal the money; the more proven the traction, the more institutional it gets — with bridges to patch the gaps until revenue can carry you.</p>
<p><b>Early on, investors bet on the team.</b> Before there's traction to point to, angels and VCs are really backing the <em>people</em>: do the founders genuinely understand the field, and do they have the expertise and credibility to pull it off? The idea will change; what they're buying is the team's depth of understanding and ability to execute — invest in the jockey, not just the horse.</p>
<p><b>Two curves ride that same timeline.</b> <em>Risk</em> starts high at seed and falls steadily as the model gets proven — the reason early money is personal and later money institutional. <em>EBITDA</em> — operating profit, roughly the cash the business itself throws off (Earnings Before Interest, Taxes, Depreciation &amp; Amortization) — starts <b>negative</b>: after seed you're spending to build with little coming in. It climbs as you grow and crosses into the <b>black about halfway through the market stage</b> — the classic startup “J-curve,” where you lose money before you make it.</p>
<div class="widget-mount" data-widget="venture-lifecycle"></div>
<p><b>Unit economics</b> is the reality check: you have <em>fixed costs</em> (tools, rent) no matter what, plus a <em>cost per unit</em> to make each one. You only make money once enough units sell — at a price above their unit cost — to cover those fixed costs. That crossover is the <b>break-even</b>. Feel it below.</p>
<div class="widget-mount" data-widget="break-even"></div>
<p><b>Every stage has one core job.</b> In the <em>early</em> stage it's finding an <b>early adopter</b> — the first customer willing to try something rough because they feel the problem most sharply. By the <em>scale</em> stage the job flips to <b>growth and revenue</b>: you formalize and scale your processes, hyper-focus on <b>sales</b>, and bend the product to <em>support</em> selling. The scoreboard changes too — you stop counting hand-sold deals and start counting <b>paid subscribers</b>, moving away from founder-led selling toward a repeatable machine.</p>
<p><b>Selling itself is a cycle</b>, and knowing which step you're on tells you what to do next: a <b>sales-qualified lead</b> (someone who fits and is genuinely interested) → your <b>value proposition</b> (why it's worth it) → a <b>proposal / price quote</b> → <b>negotiation and review</b> → the close. Each step qualifies harder than the last, so you spend energy only where a deal can actually happen.</p>
<div class="widget-mount" data-widget="sales-funnel"></div>
<p><b>The “top 10” test for a <em>true</em> sale.</b> A real sale only happens when you solve a problem the customer <em>already</em> ranks among their biggest. His test: ask a prospect to name the top 10 things they already deal with or spend on — based on the tools and products they <em>already have</em>, not your pitch. If the problem you solve isn't one of them, that's a problem: you're a “nice to have,” not a priority, and they won't truly buy.</p>
<p><b>One rule across the whole process: if you know you have an issue, bring it up yourself.</b> Name the weakness or limitation before the customer discovers it. It builds trust, lets you frame it on your own terms, and defuses the objection instead of getting ambushed by it later — the same attention-to-detail honesty that turns buyers into repeat customers.</p>
<p><b>B2B vs. B2C — really a marketing distinction.</b> Who your customer is changes how you <em>market</em> to them. <b>B2B</b> (business-to-business) markets to other companies: a few big buyers reached through targeted, relationship- and content-driven marketing feeding a real sales cycle, with decisions made by committee on hard ROI. <b>B2C</b> (business-to-consumer) markets to individual people: mass reach through brand and advertising, winning many small, fast, often emotional purchases. The same product can need completely different marketing depending on which one you are — that formal sales cycle above is a <em>B2B</em> motion, while B2C runs on a marketing funnel.</p>
<p><b>The founder's real skill is prioritization.</b> Astronaut <em>Chris Hadfield</em>'s rule from spaceflight: <b>“focus on what is going to kill you next.”</b> Not everything urgent matters — attack the thing that ends you if you ignore it. His toolkit:</p>
<ul>
<li><b>Timing / horizons</b> — sort work by daily vs. weekly vs. monthly; different clocks demand different attention.</li>
<li><b>Urgent vs. important</b> — they're not the same, and it's the important-but-not-urgent that quietly gets starved.</li>
<li><b>Resource allocation</b> — deliberately split effort between the <em>core business</em> and <em>experiments</em>.</li>
<li><b>Divide and conquer</b> — break the big scary thing into pieces someone can actually own.</li>
<li><b>Focus, then pivot</b> — commit hard, but change direction fast the moment the evidence says so.</li>
</ul>
<p>His bottom line, said twice for emphasis: <b>focus on the product, and prioritize ruthlessly.</b> Every tool above just protects the time to build the one thing that actually matters.</p>
<p><b>So what's the company actually worth?</b> For a public company the headline number is <b>market cap</b> — share price × number of shares — the market's total price tag on the business. But how do you price one that isn't public yet?</p>
<p><b>The comparables method</b> is how it's done in practice:</p>
<ul>
<li><b>Understand the performance</b> — start with the real numbers: revenue, earnings, growth, margins.</li>
<li><b>Find a comparable</b> — a similar company (same industry, model, size) the market <em>already</em> prices.</li>
<li><b>Determine the multiple</b> — the ratio the market pays for that comp, e.g. the <b>P/E ratio</b> (price ÷ earnings): “investors pay $X for every $1 of yearly profit.”</li>
<li><b>Gear it to your attributes</b> — nudge that multiple up or down for how you differ: faster growth, fatter margins or lower risk earn a <em>higher</em> multiple; the opposite earns a lower one.</li>
</ul>
<p>That last step is why identical earnings can be worth wildly different amounts. A company making $1M a year at a P/E of 10 is worth ~$10M; at a P/E of 20, ~$20M — <b>same profit, double the value.</b> The multiple the market assigns (driven by growth hopes, risk and hype) moves the price as much as the earnings do.</p>
<p><b>What drives the multiple?</b> A <em>high</em> P/E means the market is paying for expected <b>growth</b> — future earnings, not just today's — while a <em>low</em> one signals slow growth or high risk. That's why a fast-growing software startup can command 20–40× while a stagnant business trades at 5–8×. Drag it yourself:</p>
<div class="widget-mount" data-widget="pe-valuation"></div>
<p><b>And how does everyone finally get paid?</b> All that equity is just paper until a “liquidity event” — an <b>exit</b> — turns it into cash. Four ways out:</p>
<ul>
<li><b>Strategic sale</b> — a bigger company acquires you, and pays up because you make <em>them</em> better: you lift their efficiency, or they push your product through global sales channels and distribution you could never build yourself. The classic startup happy ending.</li>
<li><b>IPO (Initial Public Offering)</b> — you list on a stock exchange and sell shares to the public. Founders and early investors can finally sell their stake, and employees holding equity through an <b>ESOP</b> (Employee Stock Ownership Plan) share in the payday too.</li>
<li><b>MBO / LBO</b> — a <b>Management Buy-Out</b> (the people running it buy it) or a <b>Leveraged Buy-Out</b> (buyers fund the purchase mostly with borrowed money, secured against the company itself).</li>
<li><b>Bankruptcy</b> — the exit nobody wants: the venture can't cover its debts and winds down, assets sold to repay creditors, with shareholders last in line and often left with nothing.</li>
</ul>
<p>Every investor back on that funding staircase is betting you reach one of the first three before the fourth.</p>
<p><b>Sharp questions to ask him about the early stage (right after seed):</b></p>
<ul>
<li>How do you find your first early adopters — and tell a real one (who'll pay and give hard feedback) from someone just being polite?</li>
<li>Should the founder personally do <em>every</em> sale early on? When do you hire the first real salesperson?</li>
<li>How do you price your first customers with no track record — is giving it cheap or free a mistake?</li>
<li>Right after seed, how do you choose between raising angel money and bootstrapping on your first revenue?</li>
<li>How do you know you're ready to leave the early stage and scale — and how do founders scale too early and kill themselves?</li>
<li>How do you tell “this just needs more time” from “this needs a pivot”?</li>
<li>What's the thing most likely to “kill you next” right after seed that founders keep ignoring?</li>
</ul>`,
          agenda:"Attention to detail as a moat (the Van Halen brown-M&amp;M test) → play offense as a venture → ideation: purpose, value proposition, competitive edge → your “right to win” and how you differentiate → test cheaply (MVP) and the money side (break-even) → the funding staircase (3 Fs → angels → VC → bridge → revenue) → each stage's core job (early adopter → sales at scale) → the sales cycle → B2B vs. B2C marketing → prioritizing what will “kill you next” → valuing the company (market cap, comparables, P/E multiples) → and how everyone finally gets paid: the exit (strategic sale / IPO / MBO-LBO / bankruptcy).",
          buildoff:"Pair this with Thursday's design thinking — same loop, money lens. He's a real investor who's run three software companies, so ask the sharp one: what's the cheapest experiment that would prove your SHAD project idea is worth pursuing?",
          questions:[
            "What's the cheapest experiment that would prove our SHAD idea is worth pursuing?",
            "How do you tell a real early adopter from someone who's just being polite?",
            "What's a skill school rewards that actively works against you as a founder?"
          ] },
        { display_time:"7:00 PM", kind:"social", title:"Waterballoon Fight", location:"The Quad",
          primer_gist:"Exactly what it says. Wear clothes you don't mind soaking, and leave your phone inside." }
      ]
    },

    /* ===================== SATURDAY ===================== */
    "2026-07-11": {
      week: 1,
      headline: "Camera-ready, then a soccer game.",
      pa_duty: {
        room_checks: [ {floor:"6",pa:"Jacob"}, {floor:"7",pa:"Fadumo"}, {floor:"8",pa:"Fatimah"} ],
        off: [ {pa:"Faiqa", when:"all day"}, {pa:"Niksha", when:"all day"} ]
      },
      sessions: [
        { display_time:"9:00 AM", kind:"social", title:"Headshot Day", location:"SLC 8th Floor",
          primer_gist:"Free professional headshots. Dress like the version of you a scholarship committee or recruiter should meet — this photo will outlive SHAD.",
          buildoff:"Use it right away: refresh your LinkedIn / scholarship profiles this week, while you look sharp and SHAD is fresh on your story." },
        { display_time:"4:00 PM", kind:"field-trip", title:"AFC Soccer Game", location:"York University — Lions Stadium",
          primer_gist:"A live soccer outing at York's Lions Stadium — a real match with your house. Bring water and something for the sun." }
      ]
    },

    /* ===================== SUNDAY ===================== */
    "2026-07-12": {
      week: 1,
      headline: "Off campus — city & retreat.",
      pa_duty: {
        room_checks: [],
        off: []
      },
      sessions: [
        { display_time:"11:30 AM", kind:"field-trip", title:"Kensington Market", group:"Group 1", location:"Downtown Toronto",
          primer_gist:"A wander through Kensington Market — Toronto's most eclectic neighbourhood: vintage shops, global food, murals. Bring a little cash." },
        { display_time:"2:30 PM", kind:"field-trip", title:"Cedar Glen", group:"Group 2", location:"Cedar Glen (north of the city)",
          primer_gist:"An off-site trip to Cedar Glen — outdoor/retreat space for a change of pace from campus." }
      ]
    },

    /* ========================================= WEEK 2 ========================================= */

    /* ===================== MONDAY — retreat ===================== */
    "2026-07-13": {
      week: 2,
      headline: "Retreat at Cedar Glen, then back to the city.",
      pa_duty: { room_checks: [], off: [] },
      sessions: [
        { display_time:"Morning", kind:"field-trip", title:"Cedar Glen Retreat", location:"YMCA Cedar Glen Outdoor Centre, Schomberg",
          primer_gist:"An outdoor retreat at the YMCA's 263-acre Cedar Glen centre on the Oak Ridges Moraine, north of the city — a reset away from campus before Week 2 kicks in.",
          primer_full:`<p>Cedar Glen is the <b>YMCA of Greater Toronto's outdoor-education centre</b> in Schomberg, Ontario — 263 acres of forest and trail on the Oak Ridges Moraine. Expect team-building, outdoor activities and some downtime; nothing to prep beyond clothes for the weather.</p>` }
      ]
    },

    /* ===================== TUESDAY — breather + project ===================== */
    "2026-07-14": {
      week: 2,
      headline: "A breather, a mall run, and the design challenge.",
      pa_duty: { room_checks: [], off: [ {pa:"Fatimah", when:"10:15–11 AM (Faiqa covers)"} ] },
      sessions: [
        { display_time:"1:00 PM", kind:"field-trip", title:"Mall Outing", location:"Toronto",
          primer_gist:"A group trip to the mall — errands, food and a change of scene. Bring whatever you need to restock for the week." },
        { display_time:"7:00 PM", kind:"workshop", title:"Design Challenge Chat", location:"PIT 200",
          primer_gist:"A working check-in on the SHAD Design–Entrepreneurship challenge — where your team is and what to tackle next.",
          primer_full:`<p>A project working session, not a lecture — a chance to pressure-test your team's direction on the SHAD DE brief (<em>Reimagining the Lifecycle of Everyday Goods</em>): the problem, the users, and the value you're actually creating, then line up the week's build.</p>`,
          buildoff:"Come with your team's one-sentence problem statement. If you can't say it in a sentence, that's tonight's job." }
      ]
    },

    /* ===================== WEDNESDAY — into the labs ===================== */
    "2026-07-15": {
      week: 2,
      headline: "Into the labs — nursing simulation, and prepping to do real science.",
      pa_duty: {
        room_checks: [ {floor:"6",pa:"Niksha"}, {floor:"7",pa:"Jenna"}, {floor:"8",pa:"Faiqa"} ],
        off: []
      },
      sessions: [
        { display_time:"8:30 AM", kind:"workshop", title:"SciXChange Prep: Lab Skills & Etiquette", speaker:"TMU SciXChange", location:"DCC 350/352",
          speaker_gist:"TMU's science-outreach office — its mission is to make science engaging, comprehensible and accessible.",
          primer_gist:"A short primer to get you lab-ready before the real university labs — safety, proper technique and lab etiquette.",
          primer_full:`<p><b>SciXChange</b> is Toronto Metropolitan University's science-outreach office (it runs events like Science Rendezvous and Soapbox Science). This session sets you up to work in a real lab:</p><ul><li><b>Safety</b> — protective equipment, hazard symbols, where the emergency gear is, no food or drink.</li><li><b>Technique</b> — measuring and handling equipment carefully, following a protocol, recording what you actually did.</li><li><b>Etiquette</b> — clean your station, share equipment, dispose of waste properly, work respectfully in a group.</li></ul><p><em>(The specific station list wasn't published; the above is the standard shape of a pre-lab session.)</em></p>`,
          buildoff:"This rigor is exactly what your IB science labs are graded on — treat it as free marks later." },
        { display_time:"10:00 AM", kind:"workshop", title:"Nursing Simulation Lab", group:"Groups 1 & 4", speaker:"Susana Neves-Silva", role:"Manager, Central Placement Office & Simulation — Daphne Cockwell School of Nursing, TMU", location:"DCC 4th Floor",
          speaker_gist:"Runs the placements office and the simulation lab at TMU's Daphne Cockwell School of Nursing.",
          primer_gist:"A tour and hands-on time in a nursing simulation lab — a mock hospital ward with computerized patient manikins where students practise real care safely.",
          primer_full:`<p>A <b>simulation lab</b> is a mock hospital ward — real beds, monitors and supplies — where nursing students rehearse care in a safe space before ever touching a real patient. TMU frames it as building "competence and confidence" through realistic clinical scenarios.</p><p><b>High-fidelity manikins</b> are computerized, life-size patient simulators that breathe, have a pulse, blink, speak and respond to treatment; an instructor programs a scenario (say, a patient going into distress) and students must react. TMU's lab — used by ~400 students a year — also has 3D holographic anatomy tables and VR, after a <b>$1.6M</b> 2022 upgrade.</p><p><b>Why it matters:</b> you can make and fix mistakes with zero risk to a real person, practise rare emergencies on demand, and repeat a skill until it's reliable. On a tour you might handle vital-signs gear (blood-pressure cuff, pulse-oximeter, stethoscope) and task-trainers for skills like IV insertion.</p><p><em>TMU's Daphne Cockwell School of Nursing was, in 1964, the first general post-secondary institution in Canada to offer a nursing program.</em></p>`,
          buildoff:"Ask what the manikins can simulate that a textbook can't — usually 'a patient who changes while you're deciding what to do.'",
          questions:[
            "What can a manikin simulate that a textbook never could?",
            "How realistic does a scenario have to be before the skill transfers to a real patient?",
            "What mistake do students make most often in their very first simulation?"
          ] },
        { display_time:"2:00 PM", kind:"social", title:"Yoga with Charlotte Hunter", location:"RAC Studio I",
          primer_gist:"A yoga session in TMU's Recreation & Athletics Centre — stretch, breathe and reset mid-week. No experience needed; wear something you can move in." },
        { display_time:"2:00 PM", kind:"workshop", title:"Nursing Simulation Lab", group:"Groups 2 & 3", speaker:"Susana Neves-Silva", role:"Manager, Central Placement Office & Simulation — Daphne Cockwell School of Nursing, TMU", location:"DCC 4th Floor",
          speaker_gist:"Runs the placements office and simulation lab at TMU's Daphne Cockwell School of Nursing.",
          primer_gist:"The afternoon rotation of the nursing simulation lab — a mock ward with computerized patient manikins for safe, hands-on practice.",
          questions:[
            "What can a manikin simulate that a textbook never could?",
            "How realistic does a scenario have to be before the skill transfers to a real patient?",
            "What mistake do students make most often in their very first simulation?"
          ] },
        { display_time:"6:00 PM", kind:"social", title:"Multicultural Night", location:"SLC 8th Floor",
          primer_gist:"A celebration of the many cultures in your SHAD cohort — food, performances and sharing where everyone's from. Bring something that represents you if you've got it." }
      ]
    },

    /* ===================== THURSDAY (today) — SickKids + quantum ===================== */
    "2026-07-16": {
      week: 2,
      headline: "SickKids in the morning, quantum computing out of pure light by afternoon.",
      pa_duty: {
        room_checks: [ {floor:"6",pa:"Daniel"}, {floor:"7",pa:"Rishaan"}, {floor:"8",pa:"Arianna"} ],
        off: [ {pa:"Joella", when:"off (Niksha covers)"}, {pa:"Fadumo", when:"off (Faiqa covers)"}, {pa:"Sirna", when:"off (Michela covers)"}, {pa:"Jenna", when:"off (Zoe/Lauren cover)"} ]
      },
      sessions: [
        { display_time:"9:00 AM", kind:"lecture", title:"SickKids Research + Medical Lecture", speaker:"David Manly", role:"Research Program Coordinator, Kids Science — The Hospital for Sick Children (SickKids)", location:"DCC 350/352",
          speaker_gist:"A science communicator who runs Kids Science, SickKids' hands-on research-outreach program for young people.",
          primer_gist:"How SickKids works and the research done there, then a hands-on workshop on how the respiratory, circulatory and digestive systems work together.",
          primer_full:`<p><b>SickKids</b> (The Hospital for Sick Children, Toronto) calls itself Canada's largest and most respected paediatric academic health sciences centre; its research institute has 2,000+ researchers, trainees and staff and is affiliated with the University of Toronto. <b>Kids Science</b> is its outreach program getting young people into real research.</p><p><b>Three kinds of research</b> (the lecture's framing): <b>discovery research</b> — fundamental lab-bench science working out how biology works at the level of cells and molecules (the "why does this happen"); <b>clinical research</b> — studies with actual patients, testing whether a treatment, drug or device is safe and works; and <b>population health research</b> — zooming out to whole groups and communities to spot patterns, risk factors and how to improve health at scale (epidemiology). They form a pipeline: a discovery at the bench → a treatment proven in the clinic → rolled out across a population.</p><p><b>Inside clinical research</b> there are three study types: a <b>clinical trial</b> — actively give patients a treatment and measure the effect (the way to prove cause and effect); an <b>observational study</b> — watch and measure without stepping in; and a <b>population(-based) study</b> — hunt for patterns and risk factors across large groups (the clinical, epidemiological engine behind population-health research). The last two <em>observe</em> rather than intervene, which is how you learn things you can't ethically or practically test with a trial.</p><p>Its work is organized into <b>seven research programs</b>: Cell &amp; Systems Biology · Child Health Evaluative Sciences · Developmental, Stem Cell &amp; Cancer Biology · Genetics &amp; Genome Biology · Molecular Medicine · Neurosciences &amp; Mental Health · Translational Medicine.</p><p><b>Inside the programs — example SickKids labs (from the talk):</b></p><ul><li><b>Cell &amp; Systems Biology.</b> <b>Spencer Freeman</b> (Interim Program Head; Canada Research Chair in Immune Surveillance) studies the cell biology of the immune system — how immune cells engulf and destroy invaders at the level of membranes and organelles. The <b>James Rutka Lab</b> takes on childhood brain tumours: Rutka is a SickKids neurosurgeon whose lab uses <em>gold nanoparticles</em> and <em>focused ultrasound</em> to briefly open the blood-brain barrier and deliver drugs straight into a tumour while sparing healthy brain.</li><li><b>Child Health Evaluative Sciences.</b> The <b>Brian Feldman Lab</b> — Feldman heads SickKids' Division of Rheumatology and is a clinician-scientist who builds better <em>methods</em> for studying rare childhood diseases (juvenile arthritis, dermatomyositis): outcome-measurement tools and novel trial designs so that small patient numbers still yield trustworthy answers. (Evaluative science = the science of measuring whether treatments actually work.)</li><li><b>Developmental, Stem Cell &amp; Cancer Biology.</b> <b>Brian Ciruna</b> (the program's head) uses <em>zebrafish</em> to watch how the brain and spinal cord form — and how defects cause disease like scoliosis. The <b>Madeline Hayes Lab</b> builds precision <em>zebrafish (and mouse) models</em> of aggressive childhood cancers (neuroblastoma, sarcomas) to watch a tumour grow and test drugs in a living animal. This is the big idea that <b>you model a human disease in an animal</b> — zebrafish are see-through, breed fast and share much of our biology — so you can watch a disease develop and try treatments before ever touching a patient.</li><li><b>Genetics &amp; Genome Biology.</b> <b>Dr. Jason Moffat</b> is a functional-genomics expert who built the <em>Toronto Knockout (TKO)</em> CRISPR library — switching off every human gene one at a time to find which ones a <b>cancer cell can't survive without</b> (its weak spots). The <b>Ronald Cohn Lab</b> (Cohn is also SickKids' President &amp; CEO and a clinical geneticist) works toward <em>fixing</em> the faulty genes behind muscle diseases like muscular dystrophy.</li><li><b>Molecular Medicine.</b> <b>Dr. Julie Forman-Kay</b> is a world leader on <em>intrinsically disordered proteins</em> — the ~60% of human proteins with floppy, shape-shifting regions the classic "one protein, one fixed shape" rule misses. She helped found the study of <b>biomolecular condensates</b>: disordered proteins can "phase-separate" like oil droplets in water to form membraneless compartments a cell uses to organize itself. The <b>Ji-Young Youn Lab</b> studies those same condensates and how they help cells cope with <em>stress</em> — with implications for cancer, neurodegeneration and infection.</li><li><b>Neurosciences &amp; Mental Health.</b> <b>Dr. Donald Mabbott</b> (the program's head; Canada Research Chair in white-matter plasticity) studies how children's brains develop and recover — including protecting <em>cognition</em> in kids treated for brain cancer, showing gentler treatment can preserve more thinking ability. The <b>Michael Salter Lab</b> (Salter is a former Chief of Research) is a world leader on the biology of <em>pain</em> and neuroplasticity — how neurons and their support cells (glia) drive chronic pain, pointing to new targets for pain, stroke and neurodegeneration.</li><li><b>Translational Medicine.</b> The <b>Andrea Kassner Lab</b> uses <em>quantitative MRI</em> to measure blood flow and oxygen in children's brains — in stroke, sickle-cell disease and other blood-vessel conditions — and co-directs the Stroke Imaging Lab for Children. Fittingly, this program is itself cross-cutting: it pulls researchers from every other program together to turn discoveries into real treatments. (The program head wasn't caught in the talk.)</li></ul><p><b>Radiation vs. chemotherapy — targeted vs. whole-body.</b> A cancer-treatment contrast from the talk: <b>radiation</b> is <em>targeted and local</em> — high-energy beams aimed right at the tumour, sparing the rest of the body. <b>Chemotherapy</b> is <em>systemic</em> — the drug travels through the whole bloodstream and hits fast-dividing cells everywhere, which is why it can reach cancer that has spread but also causes body-wide side effects (hair loss, nausea). That trade-off is exactly what Rutka's lab is chasing: delivery that gives a drug chemo's reach with radiation's precision.</p><p><b>CRISPR/Cas9 — programmable molecular scissors.</b> Borrowed from a bacterial immune defence, CRISPR/Cas9 edits DNA at a precise spot: a short <em>guide RNA</em> is programmed to match one target sequence, and the <em>Cas9</em> protein cuts the DNA exactly there. Once cut, the cell's repair can <b>disable</b> a gene (knock it out) or, with a template, <b>correct</b> it. That's why it appears two ways here — as a <em>research tool</em> (Moffat knocks out genes to find a cancer's essential ones) and as a <em>potential therapy</em> (Cohn edits a broken gene to treat disease).</p><p><b>The real theme: nobody works alone.</b> The programs above are labels, not silos — the speaker said he can't remember a single SickKids project done by <em>one</em> program by itself. Kassner's imaging lab alone collaborates across neurology, radiology, physiology, biophysics, engineering, hematology and respirology. Translational Medicine is that idea turned into a program: it exists to pull people from every other program together and carry a discovery from the lab bench to a child's bedside.</p><p><b>Bench to bedside, for real.</b> The speaker's example was <b>Dr. Lisa Robinson</b> — a paediatric kidney specialist and Senior Scientist who is the <b>founder of both Kids Science and StAR</b> (which is why he's watched her work so closely), and now Dean of U of T's Temerty Faculty of Medicine. Her lab develops <b>warm-perfusion</b> methods that keep donor <b>kidneys</b> healthy outside the body, so organs that would otherwise be too marginal to use can become <em>viable for transplant</em> — in her words, it went “from an idea to experimental research, and now directly impacting patients.” That's the whole pipeline in one career.</p><p><b>SKAI — SickKids Artificial Intelligence.</b> SickKids has launched an enterprise AI program, <b>SKAI</b>, to build, validate and scale AI responsibly across the hospital. It has three arms: a service that safely <em>deploys</em> AI tools into real care, a <em>research</em> arm using AI to accelerate discovery, and a <em>community</em> arm spreading AI literacy. It's a marker of where paediatric medicine is heading — and it rhymes with today's other sessions on AI and quantum computing.</p><p><b>Part 2 — the human body.</b> Manly showed the body's <b>ten organ systems</b>, going through them one at a time (starting with the <b>digestive system</b>) — and the real point is how they <b>interconnect</b>; no system works alone. Three of them, and the link between them:</p><ul><li><b>Respiratory</b> — in the lungs' air sacs, oxygen passes into the blood and carbon dioxide passes out to be exhaled (O₂ in, CO₂ out).</li><li><b>Circulatory</b> — the heart pumps blood through vessels, delivering O₂ and nutrients to every cell and hauling CO₂ and waste away.</li><li><b>Digestive</b> — food is broken down (mouth → stomach → small intestine) into absorbable nutrients that cross into the bloodstream.</li></ul><p><b>The connection:</b> the circulatory system is the shared delivery network — carrying oxygen from the lungs and nutrients from the gut to your cells, which combine them (cellular respiration) to make energy, then carrying the CO₂ back to the lungs to breathe out. None of the three works alone.</p><p><b>The systems he walked through, one by one (of the ten he showed):</b></p><p><b>① Digestive system — and a surprising treatment: the fecal (gut) transplant.</b> Your gut hosts trillions of bacteria — the <em>microbiome</em> — that help digest food and keep you healthy. When that community gets wrecked (say, antibiotics wipe out the good bacteria and let <em>C. difficile</em> take over), a <b>fecal microbiota transplant (FMT)</b> — literally transferring stool, and its healthy bacteria, from a donor into the patient — can re-seed a healthy gut. It's remarkably effective against stubborn <em>C. diff</em> infections and is being studied for other gut diseases; it can be given by colonoscopy, enema, tube, or even swallowed capsules.</p><p><b>② Circulatory system.</b> The heart pumps roughly five litres of blood on a continuous loop, delivering oxygen and nutrients to every cell and carrying carbon dioxide and waste away — the shared “delivery network” that ties the other systems together.</p><p><b>③ Respiratory system — and the only guaranteed hiccup cure.</b> Hiccups are involuntary spasms of the <b>diaphragm</b>, the big breathing muscle under the lungs, triggered through the <b>phrenic nerve</b> that controls it. For rare <em>intractable</em> hiccups that never stop, the definitive fix is surgical — <b>blocking or cutting the phrenic nerve</b> so that half of the diaphragm can no longer spasm. It works essentially 100%, but at a real cost: that half of the diaphragm is now paralysed, so <b>lung capacity drops</b>. (So “poke a hole in the diaphragm” is really “disable the nerve driving it.”)</p><p><b>④ Musculoskeletal system — and the three kinds of muscle.</b> Bones give the body its frame and levers; skeletal muscles pull on them to move you. There are actually three muscle types: <b>skeletal</b> (attached to bones, striped, under your conscious control — you decide to move it), <b>cardiac</b> (only in the heart, involuntary, beats on its own), and <b>smooth</b> (in the walls of hollow organs — gut, blood vessels, airways, bladder — involuntary, doing slow steady work like pushing food along). Notice the crossover: cardiac muscle is the engine of the circulatory system and smooth muscle drives digestion and your blood vessels — the systems keep overlapping.</p><p><b>⑤ Nervous system — neuron types and how pain is “gated.”</b> The nervous system runs on <b>neurons</b> carrying electrical signals. Two key kinds: <b>sensory neurons</b> carry information <em>in</em> — from your senses to the brain and spinal cord (touch, temperature, pain); <b>motor neurons</b> carry commands <em>out</em> — from the brain to your muscles to make you move. <b>Pain is “gated”</b> (the <em>gate control theory</em> of pain): the spinal cord holds a kind of gate that decides how much pain reaches the brain, so your body mostly registers the <em>worst</em> pain and turns the volume down on lesser ones — it's why rubbing a bump actually helps. Push past a threshold and the brain can protectively shut you down — you faint; and if it <em>doesn't</em>, the body can tip into <b>shock</b>, a dangerous crash in blood flow.</p><p><b>Want to actually do this?</b> SickKids posts its volunteer and research application forms on its website (careers &amp; volunteering), with streams for both <b>adults</b> and <b>high-school students</b> — including research-volunteer roles across clinical, wet-lab and dry-lab work. Three programs worth knowing: <b>Kids Science</b> (the outreach program today's speaker runs); <b>StAR — Student Advancement Research</b>, a paid six-week summer research internship placing <em>Indigenous, Black and Filipino</em> high-school students in a real SickKids lab to run their own project; and the <b>Summer Mentorship Program</b>, where a selected group of high-schoolers visit SickKids three times a week through August to hear from guest speakers across departments. Great ways to test-drive research before university. As the speaker described it, the application is refreshingly light — <b>the basics</b>, a <b>creative component</b>, then a short <b>~10-minute interview</b> — so a genuine, well-made creative submission counts for a lot. One example the speaker shared: an applicant built her whole album around <em>diving</em> — using the descent to tell her real story (school pressure, her looks, a relationship), pairing her <b>lowest point — a stretch of depression — with the bottom of the dive</b>, then <b>resurfacing</b>. The traits they're really after: someone genuinely <b>passionate</b> and <b>enthusiastic</b>.</p><p><b>And the university rung:</b> the <b>SSuRe (SickKids Summer Research) Program</b> — a 15-week placement (May to mid-August) for <b>undergraduate and medical students</b> working in a real Research Institute lab, with weekly seminars, a career night and a Summer Student Symposium. (Graduating high-schoolers in their <em>final</em> year qualify too; younger ones take the StAR route.) It's the natural next step after the high-school programs above.</p>`,
          buildoff:"It's led by a science *communicator* — a great person to ask how you explain hard research to people simply (a skill worth as much as the science).",
          questions:[
            "What research question is uniquely <em>paediatric</em> — something you can't just scale down from adults?",
            "As a communicator, how do you explain hard research simply without dumbing it down?",
            "For a high-schooler, what actually makes a Kids Science or StAR application stand out?"
          ] },
        { display_time:"1:00 PM", kind:"social", title:"Dodgeball", location:"MAC Court",
          primer_gist:"House-group dodgeball in the MAC gym — low stakes, high energy. Wear something you can sprint in." },
        { display_time:"4:30 PM", kind:"talk", title:"About Xanadu and Quantum Computing", speaker:"Daniel Nino", role:"Research Engagement Lead, Xanadu", location:"DCC 350/352",
          speaker_gist:"A Xanadu team member (PhD) who does quantum-computing education and outreach using the company's PennyLane software.",
          primer_gist:"What quantum computing is, careers in the field, and how Xanadu — a Toronto company — is building quantum computers out of light.",
          primer_full:`<p><b>Xanadu</b> is a Toronto quantum-computing company (founded 2016 by Christian Weedbrook). Its bet is <b>photonic</b> quantum computing — computing with <em>particles of light (photons)</em> instead of the supercooled superconducting circuits most rivals use. In 2022 its "Borealis" machine ran a boson-sampling experiment published in <em>Nature</em>, a quantum-advantage-class result. It has raised ~US$245M and makes the open-source software PennyLane and Strawberry Fields.</p><p><b>What Xanadu actually does</b> spans four fronts: build <b>photonic hardware</b> (quantum computers made of light); <b>R&amp;D on quantum algorithms</b> (the recipes that make a quantum computer useful); <b>pioneering quantum software</b> (PennyLane and Strawberry Fields, so people can actually program it); and chasing <b>practical applications</b> — real problems like chemistry and machine learning where quantum could pay off.</p><p><b>The core ideas — why it's powerful:</b></p><ul><li><b>Qubit</b> — a quantum bit. A normal bit is 0 <em>or</em> 1; a qubit can be a blend of both at once, until you measure it and it snaps to a definite 0 or 1.</li><li><b>Superposition</b> — that "blend of both." With <em>n</em> qubits the machine can represent a combination of all 2ⁿ possibilities at once — where the power comes from. Drag the slider below to feel how fast 2ⁿ explodes.</li><li><b>Entanglement</b> — qubits linked so their results are correlated no matter how far apart; measuring one tells you about the other. A resource ordinary bits don't have.</li><li><b>Why faster (the honest version)</b> — it's <em>not</em> "try every answer at once." A good quantum algorithm uses <b>interference</b> to make wrong answers cancel and right ones reinforce, reaching the answer in far fewer steps — but only for specific problems (factoring, simulating molecules, some search). It's no faster at everyday tasks.</li><li><b>Photonic (Xanadu's twist)</b> — using light means parts can run at or near room temperature and tap existing fibre-optic tech, and photons pick up less noise from their surroundings.</li></ul><p><b>Five ways to build a qubit</b> (Xanadu is just one bet): <b>photonics</b> — particles of light, near room temperature and low-noise but hard to make interact (Xanadu's path); <b>superconducting circuits</b> — tiny loops chilled to near absolute zero, the mainstream choice (IBM, Google), fast but cold and fragile; <b>trapped ions</b> — single charged atoms held by fields and poked with lasers, extremely accurate but slower to scale; <b>neutral atoms</b> — atoms arranged with laser “tweezers,” good for big arrays; and <b>spin qubits</b> — information stored in an electron's spin, often in silicon, so they could ride existing chip-making. No single type has won yet — which is part of what makes the field wide open.</p><p><b>How you encode a photonic qubit — and how you compute with it.</b> Two encodings: <b>dual-rail</b> — a single photon sits in one of two paths, and <em>which path</em> it's in is the 0 or 1 (a discrete, particle-style qubit); versus Xanadu's <b>continuous-variable</b> approach — don't track the lone photon, track the light <em>field</em> itself (its amplitude and phase) and <em>squeeze</em> it to store information. To compute, Xanadu uses <b>measurement-based quantum computing</b>: rather than applying gates one at a time, you first build one giant entangled state (a <em>cluster state</em>), then <em>compute by measuring</em> it in a chosen pattern — the measurements do the work. A way to picture the two styles (the analogy from the talk): the gate model is like <b>additive manufacturing</b> — 3D-printing a part by adding material step by step; measurement-based is like <b>subtractive manufacturing</b> — starting from a solid block and carving the result out.</p><p><b>Where it's all headed: NISQ → FASQ.</b> Today we're in the <b>NISQ</b> era (Noisy Intermediate-Scale Quantum, a term from physicist John Preskill) — machines with tens to a few hundred qubits that are still too <em>noisy</em> and error-prone to fully trust. The goal is <b>fault-tolerant</b> quantum computing (FTQC): error-correct the machine so it keeps computing correctly even as individual qubits slip. The real prize Preskill named in 2024 is <b>FASQ</b> — <em>Fault-tolerant, Application-Scale Quantum</em> — a computer both reliable <em>and</em> big enough to solve genuinely useful problems. Getting from NISQ to FASQ is the whole climb, and Xanadu's roadmap builds error correction in from the start.</p>`,
          widget:"qubit-power",
          agenda:"What a qubit / superposition / entanglement are → why quantum helps only for specific problems → what Xanadu builds (photonic hardware) → careers in the field.",
          buildoff:"Ask what a photonic computer can do at room temperature that a supercooled one can't — that's Xanadu's whole bet.",
          questions:[
            "What can a photonic computer do at room temperature that a supercooled one can't?",
            "For someone choosing between physics, CS and math — which does the real work in quantum, and what would you learn first?",
            "Is building the software layer (PennyLane) a deliberate way to matter before the hardware fully catches up?"
          ] },
        { display_time:"5:00 PM", kind:"workshop", title:"Intro to Quantum Computing using PennyLane", speaker:"Daniel Nino", role:"Research Engagement Lead, Xanadu", location:"DCC 350/352",
          speaker_gist:"The same Xanadu educator, now hands-on with PennyLane — the software you'll actually try.",
          primer_gist:"A hands-on intro to PennyLane, Xanadu's free Python tool for programming quantum computers — its tagline: 'train a quantum computer the same way as a neural network.'",
          primer_full:`<p><b>PennyLane</b> is Xanadu's open-source Python library for quantum computing and quantum machine learning. Its signature trick is <b>automatic differentiation of quantum circuits</b> — it can compute gradients through a quantum circuit, which is exactly what lets you <em>train</em> one the way you train a neural network (nudging it to get better).</p><p>Two things make it approachable: it plugs into tools you may know (<b>NumPy, PyTorch, JAX</b>) to mix quantum and classical code, and the <em>same</em> circuit runs on many backends (Xanadu, IBM, Google, Amazon Braket) so you're not locked to one machine. You don't need to master quantum physics to start — you'll write short programs and watch a circuit behave. It's free and open at <b>pennylane.ai</b>, full of tutorials and demos you can keep exploring after SHAD.</p>`,
          buildoff:"Pair it with the 4:30 talk: that one is the *why*, this is the *how*. Ask what the smallest useful thing you could build with PennyLane is." },
        { display_time:"7:30 PM", kind:"social", title:"Masquerade Ball", location:"DCC 350/352",
          primer_gist:"A masquerade-themed evening — music, masks and a break from the grind. Dress up as much as you like." }
      ]
    },

    /* ===================== FRIDAY — sprint, startup, the ER ===================== */
    "2026-07-17": {
      week: 2,
      headline: "A design sprint, a scooter startup, and the emergency room.",
      pa_duty: {
        room_checks: [ {floor:"6",pa:"Sirna"}, {floor:"7",pa:"Ayesha"}, {floor:"8",pa:"Joella"} ],
        off: [ {pa:"Arianna", when:"off (Niksha covers)"}, {pa:"Daniel", when:"off (Faiqa covers)"}, {pa:"Joseph", when:"off (Michela covers)"}, {pa:"Jenn", when:"evening off"} ]
      },
      sessions: [
        { display_time:"9:00 AM", kind:"workshop", title:"Design Thinking Sprint", speaker:"Ashu Syal & Tabitha Grant", role:"Director, TMU Innovation Boost Zone · TMU Centre Manager", location:"DCC 350/352",
          speaker_gist:"Ashu Syal directs incubation at TMU's startup zone (the Innovation Boost Zone); Tabitha Grant is a TMU manager who has run student sustainability-and-design programs.",
          speaker_full:`<p><b>Ashu Syal</b> is Director at TMU's <b>Innovation Boost Zone</b>, the university's startup incubator, where he leads the incubation programming that coaches early founders from idea to prototype. He's an engineer by training and a former product manager.</p><p><b>Tabitha Grant</b> is a Centre Manager at TMU who has run student <b>sustainability programs</b> built around "what happens when waste is reimagined as design" — the same terrain as your SHAD brief on the lifecycle of everyday goods.</p>`,
          primer_gist:"A time-boxed design sprint: run the whole design-thinking loop fast to answer your project's riskiest question before you build the wrong thing.",
          primer_full:`<p>A <b>design sprint</b> is design thinking on a stopwatch. The full loop is <b>Empathize → Define → Ideate → Prototype → Test</b>; a sprint time-boxes it (famously 5 days, or a few hours in a workshop) to <em>answer one big risky question fast</em> instead of spending weeks building the wrong thing.</p><p><b>The five steps, in order</b> (though you loop back constantly):</p><ol><li><b>Empathize</b> — get inside the lives of the people you're designing for: watch, ask, listen (the hippos and the iron fish below live right here).</li><li><b>Define</b> — boil everything you learned down to one sharp problem statement.</li><li><b>Ideate</b> — generate lots of ideas, wide and weird, no judging yet (this is where “stay playful” pays off).</li><li><b>Prototype</b> — build a cheap, rough version so the idea becomes something people can actually touch.</li><li><b>Test</b> — put it in front of real users, learn what's wrong, and loop back.</li></ol><p>Two ideas do the heavy lifting:</p><ul><li><b>Fake the product.</b> The prototype is a façade — a paper mock-up or clickable slideshow that looks real enough to react to but takes hours, not months — so you can test with real users while it's still cheap to change everything.</li><li><b>Diverge, then converge.</b> First go wide (sketch lots of ideas alone, no criticism), then narrow hard (vote, pick one to prototype). Sketching alone first means quiet good ideas survive the loud people.</li></ul><p><b>The mindset matters as much as the method: stay playful.</b> The session's theme — a <em>playful state of mind</em> is what fuels good ideation. They showed Steven Johnson's TED talk <em>“The Playful Wonderland Behind Great Inventions”</em>: his argument is that many world-changing inventions (even the computer) came not from necessity but from <b>play and delight</b> — bone flutes, toys, games, the spice trade. His line: <em>“you'll find the future wherever people are having the most fun.”</em> The takeaway for a sprint: loosen up, chase what's fun and surprising, and don't kill a weird idea too early — play is where the good ones hide.</p><p><b>Empathy first — the hippo story.</b> The session drove home that <b>empathy</b> (the “empathize” stage) is the make-or-break of design thinking, with Ernesto Sirolli's story: an aid team taught Zambian villagers to grow Italian tomatoes in a lush river valley; the crop came up beautifully — then overnight around <b>200 hippos</b> came out of the river and ate the whole thing. “Why didn't you tell us about the hippos?!” — the locals replied, <em>“You never asked.”</em> The lesson (from Sirolli's TED talk, <em>“Want to help someone? Shut up and listen!”</em>): don't arrive with your solution — <b>ask and listen</b> to the people you're designing for. They know things you don't.</p><p><b>And empathy that actually ships — the Lucky Iron Fish.</b> Dr. Christopher Charles found iron-deficiency anemia was rampant in Cambodia. The science was simple: drop a lump of iron in the cooking pot and it leaches enough iron into the food to cover most of a day's needs. But villagers wouldn't use a plain iron block — or even a lotus-flower shape. So he <em>listened</em>: a <b>fish</b> is a symbol of luck and health in Khmer culture. He reshaped the iron into a <b>lucky fish</b> — and people used it, cutting clinical anemia roughly in half. Same iron, redesigned to fit the <em>people</em>. That's the whole point: the technical answer isn't enough; the solution has to make sense to the humans who'll actually use it.</p>`,
          buildoff:"This is your SHAD project's method, compressed. Bring your team's riskiest assumption — the sprint is built to test exactly that.",
          questions:[
            "A sprint trades depth for speed — what quality do you lose to the clock, and is it worth it?",
            "What separates a team that ships something real from one that just makes sticky-notes?",
            "When a team falls in love with a bad idea mid-sprint, how do you redirect them without killing morale?"
          ] },
        { display_time:"2:00 PM", kind:"talk", title:"Entrepreneurship: Building Scooty", speaker:"Shoaib Ahmed", role:"Founder & CEO, Scooty", location:"DCC 350/352",
          speaker_gist:"Founder & CEO of Scooty, the Brampton startup that launched Ontario's first e-scooter program — and it started with a group of TMU students.",
          speaker_full:`<p><b>Shoaib Ahmed</b> is Founder & CEO of <b>Scooty</b>, a Brampton, Ontario micro-mobility company that launched <b>Ontario's first e-scooter program</b>. The origin: in 2019 he and a group of Toronto Metropolitan University students rode shared e-scooters in Washington, DC and asked "why can't we do this in Ontario?" He came back and built it, pushing through slow regulation and a tough market. His line: <em>"Mobility is a human right."</em></p>`,
          primer_gist:"How a first-principles observation ('why not here?') became a real company — and what it takes to build in a market held back by regulation.",
          primer_full:`<p>Scooty is a case study in a hard kind of startup: one whose biggest obstacle isn't the tech but the <b>rules</b>. Shared e-scooters needed cities and the province to allow them at all, so Ahmed's job was as much winning over regulators and stakeholders as building an app. (His accelerator, TBDC, connected him with senior figures including Canada's federal Transport Minister.)</p><p>The takeaway for your project: some of the best ideas are blocked not by "can we build it?" but by "will the system let us?" — and the founders who win learn to move that system.</p><p><b>Two tools from the talk:</b></p><ul><li><b>The Lean Canvas</b> — a one-page business plan (Ash Maurya's startup-focused take on the Business Model Canvas). Instead of a 30-page document, you map the whole venture on a single sheet: the <em>problem</em>, your <em>solution</em>, the <em>customer</em>, your <em>unique value proposition</em> and <em>unfair advantage</em>, the <em>channels</em> to reach people, <em>revenue</em> and <em>costs</em>, and the <em>key metrics</em> you'll watch. It forces clarity fast and is easy to redraw as you learn.</li><li><b>The Request for Proposal (RFP)</b> — how a company like Scooty actually gets to operate: a city or government publishes an <em>RFP</em> inviting companies to bid on a project — say, running an e-scooter program — and you submit a proposal competing on price, service and plan. Winning the RFP <em>is</em> winning the market, which is exactly why so much of Scooty's work was regulatory and relationship-driven.</li></ul>`,
          buildoff:"Ask the regulation question: how do you build a business when it's effectively illegal until you convince someone to change the rule? Ties straight to McCarthy's 'play offense.'",
          questions:[
            "How do you build a business that's effectively illegal until you convince someone to change the rule?",
            "What did you believe about your customers at launch that turned out flat wrong?",
            "Winning the RFP <em>is</em> winning the market — how do you win one with no track record?"
          ] },
        { display_time:"7:00 PM", kind:"panel", title:"GridlockMD & Emergency Medicine Panel", speaker:"Dr. Teresa Chan", role:"Founding Dean, TMU School of Medicine · Emergency Physician", location:"DCC 350/352",
          speaker_gist:"Founding Dean of TMU's new School of Medicine and a practising ER doctor — named one of Maclean's top-10 most influential Canadians in health care (2024).",
          speaker_full:`<p><b>Dr. Teresa Chan</b> is the <b>founding Dean of Toronto Metropolitan University's School of Medicine</b> and TMU's VP, Medical Affairs (since 2023), and a practising <b>emergency physician</b> (William Osler Health System). She came from McMaster, where she was a clinician-scientist in medical education, has 230+ peer-reviewed papers, and was named to <b>Maclean's 2024 Power List</b> of the top 10 most influential Canadians in health care.</p><p>She co-designed <b>GridlockED</b> — a <em>serious game</em> (educational board game) that simulates emergency-department patient flow so trainees learn to manage ER "gridlock." (The schedule's "GridlockMD" is almost certainly this.)</p>`,
          primer_gist:"What emergency medicine really is, how triage sorts patients by urgency, why ERs 'gridlock' — and how she teaches it with a board game.",
          primer_full:`<p><b>Emergency medicine</b> is the specialty of the acute: ER doctors treat whatever comes through the door — heart attack, broken bone, allergic reaction, mental-health crisis — without knowing in advance what's next. The skill is fast decisions on incomplete information: stabilize first, diagnose as you go.</p><p><b>Triage</b> is how the ER copes: arriving patients are sorted by <em>how urgent</em>, not who came first (Canada uses the CTAS 1–5 scale, 1 = resuscitate now, 5 = can safely wait). It's allocating a scarce resource — doctor time — under pressure.</p><p><b>"Gridlock"</b> is when patients arrive faster than the department can move them through — often because admitted patients have no ward bed upstairs — so the whole ER jams: ambulances wait, hallways fill, care slows. The bottleneck is the <em>flow</em>, not one slow doctor.</p><p><b>Her twist — serious games.</b> <b>GridlockED</b> is a board game built to <em>teach</em> that flow: trainees make the tradeoffs themselves where mistakes cost points, not lives — part of a bigger move toward simulation and tech in training doctors, which is what she's building the new TMU medical school around.</p>`,
          agenda:"What ER medicine is like → triage (CTAS) → why ERs gridlock → learning it through a serious game → Q&A.",
          buildoff:"It's a panel — your question is the value. Ask how a board game teaches judgment better than a textbook; it links to your own project's 'how do people actually learn this?'",
          questions:[
            "How much of an ER's crisis is a systems/flow problem versus a clinical one?",
            "Can a board game teach judgment better than a textbook — and how do you know it works?",
            "Building a med school from scratch, what did you deliberately do differently from where you trained?"
          ] }
      ]
    },

    /* ===================== SATURDAY — arena + Hustle 201 ===================== */
    "2026-07-18": {
      week: 2,
      headline: "Behind the scenes at Scotiabank Arena, then Hustle 201.",
      pa_duty: {
        room_checks: [ {floor:"6",pa:"Joseph"}, {floor:"7",pa:"Jacob"}, {floor:"8",pa:"Fadumo"} ],
        off: [ {pa:"Raquel", when:"off (Faiqa covers)"}, {pa:"Rishaan", when:"off (Niksha covers)"}, {pa:"Jenn", when:"off"} ]
      },
      sessions: [
        { display_time:"9:00 AM", kind:"field-trip", title:"Scotiabank Arena Tour", location:"Scotiabank Arena, Downtown Toronto",
          primer_gist:"A behind-the-scenes tour of Scotiabank Arena — home of the Maple Leafs (NHL) and Raptors (NBA) — into the suites, lounges and spaces fans never see. (Groups 1 & 3 at 9:00; Groups 2 & 4 at 10:00.)",
          primer_full:`<p>Scotiabank Arena is MLSE's downtown venue for the <b>Toronto Maple Leafs</b> and <b>Toronto Raptors</b>. A guided tour goes behind the scenes — luxury suites, player areas and VIP lounges, the rarely-seen side of where game nights and concerts come together. (Heads-up: dressing-room access isn't guaranteed and depends on team schedules.)</p>` },
        { display_time:"1:00 PM", kind:"field-trip", title:"Mall Day", location:"Toronto",
          primer_gist:"A longer stretch at the mall — shopping, food and downtime with your house before the last leg of the program." },
        { display_time:"8:00 PM", kind:"talk", title:"Hustle 201", location:"DCC 350/352",
          primer_gist:"The follow-up to Week 1's 'Hustle 101' — more on initiative and making things happen with what you've already got, one level up.",
          buildoff:"If you caught Hustle 101, come with the one idea you actually acted on since — and what happened." }
      ]
    },

    /* ===================== SUNDAY — art, soccer, last night ===================== */
    "2026-07-19": {
      week: 2,
      headline: "Art, soccer, and a last big night.",
      pa_duty: {
        room_checks: [ {floor:"6",pa:"Raquel"}, {floor:"7",pa:"Fatimah"}, {floor:"8",pa:"Niksha"} ],
        off: [ {pa:"Ayesha", when:"off (Faiqa covers)"}, {pa:"Fadumo", when:"off (Niksha covers)"}, {pa:"Rishaan", when:"off (Michela covers)"}, {pa:"Jenn", when:"morning off"} ]
      },
      sessions: [
        { display_time:"10:30 AM", kind:"field-trip", title:"Art Gallery of Ontario (AGO)", location:"Downtown Toronto",
          primer_gist:"A visit to the AGO — one of North America's largest art museums, 120,000+ works from Indigenous and Canadian art to European masters, behind a landmark Frank Gehry facade.",
          primer_full:`<p>The <b>Art Gallery of Ontario</b> is one of the largest art museums in North America, with a collection of more than <b>120,000 works</b> — strong in Indigenous and Canadian art (including the Group of Seven) alongside European masterpieces. Its 2008 wood-and-glass facade was designed by Toronto-born architect <b>Frank Gehry</b>. Give yourself time; it's big.</p>` },
        { display_time:"3:00 PM", kind:"social", title:"World Cup Watch Party", location:"On campus",
          primer_gist:"Gather to watch soccer — snacks, rivalries and cheering, with the World Cup on home soil this summer. Wear your colours." },
        { display_time:"7:30 PM", kind:"social", title:"Trivia Night", location:"DCC 350/352",
          primer_gist:"A trivia showdown to close the week — bring your random knowledge and your house team." }
      ]
    }

  }
};
