// AlphaAcademy — Retrieval-Augmented Generation (RAG) — lesson content
//
// To add a new lesson, just append a new object to this LESSONS array
// (don't forget the comma after the previous lesson's closing "}").
// index.html reads this array automatically — no other changes needed.
//
// Three lesson types are supported:
//
// 1) type: "paragraph"  -> a plain paragraph, English on top, Persian below
//    { type: "paragraph", en: { text: "..." }, fa: { text: "..." } }
//
// 2) type: "list"  -> a lead line + a bullet list, English block on top,
//    Persian block below
//    {
//      type: "list",
//      en: { lead: "...", items: [ { title: "...", desc: "..." }, ... ] },
//      fa: { lead: "...", items: [ { title: "...", desc: "..." }, ... ] }
//    }
//
// 3) type: "diagram" -> a titled flow diagram made of one or more stages,
//    each stage rendered as a row of boxes connected by arrows.
//    Per box: { text: "..." }  (use "\n" for a line break inside the box)
//    Optional flags: accent: true (highlighted/violet box), data: true (dashed, muted box)
//    {
//      type: "diagram",
//      en: { title: "...", stages: [ { label: "...", items: [ {text:"..."}, ... ] }, ... ] },
//      fa: { title: "...", stages: [ { label: "...", items: [ {text:"..."}, ... ] }, ... ] }
//    }

const LESSONS = [
  {
    type: "list",
    en: {