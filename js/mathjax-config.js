// MathJax Configuration
//
// v2 to v3 upgrade notes:
// - The CommonHTML.linebreaks option is not yet implemented (but may be in a future release)
// - The TeX.noUndefined.attributes option is not yet implemented (but may be in a future release)
window.MathJax = {
  tex: {
    macros: {
      R: "\\mathbb{R}", E: "\\mathrm{E}", x: "\\mathrm{x}", y: "\\mathrm{y}",
      d: "\\mathrm{d}", Var: "\\mathrm{Var}", Cov: "\\mathrm{Cov}",
      rank: "\\mathrm{rank}", tr: "\\mathrm{tr}", and: "\\mathrm{and}",
      arccot: "\\mathrm{arccot}", coloneq: "\\mathop{:=}"
    },
    displayMath: [['$$', '$$'], ['\\[', '\\]']],
    inlineMath: [['$', '$'], ['\\(', '\\)']],
    maxBuffer: 10 * 1024,
    processEscapes: false,
    processEnvironments: false,
    tags: "all"
  }
}
