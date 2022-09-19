import { module, test } from 'qunit';
import { setupRenderingTest } from 'ember-quickstart/tests/helpers';
import { render } from '@ember/test-helpers';
import { hbs } from 'ember-cli-htmlbars';

module('Integration | Component | people-list', function (hooks) {
  setupRenderingTest(hooks);

  test('it renders', async function (assert) {
    await render(hbs`<PeopleList />`);
    assert.dom(this.element).hasText('');

    await render(hbs`
      <PeopleList
        @title="List of People"
      />
    `);
    assert.dom(this.element).hasText('List of People');

    this.set('mockModel', [
      'John "Stumpy" Pepys',
      'Eric "Stumpy Joe" Childs',
      'Peter "James" Bond',
      'Mick Shrimpton',
      'Joe "Mama" Besser',
      'Richard "Ric" Shrimpton',
      'Sammy "Stumpy" Bateman',
      'Scott "Skippy" Scuffleton',
      'Chris "Poppa" Cadeau',
    ]);

    await render(hbs`
      <PeopleList
        @title="List of Drummers"
        @people={{this.mockModel}}
      />
    `);

    assert.dom(this.element).hasText(/List of Drummers/);
    assert.dom(this.element).hasText(/John "Stumpy" Pepys/);
    assert.dom(this.element).hasText(/Scott "Skippy" Scuffleton/);
  });
});
