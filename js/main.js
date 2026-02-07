'use strict';

{
    $(function(){
        $('.header__btn').on('click', function(){
            $('.nav').toggleClass('active');
        });

        $('.nav__btn, .nav__item a').on('click', function(){
            $('.nav').removeClass('active');
        });
    });

// 右クリック禁止

  document.addEventListener("contextmenu", function(event) {
    event.preventDefault();
  });


    // gsap.to('.opasity1', {
    //     scrollTrigger: '.opasity1', // start the animation when ".box" enters the viewport (once)
    //     opacity: 1
    // });


    // GSAP トリガー取得！

    gsap.registerPlugin(ScrollTrigger);
        gsap.utils.toArray(".opasity1").forEach((element) => {
            gsap.to(element, {
                opacity: 1, // opacity を 1 に変化
                duration: .9,
                scrollTrigger: {
                    trigger: element,
                    start: "top 70%", // 要素の上端が画面の中央に来たら発火
                    toggleActions: "play none none none"
                }
            });
        });


        gsap.registerPlugin(ScrollTrigger);
        gsap.utils.toArray(".opasity3").forEach((element) => {
            gsap.to(element, {
                opacity: 1, // opacity を 1 に変化
                duration: 2,
                scrollTrigger: {
                    trigger: element,
                    start: "top 90%", // 要素の上端が画面の中央に来たら発火
                    toggleActions: "play none none none"
                }
            });
        });

        gsap.registerPlugin(ScrollTrigger);
        gsap.utils.toArray(".opasity4").forEach((element) => {
            gsap.to(element, {
                opacity: 1, // opacity を 1 に変化
                duration: 2,
                scrollTrigger: {
                    trigger: element,
                    start: "top 90%", // 要素の上端が画面の中央に来たら発火
                    toggleActions: "play none none none"
                }
            });
        });



        // gsap.registerPlugin(ScrollTrigger);

        //     gsap.to(".types__text", {
        //     x: "-300%", // 画面外の左側へ移動
        //     duration: 12, // アニメーション時間
        //     ease: "linear",
        //     scrollTrigger: {
        //         trigger: ".types__text",
        //         start: "top 80%", // ビューポートの80%位置で開始
        //         toggleActions: "play none none none", // 1回だけ再生
        //     }
        //     });



            gsap.registerPlugin(ScrollTrigger);

gsap.to(".first", {
  opacity: 1,       // ボックスを表示
  rotateY: 0,       // 1回転して正面を向く
  duration: 2,      // 1秒かけて回転
  ease: "power2.out",
  scrollTrigger: {
    trigger: ".first",
    start: "top 70%",
    toggleActions: "play none none none"
  }
});

gsap.to(".second", {
    opacity: 1,       // ボックスを表示
    rotateY: 0,       // 1回転して正面を向く
    duration: 2,      // 1秒かけて回転
    ease: "power2.out",
    scrollTrigger: {
      trigger: ".second",
      start: "top 70%",
      toggleActions: "play none none none"
    }
  });

  gsap.to(".therd", {
    opacity: 1,       // ボックスを表示
    rotateY: 0,       // 1回転して正面を向く
    duration: 2,      // 1秒かけて回転
    ease: "power2.out",
    scrollTrigger: {
      trigger: ".therd",
      start: "top 70%",
      toggleActions: "play none none none"
    }
  });

  // gsap.to(".forth", {
  //   opacity: 1,       // ボックスを表示
  //   rotateY: 0,       // 1回転して正面を向く
  //   duration: 2,      // 1秒かけて回転
  //   ease: "power2.out",
  //   scrollTrigger: {
  //     trigger: ".forth",
  //     start: "top 70%",
  //     toggleActions: "play none none none"
  //   }
  // });

  gsap.to(".five", {
    opacity: 1,       // ボックスを表示
    rotateY: 0,       // 1回転して正面を向く
    duration: 2,      // 1秒かけて回転
    ease: "power2.out",
    scrollTrigger: {
      trigger: ".five",
      start: "top 70%",
      toggleActions: "play none none none"
    }
  });


  gsap.to(".section__title", {
    opacity: 1,       // ボックスを表示
    rotateY: 0,       // 1回転して正面を向く
    duration: 2,      // 1秒かけて回転
    ease: "power2.out",
    scrollTrigger: {
      trigger: ".section__title",
      start: "top 70%",
      toggleActions: "play none none none"
    }
  });

  gsap.to(".attractions__title", {
    opacity: 1,       // ボックスを表示
    rotateY: 0,       // 1回転して正面を向く
    duration: 2,      // 1秒かけて回転
    ease: "power2.out",
    scrollTrigger: {
      trigger: ".attractions__title",
      start: "top 70%",
      toggleActions: "play none none none"
    }
  });

  gsap.to(".types__title", {
    opacity: 1,       // ボックスを表示
    rotateY: 0,       // 1回転して正面を向く
    duration: 2,      // 1秒かけて回転
    ease: "power2.out",
    scrollTrigger: {
      trigger: ".types__title",
      start: "top 70%",
      toggleActions: "play none none none"
    }
  });



  gsap.to(".works__title", {
    opacity: 1,       // ボックスを表示
    rotateY: 0,       // 1回転して正面を向く
    duration: 2,      // 1秒かけて回転
    ease: "power2.out",
    scrollTrigger: {
      trigger: ".works__title",
      start: "top 70%",
      toggleActions: "play none none none"
    }
  });


  gsap.to(".company__title--top", {
    opacity: 1,       // ボックスを表示
    rotateY: 0,       // 1回転して正面を向く
    duration: 2,      // 1秒かけて回転
    ease: "power2.out",
    scrollTrigger: {
      trigger: ".company__title--top",
      start: "top 70%",
      toggleActions: "play none none none"
    }
  });










// ボックス回転後にテキストを表示
gsap.to(".opasity2", {
  opacity: 1,
  duration: 3, // 1秒かけてフェードイン
  delay: 0.8,  // ボックスの回転後に少し遅れて表示
  ease: "power2.out",
  scrollTrigger: {
    trigger: ".opasity2",
    start: "top 70%",
    toggleActions: "play none none none"
  }
});

gsap.registerPlugin(ScrollTrigger);

gsap.to(".pc__img", {
  opacity: 1,
  y: 0,
  duration: 3,
  ease: "power2.out",
  scrollTrigger: {
    trigger: ".pc__img",  // どの要素がスクロールで発火するか
    start: "top 80%",  // どの位置で発火するか（画面の80%で発火）
    end: "top 50%",  // どこまで影響するか
    toggleActions: "play none none none"  // アニメーションの挙動
  }
});

gsap.to(".sp__img", {
  opacity: 1,
  y: 0,
  duration: 3,
  ease: "power2.out",
  scrollTrigger: {
    trigger: ".sp__img",  // どの要素がスクロールで発火するか
    start: "top 80%",  // どの位置で発火するか（画面の80%で発火）
    end: "top 50%",  // どこまで影響するか
    toggleActions: "play none none none"  // アニメーションの挙動
  }
});

gsap.to(".works__img", {
  opacity: 1,
  y: 0,
  duration: 3,
  ease: "power2.out",
  scrollTrigger: {
    trigger: ".works__img",  // どの要素がスクロールで発火するか
    start: "top 90%",  // どの位置で発火するか（画面の80%で発火）
    end: "top 50%",  // どこまで影響するか
    toggleActions: "play none none none"  // アニメーションの挙動
  }
});

gsap.to(".works__pcimg", {
  opacity: 1,
  y: 0,
  duration: 2,
  ease: "power2.out",
  scrollTrigger: {
    trigger: ".works__pcimg",  // どの要素がスクロールで発火するか
    start: "top 40%",  // どの位置で発火するか（画面の80%で発火）
    end: "top 50%",  // どこまで影響するか
    toggleActions: "play none none none"  // アニメーションの挙動
  }
});





// すべての .underline 要素を取得
document.querySelectorAll(".process__page--line").forEach((line) => {
  gsap.to(line, {
    scaleX: 1,  // 横幅100%に拡大
    duration: 1,  // 1秒でアニメーション
    ease: "power2.out",
    scrollTrigger: {
      trigger: line,  // 個別に発火
      start: "top 80%",  // 各要素がビューポートの80%に来たら発火
      toggleActions: "play none none none"
    }
  });
});


document.querySelectorAll(".animetionleft").forEach((line) => {
  gsap.to(line, {
    scaleX: 1,  // 横幅100%に拡大
    duration: 1,  // 1秒でアニメーション
    ease: "power2.out",
    scrollTrigger: {
      trigger: line,  // 個別に発火
      start: "top 80%",  // 各要素がビューポートの80%に来たら発火
      toggleActions: "play none none none"
    }
  });
});




// gsap.to(".ab", {
//     y: "-10%", // 画像を上方向にスクロールと連動させる
//     ease: "none",
//     scrollTrigger: {
//         trigger: ".works__pcimg",
//         start: "top bottom", // 画面下部に入ると開始
//         end: "bottom top",   // 画面上部から出るまで続く
//         scrub: true, // スクロールに連動して動く
//     }
// });


gsap.registerPlugin(ScrollTrigger);

gsap.to(".works__pcimg img", {
  y: -50, // 画像を上方向に100px動かす
  ease: "none",
  scrollTrigger: {
    trigger: ".works__pcimg",
    start: "top bottom", // 画面の下に入ったときに開始
    end: "bottom top",   // 画面の上に出るときに終了
    scrub: 1,            // スクロールに合わせてアニメーション
  }
});

gsap.to(".works__img img", {
  y: -120, // 画像を上方向に100px動かす
  ease: "none",
  scrollTrigger: {
    trigger: ".works__img",
    start: "top bottom", // 画面の下に入ったときに開始
    end: "bottom top",   // 画面の上に出るときに終了
    scrub: 1,            // スクロールに合わせてアニメーション
  }
});





}