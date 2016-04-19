(function($) {

  var defaultActionDef = {
    ctxName: 'row',
    actionDel: function() {
      return this.ctxName + '.del';
    },
    actionEdit: function() {
      return this.ctxName + '.edit';
    },
    render: function(data, type, row, meta) {
      // create buttons
      var
        btnEdit = '<button data-id="' + row.id + '" data-action="' + this.actionEdit() + '" class="btn-xs btn-info" title="Edit" data-toggle="tooltip" data-trigger="hover"><i class="fa fa-edit"></i></button>',
        btnDel = '<button data-id="' + row.id + '" data-action="' + this.actionDel() + '" class="btn-xs btn-danger" title="Delete" data-toggle="tooltip" data-trigger="hover"><i class="fa fa-times"></i></button>';

      return btnEdit + '&nbsp' + btnDel;
    },
  };

  $.fn.dtActionCol = function(actionDef) {

    dtActionCol = $.extend({}, defaultActionDef, actionDef || {});

    var selector = {
      btnEdit: '[data-action="' + dtActionCol.actionEdit() + '"]',
      btnDel: '[data-action="' + dtActionCol.actionDel() + '"]',
    };

    $(document)
      // handle btn edit click event
      .on('click', selector.btnEdit, function() {
        var id = $(this).data('id');
        $(document).trigger(dtActionCol.actionEdit(), [id]);
      })
      // handle btn delete click event
      .on('click', selector.btnDel, function() {
        var id = $(this).data('id');
        $(document).trigger(dtActionCol.actionDel(), [id]);
      });

    return dtActionCol;
  };
}(jQuery));