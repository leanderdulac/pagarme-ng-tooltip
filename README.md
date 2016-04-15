# [pagarme-ng-tooltip](http://pagarme.github.io/pagarme-ng-tooltip/)
*[Pagar.me](http://pagar.me) directive to provide simple a tooltip*

### Check the demo [here](http://pagarme.github.io/pagarme-ng-tooltip/)

#### Installation

Install via npm package manager:
```
$ npm install pg-ng-tooltip
```

Import the directive file into your project:
```html
<script src="node_modules/pg-ng-tooltip/dest/pg-ng-tooltip.min.js"></script>
```

If you wish the same style of the example, import the css.
```html
<link rel="stylesheet" type="text/css" href="dest/css/pg-ng-tooltip.min.css">
```

Load the pg-ng-tooltip module:
```javscript
angular.module('myApp', ['pg-ng-tooltip']);
```


This directive needs a element to be placed which will be the tooltip element that will recieve the text and follow the cursor, should normally be placed right before the `<body>` closing tag.
```html
<div pg-ng-tooltip></div>
```

Given that the previous element is placed on your template file, you set as many triggers you want, just passing the respective text via attribute and *voilà!*.
```html
<div tooltip-trigger tooltip-text="Awesome text here!"></div>
```

#### Directive Optionals

You can make the tooltip escape html content by setting `html="true"` on each trigger:
```html
<div data-tooltip-trigger data-html="true" data-text="<strong>Awesome</strong> html <br /> content."></div>
```

Showing tooltip class (default is `showing`):
```html
<div pg-ng-tooltip showing-class="my-custom-class"></div>
```

Choose the text node that will recieve the text:
```html
<div pg-ng-tooltip text-node="span">
	<span></span>
</div>

<div pg-ng-tooltip text-node="#text-node">
	<span id="text-node"></span>
</div>

<div pg-ng-tooltip text-node=".text-node">
	<span class="text-node"></span>
</div>
```

You can set delays for the tooltip show and hide animations (set with milliseconds):
```html
<div pg-ng-tooltip show-delay="800"></div>

<div pg-ng-tooltip hide-delay="800"></div>
```

You can also set a timeout for the tooltip (set with milliseconds):
```html
<div pg-ng-tooltip hide-timeout="3000"></div>
```

And that's it :D

[Rafael Violato](http://rviolato.com) @ [pagar.me](http://pagar.me)

## Support
If you have any problem or suggestion please open an issue [here](https://github.com/pagarme/pagarme-ng-tooltip/issues).

## License

Check [here](LICENSE).
