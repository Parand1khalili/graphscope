// Final Cora comparison from reports/sara_core_final_comparison.csv.
const comparison = [["B1 (text-only)", 140, "70.4790%"], ["B1 + R1", 103, "73.3255%"], ["Narrative v0", 140, "73.6020%"], ["SARA-Core (Narrative + R1)", 103, "74.7586%"]];
export function finalCoraResults({jsx, jsxs}, openExperiments) {
  return jsxs("section", {className: "editorial-section", "aria-label": "Final SARA-Core Results — Cora", children: [
    jsx("h2", {children: "Final SARA-Core Results — Cora"}),
    jsx("p", {children: jsx("strong", {children: "74.76% accuracy / 0.72753 Macro-F1 / +4.28 percentage points over B1"})}),
    jsx("p", {children: "Mean across 10 GCN training seeds. Learning rate 0.005. Cross-entropy, no post-filter. The historical FeatProp and learning-rate 0.01 experiments are separate conditions."}),
    jsx("div", {style:{overflowX:"auto"}, children: jsxs("table", {children: [
      jsx("thead", {children: jsx("tr", {children: ["Method", "Training labels", "Accuracy"].map(label => jsx("th", {scope:"col", children:label}, label))})}),
      jsx("tbody", {children: comparison.map(([method, count, accuracy]) => jsxs("tr", {children: [
        jsx("th", {scope:"row", children:method}), jsx("td", {children:count}), jsx("td", {children:accuracy}),
      ]}, method))}),
    ]})}),
    openExperiments && jsx("button", {className:"text-button", onClick:openExperiments, children:"Open the experiment ledger"}),
  ]});
}
