import { useEffect, useRef } from 'react';
import { Linear, Expo, gsap } from 'gsap';

import { ScrollTrigger } from 'gsap/ScrollTrigger';
import $ from 'jquery';
import Scrollbar from 'smooth-scrollbar';

import InformativeNavbar from '../../Navbar/Navbar';
import Residency from '../residency/Residency';
import GetStarted from '../getStarted/GetStarted';
import News from '../news/News';
import AboutUs from '../AboutUs/AboutUs';
import ChooseUs from '../chooseus/Chooseus';
import Testimonials from '../testimonials/Testimonials';
import Stats from '../stats/Stats';
import Aos from 'aos';
import Banner from './Banner/Banner';
import OurPartner from '../OurPartner/OurPartner';
import HowWork from '../../AboutUs/HowWork/HowWork';
import HomeVideo from '../HomeVideo/HomeVideo';
import InformativeFooter from '../../InformativeFooter/InformativeFooter';
import HowWorkBuilder from '../../AboutUs/HowWork/HowWorkBuilder/HowWorkBuilder';
import './circle-animation/CircleAnimation.css';
import { Image } from 'react-bootstrap';
import { circleScrollData, circleScrollDataIcons } from '../../data/constant';
import { Zoom } from 'react-reveal';
const HomeBanner = () => {
  const scrollbarRef = useRef(null);

  useEffect(() => {
    // Register ScrollTrigger with GSAP
    gsap.registerPlugin(ScrollTrigger);

    document.body.classList.add('gsap-scroll-trigger');
    return () => {
      document.body.classList.remove('gsap-scroll-trigger');
    };
  }, []);

  useEffect(() => {
    // jquery code start here
    const noloader = true;

    const DEV = typeof noloader !== 'undefined' ? noloader : false;
    const $win = $(window);
    const $doc = $(document);
    const $html = $('html');
    const $body = $('body');
    const $res = 950;
    const nn = Linear.easeNone;
    const exo = Expo.easeOut;
    const exi = Expo.easeInOut;

    let $y = 0;
    let $x = 0;

    let $ifScrollH = $('[data-horizontal]').length;

    /*********** * ************/

    function sizeBgRound() {
      var $w_w = $(window).width() * 1.5;
      var $w_h = $(window).height() * 1.5;
      if ($w_w > $w_h) {
        $('.cirbc .cirb').width($w_w).height($w_w);
      } else {
        $('.cirbc .cirb').width($w_h).height($w_h);
      }
    }

    function heightPart() {
      var $winh = $(window).height();
      $('#app,  #sv .rg, #sv .lgt').outerHeight($winh);
    }

    $win.on('load', function () {
      sizeBgRound();
    });

    $win.on('load resize', function (e) {
      heightPart();
    });

    /************ if mobile ************/

    function ifMobile() {
      if (
        /(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|ipad|iris|kindle|Android|Silk|lge |maemo|midp|mmp| netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows (ce|phone)|xda|xiino/i.test(
          navigator.userAgent
        ) ||
        /1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck| ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c| k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50| p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]| c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i.test(
          navigator.userAgent.substr(0, 4)
        )
      ) {
        return true;
      } else {
        return false;
      }
    }

    // ifMobile() ? $html.addClass('mob') : !1;
    const isMobile = ifMobile();
    if (isMobile) {
      $html.addClass('mob');
    } else {
      // do nothing
    }

    /************ Cursor ************/

    var $cursor = {
      classCursor: function () {
        var t = this;
        $('[data-cc]').each(function () {
          var $t = $(this);
          var c = $t.data('cc');
          $t.on({
            mouseover: function () {
              $body.addClass(c);
            },
            mouseleave: function () {
              $body.removeClass(c);
            },
          });
        });
      },
      init: function () {
        var t = this;
        t.classCursor();
        $doc.on({
          mousemove: function (e) {
            var cx = e.pageX;
            var cy = e.pageY;
            gsap.to(t.cur1, 0, { left: cx, top: cy });
            gsap.to(t.cur2, 0.15, { left: cx, top: cy });
          },
        });
      },
    };

    /************ Scroll Property ************/

    function _defineProperty(obj, key, value) {
      if (key in obj) {
        Object.defineProperty(obj, key, {
          value: value,
          enumerable: true,
          configurable: true,
          writable: true,
        });
      } else {
        obj[key] = value;
      }
      return obj;
    }

    /************ smooth scrollbar initialize ************/

    class HorizontalScrollPlugin extends Scrollbar.ScrollbarPlugin {
      transformDelta(delta, fromEvent) {
        if (!/wheel/.test(fromEvent.type)) {
          return delta;
        }
        const { x, y } = delta;
        return {
          y: 0,
          x: Math.abs(x) > Math.abs(y) ? x : y,
        };
      }
    }

    _defineProperty(HorizontalScrollPlugin, 'pluginName', 'horizontalScroll');

    if (ifMobile()) {
      var $damping = 0.1;
    } else {
      var $damping = 0.07;
    }

    if ($ifScrollH) {
      if ($win.width() > $res) {
        Scrollbar.use(HorizontalScrollPlugin);
        $html.addClass('horiz');
        var $vertical = false;
        ScrollTrigger.defaults({ horizontal: true });
      } else {
        Scrollbar.use();
        $html.addClass('verti');
        var $vertical = true;
      }
    } else {
      Scrollbar.use();
      $html.addClass('verti');
      var $vertical = true;
    }
    var $s = Scrollbar.init(document.querySelector('#app'), {
      damping: $damping,
      alwaysShowTracks: false,
      delegateTo: document,
    });

    $('#smooth-scrollbar-style').remove();

    ScrollTrigger.scrollerProxy('body', {
      scrollTop(value) {
        if (arguments.length) {
          $s.scrollTop = value;
        }
        return $s.scrollTop;
      },
      scrollLeft(value) {
        if (arguments.length) {
          $s.scrollLeft = value;
        }
        return $s.scrollLeft;
      },
    });

    $s.addListener(ScrollTrigger.update);
    $s.addListener(function (status) {
      $y = status.offset.y;
      $x = status.offset.x;
    });

    gsap.defaults({ ease: nn });
    gsap.config({ nullTargetWarn: false });

    /************ Scenes ************/

    function $afterLoad() {
      if ($html.data('load') != true) {
        if ($('#sv').length) {
          gsap.from('#sv .circ', 1, {
            rotation: 90,
            scrollTrigger: {
              trigger: '#sv',
              start: 'top bottom',
              end: 'top top',
              scrub: true,
            },
          });

          var $tl = gsap.timeline({
            scrollTrigger: {
              trigger: '#sv',
              start: 'top top',
              end: 'bottom top',
              scrub: true,
              onEnter: function () {
                $('#sv .rg').removeClass('fx');
              },
              onLeaveBack: function () {
                $('#sv .rg').addClass('fx');
              },
            },
          });
          $tl.to('#sv .circm', 1, { rotation: -360 }, 'a');
          $tl.to('#sv .rnd i', 1, { rotation: 360 }, 'a');

          var $tl = gsap.timeline({
            scrollTrigger: {
              trigger: '#sv',
              start: 'top bottom',
              end: 'bottom bottom',
              scrub: true,
            },
          });
          $tl.staggerFrom(
            '#sv .rnd i',
            0.25,
            { opacity: 0, scale: 0 },
            0.25,
            'a'
          );
          $tl.staggerTo(
            '#sv .rnd > div > div',
            0.25,
            { width: '100%', height: '100%' },
            0.25,
            'a'
          );

          var $tl = gsap.timeline({
            scrollTrigger: {
              trigger: '#sv',
              start: 'top top',
              end: 'bottom top',
              scrub: true,
            },
          });
          $tl.staggerTo(
            '#sv .rnd > div > div',
            0.25,
            { width: '5%', height: '5%' },
            0.25,
            'a'
          );
          $tl.staggerTo(
            '#sv .rnd i',
            0.25,
            { opacity: 0, scale: 0 },
            0.25,
            'a'
          );

          var $tl = gsap.timeline({
            scrollTrigger: {
              trigger: '.sp-2',
              start: 'top bottom',
              end: 'bottom bottom',
              scrub: true,
            },
          });
          if ($win.width() > 950) {
            $tl.to('#sv .rg', 0.25, { paddingLeft: '50%' }, 'a');
            $tl.to('#sv .rg > div', 0.25, { y: '0%' }, 'a');
            $tl.to('#sv .cir', 0.25, { rotation: -150, x: '-1000%' }, 'a');
          } else {
            $tl.to('#sv .rg', 0.25, { paddingLeft: '0' }, 'a');
            $tl.to(
              '#sv .rg > div',
              0.25,
              { y: $win.outerHeight() / 2 - $('#sv .rg').outerHeight() / 2 },
              'a'
            );
            $tl.to('#sv .cir', 0.25, { rotation: -150, x: '0' }, 'a');
          }
          $tl.to(
            '#sv .crc:nth-child(2) > div, #sv .crc:nth-child(4) > div',
            0.25,
            { height: '0%' },
            'a'
          );
          $tl.to(
            '#sv .crc:nth-child(1) > div, #sv .crc:nth-child(3) > div',
            0.25,
            { width: '0%' },
            'a'
          );

          gsap.to('#sv .crc > div', 1, {
            scale: 0,
            scrollTrigger: {
              trigger: '.sp-2',
              start: 'top top',
              end: 'bottom top',
              scrub: true,
            },
          });

          var $tl = gsap.timeline({
            scrollTrigger: {
              trigger: '.sp-2',
              start: 'top top',
              end: 'bottom top',
              scrub: true,
              onEnter: function () {
                $('.sp-2 .eavl').removeClass('fx');
              },
              onLeaveBack: function () {
                $('.sp-2 .eavl').addClass('fx');
              },
            },
          });

          var $tl = gsap.timeline({
            scrollTrigger: {
              trigger: '.sp-2',
              start: 'bottom bottom',
              scrub: true,
            },
          });
          $tl.from('.sp-2 h2', 1, { opacity: 0, x: '0%' }, 'a');
          $tl.to(
            '.cirbc svg',
            1,
            { rotation: 180, opacity: 1, strokeDasharray: '300 999' },
            'a'
          );

          var $tl = gsap.timeline({
            scrollTrigger: {
              trigger: '.sp-5',
              start: 'top bottom',
              end: 'bottom top',
              scrub: true,
            },
          });
          $tl.to('.cirbc .cirbr', 1, { width: '100%', height: '100%' }, 'a');
          $tl.to('#sv .cir', 1, { scale: 0, opacity: 0 }, 'a');

          $('.lgtxc').each(function () {
            var n = $(this).data('lg-st');
            var $tl = gsap.timeline({
              scrollTrigger: {
                trigger: this,
                start: 'top bottom',
                end: 'top top',
                scrub: true,
              },
            });
            $tl.to('.cirbc i.n' + n, 1, { opacity: 1 }, 'a');

            var $tl = gsap.timeline({
              scrollTrigger: {
                trigger: this,
                start: 'top 20%',
                end: 'top -30%',
                scrub: true,
              },
            });
            $tl.to(this, 1, { opacity: 0 }, 'a');
            $tl.to('.cirbc i.n' + n, 1, { opacity: 0, scale: 0 }, 'a');
          });

          var $tl = gsap.timeline({
            scrollTrigger: {
              trigger: '.sp-3',
              start: 'top 50%',
              end: 'bottom 50%',
              scrub: true,
            },
          });
          $tl.to('.cirbc .cirbr', 1, { backgroundColor: '#fff' }, 'a');
          $tl.to('.sp-2', 1, { opacity: 0 }, 'a');
          $tl.to('.cirbc svg', 1, { scale: 0 }, 'a');

          $('#sv .lgt > div').each(function () {
            $tl.fromTo(
              this,
              1,
              { opacity: 0 },
              {
                opacity: 1,
                scrollTrigger: {
                  trigger: this,
                  start: 'top bottom',
                  end: 'bottom 80%',
                  scrub: true,
                },
              }
            );
          });
        }
      }

      $html.attr('data-load', true);
    }

    /************ load ************/

    var ld = gsap.timeline({ paused: true });
    ld.to('#ld svg', 1.5, { y: '120%', ease: exi }, 'a');
    ld.to('#ld .bg', 1.5, { height: '0%', ease: exi }, 'a');
    if ($('#cl').length) {
      ld.to('#ld .bg', 1.5, { height: '0%', ease: exi }, 'a');
    } else {
      ld.to(
        '#ld .bg',
        1.5,
        { height: '0%', ease: exi, onStart: $afterLoad },
        'a'
      );
    }

    if ($('#cl').length) {
      ld.progress(1);
    } else {
      ld.timeScale(1);
      ld.play();
    }
    if (DEV == true) {
      ld.progress(1);
    }

    /************ changement page ************/

    var ldc = gsap.timeline({ paused: true });
    ldc.to('#ld', 0, { pointerEvents: 'auto' }, 'a');
    ldc.to('#ld .bg', 1, { height: '100%', ease: exi }, 'a');
    ldc.to('#ld svg', 1, { y: '0%', ease: exi }, 'a');

    var ldm = gsap.timeline({ paused: true });
    ldm.to('#ld', 0, { pointerEvents: 'auto' }, 'a');
    ldm.to('#ld svg', 1, { y: '0%', ease: exi, delay: 0.5 }, 'a');
    ldm.to('#n .nl .bg', 1.5, { width: '100vw', ease: exi }, 'a');
    ldm.to('#n .nr .bg', 1.5, { width: '0%', ease: exi }, 'a');

    /************ Reload in Resize ************/
    if (DEV != true && !ifMobile()) {
      $win.bind('resize', function (e) {
        if ($('#land').length == 0) {
          ldc
            .totalDuration(1.5)
            .play()
            .eventCallback('onComplete', function () {
              var $wd = window.RT;
              if ($wd) clearTimeout($wd);
              $wd = setTimeout(function () {
                this.location.reload(false);
              }, 100);
            });
        }
      });
    }

    /************ listener ************/

    $s.addListener(function (status) {
      if (!$ifScrollH) {
        if ($('#sv').length) {
          var svy = $('#sv').offset().top;
          $('#sv .rg').css({ marginTop: -svy });
        }

        if ($('.sp-2').length) {
          var eav = $('.sp-2').offset().top;
          $('.sp-2 .eavl').css({ marginTop: -eav });
        }
        $cursor.classCursor();
      }
    });

    $cursor.init();
  }, []);
  return (
    <>
      <div id="app" ref={scrollbarRef}>
        <div>
          <InformativeNavbar />
          <Banner />
          <AboutUs />
          <Stats />
          {/* <Residency /> */}
          {/* circle scroll */}
          <div className="app-c">
            <main>
              <div id="sv" data-h-color="blck-1" className="mt-5 scroll-circle">
                <div id="svlg" className="lg">
                  {!!circleScrollData?.length &&
                    circleScrollData.map(
                      ({
                        id,
                        circleSectionImg,
                        circleSectionHeading,
                        circleSectionText,
                      }) => (
                        <div className="lgt fx my-5" key={id}>
                          <div>
                            <Image src={circleSectionImg} rounded fluid />
                            <div className="header-group addExtraSpace">
                              <h3 className="mt-5 mb-0">
                                <strong>{circleSectionHeading}</strong>
                              </h3>
                            </div>

                            <div className="tx mt-4">
                              <p className="load-p">{circleSectionText}</p>
                            </div>
                          </div>
                        </div>
                      )
                    )}
                </div>
                <div className="rg fx" data-fx>
                  <div>
                    <div className="cir">
                      <div className=" position-absolute top-50 start-50 translate-middle">
                        <Image
                          className="animation-cartoon-img"
                          src="/assets/informative/animation-cartoon-original.svg"
                          fluid
                        />
                      </div>

                      <div className="circ">
                        <div className="circm">
                          {!!circleScrollDataIcons?.length &&
                            circleScrollDataIcons.map(({ id, circleIcon }) => (
                              <div className="crc" key={id}>
                                <div>
                                  <div className="rnd">
                                    <div>
                                      <div className="leadNurt">
                                        <i>
                                          <img
                                            data-src={circleIcon}
                                            className="lazy w-50"
                                            alt=".."
                                            src={circleIcon}
                                          />
                                        </i>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            ))}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="sp sp-2">
                <div className="eavl fx" data-fx>
                  <div>
                    <div className="ct">
                      <div className="header-group">
                        <h3>
                          <strong className="about-mh">
                            Lorem ipsum dolor sit amet.
                          </strong>
                        </h3>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div id="e">
                <div className="sp sp-5"></div>
                <div className="lgtxc lgtxc-1" data-lg-st="1" data-lg-en="2">
                  <div className="ct">
                    <div>
                      <h3 className="">
                        <strong>Lorem, ipsum dolor.</strong>
                      </h3>
                      <div className="txt">
                        <p className="load1-p">
                          Lorem ipsum dolor, sit amet consectetur adipisicing
                          elit. Itaque obcaecati neque nesciunt doloribus rem
                          libero dolorem ea laboriosam fugit, consequuntur ad
                          ratione necessitatibus natus quasi nemo aperiam ipsum?
                          Molestiae, commodi?
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="lgtxc lgtxc-2" data-lg-st="2" data-lg-en="3">
                  <div className="ct">
                    <div>
                      <h3 className="ct_second">
                        <strong>
                          Lorem ipsum dolor sit amet consectetur adipisicing
                          elit. Id, praesentium.
                        </strong>
                      </h3>
                      <div className="txt">
                        <p className="load1-p">
                          Lorem ipsum, dolor sit amet consectetur adipisicing
                          elit. Quia, dignissimos?
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="lgtxc lgtxc-3" data-lg-st="3" data-lg-en="4">
                  <div className="ct">
                    <div>
                      <h3 className="">
                        <strong>Lorem ipsum dolor sit amet.</strong>
                      </h3>
                      <div className="txt">
                        <p className="load1-p">
                          Lorem ipsum dolor sit amet consectetur adipisicing
                          elit. Eos, error tempora! Minus pariatur veritatis
                          rerum magni beatae dicta accusamus, maxime fugiat
                          corporis sapiente aliquid facere autem voluptatibus
                          inventore dolores itaque.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="sp sp-3" data-h-color="blck-5"></div>
            </main>
          </div>
          {/* circle scroll code end here */}
          <ChooseUs />
          <HomeVideo />
          {/* <HowWork /> */}
          <HowWorkBuilder />
          <OurPartner />
          <GetStarted />
          <News />
          <Testimonials />
          <InformativeFooter />
        </div>
      </div>
    </>
  );
};

export default HomeBanner;
