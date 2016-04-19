# Datatable Action Col

Simple jQuery to create edit and delete buttons. Compatible with jQuery datatables.

[see codepen](http://codepen.io/wzulfikar/pen/oxdmBw)

```js
// handle row.edit & row.del
var userAction = $.fn.dtActionCol({
  ctxName: 'user'
});
$('body').html(userAction.render());
$(document)
  .on(userAction.actionEdit(), function(event, id) {
    console.log(userAction.actionEdit(), id);
  })
  .on(userAction.actionDel(), function(event, id) {
    console.log(userAction.actionDel(), id);
  });
```
