(function (blink) {
	'use strict';

	var eduvisionStyle = function () {
			blink.theme.styles.basic.apply(this, arguments);
		},
		page = blink.currentPage;

	eduvisionStyle.prototype = {
		bodyClassName: 'content_type_clase_eduvision',
		extraPlugins: ['image2'],
		ckEditorStyles: {
			name: 'eduvision',
			styles: [

				{ name: 'Título 1', element: 'h4', attributes: { 'class': 'bck-title1'} },
				{ name: 'Título 2', element: 'h4', attributes: { 'class': 'bck-title2'} },
				{ name: 'Título 3', element: 'h4', attributes: { 'class': 'bck-title3'} },
				{ name: 'Título 4', element: 'h4', attributes: { 'class': 'bck-title4'} },
				{ name: 'Título 5', element: 'h4', attributes: { 'class': 'bck-title5'} },
				{ name: 'Título 6', element: 'h4', attributes: { 'class': 'bck-title6'} },
				{ name: 'Título trabajo cotidiano', element: 'h4', attributes: { 'class': 'bck-title7'} },
				{ name: 'Título Analice', element: 'h4', attributes: { 'class': 'bck-title8'} },



				{ name: 'Énfasis', element: 'span', attributes: { 'class': 'bck-enfasis' }},
				{ name: 'Enunciado actividad', element: 'h4', attributes: { 'class': 'bck-title-activity' }},

				{ name: 'Tabla centrada', element: 'table', type: 'bck-stack-class', attributes: { 'class': 'bck-table-center'} },
				{ name: 'Celda encabezado', element: 'td', attributes: { 'class': 'bck-td' } },
				{ name: 'Celda dos', element: 'td', attributes: { 'class': 'bck-td-2' } },

				{ name: 'Lista Ordenada', element: 'ol', attributes: { 'class': 'bck-ol' } },
				{ name: 'Lista Ordenada 2', element: 'ol', attributes: { 'class': 'bck-ol-2' } },
				{ name: 'Lista Ordenada 3', element: 'ol', attributes: { 'class': 'bck-ol-3' } },
				{ name: 'Lista Ordenada 4', element: 'ol', attributes: { 'class': 'bck-ol-4' } },
				{ name: 'Lista Ordenada 5', element: 'ol', attributes: { 'class': 'bck-ol-5' } },
				{ name: 'Lista Ordenada 6', element: 'ol', attributes: { 'class': 'bck-ol-6' } },
				{ name: 'Lista Ordenada 7', element: 'ol', attributes: { 'class': 'bck-ol-7' } },
				{ name: 'Lista Desordenada', element: 'ul', attributes: { 'class': 'bck-ul'} },
				{ name: 'Lista Desordenada 2', element: 'ul', attributes: { 'class': 'bck-ul-2'} },
				{ name: 'Lista Desordenada 2', element: 'ul', attributes: { 'class': 'bck-ul-3'} },

				{ name: 'Icono Aplico', element: 'span', attributes: { 'class': 'icon icon-aplico' } },
				{ name: 'Icono Mapa conceptual', element: 'span', attributes: { 'class': 'icon icon-aprendamosconelmapaconceptual' } },
				{ name: 'Icono Taller', element: 'span', attributes: { 'class': 'icon icon-taller' } },
				{ name: 'Icono Evaluacion', element: 'span', attributes: { 'class': 'icon icon-evaluacion' } },
				{ name: 'Icono Cine Foro', element: 'span', attributes: { 'class': 'icon icon-cineforoicon' } },
				{ name: 'Icono Trabajo Extra', element: 'span', attributes: { 'class': 'icon trabajo_extra' } },

				{ name: 'Icono Ya lo sé', element: 'span', attributes: { 'class': 'icon icon-yalose' } },
				{ name: 'Icono Refuerza', element: 'span', attributes: { 'class': 'icon icon-refuerza' } },
				{ name: 'Icono Evaluación Costa Rica', element: 'span', attributes: { 'class': 'icon icon-evaluacioncostarica' } },
				{ name: 'Icono Momento 1', element: 'span', attributes: { 'class': 'icon icon-momentouno' } },
				{ name: 'Icono Momento 2', element: 'span', attributes: { 'class': 'icon icon-momentodos' } },
				{ name: 'Icono Momento 3', element: 'span', attributes: { 'class': 'icon icon-momentotres' } },
				{ name: 'Icono Momento 4', element: 'span', attributes: { 'class': 'icon icon-momentocuatro' } },
				{ name: 'Icono Para aprender y divertirme', element: 'span', attributes: { 'class': 'icon icon-aprenderydivertirme' } },

				{ name: 'Icono Exploremos', element: 'span', attributes: { 'class': 'icon icon-exploremos' } },
				{ name: 'Icono Reconozca', element: 'span', attributes: { 'class': 'icon icon-reconozca' } },
				{ name: 'Icono La Clave', element: 'span', attributes: { 'class': 'icon icon-clave' } },
				{ name: 'Icono Argumente', element: 'span', attributes: { 'class': 'icon icon-argumente' } },
				{ name: 'Icono Interprete', element: 'span', attributes: { 'class': 'icon icon-interprete' } },
				{ name: 'Icono Produzca', element: 'span', attributes: { 'class': 'icon icon-produzca' } },
				{ name: 'Icono Practiquemos', element: 'span', attributes: { 'class': 'icon icon-practiquemos' } },
				{ name: 'Icono Lo que se lee', element: 'span', attributes: { 'class': 'icon icon-loqueselee' } },


				{ name: 'Icono Antes de leer', element: 'span', attributes: { 'class': 'icon icon-antesdeleer' } },
				{ name: 'Icono Apliquemos', element: 'span', attributes: { 'class': 'icon icon-apliquemos' } },
				{ name: 'Icono Competencias', element: 'span', attributes: { 'class': 'icon icon-competencias' } },
				{ name: 'Icono Dominios del saber', element: 'span', attributes: { 'class': 'icon icon-dominiosdelsaber' } },
				{ name: 'Icono Exploremos', element: 'span', attributes: { 'class': 'icon icon-exploremos' } },
				{ name: 'Icono Taller', element: 'span', attributes: { 'class': 'icon icon-taller' } },

				
				{ name: 'Caja Aplico', type: 'widget', widget: 'blink_box', attributes: { 'class': 'box-1' } },
				{ name: 'Caja Taller ambiental', type: 'widget', widget: 'blink_box', attributes: { 'class': 'box-2' } },
				{ name: 'Caja 3', type: 'widget', widget: 'blink_box', attributes: { 'class': 'box-3' } },
				{ name: 'Caja Materiales', type: 'widget', widget: 'blink_box', attributes: { 'class': 'box-4' } },
				{ name: 'Caja Integración', type: 'widget', widget: 'blink_box', attributes: { 'class': 'box-5' } },
				{ name: 'Caja Diccionario', type: 'widget', widget: 'blink_box', attributes: { 'class': 'box-6' } },
				{ name: 'Caja Imágenes', type: 'widget', widget: 'blink_box', attributes: { 'class': 'box-7' } },
				{ name: 'Caja Aprenda a', type: 'widget', widget: 'blink_box', attributes: { 'class': 'box-8' } },
				{ name: 'Caja Dato', type: 'widget', widget: 'blink_box', attributes: { 'class': 'box-9' } },
				{ name: 'Caja Plantemos', type: 'widget', widget: 'blink_box', attributes: { 'class': 'box-10' } },
				{ name: 'Caja Extraclase', type: 'widget', widget: 'blink_box', attributes: { 'class': 'box-11' } },
				{ name: 'Caja Todos vivimos aquí', type: 'widget', widget: 'blink_box', attributes: { 'class': 'box-12' } },
				{ name: 'Caja Cuaderno', type: 'widget', widget: 'blink_box', attributes: { 'class': 'box-13' } },
				{ name: 'Caja Sabías', type: 'widget', widget: 'blink_box', attributes: { 'class': 'box-14' } },
				{ name: 'Caja Costumbres', type: 'widget', widget: 'blink_box', attributes: { 'class': 'box-15' } },
				{ name: 'Caja Diccionario 2', type: 'widget', widget: 'blink_box', attributes: { 'class': 'box-16' } },
				{ name: 'Caja Recuerde', type: 'widget', widget: 'blink_box', attributes: { 'class': 'box-17' } },
				{ name: 'Caja Exploremos', type: 'widget', widget: 'blink_box', attributes: { 'class': 'box-18' } },
				{ name: 'Caja Textos', type: 'widget', widget: 'blink_box', attributes: { 'class': 'box-19' } },
				{ name: 'Caja Ortografía', type: 'widget', widget: 'blink_box', attributes: { 'class': 'box-20' } },
				{ name: 'Caja Marrón', type: 'widget', widget: 'blink_box', attributes: { 'class': 'box-21' } },
				{ name: 'Caja Actividad', type: 'widget', widget: 'blink_box', attributes: { 'class': 'box-22' } },
				{ name: 'Caja Descuadrada', type: 'widget', widget: 'blink_box', attributes: { 'class': 'box-23' } },
				{ name: 'Caja te cuento', type: 'widget', widget: 'blink_box', attributes: { 'class': 'box-24' } },
				{ name: 'Caja Textos 2', type: 'widget', widget: 'blink_box', attributes: { 'class': 'box-25' } },
			]
		},

		init: function () {
			var parent = blink.theme.styles.basic.prototype;
			parent.init.call(this);
			this.addActivityTitle();
			this.addPageNumber();
			this.formatCarouselindicators();
			this.addSlideNavigators();
		},

		removeFinalSlide: function () {
			var parent = blink.theme.styles.basic.prototype;
			parent.removeFinalSlide.call(this, true);
		},

		addActivityTitle: function () {
			if (!blink.courseInfo || !blink.courseInfo.unit) return;
			$('.libro-left').find('.title').html(function () {
				return $(this).html() + ' > ' + blink.courseInfo.unit;
			})
		},

		configEditor: function (editor) {
			editor.dtd.$removeEmpty['span'] = false;
		},

		addPageNumber: function() {
			$('.js-slider-item').each(function(i,e) {
				var idPage = $(e).attr('id');
				var page = parseInt(idPage.replace("slider-item-", ""))+1;
				$(e).find('.header').prepend('<div class="single-pagination"><div class="page">'+page+'</div></div>');
			});
		},


		formatCarouselindicators: function () {
			var $navbarBottom = $('.navbar-bottom'),
				$carouselIndicators = $('.slider-indicators').find('li');
			$navbarBottom.find('li').tooltip('destroy');

			var dropDown = '' +
					'<div class="dropdown">' +
						'<button id="dLabel" type="button" data-toggle="dropdown" aria-haspopup="true" role="button" aria-expanded="false">' +
							'Índice' +
							'<span class="caret"></span>' +
						'</button>' +
						'<ul class="dropdown-menu" role="menu" aria-labelledby="dLabel">';

			var navigatorIndex = 0;
			for (var index = 0; index < window.secuencia.length; index++) {
				var slide = eval('t'+index+'_slide'),
					slideTitle = slide.title;

				if (slide.isConcatenate) continue;

				dropDown += '<li role="presentation"><a role="menuitem">' + (navigatorIndex+1) + '. ' + stripHTML(slideTitle) + '</a></li>';
				$navbarBottom.find('li').eq(navigatorIndex).html('<span title="'+ stripHTML(slideTitle) +'">'+(navigatorIndex+1)+'</span>');
				navigatorIndex++;

			};

			dropDown += '' +
						'</ul>' +
					'</div>';

			$navbarBottom
				.attr('class', 'publisher-navbar')
				.wrapInner('<div class="navbar-content"></div>')
				.find('ol')
					.before(dropDown)
					.wrap('<div id="top-navigator"/>')
					.end()
				.find('.dropdown').find('li')
					.on('click', function (event) {
						$navbarBottom.find('ol').find('li').eq($(this).index()).trigger('click');
					});

			if (!blink.hasTouch) {
				$navbarBottom
					.find('ol').find('span')
						.tooltip({
							placement: 'bottom',
							container: 'body'
						});
			}
		},

		getEditorStyles: function () {
			return this.ckEditorStyles;
		}
	};

	eduvisionStyle.prototype = _.extend({}, new blink.theme.styles.basic(), eduvisionStyle.prototype);

	blink.theme.styles.eduvision = eduvisionStyle;

})( blink );

$(document).ready(function () {

    $('.item').find('.header').find('.title')
		.filter(function () {
			return $(this).find('.empty').length;
		}).hideBlink();

    $('.item').find('.header').find('.title')
		.filter(function () {
			return !$(this).find('.empty').length;
		})
		.each(function () {
			var $header = $(this).find('h3');
			$header.length && $header.html($header.html().replace(' ', ''));
		});

	// BK-8433 cambiamos el logo de las slides por el del dominio
	var src_logo = $('.content_type_clase_eduvision').find('.logo_slide').attr('logo_dominio');
	if (typeof(src_logo) != 'undefined' && src_logo && src_logo != '' && src_logo.indexOf('gif1x1.gif') == -1) {
		$('.content_type_clase_eduvision').find('.logo-publisher').css('background-image', "url('"+src_logo+"')");
	}

});
