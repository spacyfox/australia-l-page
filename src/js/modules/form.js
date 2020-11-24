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
    if (!$form.length) return;
    $form.validate({
      rules: {
        name: {
          required: true,
          name: true,
          regex: /^[^\s\t]/,
          minLength: 2,
        },
        email: {
          required: true,
          email: true,
        },
      },

      messages: {
        name: {
          regex: 'Введите корректное имя',
          minLength: 'Введите корректное имя',
        },
        email: {
          email: 'Введите корректный e-mail',
        },
      },

      errorPlacement() {
        return true;
      },
    });
  },
};
