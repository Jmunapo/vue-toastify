class TestHelpers {
    constructor(wrapper, expect) {
        this.wrapper = wrapper;
        this.expect = expect;
    }

    see(text, selector) {
        let wrap = selector ? this.wrapper.find(selector) : this.wrapper;
        this.expect(wrap.html()).toContain(text);
    }
    doNotSee(text) {
        this.expect(this.wrapper.html()).not.toContain(text);
    }
    type(text, input) {
        let node = this.find(input);
        node.element.value = text;
        node.trigger("input");
    }
    click(selector) {
        this.wrapper.find(selector).trigger("click");
    }
    inputValueIs(text, selector) {
        this.expect(this.find(selector).element.value).toBe(text);
    }
    inputValueIsNot(text, selector) {
        this.expect(this.find(selector).element.value).not.toBe(text);
    }
    domHas(selector) {
        this.expect(this.wrapper.contains(selector)).toBe(true);
    }
    domHasNot(selector) {
        this.expect(this.wrapper.contains(selector)).toBe(false);
    }
    domHasLength(selector, length) {
        this.expect(this.wrapper.findAll(selector).length).toBe(length);
    }
    isVisible(selector) {
        this.expect(this.find(selector).element.style.display).not.toEqual(
            "none"
        );
    }
    isHidden(selector) {
        this.expect(this.find(selector).element.style.display).toEqual("none");
    }
    find(selector) {
        return this.wrapper.find(selector);
    }
    hasAttribute(selector, attribute) {
        return this.expect(
            this.find(selector).attributes()[attribute]
        ).toBeTruthy();
    }
}

export default TestHelpers;
