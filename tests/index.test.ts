import {expect, test, vi} from 'vitest';
import {Loader} from '../src/index';

HTMLElement.prototype.getAnimations = vi.fn(() => []);

const createLoader = async () => {
    const loader = Loader.create(document.body, {
        id: 'id',
        className: 'className',
        content: 'content'
    });

    await loader.open();
    return {element: document.body.querySelector('[data-loader]') as HTMLElement, loader};
};

const {element, loader} = await createLoader();

test('set className', () => {
    expect(element.className).toBe('className');
});

test('set id', () => {
    expect(element.id).toBe('id');
});

test('set content', () => {
    expect(element.textContent).toBe('content');
});

test('open/close laoder', async () => {
    await loader.close();
    expect(element.getAttribute('data-loader')).toBe('close');
    await loader.open();
    expect(element.getAttribute('data-loader')).toBe('open');
});