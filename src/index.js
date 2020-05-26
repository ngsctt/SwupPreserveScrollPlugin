import Plugin from '@swup/plugin';
import { getCurrentUrl } from 'swup/lib/helpers';

export default class PreserveScrollPlugin extends Plugin {
	name = 'PreserveScrollPlugin';

	constructor(options = {}) {
		super();
		const defaultOptions = {
			selector: '.swup-preserve-scroll',
			quiet: false
		};
		this.options = {
			...defaultOptions,
			...options
		};
	}

	getURL = () => {
		this.previousPage = getCurrentUrl();
		return;
	};

	getScrolls = () => {
		const elements = document.querySelectorAll(this.options.selector);
		if (!(elements.length > 0)) {
			if (this.options.quiet !== true)
				console.warn(
					`${this.previousPage}: there were no elements matching the '${
						this.options.selector
					}' selector.`
				);
			this.previousPage = null;
			return;
		}
		elements.forEach((element) => {
			if (!element.id || element.id === '') {
				if (this.options.quiet !== true)
					console.warn(
						`${this.previousPage}: an element matching the '${
							this.options.selector
						}' selector has no id.`
					);
				return;
			}
			const id = element.id;
			this.swupPreserveScroll[id] = {
				top: element.scrollTop,
				left: element.scrollLeft
			};
		});
		this.previousPage = null;
		return;
	};

	applyScrolls = () => {
		const elements = document.querySelectorAll(this.options.selector);
		elements.forEach((element) => {
			if (!element.id || element.id === '') {
				if (this.options.quiet !== true)
					console.warn(
						`${getCurrentUrl()}: an element matching the '${
							this.options.selector
						}' selector has no id.`
					);
				return;
			}
			const id = element.id;
			if (this.swupPreserveScroll[id]) {
				element.scrollTop = this.swupPreserveScroll[id].top;
				element.scrollLeft = this.swupPreserveScroll[id].left;
			}
		});
		return;
	};

	mount() {
		this.swupPreserveScroll = {};

		this.swup.on('transitionStart', this.getURL);
		this.swup.on('willReplaceContent', this.getScrolls);
		this.swup.on('contentReplaced', this.applyScrolls);
	}

	unmount() {
		this.swup.off('willReplaceContent', this.getScrolls);
		this.swup.off('contentReplaced', this.applyScrolls);
		this.swup.off('transitionStart', this.getURL);
	}
}
