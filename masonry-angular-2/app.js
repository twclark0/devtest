(function() {
function Tiles() {
  this.tiles = [
    {
      "heading": "Etiam Ipsum Euismod",
      "content": "Maecenas faucibus mollis interdum. Nullam id dolor id nibh ultricies vehicula ut id elit.",
      "image": "http://placehold.it/350x150",
      "meta": "Fringilla Commodo"
    },
    {
      "heading": "Dolor Ipsum Sollicitudin",
      "content": "Donec sed odio dui. Aenean lacinia bibendum nulla sed consectetur.",
      "image": "http://placehold.it/350x150",
      "meta": "Pharetra Ultricies"
    },
    {
      "heading": "Aenean lacinia bibendum nulla sed consectetur.",
      "content": "Integer posuere erat a ante venenatis dapibus posuere velit aliquet. Vestibulum id ligula porta felis euismod semper.",
      "image": "",
      "meta": "Tristique Sem"
    },
    {
      "heading": "Elit Porta Tellus Ultricies",
      "content": "Vestibulum id ligula porta felis euismod semper. Etiam porta sem malesuada magna mollis euismod.",
      "image": "http://placehold.it/350x150",
      "meta": "Parturient Ipsum"
    },
    {
      "heading": "Integer posuere erat a ante venenatis dapibus posuere velit aliquet.",
      "content": "Sed posuere consectetur est at lobortis. Fusce dapibus, tellus ac cursus commodo, tortor mauris condimentum nibh, ut fermentum massa justo sit amet risus.",
      "image": "",
      "meta": "Mollis Adipiscing"
    },
    {
      "heading": "Mattis Ridiculus",
      "content": "Donec id elit non mi porta gravida at eget metus. Aenean lacinia bibendum nulla sed consectetur.",
      "image": "http://placehold.it/350x150",
      "meta": ""
    },
    {
      "heading": "Vehicula Mattis Fringilla",
      "content": "Morbi leo risus, porta ac consectetur ac, vestibulum at eros. Nulla vitae elit libero, a pharetra augue.",
      "image": "http://placehold.it/350x150",
      "meta": "Aenean Lorem"
    },
    {
      "heading": "Venenatis Pharetra Purus Nullam",
      "content": "Aenean eu leo quam. Pellentesque ornare sem lacinia quam venenatis vestibulum. Duis mollis, est non commodo luctus, nisi erat porttitor ligula, eget lacinia odio sem nec elit.",
      "image": "",
      "meta": "Vulputate Mollis"
    },
    {
      "heading": "Risus Tristique Cras",
      "content": "Duis mollis, est non commodo luctus, nisi erat porttitor ligula, eget lacinia odio sem nec elit. Donec sed odio dui.",
      "image": "http://placehold.it/350x150",
      "meta": "Bibendum Condimentum"
    }
  ];

  this.initial = 5;

  this.addTile = function() {
   this.initial += 4;
  };
}

Tiles.annotations = [
  new ng.ComponentMetadata({
    selector: "tiles"
  }),
  new ng.ViewMetadata({
    template:
      '<div class="div1">' +
          '<div *ng-for="#tile of tiles | limitTo:initial" class="tile">' +
            '<img *ng-if="tile.image" src="{{tile.image}}" />' +
            '<div *ng-if="!tile.image" class="bar"></div>' +
            '<h2>{{tile.heading}}</h2>' +
            '<p>{{tile.content}}</p>' +
            '<h4>{{tile.meta}}</h2>' +
          '</div>' +
      '</div>' +
      '<button *ng-if="initial != tiles.length" (click)="addTile()">Load More</button>',
    directives: [ng.NgFor,ng.NgIf,ng.FORM_DIRECTIVES]
  })
];
document.addEventListener("DOMContentLoaded", function() {
  ng.bootstrap(Tiles);
});
})();
