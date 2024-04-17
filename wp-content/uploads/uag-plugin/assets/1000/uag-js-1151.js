document.addEventListener("DOMContentLoaded", function(){ 				window.addEventListener( 'DOMContentLoaded', function() {
					const scope = document.querySelector( '.uagb-block-eb81b633' );
					if ( scope ){
						if ( scope.children[0].classList.contains( 'spectra-image-gallery__layout--tiled' ) ) {
							const element = scope.querySelector( '.spectra-image-gallery__layout--tiled' );
							const tileSizer = scope.querySelector( '.spectra-image-gallery__media-sizer' );
							element.style.gridAutoRows = `${ tileSizer.getBoundingClientRect().width }px`;

							imagesLoaded( element ).on( 'progress', ( theInstance, theImage ) => {
								if ( theImage.isLoaded ){
									const imageElement = theImage.img;
									const imageWrapper = imageElement.parentElement.parentElement;
									const mediaWrapper = imageWrapper.parentElement;
									if( ! mediaWrapper.classList.contains( 'spectra-image-gallery__media-wrapper--focus' ) ){
										if ( imageElement.naturalWidth >= ( imageElement.naturalHeight * 2 ) - ( imageElement.naturalHeight / 2 ) ){
											mediaWrapper.classList.add( 'spectra-image-gallery__media-wrapper--wide');
											imageWrapper.classList.add( 'spectra-image-gallery__media--tiled-wide');
										}
										else if ( imageElement.naturalHeight >= ( imageElement.naturalWidth * 2 ) - ( imageElement.naturalWidth / 2 ) ){
											mediaWrapper.classList.add( 'spectra-image-gallery__media-wrapper--tall');
											imageWrapper.classList.add( 'spectra-image-gallery__media--tiled-tall');
										}
									}
								}
							} );
							tileSizer.style.display = 'none';
						}
					}
				} );
							window.addEventListener( 'DOMContentLoaded', () => {
					const blockScope = document.querySelector( '.uagb-block-eb81b633' );
					if ( ! blockScope ) {
						return;
					}

					let lightboxSwiper = null;
					let thumbnailSwiper = null;

										let lightboxSettings = {"lazy":true,"slidesPerView":1,"navigation":{"nextEl":".uagb-block-eb81b633+.spectra-image-gallery__control-lightbox .swiper-button-next","prevEl":".uagb-block-eb81b633+.spectra-image-gallery__control-lightbox .swiper-button-prev"},"keyboard":{"enabled":true}};
															lightboxSwiper = new Swiper( ".uagb-block-eb81b633+.spectra-image-gallery__control-lightbox .spectra-image-gallery__control-lightbox--main",
						{"lazy":true,"slidesPerView":1,"navigation":{"nextEl":".uagb-block-eb81b633+.spectra-image-gallery__control-lightbox .swiper-button-next","prevEl":".uagb-block-eb81b633+.spectra-image-gallery__control-lightbox .swiper-button-prev"},"keyboard":{"enabled":true}}					);
					loadLightBoxImages( blockScope, lightboxSwiper, null, {"block_id":"eb81b633","classMigrate":true,"readyToRender":true,"tileSize":244,"focusListObject":{"44":true},"mediaGallery":[{"sizes":{"full":{"url":"http:\/\/192.168.1.22\/wp-content\/uploads\/2024\/02\/Tangongon-pseudostem-color.jpg","height":1052,"width":663,"orientation":"portrait"}},"mime":"image\/jpeg","type":"image","subtype":"jpeg","id":39,"url":"http:\/\/192.168.1.22\/wp-content\/uploads\/2024\/02\/Tangongon-pseudostem-color.jpg","alt":"","link":"http:\/\/192.168.1.22\/?attachment_id=39","caption":"Pseudostem color"},{"sizes":{"full":{"url":"http:\/\/192.168.1.22\/wp-content\/uploads\/2024\/02\/Tangongon-Predominant-underlying-color-of-the-pseudostem2.jpg","height":1912,"width":1576,"orientation":"portrait"}},"mime":"image\/jpeg","type":"image","subtype":"jpeg","id":44,"url":"http:\/\/192.168.1.22\/wp-content\/uploads\/2024\/02\/Tangongon-Predominant-underlying-color-of-the-pseudostem2.jpg","alt":"","link":"http:\/\/192.168.1.22\/?attachment_id=44","caption":"Predominant underlying color of the psuedostem"},{"sizes":{"full":{"url":"http:\/\/192.168.1.22\/wp-content\/uploads\/2024\/02\/Tangongon-pigmentation-of-the-underlying-psuedostem.jpg","height":1351,"width":794,"orientation":"portrait"}},"mime":"image\/jpeg","type":"image","subtype":"jpeg","id":38,"url":"http:\/\/192.168.1.22\/wp-content\/uploads\/2024\/02\/Tangongon-pigmentation-of-the-underlying-psuedostem.jpg","alt":"","link":"http:\/\/192.168.1.22\/?attachment_id=38","caption":"Pigmentation of the underlying pseudostem"},{"sizes":{"full":{"url":"http:\/\/192.168.1.22\/wp-content\/uploads\/2024\/02\/tangongon-lamina-base-equality-ad-lamina-base-shape.jpg","height":963,"width":980,"orientation":"landscape"}},"mime":"image\/jpeg","type":"image","subtype":"jpeg","id":37,"url":"http:\/\/192.168.1.22\/wp-content\/uploads\/2024\/02\/tangongon-lamina-base-equality-ad-lamina-base-shape.jpg","alt":"","link":"http:\/\/192.168.1.22\/?attachment_id=37","caption":"Lamina base equality and base shape"},{"sizes":{"full":{"url":"http:\/\/192.168.1.22\/wp-content\/uploads\/2024\/02\/tangongon-female-and-male-flowers.jpg","height":975,"width":1301,"orientation":"landscape"}},"mime":"image\/jpeg","type":"image","subtype":"jpeg","id":33,"url":"http:\/\/192.168.1.22\/wp-content\/uploads\/2024\/02\/tangongon-female-and-male-flowers.jpg","alt":"","link":"http:\/\/192.168.1.22\/?attachment_id=33","caption":"Female & Male Flowers"},{"sizes":{"full":{"url":"http:\/\/192.168.1.22\/wp-content\/uploads\/2024\/02\/Tangongon-female-and-male-flowers-2.jpg","height":944,"width":1258,"orientation":"landscape"}},"mime":"image\/jpeg","type":"image","subtype":"jpeg","id":32,"url":"http:\/\/192.168.1.22\/wp-content\/uploads\/2024\/02\/Tangongon-female-and-male-flowers-2.jpg","alt":"","link":"http:\/\/192.168.1.22\/?attachment_id=32","caption":"Female & Male Flowers"},{"sizes":{"full":{"url":"http:\/\/192.168.1.22\/wp-content\/uploads\/2024\/02\/tangongon-sap.jpg","height":1027,"width":1369,"orientation":"landscape"}},"mime":"image\/jpeg","type":"image","subtype":"jpeg","id":40,"url":"http:\/\/192.168.1.22\/wp-content\/uploads\/2024\/02\/tangongon-sap.jpg","alt":"","link":"http:\/\/192.168.1.22\/?attachment_id=40","caption":"Sap"},{"sizes":{"full":{"url":"http:\/\/192.168.1.22\/wp-content\/uploads\/2024\/02\/tangongon-fruit-cross-section.jpg","height":1312,"width":1904,"orientation":"landscape"}},"mime":"image\/jpeg","type":"image","subtype":"jpeg","id":35,"url":"http:\/\/192.168.1.22\/wp-content\/uploads\/2024\/02\/tangongon-fruit-cross-section.jpg","alt":"","link":"http:\/\/192.168.1.22\/?attachment_id=35","caption":"Fruit"},{"sizes":{"full":{"url":"http:\/\/192.168.1.22\/wp-content\/uploads\/2024\/02\/tangongon-fruit-cross-section-2.jpg","height":1098,"width":1464,"orientation":"landscape"}},"mime":"image\/jpeg","type":"image","subtype":"jpeg","id":34,"url":"http:\/\/192.168.1.22\/wp-content\/uploads\/2024\/02\/tangongon-fruit-cross-section-2.jpg","alt":"","link":"http:\/\/192.168.1.22\/?attachment_id=34","caption":"Fruit"}],"mediaIDs":[39,44,38,37,33,32,40,35,34],"feedLayout":"tiled","imageClickEvent":"lightbox","captionVisibility":"antiHover","imageCaptionAlignment":"bottom center","imageCaptionAlignment01":"bottom","columnsDesk":4,"columnsTab":4,"columnsMob":4,"focusList":[],"imageDisplayCaption":true,"galleryImageSize":"large","galleryImageSizeTablet":"large","galleryImageSizeMobile":"medium","lightboxDisplayCaptions":false,"lightboxThumbnails":false,"lightboxDisplayCount":false,"lightboxCloseIcon":"xmark","lightboxCaptionHeight":50,"lightboxCaptionHeightTablet":"","lightboxCaptionHeightMobile":"","lightboxIconSize":24,"lightboxIconSizeTablet":"","lightboxIconSizeMobile":"","captionDisplayType":"overlay","imageCaptionAlignment02":"center","imageDefaultCaption":"No Caption","captionPaddingTop":8,"captionPaddingRight":8,"captionPaddingBottom":8,"captionPaddingLeft":8,"captionPaddingTopTab":8,"captionPaddingRightTab":8,"captionPaddingBottomTab":8,"captionPaddingLeftTab":8,"captionPaddingTopMob":8,"captionPaddingRightMob":8,"captionPaddingBottomMob":8,"captionPaddingLeftMob":8,"captionPaddingUnit":"px","captionPaddingUnitTab":"px","captionPaddingUnitMob":"px","captionPaddingUnitLink":true,"captionGap":0,"captionGapUnit":"px","gridImageGap":8,"gridImageGapTab":"","gridImageGapMob":"","gridImageGapUnit":"px","gridImageGapUnitTab":"px","gridImageGapUnitMob":"px","feedMarginTop":"","feedMarginRight":"","feedMarginBottom":"","feedMarginLeft":"","feedMarginTopTab":"","feedMarginRightTab":"","feedMarginBottomTab":"","feedMarginLeftTab":"","feedMarginTopMob":"","feedMarginRightMob":"","feedMarginBottomMob":"","feedMarginLeftMob":"","feedMarginUnit":"px","feedMarginUnitTab":"px","feedMarginUnitMob":"px","feedMarginUnitLink":true,"carouselStartAt":0,"carouselSquares":false,"carouselLoop":true,"carouselAutoplay":true,"carouselAutoplaySpeed":2000,"carouselPauseOnHover":true,"carouselTransitionSpeed":500,"gridPages":1,"gridPageNumber":1,"feedPagination":false,"paginateUseArrows":true,"paginateUseDots":true,"paginateUseLoader":true,"paginateLimit":9,"paginateButtonAlign":"center","paginateButtonText":"Load More Images","paginateButtonPaddingTop":"","paginateButtonPaddingRight":"","paginateButtonPaddingBottom":"","paginateButtonPaddingLeft":"","paginateButtonPaddingTopTab":"","paginateButtonPaddingRightTab":"","paginateButtonPaddingBottomTab":"","paginateButtonPaddingLeftTab":"","paginateButtonPaddingTopMob":"","paginateButtonPaddingRightMob":"","paginateButtonPaddingBottomMob":"","paginateButtonPaddingLeftMob":"","paginateButtonPaddingUnit":"px","paginateButtonPaddingUnitTab":"px","paginateButtonPaddingUnitMob":"px","paginateButtonPaddingUnitLink":true,"imageEnableZoom":true,"imageZoomType":"zoom-in","captionBackgroundEnableBlur":false,"captionBackgroundBlurAmount":0,"captionBackgroundBlurAmountHover":5,"lightboxEdgeDistance":10,"lightboxEdgeDistanceTablet":"","lightboxEdgeDistanceMobile":"","lightboxBackgroundEnableBlur":true,"lightboxBackgroundBlurAmount":5,"lightboxBackgroundColor":"rgba(0,0,0,0.75)","lightboxIconColor":"rgba(255,255,255,1)","lightboxCaptionColor":"rgba(255,255,255,1)","lightboxCaptionBackgroundColor":"rgba(0,0,0,1)","captionLoadGoogleFonts":false,"captionFontFamily":"Default","captionFontWeight":"","captionFontStyle":"normal","captionTransform":"","captionDecoration":"none","captionFontSizeType":"px","captionFontSize":"","captionFontSizeTab":"","captionFontSizeMob":"","captionLineHeightType":"em","captionLineHeight":"","captionLineHeightTab":"","captionLineHeightMob":"","loadMoreLoadGoogleFonts":false,"loadMoreFontFamily":"Default","loadMoreFontWeight":"","loadMoreFontStyle":"normal","loadMoreTransform":"","loadMoreDecoration":"none","loadMoreFontSizeType":"px","loadMoreFontSize":"","loadMoreFontSizeTab":"","loadMoreFontSizeMob":"","loadMoreLineHeightType":"em","loadMoreLineHeight":"","loadMoreLineHeightTab":"","loadMoreLineHeightMob":"","lightboxLoadGoogleFonts":false,"lightboxFontFamily":"Default","lightboxFontWeight":"","lightboxFontStyle":"normal","lightboxTransform":"","lightboxDecoration":"none","lightboxFontSizeType":"px","lightboxFontSize":"","lightboxFontSizeTab":"","lightboxFontSizeMob":"","lightboxLineHeightType":"em","lightboxLineHeight":"","lightboxLineHeightTab":"","lightboxLineHeightMob":"","captionBackgroundEffect":"none","captionBackgroundEffectHover":"none","captionBackgroundEffectAmount":100,"captionBackgroundEffectAmountHover":0,"captionColor":"rgba(255,255,255,1)","captionColorHover":"rgba(255,255,255,1)","captionBackgroundColor":"rgba(0,0,0,0.75)","captionBackgroundColorHover":"rgba(0,0,0,0.75)","overlayColor":"rgba(0,0,0,0)","overlayColorHover":"rgba(0,0,0,0)","captionSeparateColors":false,"paginateArrowDistance":-24,"paginateArrowDistanceUnit":"px","paginateArrowSize":24,"paginateDotDistance":8,"paginateDotDistanceUnit":"px","paginateLoaderSize":18,"paginateButtonTextColor":"","paginateButtonTextColorHover":"","paginateColor":"","paginateColorHover":"","imageBoxShadowColor":"","imageBoxShadowHOffset":0,"imageBoxShadowVOffset":0,"imageBoxShadowBlur":"","imageBoxShadowSpread":"","imageBoxShadowPosition":"outset","imageBoxShadowColorHover":"","imageBoxShadowHOffsetHover":0,"imageBoxShadowVOffsetHover":0,"imageBoxShadowBlurHover":"","imageBoxShadowSpreadHover":"","imageBoxShadowPositionHover":"outset","arrowBorderTopWidth":4,"arrowBorderLeftWidth":4,"arrowBorderRightWidth":4,"arrowBorderBottomWidth":4,"arrowBorderTopLeftRadius":50,"arrowBorderTopRightRadius":50,"arrowBorderBottomLeftRadius":50,"arrowBorderBottomRightRadius":50,"arrowBorderRadiusUnit":"px","arrowBorderTopWidthTablet":"","arrowBorderLeftWidthTablet":"","arrowBorderRightWidthTablet":"","arrowBorderBottomWidthTablet":"","arrowBorderTopLeftRadiusTablet":"","arrowBorderTopRightRadiusTablet":"","arrowBorderBottomLeftRadiusTablet":"","arrowBorderBottomRightRadiusTablet":"","arrowBorderRadiusUnitTablet":"px","arrowBorderTopWidthMobile":"","arrowBorderLeftWidthMobile":"","arrowBorderRightWidthMobile":"","arrowBorderBottomWidthMobile":"","arrowBorderTopLeftRadiusMobile":"","arrowBorderTopRightRadiusMobile":"","arrowBorderBottomLeftRadiusMobile":"","arrowBorderBottomRightRadiusMobile":"","arrowBorderRadiusUnitMobile":"px","arrowBorderStyle":"none","arrowBorderColor":"","arrowBorderHColor":"","btnBorderTopWidth":"","btnBorderLeftWidth":"","btnBorderRightWidth":"","btnBorderBottomWidth":"","btnBorderTopLeftRadius":"","btnBorderTopRightRadius":"","btnBorderBottomLeftRadius":"","btnBorderBottomRightRadius":"","btnBorderRadiusUnit":"px","btnBorderTopWidthTablet":"","btnBorderLeftWidthTablet":"","btnBorderRightWidthTablet":"","btnBorderBottomWidthTablet":"","btnBorderTopLeftRadiusTablet":"","btnBorderTopRightRadiusTablet":"","btnBorderBottomLeftRadiusTablet":"","btnBorderBottomRightRadiusTablet":"","btnBorderRadiusUnitTablet":"px","btnBorderTopWidthMobile":"","btnBorderLeftWidthMobile":"","btnBorderRightWidthMobile":"","btnBorderBottomWidthMobile":"","btnBorderTopLeftRadiusMobile":"","btnBorderTopRightRadiusMobile":"","btnBorderBottomLeftRadiusMobile":"","btnBorderBottomRightRadiusMobile":"","btnBorderRadiusUnitMobile":"px","btnBorderStyle":"","btnBorderColor":"","btnBorderHColor":"","imageBorderTopWidth":"","imageBorderLeftWidth":"","imageBorderRightWidth":"","imageBorderBottomWidth":"","imageBorderTopLeftRadius":"","imageBorderTopRightRadius":"","imageBorderBottomLeftRadius":"","imageBorderBottomRightRadius":"","imageBorderRadiusUnit":"px","imageBorderTopWidthTablet":"","imageBorderLeftWidthTablet":"","imageBorderRightWidthTablet":"","imageBorderBottomWidthTablet":"","imageBorderTopLeftRadiusTablet":"","imageBorderTopRightRadiusTablet":"","imageBorderBottomLeftRadiusTablet":"","imageBorderBottomRightRadiusTablet":"","imageBorderRadiusUnitTablet":"px","imageBorderTopWidthMobile":"","imageBorderLeftWidthMobile":"","imageBorderRightWidthMobile":"","imageBorderBottomWidthMobile":"","imageBorderTopLeftRadiusMobile":"","imageBorderTopRightRadiusMobile":"","imageBorderBottomLeftRadiusMobile":"","imageBorderBottomRightRadiusMobile":"","imageBorderRadiusUnitMobile":"px","imageBorderStyle":"","imageBorderColor":"","imageBorderHColor":"","mainTitleBorderTopWidth":2,"mainTitleBorderLeftWidth":0,"mainTitleBorderRightWidth":0,"mainTitleBorderBottomWidth":2,"mainTitleBorderTopLeftRadius":"","mainTitleBorderTopRightRadius":"","mainTitleBorderBottomLeftRadius":"","mainTitleBorderBottomRightRadius":"","mainTitleBorderRadiusUnit":"px","mainTitleBorderTopWidthTablet":"","mainTitleBorderLeftWidthTablet":"","mainTitleBorderRightWidthTablet":"","mainTitleBorderBottomWidthTablet":"","mainTitleBorderTopLeftRadiusTablet":"","mainTitleBorderTopRightRadiusTablet":"","mainTitleBorderBottomLeftRadiusTablet":"","mainTitleBorderBottomRightRadiusTablet":"","mainTitleBorderRadiusUnitTablet":"px","mainTitleBorderTopWidthMobile":"","mainTitleBorderLeftWidthMobile":"","mainTitleBorderRightWidthMobile":"","mainTitleBorderBottomWidthMobile":"","mainTitleBorderTopLeftRadiusMobile":"","mainTitleBorderTopRightRadiusMobile":"","mainTitleBorderBottomLeftRadiusMobile":"","mainTitleBorderBottomRightRadiusMobile":"","mainTitleBorderRadiusUnitMobile":"px","mainTitleBorderStyle":"","mainTitleBorderColor":"","mainTitleBorderHColor":""}, thumbnailSwiper );
									} );
			 });