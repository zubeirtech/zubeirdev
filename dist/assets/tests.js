'use strict';

define("zubeirdev/tests/lint/app.lint-test", [], function () {
  "use strict";

  QUnit.module('ESLint | app');
  QUnit.test('app.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'app.js should pass ESLint\n\n');
  });
  QUnit.test('breakpoints.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'breakpoints.js should pass ESLint\n\n');
  });
  QUnit.test('controllers/index.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'controllers/index.js should pass ESLint\n\n');
  });
  QUnit.test('controllers/projects.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'controllers/projects.js should pass ESLint\n\n');
  });
  QUnit.test('resolver.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'resolver.js should pass ESLint\n\n');
  });
  QUnit.test('router.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'router.js should pass ESLint\n\n');
  });
  QUnit.test('routes/about.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'routes/about.js should pass ESLint\n\n');
  });
  QUnit.test('routes/index.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'routes/index.js should pass ESLint\n\n');
  });
  QUnit.test('routes/projects.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'routes/projects.js should pass ESLint\n\n');
  });
});
define("zubeirdev/tests/lint/templates.template.lint-test", [], function () {
  "use strict";

  QUnit.module('TemplateLint');
  QUnit.test('zubeirdev/templates/about.hbs', function (assert) {
    assert.expect(1);
    assert.ok(false, 'zubeirdev/templates/about.hbs should pass TemplateLint.\n\nzubeirdev/templates/about.hbs\n  4:8  error  Incorrect indentation for `<h3>` beginning at L4:C8. Expected `<h3>` to be at an indentation of 6 but was found at 8.  block-indentation\n  5:8  error  Incorrect indentation for `<br>` beginning at L5:C8. Expected `<br>` to be at an indentation of 6 but was found at 8.  block-indentation\n  6:8  error  Incorrect indentation for `<br>` beginning at L6:C8. Expected `<br>` to be at an indentation of 6 but was found at 8.  block-indentation\n  7:8  error  Incorrect indentation for `<br>` beginning at L7:C8. Expected `<br>` to be at an indentation of 6 but was found at 8.  block-indentation\n  8:8  error  Incorrect indentation for `<br>` beginning at L8:C8. Expected `<br>` to be at an indentation of 6 but was found at 8.  block-indentation\n  9:8  error  Incorrect indentation for `<div>` beginning at L9:C8. Expected `<div>` to be at an indentation of 6 but was found at 8.  block-indentation\n  10:12  error  Incorrect indentation for `<div>` beginning at L10:C12. Expected `<div>` to be at an indentation of 10 but was found at 12.  block-indentation\n  11:12  error  Incorrect indentation for `<div>` beginning at L11:C12. Expected `<div>` to be at an indentation of 10 but was found at 12.  block-indentation\n  24:12  error  Incorrect indentation for `<div>` beginning at L24:C12. Expected `<div>` to be at an indentation of 10 but was found at 12.  block-indentation\n  17:0  error  Incorrect indentation for `               Home\n              ` beginning at L17:C0. Expected `               Home\n              ` to be at an indentation of 16 but was found at 15.  block-indentation\n  20:0  error  Incorrect indentation for `               Projects\n              ` beginning at L20:C0. Expected `               Projects\n              ` to be at an indentation of 16 but was found at 15.  block-indentation\n  22:14  error  links with target="_blank" must have rel="noopener"  link-rel-noopener\n');
  });
  QUnit.test('zubeirdev/templates/application.hbs', function (assert) {
    assert.expect(1);
    assert.ok(true, 'zubeirdev/templates/application.hbs should pass TemplateLint.\n\n');
  });
  QUnit.test('zubeirdev/templates/index.hbs', function (assert) {
    assert.expect(1);
    assert.ok(false, 'zubeirdev/templates/index.hbs should pass TemplateLint.\n\nzubeirdev/templates/index.hbs\n  6:6  error  links with target="_blank" must have rel="noopener"  link-rel-noopener\n  7:6  error  links with target="_blank" must have rel="noopener"  link-rel-noopener\n  8:6  error  links with target="_blank" must have rel="noopener"  link-rel-noopener\n  9:6  error  links with target="_blank" must have rel="noopener"  link-rel-noopener\n  18:6  error  links with target="_blank" must have rel="noopener"  link-rel-noopener\n');
  });
  QUnit.test('zubeirdev/templates/projects.hbs', function (assert) {
    assert.expect(1);
    assert.ok(false, 'zubeirdev/templates/projects.hbs should pass TemplateLint.\n\nzubeirdev/templates/projects.hbs\n  3:4  error  Incorrect indentation for `<div>` beginning at L3:C4. Expected `<div>` to be at an indentation of 2 but was found at 4.  block-indentation\n  4:8  error  Incorrect indentation for `<div>` beginning at L4:C8. Expected `<div>` to be at an indentation of 6 but was found at 8.  block-indentation\n  31:8  error  Incorrect indentation for `<div>` beginning at L31:C8. Expected `<div>` to be at an indentation of 6 but was found at 8.  block-indentation\n  5:12  error  Incorrect indentation for `<br>` beginning at L5:C12. Expected `<br>` to be at an indentation of 10 but was found at 12.  block-indentation\n  6:12  error  Incorrect indentation for `<br>` beginning at L6:C12. Expected `<br>` to be at an indentation of 10 but was found at 12.  block-indentation\n  7:12  error  Incorrect indentation for `<h1>` beginning at L7:C12. Expected `<h1>` to be at an indentation of 10 but was found at 12.  block-indentation\n  8:12  error  Incorrect indentation for `{{#link-to}}` beginning at L8:C12. Expected `{{#link-to}}` to be at an indentation of 10 but was found at 12.  block-indentation\n  11:12  error  Incorrect indentation for `{{#link-to}}` beginning at L11:C12. Expected `{{#link-to}}` to be at an indentation of 10 but was found at 12.  block-indentation\n  14:12  error  Incorrect indentation for `<a>` beginning at L14:C12. Expected `<a>` to be at an indentation of 10 but was found at 12.  block-indentation\n  15:12  error  Incorrect indentation for `<br>` beginning at L15:C12. Expected `<br>` to be at an indentation of 10 but was found at 12.  block-indentation\n  16:12  error  Incorrect indentation for `<br>` beginning at L16:C12. Expected `<br>` to be at an indentation of 10 but was found at 12.  block-indentation\n  17:12  error  Incorrect indentation for `<br>` beginning at L17:C12. Expected `<br>` to be at an indentation of 10 but was found at 12.  block-indentation\n  18:12  error  Incorrect indentation for `<br>` beginning at L18:C12. Expected `<br>` to be at an indentation of 10 but was found at 12.  block-indentation\n  19:12  error  Incorrect indentation for `<div>` beginning at L19:C12. Expected `<div>` to be at an indentation of 10 but was found at 12.  block-indentation\n  20:16  error  Incorrect indentation for `{{#ember-scrollable}}` beginning at L20:C16. Expected `{{#ember-scrollable}}` to be at an indentation of 14 but was found at 16.  block-indentation\n  32:12  error  Incorrect indentation for `<div>` beginning at L32:C12. Expected `<div>` to be at an indentation of 10 but was found at 12.  block-indentation\n  33:16  error  Incorrect indentation for `<div>` beginning at L33:C16. Expected `<div>` to be at an indentation of 14 but was found at 16.  block-indentation\n  34:16  error  Incorrect indentation for `<div>` beginning at L34:C16. Expected `<div>` to be at an indentation of 14 but was found at 16.  block-indentation\n  35:20  error  Incorrect indentation for `{{#if}}` beginning at L35:C20. Expected `{{#if}}` to be at an indentation of 18 but was found at 20.  block-indentation\n  49:20  error  Incorrect indentation for `{{#if}}` beginning at L49:C20. Expected `{{#if}}` to be at an indentation of 18 but was found at 20.  block-indentation\n  63:20  error  Incorrect indentation for `{{#if}}` beginning at L63:C20. Expected `{{#if}}` to be at an indentation of 18 but was found at 20.  block-indentation\n  77:20  error  Incorrect indentation for `{{#if}}` beginning at L77:C20. Expected `{{#if}}` to be at an indentation of 18 but was found at 20.  block-indentation\n  90:20  error  Incorrect indentation for `{{#if}}` beginning at L90:C20. Expected `{{#if}}` to be at an indentation of 18 but was found at 20.  block-indentation\n  106:20  error  Incorrect indentation for `{{#if}}` beginning at L106:C20. Expected `{{#if}}` to be at an indentation of 18 but was found at 20.  block-indentation\n  91:20  error  Incorrect indentation for `<div>` beginning at L91:C20. Expected `<div>` to be at an indentation of 22 but was found at 20.  block-indentation\n  93:139  error  Incorrect indentation for `a` beginning at L92:C22. Expected `</a>` ending at L93:C139 to be at an indentation of 22 but was found at 135.  block-indentation\n  92:76  error  Incorrect indentation for `<img>` beginning at L92:C76. Expected `<img>` to be at an indentation of 24 but was found at 76.  block-indentation\n  107:20  error  Incorrect indentation for `<div>` beginning at L107:C20. Expected `<div>` to be at an indentation of 22 but was found at 20.  block-indentation\n  109:92  error  Incorrect indentation for `a` beginning at L108:C22. Expected `</a>` ending at L109:C92 to be at an indentation of 22 but was found at 88.  block-indentation\n  108:78  error  Incorrect indentation for `<img>` beginning at L108:C78. Expected `<img>` to be at an indentation of 24 but was found at 78.  block-indentation\n  113:26  error  Incorrect indentation for `a` beginning at L111:C124. Expected `</a>` ending at L113:C26 to be at an indentation of 124 but was found at 22.  block-indentation\n  112:24  error  Incorrect indentation for `<i>` beginning at L112:C24. Expected `<i>` to be at an indentation of 126 but was found at 24.  block-indentation\n  14:12  error  links with target="_blank" must have rel="noopener"  link-rel-noopener\n  37:24  error  links with target="_blank" must have rel="noopener"  link-rel-noopener\n  39:116  error  links with target="_blank" must have rel="noopener"  link-rel-noopener\n  51:24  error  links with target="_blank" must have rel="noopener"  link-rel-noopener\n  53:111  error  links with target="_blank" must have rel="noopener"  link-rel-noopener\n  65:24  error  links with target="_blank" must have rel="noopener"  link-rel-noopener\n  67:108  error  links with target="_blank" must have rel="noopener"  link-rel-noopener\n  79:24  error  links with target="_blank" must have rel="noopener"  link-rel-noopener\n  81:115  error  links with target="_blank" must have rel="noopener"  link-rel-noopener\n  92:22  error  links with target="_blank" must have rel="noopener"  link-rel-noopener\n  96:27  error  links with target="_blank" must have rel="noopener"  link-rel-noopener\n  108:22  error  links with target="_blank" must have rel="noopener"  link-rel-noopener\n  111:124  error  links with target="_blank" must have rel="noopener"  link-rel-noopener\n  19:17  error  elements cannot have inline styles  no-inline-styles\n  21:83  error  elements cannot have inline styles  no-inline-styles\n  22:79  error  elements cannot have inline styles  no-inline-styles\n  23:77  error  elements cannot have inline styles  no-inline-styles\n  24:87  error  elements cannot have inline styles  no-inline-styles\n  25:87  error  elements cannot have inline styles  no-inline-styles\n  26:77  error  elements cannot have inline styles  no-inline-styles\n  39:166  error  elements cannot have inline styles  no-inline-styles\n  41:90  error  elements cannot have inline styles  no-inline-styles\n  43:88  error  elements cannot have inline styles  no-inline-styles\n  45:90  error  elements cannot have inline styles  no-inline-styles\n  53:164  error  elements cannot have inline styles  no-inline-styles\n  55:90  error  elements cannot have inline styles  no-inline-styles\n  57:88  error  elements cannot have inline styles  no-inline-styles\n  59:90  error  elements cannot have inline styles  no-inline-styles\n  67:165  error  elements cannot have inline styles  no-inline-styles\n  69:90  error  elements cannot have inline styles  no-inline-styles\n  71:88  error  elements cannot have inline styles  no-inline-styles\n  73:90  error  elements cannot have inline styles  no-inline-styles\n  81:172  error  elements cannot have inline styles  no-inline-styles\n  82:90  error  elements cannot have inline styles  no-inline-styles\n  84:88  error  elements cannot have inline styles  no-inline-styles\n  86:90  error  elements cannot have inline styles  no-inline-styles\n  96:78  error  elements cannot have inline styles  no-inline-styles\n  98:88  error  elements cannot have inline styles  no-inline-styles\n  100:86  error  elements cannot have inline styles  no-inline-styles\n  102:88  error  elements cannot have inline styles  no-inline-styles\n  111:177  error  elements cannot have inline styles  no-inline-styles\n  115:88  error  elements cannot have inline styles  no-inline-styles\n  117:86  error  elements cannot have inline styles  no-inline-styles\n  119:88  error  elements cannot have inline styles  no-inline-styles\n');
  });
});
define("zubeirdev/tests/lint/tests.lint-test", [], function () {
  "use strict";

  QUnit.module('ESLint | tests');
  QUnit.test('test-helper.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'test-helper.js should pass ESLint\n\n');
  });
  QUnit.test('unit/controllers/index-test.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'unit/controllers/index-test.js should pass ESLint\n\n');
  });
  QUnit.test('unit/controllers/projects-test.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'unit/controllers/projects-test.js should pass ESLint\n\n');
  });
  QUnit.test('unit/routes/about-test.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'unit/routes/about-test.js should pass ESLint\n\n');
  });
  QUnit.test('unit/routes/index-test.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'unit/routes/index-test.js should pass ESLint\n\n');
  });
  QUnit.test('unit/routes/projects-test.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'unit/routes/projects-test.js should pass ESLint\n\n');
  });
});
define("zubeirdev/tests/test-helper", ["zubeirdev/app", "zubeirdev/config/environment", "@ember/test-helpers", "ember-qunit"], function (_app, _environment, _testHelpers, _emberQunit) {
  "use strict";

  (0, _testHelpers.setApplication)(_app.default.create(_environment.default.APP));
  (0, _emberQunit.start)();
});
define("zubeirdev/tests/unit/controllers/index-test", ["qunit", "ember-qunit"], function (_qunit, _emberQunit) {
  "use strict";

  (0, _qunit.module)('Unit | Controller | index', function (hooks) {
    (0, _emberQunit.setupTest)(hooks); // Replace this with your real tests.

    (0, _qunit.test)('it exists', function (assert) {
      let controller = this.owner.lookup('controller:index');
      assert.ok(controller);
    });
  });
});
define("zubeirdev/tests/unit/controllers/projects-test", ["qunit", "ember-qunit"], function (_qunit, _emberQunit) {
  "use strict";

  (0, _qunit.module)('Unit | Controller | projects', function (hooks) {
    (0, _emberQunit.setupTest)(hooks); // Replace this with your real tests.

    (0, _qunit.test)('it exists', function (assert) {
      let controller = this.owner.lookup('controller:projects');
      assert.ok(controller);
    });
  });
});
define("zubeirdev/tests/unit/routes/about-test", ["qunit", "ember-qunit"], function (_qunit, _emberQunit) {
  "use strict";

  (0, _qunit.module)('Unit | Route | about', function (hooks) {
    (0, _emberQunit.setupTest)(hooks);
    (0, _qunit.test)('it exists', function (assert) {
      let route = this.owner.lookup('route:about');
      assert.ok(route);
    });
  });
});
define("zubeirdev/tests/unit/routes/index-test", ["qunit", "ember-qunit"], function (_qunit, _emberQunit) {
  "use strict";

  (0, _qunit.module)('Unit | Route | index', function (hooks) {
    (0, _emberQunit.setupTest)(hooks);
    (0, _qunit.test)('it exists', function (assert) {
      let route = this.owner.lookup('route:index');
      assert.ok(route);
    });
  });
});
define("zubeirdev/tests/unit/routes/projects-test", ["qunit", "ember-qunit"], function (_qunit, _emberQunit) {
  "use strict";

  (0, _qunit.module)('Unit | Route | projects', function (hooks) {
    (0, _emberQunit.setupTest)(hooks);
    (0, _qunit.test)('it exists', function (assert) {
      let route = this.owner.lookup('route:projects');
      assert.ok(route);
    });
  });
});
define('zubeirdev/config/environment', [], function() {
  var prefix = 'zubeirdev';
try {
  var metaName = prefix + '/config/environment';
  var rawConfig = document.querySelector('meta[name="' + metaName + '"]').getAttribute('content');
  var config = JSON.parse(decodeURIComponent(rawConfig));

  var exports = { 'default': config };

  Object.defineProperty(exports, '__esModule', { value: true });

  return exports;
}
catch(err) {
  throw new Error('Could not read config from meta tag with name "' + metaName + '".');
}

});

require('zubeirdev/tests/test-helper');
EmberENV.TESTS_FILE_LOADED = true;
//# sourceMappingURL=tests.map
