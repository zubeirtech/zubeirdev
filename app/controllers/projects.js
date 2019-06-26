import Controller from '@ember/controller';
import { set } from '@ember/object';

export default Controller.extend({

    cino_: false,
    dothemathright_: false,
    myweightjourney_: false,

    actions: {
        cino() {
            set(this, 'dothemathright_', false);
            set(this, 'myweightjourney_', false);
            set(this, 'cino_', true);
        },
        dothemathright() {
            set(this, 'cino_', false);
            set(this, 'myweightjourney_', false);
            set(this, 'dothemathright_', true);
        },
        myweightjourney() {
            set(this, 'cino', false);
            set(this, 'dothemathright_', false);
            set(this, 'myweightjourney_', true);
        }

    }
});
