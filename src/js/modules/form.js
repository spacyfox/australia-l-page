import 'jquery-validation';

export default {
  init() {
    const self = this;
    $('.s-feedback__form').each(function () {
      self.initForm(this);
    });
  },

  initForm: function (form) {
    const $form = $(form);
    const $successMsg = $('.form-alert');
    const $successMsgClose = $('.form-alert__close');
    $.validator.addMethod('email_or_mobile', function (value, element) {
      return this.optional(element)
        || (
          /\(?([0-9]{3})\)?([ .-]?)([0-9]{3})\2([0-9]{4})/.test(value)
          || /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([А-Яа-яЁёa-zA-Z\-0-9]+\.)+[А-Яа-яЁёa-zA-Z]{2,}))$/.test(value)
        );
    }, 'Введите корректный телефон или email');

    $form.validate({
      rules: {
        name: {
          required: true,
          minlength: 2,
        },
        email: {
          email: false,
          email_or_mobile: true,
          required: true,
        },
      },
      messages: {
        name: {
          required: 'Введите свое имя',
          minlength: 'Введите корректное имя',
        },
        email: {
          required: 'Введите свой телефон или email',
        },
      },
      submitHandler(form, e) {
        e.preventDefault();
        $successMsg.show();
        $form[0].reset();
        $successMsgClose.click(() => {
          $successMsg.hide();
        });
      },
    });
  },
};
