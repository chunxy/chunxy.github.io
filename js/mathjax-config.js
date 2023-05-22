// MathJax Configuration
//
// v2 to v3 upgrade notes:
// - The CommonHTML.linebreaks option is not yet implemented (but may be in a future release)
// - The TeX.noUndefined.attributes option is not yet implemented (but may be in a future release)
window.MathJax = {
  tex: {
    macros: {
      R: "\\mathbb{R}",
      E: "\\mathop{\\mathrm{E}}",
      x: "\\mathrm{x}",
      y: "\\mathrm{y}",
      z: "\\mathrm{z}",
      d: "\\mathrm{d}",
      u: "\\mathrm{u}",
      v: "\\mathrm{v}",
      X: "\\mathrm{X}",
      Y: "\\mathrm{Y}",
      Var: "\\mathop{\\mathrm{Var}}",
      Cov: "\\mathop{\\mathrm{Cov}}",
      rank: "\\mathop{\\mathrm{rank}}",
      tr: "\\mathop{\\mathrm{tr}}",
      and: "\\mathop{\\mathrm{and}}",
      arccot: "\\mathop{\\mathrm{arccot}}",
      coloneq: "\\mathop{\\mathrm{:=}}",
      Col: "\\mathop{\\mathrm{Col}}",
      Nul: "\\mathop{\\mathrm{Nul}}",
      diag: "\\mathop{\\mathrm{diag}}",
    },
    displayMath: [['$$', '$$'], ['\\[', '\\]']],
    inlineMath: [['$', '$'], ['\\(', '\\)']],
    maxBuffer: 10 * 1024,
    processEscapes: false,
    processEnvironments: false,
    tags: "all"
  }
}
