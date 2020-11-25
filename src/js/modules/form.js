import 'jquery-validation';

export default {
  init() {
    const self = this;
    $('.s-feedback__form').each(function () {
      self.initForm(this);
    });
  },

  initForm(form) {
    const $form = $(form);
    const $successMsg = $('.form-alert');
    $.validator.addMethod('email_or_mobile', function (value, element) {
      return this.optional(element)
        && (
          /\(?([0-9]{3})\)?([ .-]?)([0-9]{3})\2([0-9]{4})/.test(value)
          || /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/i.test(value)
        );
    }, 'Введите корректный телефон или email');

    $form.validate({
      rules: {
        name: {
          required: true,
          minlength: 2,
        },
        email: {
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
        phone: {
          required: 'Введите свой телефон или email',
        },
      },
      submitHandler(form, e) {
        e.preventDefault();
        $successMsg.show();
      },
    });
  },
};
