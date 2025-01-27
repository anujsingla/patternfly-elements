---
"@patternfly/elements": major
---
✨ Added `<pf-switch>`, a control that toggles the state of a setting between on 
and off.

```html
<form>
  <pf-switch id="color-scheme-toggle"></pf-switch>
  <label for="color-scheme-toggle" data-state="on">Dark Mode</label>
  <label for="color-scheme-toggle" data-state="off" hidden>Light Mode</label>
</form>
```

Switches provide a more explicit, visible representation on a setting than checkboxes.

`<pf-switch>` is a form-associated custom element, and may require the 
[element-internals polyfill][polyfill]

Read the [docs][docs] for more info.

[docs]: https://patternflyelements.org/components/switch/
[polyfill]: https://npm.im/element-internals-polyfill
