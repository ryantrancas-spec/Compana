// ── Answer variables ──
let answerQ1 = null;
let answerQ2 = null;
let answerQ3 = null;
let answerQ4 = null;
let answerQ5 = null;

function getSubjectName() {
  const subjects = ["Maths", "English", "Science", "Geography", "History", "Religious Studies", "Business Studies", "Spanish", "French", "Computer Science", "Art"];
  return subjects[answerQ3] || "Your Subject";
}

function getSchoolType() {
  const schools = ["Primary School", "Secondary School", "Sixth-Form / College"];
  return schools[answerQ1] || "Secondary School";
}

// ── Lesson state ──
let lessonState = [];
let currentLessonIndex = 0;
let module1Complete = false;

// ── 7 Modules ──
const modules = [
  { title: "1. Understanding the Foundations of AI", unlocked: true },
  { title: "2. The Benefits, Risks & Limitations of AI", unlocked: false },
  { title: "3. Prompts & Outputs", unlocked: false },
  { title: "4. Academic Integrity & Ethics", unlocked: false },
  { title: "5. How AI can be integrated within your teaching", unlocked: false },
  { title: "6. How your students can safely use AI", description: "x", unlocked: false },
  { title: "7. Navigating future AI evolution", unlocked: false }
];

// ── Lesson 1.4 pre-quiz ──
const lesson4Quiz = [
  { statement: "AI is always accurate.", answer: false },
  { statement: "AI can amplify human ability.", answer: true },
  { statement: "AI understands like a human.", answer: false },
  { statement: "Any student AI use is cheating.", answer: false },
  { statement: "AI will replace teachers.", answer: false },
  { statement: "AI is easy to spot.", answer: false }
];

// ── 8 Lessons for Module 1 ──
const lessons = [
{
  title: "1.1 — What is Artificial Intelligence?",
  body: `
    <section class="lesson-section">

      <p>Artificial Intelligence (AI) refers to computer systems designed to perform tasks that normally require human intelligence. These tasks can include understanding language, recognising patterns, analysing data, solving problems, and generating content.</p>
      <p>AI systems work by learning from large amounts of data and identifying patterns within that data to produce responses or predictions. We will dive further into this concept in the next lesson.</p>
      <p>AI is developing rapidly and is increasingly influencing many industries, including education. Artificial Intelligence has the potential to support teachers by improving workload efficiency, assisting with the creation of learning materials, and enabling more personalised learning experiences for students. However, AI systems are not without limitations and may produce inaccurate, biased, or incomplete outputs if used without careful oversight.</p>

    <p>Developing a clear understanding of how AI works and how it can be used responsibly enables teachers to use these tools more effectively, make informed decisions about their use, and support students in developing safe and appropriate AI literacy.</p>
    </section>

    <section class="lesson-section">
      <h3>Generative AI</h3>
      <p>The most relevant type of AI currently used in education is <strong>Generative AI</strong>.</p>
      <p>Generative AI refers to technology that can create new content based on large volumes of data that models have been trained on from many different sources.</p>

      <div class="two-col">
        <div class="info-card">
          <div class="info-card-title">Generative AI can produce:</div>
          <ul class="lesson-list">
            <li>Written text</li>
            <li>Images</li>
            <li>Code</li>
            <li>Audio</li>
            <li>Video</li>
            <li>Simulations</li>
          </ul>
        </div>
        <div class="info-card">
          <div class="info-card-title">In education, it can help with:</div>
          <ul class="lesson-list">
            <li>Creating teaching resources</li>
            <li>Generating quiz or revision materials</li>
            <li>Lesson planning</li>
            <li>Producing summaries</li>
            <li>Administrative tasks</li>
          </ul>
        </div>
      </div>

      <div class="info-box">Government guidance emphasises that while AI can help make some tasks quicker, <strong>teachers remain responsible</strong> for reviewing and verifying any content generated, as AI outputs can sometimes be inaccurate, biased, outdated, or inappropriate.</div>
    </section>
  `,
  info: null,
  video: null,
  rawHTML: true
},
{
  title: "1.2 - How AI Works",
  body: `
    <section class="lesson-section">
      <p>Artificial Intelligence (AI) systems work by identifying patterns in large amounts of data and using those patterns to make predictions or generate responses.</p>
      <p>In the case of most tools used in education today (such as chatbots and writing assistants), the technology behind them is known as a <strong>Large Language Model (LLM)</strong>.</p>
    </section>

    <section class="lesson-section">
      <h3>What is a Large Language Model (LLM)?</h3>
      <p>A Large Language Model (LLM) is a type of AI system trained to understand and generate human language.</p>
      <div class="two-col">
        <div class="info-card">
          <div class="info-card-title">"Large"</div>
          <p style="font-size:14px; color:#475569; margin:0;">It is trained on vast amounts of text data — books, websites, articles, and other written sources.</p>
        </div>
        <div class="info-card">
          <div class="info-card-title">"Language Model"</div>
          <p style="font-size:14px; color:#475569; margin:0;">It predicts and generates language based on patterns it has learned.</p>
        </div>
      </div>
      <p>Rather than "knowing" information in the way humans do, an LLM works by predicting the most likely sequence of words based on patterns it has learned.</p>
    </section>

    <section class="lesson-section">
      <h3>How Do LLMs Work?</h3>
      <p>At a simple level, an LLM works in three main stages:</p>

      <div class="stages-list">

        <div class="stage-card">
          <div class="stage-number">1</div>
          <div class="stage-content">
            <div class="stage-title">Training on Data</div>
            <p>The model is trained on large datasets containing text from a wide range of sources. During training, it learns:</p>
            <ul class="lesson-list">
              <li>Grammar and sentence structure</li>
              <li>Patterns in language</li>
              <li>Relationships between words and ideas</li>
              <li>Common ways information is expressed</li>
            </ul>
            <p style="margin-top:10px;">It does not memorise information in a traditional sense, but instead learns statistical patterns.</p>
          </div>
        </div>

        <div class="stage-card">
          <div class="stage-number">2</div>
          <div class="stage-content">
            <div class="stage-title">Understanding a Prompt</div>
            <p>When a user enters a question or instruction (known as a <strong>prompt</strong>), the AI breaks the text into smaller units (called tokens), analyses the relationships between them, and interprets the likely intent of the user.</p>
            <div class="example-box">
              <div class="example-label">📖 Example</div>
              <p style="margin:0; font-size:14px;">If a teacher asks: <em>"Explain photosynthesis for Year 7 students"</em></p>
              <ul class="lesson-list" style="margin-top:8px;">
                <li>The topic — photosynthesis</li>
                <li>The task — explain</li>
                <li>The audience — Year 7 level</li>
              </ul>
            </div>
          </div>
        </div>

        <div class="stage-card">
          <div class="stage-number">3</div>
          <div class="stage-content">
            <div class="stage-title">Generating a Response</div>
            <p>The AI generates a response by predicting the most likely next word, repeating this process word by word, and building a full response based on probabilities — extremely quickly, creating responses that feel natural and coherent.</p>
          </div>
        </div>

      </div>
    </section>

    <section class="lesson-section">
      <h3>Important: AI Does Not "Understand" Like Humans</h3>
      <div class="info-box" style="border-left-color: #e53e3e; background: #fff5f5; color: #742a2a; border-color: #feb2b2;">
        ⚠️ Although AI responses can appear knowledgeable, AI does not think, reason, or understand meaning in the same way humans do. This is why AI can sometimes produce incorrect information, and provide overconfident answers.
      </div>
    </section>

    <section class="lesson-section">
      <h3>Why This Matters for Teachers</h3>
      <div class="principles-grid">
        <div class="principle-card">
          <div class="principle-icon">🎯</div>
          <div class="principle-title">Use AI more effectively</div>
          <div class="principle-body">Understanding how it works helps you get better results from AI tools.</div>
        </div>
        <div class="principle-card">
          <div class="principle-icon">🔍</div>
          <div class="principle-title">Recognise unreliable outputs</div>
          <div class="principle-body">Know when and why AI outputs may not be trustworthy.</div>
        </div>
        <div class="principle-card">
          <div class="principle-icon">💬</div>
          <div class="principle-title">Ask better prompts</div>
          <div class="principle-body">Knowing how AI interprets instructions helps you write clearer, more effective prompts.</div>
        </div>
        <div class="principle-card">
          <div class="principle-icon">🧑‍🎓</div>
          <div class="principle-title">Guide students critically</div>
          <div class="principle-body">Help students understand AI's limitations so they use it responsibly.</div>
        </div>
      </div>
      <p style="margin-top: 20px;">AI can be a powerful support tool, but it works best when combined with professional judgement and subject expertise.</p>
    </section>

    <section class="lesson-section">
      <h3>Explaining AI to Students</h3>
      <div class="analogy-box">
        <div class="analogy-quote">💬 "AI is like super-powered predictive text"</div>
        <p>AI works in a similar way to the predictive text on your phone — but much more advanced. When you start typing a message, your phone suggests the next word based on what you've written before. AI does the same thing, but:</p>
        <ul class="lesson-list">
          <li>It has been trained on billions of examples of text</li>
          <li>It can generate full sentences, paragraphs, or even essays</li>
        </ul>
        <p style="margin-top: 12px;">👉 So instead of just suggesting one word, it can create whole responses.</p>
      </div>
    </section>

    <section class="lesson-section">
      <h3>Key Takeaway</h3>
      <div class="info-box">
        💡 AI tools used in education are powered by systems that <strong>predict language based on patterns in data</strong>, not true understanding. By understanding this, teachers can use AI more confidently, safely, and effectively in their practice.
      </div>
    </section>

  `,
  info: null,
  video: null,
  rawHTML: true
},
{
  title: "1.3 - Types of AI Tools you may encounter",
  body: `
    <section class="lesson-section">
      <h3>Examples of Generative AI Tools</h3>
      <p>There are several widely used generative AI tools available to educators and students. While they use similar underlying technology, they may have different features or strengths.</p>

      <div class="ai-tools-table">
        <div class="ai-tool-row ai-tool-header">
          <div>Tool</div>
          <div>Best known for in education</div>
        </div>
        <div class="ai-tool-row">
          <div class="ai-tool-name">
            <img src="https://upload.wikimedia.org/wikipedia/commons/0/04/ChatGPT_logo.svg" alt="ChatGPT" class="ai-logo" />
            ChatGPT
          </div>
          <div>Conversational responses, drafting text, explaining concepts, creating lesson materials</div>
        </div>
        <div class="ai-tool-row">
          <div class="ai-tool-name">
            <img src="https://upload.wikimedia.org/wikipedia/commons/7/7a/Anthropic_Favicon.png" alt="Claude" class="ai-logo" />
            Claude
          </div>
          <div>Writing, analysis, summarising long documents, structured reasoning</div>
        </div>
        <div class="ai-tool-row">
          <div class="ai-tool-name">
            <img src="https://upload.wikimedia.org/wikipedia/commons/8/8a/Google_Gemini_logo.svg" alt="Gemini" class="ai-logo" />
            Gemini
          </div>
          <div>Integrates with Google Docs, Gmail and Search for research and writing tasks</div>
        </div>
        <div class="ai-tool-row">
          <div class="ai-tool-name">
            <img src="https://upload.wikimedia.org/wikipedia/commons/9/9c/Bing_Fluent_Logo.svg" alt="Copilot" class="ai-logo" />
            Copilot
          </div>
          <div>Integrates with Word, Excel, Outlook and Teams — useful where Microsoft 365 is already in use</div>
        </div>
      </div>
</section>

    <section class="lesson-section">
      <h3>Trusted AI Tools in Education</h3>
      <p>There are a growing number of AI tools available to teachers; however, not all are designed specifically for education. Tools such as Oak National Academy, Sparx Learning, and Tassomai are widely trusted within the UK education sector.</p>

      <p style="margin-top: 16px;">These platforms reflect the approach outlined in UK government guidance, where AI is used to support teaching, reduce workload, and enhance learning, while remaining under teacher oversight. They also align with your school's policy by ensuring AI is used responsibly, ethically, and within classroom guidelines.</p>

<section class="lesson-section">
      <h3>Education-Specific AI Tools</h3>
      <p>The following tools are widely trusted within the UK education sector. Unlike general AI tools, they are designed specifically for schools - aligned to the curriculum, built with safeguarding in mind, and used across thousands of classrooms.</p>

      <div class="edu-tool-card">
        <div class="edu-tool-header">
          <div class="edu-tool-logo-wrap">
            <img src="https://www.thenational.academy/favicon.ico"
              onerror="this.style.display='none'; this.nextElementSibling.style.display='block';"
              alt="Oak" class="edu-tool-favicon" />
            <span class="edu-tool-emoji" style="display:none;">🌳</span>
          </div>
          <div>
            <div class="edu-tool-name">Oak National Academy</div>
            <div class="edu-tool-sub">Aila – AI Lesson Assistant</div>
          </div>
          <span class="edu-tool-tag">Lesson Planning</span>
        </div>
        <div class="edu-tool-body">
          <p>Oak's AI lesson assistant helps teachers generate structured, curriculum-aligned lesson materials quickly and efficiently.</p>
          <div class="edu-tool-cols">
            <div class="edu-col">
              <div class="edu-col-label">📅 When to use</div>
              <ul class="lesson-list">
                <li>Planning new lessons</li>
                <li>Creating or adapting resources</li>
                <li>Reducing planning time</li>
              </ul>
            </div>
            <div class="edu-col">
              <div class="edu-col-label">✅ Why it's trusted</div>
              <p class="edu-col-text">Backed by a UK government-supported organisation, designed specifically for classroom use with outputs aligned to national standards.</p>
            </div>
          </div>
          <div class="edu-example">
            <span class="edu-example-label">Example</span>
            A teacher inputs "Year 8 ecosystems" and receives a ready-made lesson structure — explanations, activities, and assessment questions — which they adapt to suit their class.
          </div>
        </div>
      </div>

      <div class="edu-tool-card">
        <div class="edu-tool-header">
          <div class="edu-tool-logo-wrap">
            <img src="https://www.sparxmaths.com/favicon.ico"
              onerror="this.style.display='none'; this.nextElementSibling.style.display='block';"
              alt="Sparx" class="edu-tool-favicon" />
            <span class="edu-tool-emoji" style="display:none;">📐</span>
          </div>
          <div>
            <div class="edu-tool-name">Sparx Learning</div>
            <div class="edu-tool-sub">Homework, practice & feedback</div>
          </div>
          <span class="edu-tool-tag">Homework & Practice</span>
        </div>
        <div class="edu-tool-body">
          <p>Sparx uses AI to assign personalised practice tasks, ensuring students work at the right level and receive immediate, targeted feedback.</p>
          <div class="edu-tool-cols">
            <div class="edu-col">
              <div class="edu-col-label">📅 When to use</div>
              <ul class="lesson-list">
                <li>Setting structured homework</li>
                <li>Reinforcing class learning</li>
                <li>Tracking student engagement</li>
              </ul>
            </div>
            <div class="edu-col">
              <div class="edu-col-label">✅ Why it's trusted</div>
              <p class="edu-col-text">Widely used across UK schools, designed to support consistent practice while keeping teachers informed about student progress.</p>
            </div>
          </div>
          <div class="edu-example">
            <span class="edu-example-label">Example</span>
            A maths teacher sets weekly homework through Sparx. Each student receives tailored questions, the platform provides instant feedback, and the teacher monitors completion and struggling areas.
          </div>
        </div>
      </div>

      <div class="edu-tool-card">
        <div class="edu-tool-header">
          <div class="edu-tool-logo-wrap">
            <img src="https://www.tassomai.com/favicon.ico"
              onerror="this.style.display='none'; this.nextElementSibling.style.display='block';"
              alt="Tassomai" class="edu-tool-favicon" />
            <span class="edu-tool-emoji" style="display:none;">🧠</span>
          </div>
          <div>
            <div class="edu-tool-name">Tassomai</div>
            <div class="edu-tool-sub">Retrieval practice & revision</div>
          </div>
          <span class="edu-tool-tag">Revision</span>
        </div>
        <div class="edu-tool-body">
          <p>Tassomai personalises revision by identifying what students know and what they need to revisit, using spaced repetition techniques grounded in learning science.</p>
          <div class="edu-tool-cols">
            <div class="edu-col">
              <div class="edu-col-label">📅 When to use</div>
              <ul class="lesson-list">
                <li>Preparing students for assessments</li>
                <li>Supporting long-term knowledge retention</li>
                <li>Identifying gaps in understanding</li>
              </ul>
            </div>
            <div class="edu-col">
              <div class="edu-col-label">✅ Why it's trusted</div>
              <p class="edu-col-text">Developed in the UK, aligned to GCSE courses, and grounded in learning science — reliable for improving retention and exam readiness.</p>
            </div>
          </div>
          <div class="edu-example">
            <span class="edu-example-label">Example</span>
            A science teacher uses Tassomai to set regular revision quizzes. The platform adapts questions based on responses, ensuring weaker areas are revisited more frequently.
          </div>
        </div>
      </div>

    </section>

    <section class="lesson-section">
      <h3>Key Message for Teachers</h3>
      <p>These tools demonstrate how AI can be used in safe, practical, and subject-specific ways within education. Their use aligns with both:</p>
      <div class="two-col" style="margin-top: 14px;">
        <div class="info-card">
          <div class="info-card-title">🏛️ UK Government Guidance</div>
          <p style="font-size:14px; color:#475569; margin:0;">Promotes AI as a tool to support teaching and reduce workload.</p>
        </div>
        <div class="info-card">
          <div class="info-card-title">🏫 School Policies</div>
          <p style="font-size:14px; color:#475569; margin:0;">Require AI to be used responsibly, with teacher oversight and safeguarding in place.</p>
        </div>
      </div>
      <div class="info-box" style="margin-top: 20px;">
        👉 Crucially, these tools are designed to <strong>support — not replace</strong> — teacher expertise, ensuring that professional judgement remains at the centre of the classroom.
      </div>
    </section>
  `,
  info: null,
  video: null,
  rawHTML: true
},
{
  title: "1.4 Common Misconceptions",
    body: `
    <section class="lesson-section">
      <p>This module helps teachers understand common misconceptions about AI, so they can use it more confidently, critically, and responsibly in their practice.</p>

      <div class="info-card" style="margin-top: 16px;">
        <div class="info-card-title">Learning Objectives</div>
        <ul class="lesson-list">
          <li>Understand the most common AI misconceptions</li>
          <li>Understand how these can present in a classroom</li>
          <li>Understand the best ways to avoid these misconceptions</li>
        </ul>
      </div>

      <p style="margin-top: 20px;">AI is neither magic nor meaningless. It can be useful, fast, and persuasive, but it can also be inaccurate, biased, and over-trusted. Teachers need a balanced understanding of AI so they can make informed decisions about when to use it, when to question it, and when human judgment matters most.</p>
    </section>

    <section class="lesson-section">
      <h3>Most Common Misconceptions</h3>
      <div class="misconceptions-table">
        <div class="misconception-row misconception-header">
          <div>Misconception</div>
          <div>Reality</div>
          <div>Example</div>
        </div>
        <div class="misconception-row">
          <div class="misconception-label">AI is always accurate</div>
          <div>AI can sound confident while being wrong</div>
          <div>Asking AI to summarise a topic, and it invents a quote that does not exist</div>
        </div>
        <div class="misconception-row">
          <div class="misconception-label">AI understands like a human</div>
          <div>AI can mimic understanding, but it does not think, feel or interpret like a teacher or a student</div>
          <div>AI explains a poem's themes but misses subtle tone or cultural nuances</div>
        </div>
        <div class="misconception-row">
          <div class="misconception-label">All student AI use is cheating</div>
          <div>AI can be used in a range of ways by students, from brainstorming and feedback to outright copying</div>
          <div>One student uses AI to generate ideas for an essay, while another uses it to write the essay entirely</div>
        </div>
        <div class="misconception-row">
          <div class="misconception-label">AI is neutral</div>
          <div>AI can reflect bias in the data and patterns it has learned from</div>
          <div>AI generates classroom examples that repeat stereotypes or narrow perspectives</div>
        </div>
        <div class="misconception-row">
          <div class="misconception-label">AI will replace teachers</div>
          <div>AI can automate some tasks, but it cannot replace the role of a teacher and the human connection it gives students</div>
          <div>AI can generate a quiz quickly, but it cannot notice if a student seems disengaged that day</div>
        </div>
        <div class="misconception-row">
          <div class="misconception-label">You can always tell when text was written by AI</div>
          <div>It is often difficult to determine this reliably from the writing alone</div>
          <div>A polished paragraph looks to be written by AI but in reality the student reviewed and edited it in depth</div>
        </div>
      </div>
    </section>

    <section class="lesson-section">
      <h3>Key Principles to Avoid Misconceptions</h3>
      <div class="principles-grid">
        <div class="principle-card">
          <div class="principle-icon">🔍</div>
          <div class="principle-title">Verify</div>
          <div class="principle-body">Check facts, quotes, references and subject accuracy before using AI outputs in your teaching.</div>
        </div>
        <div class="principle-card">
          <div class="principle-icon">✏️</div>
          <div class="principle-title">Adapt</div>
          <div class="principle-body">Do not paste outputs straight into teaching without review. Always apply your professional judgement.</div>
        </div>
        <div class="principle-card">
          <div class="principle-icon">💬</div>
          <div class="principle-title">Be Transparent</div>
          <div class="principle-body">Clarify what acceptable AI use looks like for both staff and students in your setting.</div>
        </div>
        <div class="principle-card">
          <div class="principle-icon">🧑‍🏫</div>
          <div class="principle-title">Keep Humans in Charge</div>
          <div class="principle-body">Professional judgement comes first. AI supports your decisions — it does not make them.</div>
        </div>
      </div>
    </section>
  `,
  info: null,
  video: null,
  rawHTML: true
},
{ title: "1.5 - How AI applies to Your Subject", body: "Content 5", info: null, generated: false },
];

// ── Show a screen ──
function showScreen(id) {
  document.querySelectorAll('.screen').forEach(s => s.classList.remove('active'));
  const el = document.getElementById(id);
  el.classList.add('active');
  el.style.animation = 'none';
  el.offsetHeight;
  el.style.animation = '';
  window.scrollTo(0, 0);

  if (id === 'screen-modules') buildModulesOverview();

  if (id === 'screen-home') {
    const btn = document.getElementById('home-start-btn');
    if (btn) {
      if (lessonState.length > 0) {
        btn.textContent = 'Resume Learning →';
      } else if (answerQ1 !== null) {
        btn.textContent = 'Continue Setup →';
      } else {
        btn.textContent = 'Start Your Learning Path →';
      }
    }
  }
}

// ── Select a multiple choice answer ──
function selectOption(questionId, optionIndex, nextScreen) {
  if (questionId === 'q1') answerQ1 = optionIndex;
  if (questionId === 'q3') answerQ3 = optionIndex;
  if (questionId === 'q4') answerQ4 = optionIndex;
  if (questionId === 'q5') answerQ5 = optionIndex;

  const btns = document.querySelectorAll(`#${questionId}-options .option-btn`);
  btns.forEach((btn, i) => {
    btn.classList.toggle('selected', i === optionIndex);
    btn.disabled = true;
  });

  setTimeout(() => {
    if (nextScreen === 'screen-modules') {
      buildLessonState();
      buildModulesOverview();
    }
    showScreen(nextScreen);
  }, 400);
}

// ── Submit age ──
function submitAge() {
  const input = document.getElementById('age-input');
  const error = document.getElementById('age-error');
  const val = parseInt(input.value);

  if (!input.value || isNaN(val) || val < 18 || val > 99) {
    error.textContent = 'Please enter a valid age between 18 and 99.';
    return;
  }

  error.textContent = '';
  answerQ2 = val;
  showScreen('screen-q3');
}

// ── Build initial lesson state ──
function buildLessonState() {
  lessonState = lessons.map(() => ({
    completed: false,
    skipped: false
  }));
  if (answerQ4 === 2) {
    lessonState[3].skipped = true;
  }
  if (answerQ5 === 3 || answerQ5 === 4) {
    lessonState[0].skipped = true;
  }
  lessons[4].title = "1.5 - How AI applies to " + getSubjectName();
  generatePersonalisedLesson();
}

// ── Check if a lesson is unlocked ──
function isLessonUnlocked(i) {
  if (i === 0) return true;
  const prev = lessonState[i - 1];
  if (prev.skipped || prev.completed) {
    if (i === 1) return true;
    const prevprev = lessonState[i - 2];
    return prevprev.skipped || prevprev.completed;
  }
  return false;
}

// ── Build modules overview screen ──
function buildModulesOverview() {
  const container = document.getElementById('modules-overview');
  container.innerHTML = '';

  modules.forEach((mod, i) => {
    const isM1Complete = module1Complete;
    const unlocked = i === 0 ? true : false; // only module 1 unlocked for now

    const item = document.createElement('div');
    item.className = 'module-card' + (unlocked ? ' module-unlocked' : ' module-locked');

    let statusBadge = '';
    if (i === 0 && isM1Complete) {
      statusBadge = '<span class="module-status done">✓ Complete</span>';
    } else if (unlocked) {
      statusBadge = '<span class="module-status unlocked">Open →</span>';
    } else {
      statusBadge = '<span class="module-status locked">🔒 Locked</span>';
    }

    if (unlocked) {
      item.style.cursor = 'pointer';
      item.onclick = () => openModule1();
    }

    item.innerHTML = `
      <div class="module-card-left">
        <div class="module-num">0${i + 1}</div>
        <div>
          <div class="module-card-title">${mod.title}</div>
          <div class="module-card-desc">${mod.description}</div>
        </div>
      </div>
      ${statusBadge}
    `;
    container.appendChild(item);
  });
}

// ── Open Module 1 lessons page ──
function openModule1() {
  buildLearningPath();
  showScreen('screen-path');
}

// ── Build the learning path (Module 1 lessons) ──
function buildLearningPath() {
  const list = document.getElementById('lessons-list');
  list.innerHTML = '';

  lessons.forEach((lesson, i) => {
    const state = lessonState[i];
    const unlocked = isLessonUnlocked(i);

    let itemClass = 'lesson-item';
    let statusBadge = '';
    let clickable = false;

    if (state.skipped) {
      itemClass += ' lesson-skipped';
      statusBadge = '<span class="lesson-status skipped">✦ Skipped</span>';
    } else if (state.completed) {
      itemClass += ' lesson-done';
      statusBadge = '<span class="lesson-status done">✓ Done</span>';
      clickable = true;
    } else if (unlocked) {
      itemClass += ' lesson-unlocked';
      statusBadge = '<span class="lesson-status unlocked">Start →</span>';
      clickable = true;
    } else {
      itemClass += ' lesson-locked';
      statusBadge = '<span class="lesson-status locked">🔒</span>';
    }

    const item = document.createElement('div');
    item.className = itemClass;
    item.id = `lesson-item-${i}`;

    if (clickable) {
      item.style.cursor = 'pointer';
      item.onclick = () => openLesson(i);
    }

    item.innerHTML = `
      <div class="lesson-num">0${i + 1}</div>
      <div class="lesson-name">${lesson.title}</div>
      ${statusBadge}
    `;
    list.appendChild(item);
  });

  // Update begin button
  const beginBtn = document.getElementById('begin-btn');
  const nextIndex = lessonState.findIndex((s, i) => !s.completed && !s.skipped && isLessonUnlocked(i));

  if (nextIndex !== -1) {
    beginBtn.textContent = lessonState.some(s => s.completed)
      ? `Continue → ${lessons[nextIndex].title}`
      : 'Begin Module 1 →';
    beginBtn.style.display = 'inline-block';
    beginBtn.onclick = () => openLesson(nextIndex);
  } else {
    beginBtn.textContent = 'Finish Module 1 ✓';
    beginBtn.onclick = () => {
      module1Complete = true;
      showScreen('screen-complete');
    };
  }
}

// ── Open a specific lesson ──
function openLesson(index) {
  console.log('openLesson called with index:', index);
  console.log('lessonState:', JSON.stringify(lessonState));
  currentLessonIndex = index;
  if (index === 3 && !lessonState[3].completed) {
    console.log('going to quiz');
    buildLesson4Quiz();
    showScreen('screen-lesson4-quiz');
  } else {
    console.log('going to lesson');
    renderLesson();
    showScreen('screen-lesson');
  }
}

// ── Build lesson 1.4 pre-quiz ──
function buildLesson4Quiz() {
  const container = document.getElementById('quiz-questions');
  container.innerHTML = '';

  lesson4Quiz.forEach((q, i) => {
    const block = document.createElement('div');
    block.className = 'quiz-question-block';
    block.id = `quiz-block-${i}`;
    block.innerHTML = `
      <div class="quiz-statement">${i + 1}. ${q.statement}</div>
      <div class="quiz-options">
        <button class="quiz-btn" id="quiz-${i}-true" onclick="selectQuizAnswer(${i}, true)">True</button>
        <button class="quiz-btn" id="quiz-${i}-false" onclick="selectQuizAnswer(${i}, false)">False</button>
      </div>
    `;
    container.appendChild(block);
  });

  window.quizAnswers = new Array(lesson4Quiz.length).fill(null);
  document.getElementById('quiz-feedback').textContent = '';
}

// ── Handle a quiz answer selection ──
function selectQuizAnswer(index, value) {
  window.quizAnswers[index] = value;

  const trueBtn = document.getElementById(`quiz-${index}-true`);
  const falseBtn = document.getElementById(`quiz-${index}-false`);
  trueBtn.classList.toggle('quiz-btn-selected', value === true);
  falseBtn.classList.toggle('quiz-btn-selected', value === false);
  trueBtn.disabled = true;
  falseBtn.disabled = true;

  const allAnswered = window.quizAnswers.every(a => a !== null);
  if (allAnswered) {
    const correct = window.quizAnswers.filter((ans, i) => ans === lesson4Quiz[i].answer).length;
    setTimeout(() => {
      if (correct >= 5) {
        lessonState[3].completed = true;
        buildLearningPath();
        showScreen('screen-path');
      } else {
        renderLesson();
        showScreen('screen-lesson');
      }
    }, 400);
  }
}

// ── Render the current lesson ──
function renderLesson() {
  const lesson = lessons[currentLessonIndex];
  const completedCount = lessonState.filter(s => s.completed || s.skipped).length;
  const pct = Math.round((completedCount / lessons.length) * 100)
    
    document.getElementById('lesson-label').textContent = `Lesson ${currentLessonIndex + 1} of ${lessons.length}`;
  document.getElementById('lesson-pct').textContent = `${pct}%`;
  document.getElementById('lesson-progress').style.width = `${pct}%`;
document.getElementById('lesson-chip').textContent = 'Module 1';

document.getElementById('btn-complete').style.display = 'inline-block';

if (currentLessonIndex === 4 && !lessons[4].generated) {
  document.getElementById('lesson-content').innerHTML = `
    <h2>${lessons[4].title}</h2>
    <div class="generating-box">
      <div class="generating-spinner"></div>
      <p>Personalising this lesson for ${getSubjectName()} teachers...</p>
    </div>
  `;
  document.getElementById('btn-complete').style.display = 'none';
  return;
}

  const btn = document.getElementById('btn-complete');
  if (lessonState[currentLessonIndex].completed) {
    btn.textContent = '✓ Already Completed';
    btn.style.background = '#15803d';
  } else {
    btn.textContent = 'Complete Lesson ✓';
    btn.style.background = '';
  }

const infoHTML = lesson.info ? `<div class="info-box">${lesson.info}</div>` : '';

let bodyHTML = '';
if (lesson.rawHTML) {
  bodyHTML = lesson.body;
} else {
  bodyHTML = lesson.body.split('\n\n').map(p => `<p>${p.replace(/\n/g, '<br>')}</p>`).join('');
}

let videoHTML = '';
if (lesson.video) {
  if (lesson.video.includes('youtube.com') || lesson.video.includes('vimeo.com')) {
    videoHTML = `<div class="video-wrap"><iframe src="${lesson.video}" frameborder="0" allowfullscreen></iframe></div>`;
  } else {
    videoHTML = `<div class="video-wrap"><video controls><source src="${lesson.video}" type="video/mp4"></video></div>`;
  }
}

document.getElementById('lesson-content').innerHTML = `
  <h2>${lesson.title}</h2>
  ${videoHTML}
  ${bodyHTML}
  ${infoHTML}
`;
}

// ── Complete current lesson ──
function completeLesson() {
  lessonState[currentLessonIndex].completed = true;

  const next = currentLessonIndex + 1;
  if (next < lessons.length && lessonState[next].skipped) {
    lessonState[next].completed = true;
  }

  const allDone = lessonState.every(s => s.completed || s.skipped);
  if (allDone) {
    module1Complete = true;
    showScreen('screen-complete');
    return;
  }

  buildLearningPath();
  showScreen('screen-path');
}

// ── Go back from lesson to path ──
function goBackToPath() {
  buildLearningPath();
  showScreen('screen-path');
}

// ── Restart ──
function restart() {
  answerQ1 = null;
  answerQ2 = null;
  answerQ3 = null;
  answerQ4 = null;
  answerQ5 = null;
  lessonState = [];
  currentLessonIndex = 0;
  module1Complete = false;
  activateSidebarItem(0);
  showScreen('screen-home');
}

const lesson15BaseContent = `
You are helping a teacher learn about AI in education. 
The teacher teaches: SUBJECT_PLACEHOLDER

Take the following base lesson content and personalise all examples, 
scenarios and references to be specifically relevant to a SUBJECT_PLACEHOLDER teacher. 
Keep all headings, structure and key facts exactly the same — only adapt 
the examples and context to fit the subject. Return only the HTML content 
inside the existing sections, keeping the same CSS classes.

BASE CONTENT:
How AI applies to teaching SUBJECT_PLACEHOLDER...
[your base content here]
`;

async function generatePersonalisedLesson(retryCount = 0) {
  console.log('Generating lesson for:', getSubjectName(), '| Attempt:', retryCount + 1);
  const subject = getSubjectName();

  // Show loading state
  document.getElementById('lesson-content').innerHTML = `
    <h2>${lessons[4].title}</h2>
    <div class="generating-box">
      <div class="generating-spinner"></div>
      <p>Personalising this lesson for ${subject} teachers...</p>
    </div>
  `;
  document.getElementById('btn-complete').style.display = 'none';

const schoolType = getSchoolType();

const prompt = `You are an instructional designer creating content for a teacher CPD platform about AI in education. The teacher teaches ${subject} at a ${schoolType}. Make the content difficulty level specific to this type of school where Primary School is Reception to Year 6, Secondary school is Year 7 to Year 11, Sixth Form/College is Year 12 to Year 13.

IMPORTANT: You must write a FULL, DETAILED lesson with multiple sections. A short response is not acceptable. Aim for 400 - 600 words of content.

Write a detailed and engaging lesson called "How AI applies to ${subject} teaching" that covers ALL of the following sections — do not skip any:

Introduction
Write a paragraph explaining why AI is particularly relevant to ${subject} teachers and how it is changing the subject area.

Ways AI Can Help
Write 3 specific and detailed ways AI tools can help a ${subject} teacher. For each one include a title, a 2-3 sentence explanation, and a not too long concrete example, which is specific to the subject area and school type. Use the principles-grid, principle-card, principle-icon, principle-title, principle-body CSS classes for this section.

Cautions for ${subject} Teachers
Write 2 specific cautions a ${subject} teacher should be aware of when using AI, each with a title and explanation. Do not include generic cautions, only ones that specifically affect this subject. Use the info-card and info-card-title CSS classes.

Key Takeaway
Write a 2-3 sentence summary specifically for ${subject} teachers. Use the info-box CSS class.


Format as clean HTML using ONLY these existing CSS classes: lesson-section, h3, info-card, info-card-title, lesson-list, example-box, example-label, info-box, two-col, principles-grid, principle-card, principle-icon, principle-title, principle-body. Format the examples to ways AI can help in a different way to the text about the way AI can help so there is a clear difference. You must include everything I ask you to do.

Do not include any explanation outside the HTML. Do not use markdown. Do not include backticks or code fences. Start directly with a <section> tag and end with </section>.`;

  try {
    const GEMINI_API_KEY = "AIzaSyD0TjhmKdnE9tPP7np35gwGqHQ-Hd3yf8M";

    const response = await fetch('/.netlify/functions/generate-lesson', {
  method: 'POST',
  headers: { 'Content-Type': 'application/json' },
  body: JSON.stringify({ prompt: prompt })
});

    const data = await response.json();

    // Extract the text from Gemini's response format
if (!data.candidates || !data.candidates[0]) {
  console.error('Gemini response issue:', JSON.stringify(data));
  throw new Error('No candidates in response');
}
const generatedHTML = data.candidates[0].content.parts[0].text;

    // Strip any accidental markdown code fences just in case
    const cleanHTML = generatedHTML.replace(/```html|```/g, '').trim();

    // Cache it so it doesn't regenerate on revisit
    lessons[4].body = cleanHTML;
lessons[4].generated = true;
lessons[4].rawHTML = true;
if (currentLessonIndex === 4) {
  renderLesson();
  document.getElementById('btn-complete').style.display = 'inline-block';
}

  } catch (error) {
    console.error('Gemini API error:', error);
    document.getElementById('lesson-content').innerHTML = `
      <h2>${lessons[4].title}</h2>
      <div class="info-box">⚠️ Unable to load personalised content right now. Please try again later.</div>
    `;
    document.getElementById('btn-complete').style.display = 'inline-block';
  }
}

function goToElearning() {
  activateSidebarItem(1);
  if (lessonState.length > 0) {
    buildModulesOverview();
    showScreen('screen-modules');
  } else if (answerQ4 !== null) {
    showScreen('screen-q5');
  } else if (answerQ3 !== null) {
    showScreen('screen-q4');
  } else if (answerQ2 !== null) {
    showScreen('screen-q3');
  } else if (answerQ1 !== null) {
    showScreen('screen-q2');
  } else {
    showScreen('screen-q1');
  }
}

function startOrResumeLearning() {
  goToElearning();
}