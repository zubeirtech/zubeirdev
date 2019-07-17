import Controller from '@ember/controller';
import { set } from '@ember/object';

export default Controller.extend({

    cino_: false,
    dothemathright_: false,
    myweightjourney_: false,
    sentrybills_: false,
    idyll_: false,

    actions: {
        cino() {
            set(this, 'dothemathright_', false);
            set(this, 'myweightjourney_', false);
            set(this, 'sentrybills_', false);
            set(this, 'cino_', true);
            set(this, 'idyll_', false);
        },
        dothemathright() {
            set(this, 'cino_', false);
            set(this, 'myweightjourney_', false);
            set(this, 'sentrybills_', false);
            set(this, 'dothemathright_', true);
            set(this, 'idyll_', false);
        },
        myweightjourney() {
            set(this, 'cino_', false);
            set(this, 'dothemathright_', false);
            set(this, 'myweightjourney_', true);
            set(this, 'sentrybills_', false);
            set(this, 'idyll_', false);
        },
        sentrybills() {
            set(this, 'cino_', false);
            set(this, 'dothemathright_', false);
            set(this, 'myweightjourney_', false);
            set(this, 'sentrybills_', true);
            set(this, 'idyll_', false);
        },
        idyll() {
            set(this, 'cino_', false);
            set(this, 'dothemathright_', false);
            set(this, 'myweightjourney_', false);
            set(this, 'sentrybills_', false);
            set(this, 'idyll_', true);
        }
    }
});
