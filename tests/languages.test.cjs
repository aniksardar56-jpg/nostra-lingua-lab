const { test } = require('node:test');
const assert = require('node:assert/strict');
const { readFileSync } = require('node:fs');
const vm = require('node:vm');

const source = readFileSync('languages.js', 'utf8');
function page(saved = 'bn', blockedStorage = false) {
  const text = value => ({ textContent: value, parentElement: { closest: () => false } });
  const nodes = [text('কোর্স'), text('ইতালীয় ভাষা এখনআপনার ভাষায়।')];
  const selector = { value: '', setAttribute() {}, addEventListener(event, handler) { this.change = handler; } };
  const storage = new Map([['nostroLinguaLanguage', saved]]);
  const document = {
    body: {}, documentElement: {}, getElementById: () => selector,
    querySelectorAll: () => [],
    createTreeWalker() {
      let index = 0;
      return { nextNode() { this.currentNode = nodes[index++]; return !!this.currentNode; } };
    },
  };
  const window = {};
  vm.runInNewContext(source, {
    window, document, NodeFilter: { SHOW_TEXT: 4 },
    localStorage: {
      getItem(key) { if (blockedStorage) throw Error('Blocked'); return storage.get(key); },
      setItem(key, value) { if (blockedStorage) throw Error('Blocked'); storage.set(key, value); },
    },
  });
  return { nodes, text, selector, window, document, storage };
}

test('switches all three languages repeatedly and remembers the choice', () => {
  const p = page();
  for (const [lang, expected] of [['en', 'Courses'], ['it', 'Corsi'], ['bn', 'কোর্স'], ['en', 'Courses']]) {
    p.selector.value = lang;
    p.selector.change();
    assert.equal(p.nodes[0].textContent, expected);
    assert.equal(p.document.documentElement.lang, lang);
    assert.equal(p.storage.get('nostroLinguaLanguage'), lang);
  }
});

test('translates server content arriving after the saved language was restored', () => {
  const p = page('it');
  p.nodes.splice(1, 1, p.text('ইতালীয় ভাষা এখনআপনার ভাষায়।'), p.text('ডাউনলোড ↗'), p.text('verbo farcela '));
  p.window.applySiteLanguage();
  assert.deepEqual(p.nodes.map(node => node.textContent), ['Corsi', 'L’italiano, ora nella tua lingua.', 'Scarica ↗', 'Il verbo farcela ']);
  const html = readFileSync('index.html', 'utf8');
  assert.match(html, /value=data\.whatsapp;window\.applySiteLanguage\?\.\(\)/);
  assert.match(html, /type="module" src="\.\/languages\.js"/);
});

test('invalid preferences and unavailable storage do not break switching', () => {
  assert.equal(page('unknown').document.documentElement.lang, 'bn');
  const p = page('it', true);
  p.selector.value = 'en';
  p.selector.change();
  assert.equal(p.nodes[0].textContent, 'Courses');
});
