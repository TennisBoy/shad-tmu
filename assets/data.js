/* SHAD @ TMU 2026 — the whole dataset. One copy; both pages read it.
   Keyed by ISO date. Each day = PA duty roster + sessions.
   Authoring doctrine lives in ../CLAUDE.md. Meals/breaks/sleep/travel are excluded. */

window.SHAD = {
  tz: "America/Toronto",
  ga_id: "",                       // ← paste GA4 id "G-XXXXXXXXXX" to turn analytics on
  program: { start: "2026-07-06", end: "2026-07-12" },  // Week 1 (more weeks appended as they arrive)

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
          buildoff:"Try to break your own model on purpose — the failure tells you more than the success. Ask Richard what the Vector Institute actually works on." },
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
          buildoff:"Ask for the smallest first step he took — the honest answer is usually embarrassingly small, which is the point." }
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
          buildoff:"She's a maker, not just a designer — push past “what does it mean” into “how is it built.” Bring one real question about the craft (a few are in the primer)."
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
          buildoff:"Play with the compounding slider before the talk so his numbers click. Then ask the real question: what should someone with $500 and no income do <em>today</em>?"
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
          buildoff:"This is literally the method behind your SHAD project. Ask how to pick the *right* problem — that's where teams go wrong. Bring your group's one-sentence problem statement."
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
          buildoff:"It's a Q&A — the value is your question. Come with one real one: how does he decide repair vs. replace a valve? What's the hardest judgment call mid-operation?"
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
<p><b>Two curves ride that same timeline.</b> <em>Risk</em> starts high at seed and falls steadily as the model gets proven — the reason early money is personal and later money institutional. <em>EBITDA</em> — operating profit, roughly the cash the business itself throws off (Earnings Before Interest, Taxes, Depreciation &amp; Amortization) — starts <b>negative</b>: after seed you're spending to build with little coming in. It climbs as you grow and crosses into the <b>black about halfway through the market stage</b> — the classic startup “J-curve,” where you lose money before you make it.</p>
<div class="widget-mount" data-widget="venture-lifecycle"></div>
<p><b>Unit economics</b> is the reality check: you have <em>fixed costs</em> (tools, rent) no matter what, plus a <em>cost per unit</em> to make each one. You only make money once enough units sell — at a price above their unit cost — to cover those fixed costs. That crossover is the <b>break-even</b>. Feel it below.</p>
<div class="widget-mount" data-widget="break-even"></div>
<p><b>Every stage has one core job.</b> In the <em>early</em> stage it's finding an <b>early adopter</b> — the first customer willing to try something rough because they feel the problem most sharply. By the <em>scale</em> stage the job flips to <b>growth and revenue</b>: you formalize and scale your processes, hyper-focus on <b>sales</b>, and bend the product to <em>support</em> selling. The scoreboard changes too — you stop counting hand-sold deals and start counting <b>paid subscribers</b>, moving away from founder-led selling toward a repeatable machine.</p>
<p><b>Selling itself is a cycle</b>, and knowing which step you're on tells you what to do next: a <b>sales-qualified lead</b> (someone who fits and is genuinely interested) → your <b>value proposition</b> (why it's worth it) → a <b>proposal / price quote</b> → <b>negotiation and review</b> → the close. Each step qualifies harder than the last, so you spend energy only where a deal can actually happen.</p>
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
<p><b>And how does everyone finally get paid?</b> All that equity is just paper until a “liquidity event” — an <b>exit</b> — turns it into cash. Four ways out:</p>
<ul>
<li><b>Strategic sale</b> — a bigger company acquires you, and pays up because you make <em>them</em> better: you lift their efficiency, or they push your product through global sales channels and distribution you could never build yourself. The classic startup happy ending.</li>
<li><b>IPO (Initial Public Offering)</b> — you list on a stock exchange and sell shares to the public. Founders and early investors can finally sell their stake, and employees holding equity through an <b>ESOP</b> (Employee Stock Ownership Plan) share in the payday too.</li>
<li><b>MBO / LBO</b> — a <b>Management Buy-Out</b> (the people running it buy it) or a <b>Leveraged Buy-Out</b> (buyers fund the purchase mostly with borrowed money, secured against the company itself).</li>
<li><b>Bankruptcy</b> — the exit nobody wants: the venture can't cover its debts and winds down, assets sold to repay creditors, with shareholders last in line and often left with nothing.</li>
</ul>
<p>Every investor back on that funding staircase is betting you reach one of the first three before the fourth.</p>`,
          agenda:"Attention to detail as a moat (the Van Halen brown-M&amp;M test) → play offense as a venture → ideation: purpose, value proposition, competitive edge → your “right to win” and how you differentiate → test cheaply (MVP) and the money side (break-even) → the funding staircase (3 Fs → angels → VC → bridge → revenue) → each stage's core job (early adopter → sales at scale) → the sales cycle → B2B vs. B2C marketing → prioritizing what will “kill you next” → valuing the company (market cap, comparables, P/E multiples) → and how everyone finally gets paid: the exit (strategic sale / IPO / MBO-LBO / bankruptcy).",
          buildoff:"Pair this with Thursday's design thinking — same loop, money lens. He's a real investor who's run three software companies, so ask the sharp one: what's the cheapest experiment that would prove your SHAD project idea is worth pursuing?" },
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
    }

  }
};
