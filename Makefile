
build: components lib/index.js lib/index.html lib/index.css
	@component build --dev

components: component.json
	@component install --dev

clean:
	rm -fr build components

test: build
	open test/index.html

.PHONY: clean test
