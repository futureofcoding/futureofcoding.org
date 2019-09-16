// https://observablehq.com/@stevekrouse/untitled/3@618

export default function define(runtime, observer) {
  const main = runtime.module();
  main.variable(observer("posts")).define("posts", ["_"], function(_){return(
_.sortBy([
  { 'title': 'Wolfram Language', tags: ['notebook', 'data science', 'integrations'], slug: 'wolfram'},
  { 'title': 'Eve', tags: ['notebook', 'reactive'], slug: 'eve'},
  { 'title': 'Glitch', tags: ['back-end'], slug: 'glitch'},
  { 'title': 'Observable', tags: ['notebook', 'reactive', 'front-end', 'data science'], slug: 'observable'},
  { 'title': 'Bubble', tags: ['front-end', 'back-end', 'nocode', 'WYSIWYG', 'direct manipulation', 'database', 'structured editor', 'spreadsheet', 'integrations'], slug: 'bubble'},
  { 'title': 'Coda', tags: ['notebook', 'database', 'nocode', 'direct manipulation', 'WYSIWYG', 'spreadsheet', 'integrations'], slug: 'coda'},
  { 'title': 'Webflow', tags: ['WYSIWYG', 'front-end', 'direct manipulation', 'nocode'], slug: 'webflow'},
  { 'title': 'mbeddr', tags: ['structured editor'], slug: 'mbeddr'},
  { 'title': 'Retool', tags: ['WYSIWYG', 'reactive', 'integrations'], slug: 'retool'},
  { 'title': 'Lamdu', tags: ['structured editor', 'functional programming'], slug: 'lamdu'},
  { 'title': 'Hazel', tags: ['structured editor', 'functional programming'], slug: 'hazel'},
  { 'title': 'ZEIT', tags: ['back-end', 'front-end', 'integrations'], slug: 'zeit'},
  { 'title': 'Smalltalk', tags: ['notebook', 'data science', 'direct manipulation', 'WYSIWYG'], slug: 'smalltalk'},
  { 'title': 'Twilio Studio', tags: ['node-and-wire', 'integrations'], slug: 'twilio'},
  { 'title': 'Luna', tags: ['structured editor', 'functional programming', 'node-and-wire'], slug: 'luna'},
  { 'title': 'Zapier', tags: ['nocode', 'integrations'], slug: 'zapier'},
  { 'title': 'Parabola', tags: ['node-and-wire', 'data science', 'integrations'], slug: 'parabola'},
  { 'title': 'Isomorf', tags: ['structured editor', 'functional programming'], slug: 'isomorf'},
  { 'title': 'Origami Studio', tags: ['node-and-wire', 'direct manipulation', 'front-end'], slug: 'origami'},
  { 'title': 'Codeflow', tags: ['structured editor', 'node-and-wire', 'integrations', 'back-end'], slug: 'codeflow'},
  { 'title': 'Replit', tags: ['front-end', 'back-end'], slug: 'replit'},
  { 'title': 'Spreadsheets', tags: ['spreadsheet', 'reactive'], slug: 'spreadsheets'},
  { 'title': 'Hypercard', tags: ['direct manipulation', 'WYSIWYG'], slug: 'hypercard'},
], p => p.title.toLowerCase())
)});
  main.variable(observer("reviewsAndTags")).define("reviewsAndTags", ["selectedTags1","html","tagsArray","renderTag","posts"], function(selectedTags1,html,tagsArray,renderTag,posts)
{
  selectedTags1;
  var tagstoShow = selectedTags1.split(",").filter(t => t).reduce((a,b) => a.includes(b) ? a.filter(t => t != b) : a.concat([b]), [])
  var d = html`
      <style>
        #reviews {
          display: flex;
          flex-wrap: wrap;
        }

        .review {
          min-height: 130px;
          display: inline-block;
          width: 300px;
          margin: 1em .5em;
          padding: .65em;
          border: 1px solid #f2f2f2;
          border-radius: 5px;
          box-shadow: 0 0.25em 1em #e7e7e7;
        }

        .title {
          margin-bottom: .5em;
          font-size: 1.4em; 
          text-decoration: none;
        }

        .title:hover {
          color: #555;
        }

        #tags {
          margin-left: 11px;
        }

        #tags {
          margin: 10px;
        }
        .tags {
          display: flex;
          flex-flow: row wrap;
          align-items: stretch;
          margin: -0.13em; /* Keep these proportional */
        }

        .tag {
          margin: .13em; /* Keep these proportional */
          padding: .5em;
          border-radius: 3px;
          text-transform: capitalize;
          cursor: pointer;
          user-select: none;
        }

        .tag.selected, .tag.selected:hover {
           box-shadow: 0 0px 3px 1px #353535;
         }

        .tag:hover  {
           box-shadow: 0 0 2px 1px #bbbbbb;
         }

        #TODO-DELETE-ME {
          display: flex;
          width: 400px;
        }
         #TODO-DELETE-ME > span {
            display: inline-block;
            text-align: center;
            border: 1px solid grey;
         }
      </style>
      <div id="tags" class="tags">
       ${tagsArray.map(tag => renderTag(tag, tagstoShow.includes(tag)))}
      </div>
      <div id="reviews">
      ${posts.filter(p => !tagstoShow.length || tagstoShow.every(tag => p.tags.includes(tag))).map(post => html`
        <div class="review">
          <a href="${post.slug}.html"><div class="title">${post.title}</div></a>
          <div class="tags">
            ${post.tags.map(tag => renderTag(tag, tagstoShow.includes(tag)))}
          </div>
        </div>`
      )}
    </div>`
  return d
}
);
  main.define("initial selectedTags1", function(){return(
""
)});
  main.variable(observer("mutable selectedTags1")).define("mutable selectedTags1", ["Mutable", "initial selectedTags1"], (M, _) => new M(_));
  main.variable(observer("selectedTags1")).define("selectedTags1", ["mutable selectedTags1"], _ => _.generator);
  main.variable(observer("renderTag")).define("renderTag", ["html","colorArray","tagsArray","mutable selectedTags1"], function(html,colorArray,tagsArray,$0){return(
(tag, selected) => {
  var d = html`
          <div class="tag ${selected ? "selected" : ""}" 
               style="background-color:${colorArray[tagsArray.indexOf(tag)]}">
            ${tag}
          </div>
        `
  d.onclick = () => $0.value += "," + tag
  return d
}
)});
  main.variable(observer("finishedAndUnfinished")).define("finishedAndUnfinished", ["_","posts"], function(_,posts){return(
_.partition(_.map(posts, 'title'), t => t.includes('☑️')).map(x => x.length)
)});
  main.variable(observer("completion")).define("completion", ["_","posts"], function(_,posts){return(
_.mapValues(_.groupBy(_.map(posts, 'title'), t => t.includes('☑️') ? 'done' : t.includes('(outline)') ? 'outline' : 'none'), x => x.length)
)});
  main.variable(observer("tagsArray")).define("tagsArray", ["posts"], function(posts){return(
Array.from(new Set(posts.map(post => post.tags).reduce((a,b) => a.concat(b))))
)});
  main.variable(observer("colorArray")).define("colorArray", function(){return(
['azure', 'honeydew', 'seashell', 'mintcream', '#fffaf0', 'lavenderblush', 'snow', 'ghostwhite' , 'whitesmoke', 'oldlace', '#ffffce', 'antiquewhite', 'mistyrose', '#d2b48c78', 'lavender', '#b0c4de54', '#f0e68c7a', '#f6ffd0', 'gainsboro', 'beige', 'aliceblue', 'lightcyan', 'wheat', 'lightsalmon', 'cornsilk', 'lightpink']
)});
  main.variable(observer()).define(["md"], function(md){return(
md`
----------------------------
# Garbage`
)});
  main.variable(observer("checkbox")).define("checkbox", ["input","html","colorArray","tagsArray"], function(input,html,colorArray,tagsArray){return(
function checkbox(config = {}) {
  let { value: formValue, title, description, submit, options } = config;
  if (Array.isArray(config)) options = config;
  options = options.map(
    o => (typeof o === "string" ? { value: o, label: o } : o)
  );
  const form = input({
    type: "checkbox",
    title,
    description,
    submit,
    getValue: input => {
      if (input.length)
        return Array.prototype.filter
          .call(input, i => i.checked)
          .map(i => i.value);
      return input.checked ? input.value : false;
    },
    form: html`
      <form>
        ${options.map(({ value, label }) => {
          const input = html`<input type=checkbox name=input ${
            (formValue || []).indexOf(value) > -1 ? "checked" : ""
          } style="vertical-align: baseline; cursor: pointer; user-select:none;" />`;
          input.setAttribute("value", value);
          const tag = html`<label class="tag" style="background-color:${colorArray[tagsArray.indexOf(label)]}">
           ${label}
           ${input}
          </label>`;
          return tag;
        })}
      </form>
    `
  });
  form.output.remove();
  return form;
}
)});
  main.variable(observer("viewof selectedTags")).define("viewof selectedTags", ["checkbox","tagsArray"], function(checkbox,tagsArray){return(
checkbox({options:tagsArray, value: tagsArray})
)});
  main.variable(observer()).define(["md"], function(md){return(
md`# Libraries`
)});
  main.variable(observer("_")).define("_", ["require"], function(require){return(
require("lodash")
)});
  return main;
}
