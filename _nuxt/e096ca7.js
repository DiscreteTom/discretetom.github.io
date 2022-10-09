(window.webpackJsonp=window.webpackJsonp||[]).push([[73,441,442,443],{1330:function(t,Q,T){const n={render:function(){var t=this,Q=t.$createElement,T=t._self._c||Q;return T("div",{staticClass:"frontmatter-markdown"},[T("h2",{attrs:{id:"概述"}},[t._v("概述")]),t._v(" "),t._m(0),t._v(" "),T("p",[t._v("经过消隐得到的图形称为消隐图")]),t._v(" "),T("p",[t._v("消隐的对象是三维物体")]),t._v(" "),T("p",[t._v("根据消隐对象的不同，有两类消隐算法：")]),t._v(" "),t._m(1),t._v(" "),T("p",[t._v("消隐不仅与对象有关，还与投影有关")]),t._v(" "),T("p",[t._v("通常投影平面为XOY，投影方向为负Z")]),t._v(" "),T("p",[t._v("根据消隐空间的不同，也可以分为两类：")]),t._v(" "),t._m(2),t._v(" "),t._m(3),t._v(" "),t._m(4),t._v(" "),T("h2",{attrs:{id:"区域子分算法"}},[t._v("区域子分算法")]),t._v(" "),T("h3",{attrs:{id:"概述-1"}},[t._v("概述")]),t._v(" "),t._m(5),t._v(" "),T("p",[t._v("针对光栅扫描式图像显示器")]),t._v(" "),T("p",[t._v("分治算法")]),t._v(" "),T("p",[t._v("每次把矩形窗口等分为4个相等矩形（称为窗口），每一次子分都计算要显示的多边形和窗口的关系：")]),t._v(" "),t._m(6),t._v(" "),t._m(7),t._v(" "),T("p",[t._v("确定窗口和每个多边形的关系后：")]),t._v(" "),t._m(8),t._v(" "),T("h3",{attrs:{id:"改进效率-边界盒方法"}},[t._v("改进效率 - 边界盒方法")]),t._v(" "),T("p",[t._v("此方法可以用来判断两个线段或者多边形是否相交")]),t._v(" "),T("p",[t._v("多边形的边界盒是包含这个多边形的平行于坐标轴的最小矩形，由四个参数决定:"),T("mjx-container",{staticClass:"MathJax",staticStyle:{direction:"ltr"},attrs:{jax:"SVG"}},[T("svg",{staticStyle:{overflow:"visible","min-height":"1px","min-width":"1px","vertical-align":"-0.464ex"},attrs:{xmlns:"http://www.w3.org/2000/svg",width:"20.739ex",height:"1.464ex",role:"img",focusable:"false",viewBox:"0 -442 9166.8 647"}},[T("g",{attrs:{stroke:"currentColor",fill:"currentColor","stroke-width":"0",transform:"scale(1,-1)"}},[T("g",{attrs:{"data-mml-node":"math"}},[T("g",{attrs:{"data-mml-node":"msub"}},[T("g",{attrs:{"data-mml-node":"mi"}},[T("path",{staticStyle:{"stroke-width":"3"},attrs:{"data-c":"1D465",d:"M52 289Q59 331 106 386T222 442Q257 442 286 424T329 379Q371 442 430 442Q467 442 494 420T522 361Q522 332 508 314T481 292T458 288Q439 288 427 299T415 328Q415 374 465 391Q454 404 425 404Q412 404 406 402Q368 386 350 336Q290 115 290 78Q290 50 306 38T341 26Q378 26 414 59T463 140Q466 150 469 151T485 153H489Q504 153 504 145Q504 144 502 134Q486 77 440 33T333 -11Q263 -11 227 52Q186 -10 133 -10H127Q78 -10 57 16T35 71Q35 103 54 123T99 143Q142 143 142 101Q142 81 130 66T107 46T94 41L91 40Q91 39 97 36T113 29T132 26Q168 26 194 71Q203 87 217 139T245 247T261 313Q266 340 266 352Q266 380 251 392T217 404Q177 404 142 372T93 290Q91 281 88 280T72 278H58Q52 284 52 289Z"}})]),T("g",{attrs:{"data-mml-node":"TeXAtom",transform:"translate(605,-150) scale(0.707)","data-mjx-texclass":"ORD"}},[T("g",{attrs:{"data-mml-node":"mi"}},[T("path",{staticStyle:{"stroke-width":"3"},attrs:{"data-c":"1D45A",d:"M21 287Q22 293 24 303T36 341T56 388T88 425T132 442T175 435T205 417T221 395T229 376L231 369Q231 367 232 367L243 378Q303 442 384 442Q401 442 415 440T441 433T460 423T475 411T485 398T493 385T497 373T500 364T502 357L510 367Q573 442 659 442Q713 442 746 415T780 336Q780 285 742 178T704 50Q705 36 709 31T724 26Q752 26 776 56T815 138Q818 149 821 151T837 153Q857 153 857 145Q857 144 853 130Q845 101 831 73T785 17T716 -10Q669 -10 648 17T627 73Q627 92 663 193T700 345Q700 404 656 404H651Q565 404 506 303L499 291L466 157Q433 26 428 16Q415 -11 385 -11Q372 -11 364 -4T353 8T350 18Q350 29 384 161L420 307Q423 322 423 345Q423 404 379 404H374Q288 404 229 303L222 291L189 157Q156 26 151 16Q138 -11 108 -11Q95 -11 87 -5T76 7T74 17Q74 30 112 181Q151 335 151 342Q154 357 154 369Q154 405 129 405Q107 405 92 377T69 316T57 280Q55 278 41 278H27Q21 284 21 287Z"}})]),T("g",{attrs:{"data-mml-node":"mi",transform:"translate(878,0)"}},[T("path",{staticStyle:{"stroke-width":"3"},attrs:{"data-c":"1D44E",d:"M33 157Q33 258 109 349T280 441Q331 441 370 392Q386 422 416 422Q429 422 439 414T449 394Q449 381 412 234T374 68Q374 43 381 35T402 26Q411 27 422 35Q443 55 463 131Q469 151 473 152Q475 153 483 153H487Q506 153 506 144Q506 138 501 117T481 63T449 13Q436 0 417 -8Q409 -10 393 -10Q359 -10 336 5T306 36L300 51Q299 52 296 50Q294 48 292 46Q233 -10 172 -10Q117 -10 75 30T33 157ZM351 328Q351 334 346 350T323 385T277 405Q242 405 210 374T160 293Q131 214 119 129Q119 126 119 118T118 106Q118 61 136 44T179 26Q217 26 254 59T298 110Q300 114 325 217T351 328Z"}})]),T("g",{attrs:{"data-mml-node":"mi",transform:"translate(1407,0)"}},[T("path",{staticStyle:{"stroke-width":"3"},attrs:{"data-c":"1D465",d:"M52 289Q59 331 106 386T222 442Q257 442 286 424T329 379Q371 442 430 442Q467 442 494 420T522 361Q522 332 508 314T481 292T458 288Q439 288 427 299T415 328Q415 374 465 391Q454 404 425 404Q412 404 406 402Q368 386 350 336Q290 115 290 78Q290 50 306 38T341 26Q378 26 414 59T463 140Q466 150 469 151T485 153H489Q504 153 504 145Q504 144 502 134Q486 77 440 33T333 -11Q263 -11 227 52Q186 -10 133 -10H127Q78 -10 57 16T35 71Q35 103 54 123T99 143Q142 143 142 101Q142 81 130 66T107 46T94 41L91 40Q91 39 97 36T113 29T132 26Q168 26 194 71Q203 87 217 139T245 247T261 313Q266 340 266 352Q266 380 251 392T217 404Q177 404 142 372T93 290Q91 281 88 280T72 278H58Q52 284 52 289Z"}})])])]),T("g",{attrs:{"data-mml-node":"mo",transform:"translate(2054.4,0)"}},[T("path",{staticStyle:{"stroke-width":"3"},attrs:{"data-c":"2C",d:"M78 35T78 60T94 103T137 121Q165 121 187 96T210 8Q210 -27 201 -60T180 -117T154 -158T130 -185T117 -194Q113 -194 104 -185T95 -172Q95 -168 106 -156T131 -126T157 -76T173 -3V9L172 8Q170 7 167 6T161 3T152 1T140 0Q113 0 96 17Z"}})]),T("g",{attrs:{"data-mml-node":"msub",transform:"translate(2499,0)"}},[T("g",{attrs:{"data-mml-node":"mi"}},[T("path",{staticStyle:{"stroke-width":"3"},attrs:{"data-c":"1D465",d:"M52 289Q59 331 106 386T222 442Q257 442 286 424T329 379Q371 442 430 442Q467 442 494 420T522 361Q522 332 508 314T481 292T458 288Q439 288 427 299T415 328Q415 374 465 391Q454 404 425 404Q412 404 406 402Q368 386 350 336Q290 115 290 78Q290 50 306 38T341 26Q378 26 414 59T463 140Q466 150 469 151T485 153H489Q504 153 504 145Q504 144 502 134Q486 77 440 33T333 -11Q263 -11 227 52Q186 -10 133 -10H127Q78 -10 57 16T35 71Q35 103 54 123T99 143Q142 143 142 101Q142 81 130 66T107 46T94 41L91 40Q91 39 97 36T113 29T132 26Q168 26 194 71Q203 87 217 139T245 247T261 313Q266 340 266 352Q266 380 251 392T217 404Q177 404 142 372T93 290Q91 281 88 280T72 278H58Q52 284 52 289Z"}})]),T("g",{attrs:{"data-mml-node":"TeXAtom",transform:"translate(605,-150) scale(0.707)","data-mjx-texclass":"ORD"}},[T("g",{attrs:{"data-mml-node":"mi"}},[T("path",{staticStyle:{"stroke-width":"3"},attrs:{"data-c":"1D45A",d:"M21 287Q22 293 24 303T36 341T56 388T88 425T132 442T175 435T205 417T221 395T229 376L231 369Q231 367 232 367L243 378Q303 442 384 442Q401 442 415 440T441 433T460 423T475 411T485 398T493 385T497 373T500 364T502 357L510 367Q573 442 659 442Q713 442 746 415T780 336Q780 285 742 178T704 50Q705 36 709 31T724 26Q752 26 776 56T815 138Q818 149 821 151T837 153Q857 153 857 145Q857 144 853 130Q845 101 831 73T785 17T716 -10Q669 -10 648 17T627 73Q627 92 663 193T700 345Q700 404 656 404H651Q565 404 506 303L499 291L466 157Q433 26 428 16Q415 -11 385 -11Q372 -11 364 -4T353 8T350 18Q350 29 384 161L420 307Q423 322 423 345Q423 404 379 404H374Q288 404 229 303L222 291L189 157Q156 26 151 16Q138 -11 108 -11Q95 -11 87 -5T76 7T74 17Q74 30 112 181Q151 335 151 342Q154 357 154 369Q154 405 129 405Q107 405 92 377T69 316T57 280Q55 278 41 278H27Q21 284 21 287Z"}})]),T("g",{attrs:{"data-mml-node":"mi",transform:"translate(878,0)"}},[T("path",{staticStyle:{"stroke-width":"3"},attrs:{"data-c":"1D456",d:"M184 600Q184 624 203 642T247 661Q265 661 277 649T290 619Q290 596 270 577T226 557Q211 557 198 567T184 600ZM21 287Q21 295 30 318T54 369T98 420T158 442Q197 442 223 419T250 357Q250 340 236 301T196 196T154 83Q149 61 149 51Q149 26 166 26Q175 26 185 29T208 43T235 78T260 137Q263 149 265 151T282 153Q302 153 302 143Q302 135 293 112T268 61T223 11T161 -11Q129 -11 102 10T74 74Q74 91 79 106T122 220Q160 321 166 341T173 380Q173 404 156 404H154Q124 404 99 371T61 287Q60 286 59 284T58 281T56 279T53 278T49 278T41 278H27Q21 284 21 287Z"}})]),T("g",{attrs:{"data-mml-node":"mi",transform:"translate(1223,0)"}},[T("path",{staticStyle:{"stroke-width":"3"},attrs:{"data-c":"1D45B",d:"M21 287Q22 293 24 303T36 341T56 388T89 425T135 442Q171 442 195 424T225 390T231 369Q231 367 232 367L243 378Q304 442 382 442Q436 442 469 415T503 336T465 179T427 52Q427 26 444 26Q450 26 453 27Q482 32 505 65T540 145Q542 153 560 153Q580 153 580 145Q580 144 576 130Q568 101 554 73T508 17T439 -10Q392 -10 371 17T350 73Q350 92 386 193T423 345Q423 404 379 404H374Q288 404 229 303L222 291L189 157Q156 26 151 16Q138 -11 108 -11Q95 -11 87 -5T76 7T74 17Q74 30 112 180T152 343Q153 348 153 366Q153 405 129 405Q91 405 66 305Q60 285 60 284Q58 278 41 278H27Q21 284 21 287Z"}})])])]),T("g",{attrs:{"data-mml-node":"mo",transform:"translate(4443.1,0)"}},[T("path",{staticStyle:{"stroke-width":"3"},attrs:{"data-c":"2C",d:"M78 35T78 60T94 103T137 121Q165 121 187 96T210 8Q210 -27 201 -60T180 -117T154 -158T130 -185T117 -194Q113 -194 104 -185T95 -172Q95 -168 106 -156T131 -126T157 -76T173 -3V9L172 8Q170 7 167 6T161 3T152 1T140 0Q113 0 96 17Z"}})]),T("g",{attrs:{"data-mml-node":"msub",transform:"translate(4887.8,0)"}},[T("g",{attrs:{"data-mml-node":"mi"}},[T("path",{staticStyle:{"stroke-width":"3"},attrs:{"data-c":"1D466",d:"M21 287Q21 301 36 335T84 406T158 442Q199 442 224 419T250 355Q248 336 247 334Q247 331 231 288T198 191T182 105Q182 62 196 45T238 27Q261 27 281 38T312 61T339 94Q339 95 344 114T358 173T377 247Q415 397 419 404Q432 431 462 431Q475 431 483 424T494 412T496 403Q496 390 447 193T391 -23Q363 -106 294 -155T156 -205Q111 -205 77 -183T43 -117Q43 -95 50 -80T69 -58T89 -48T106 -45Q150 -45 150 -87Q150 -107 138 -122T115 -142T102 -147L99 -148Q101 -153 118 -160T152 -167H160Q177 -167 186 -165Q219 -156 247 -127T290 -65T313 -9T321 21L315 17Q309 13 296 6T270 -6Q250 -11 231 -11Q185 -11 150 11T104 82Q103 89 103 113Q103 170 138 262T173 379Q173 380 173 381Q173 390 173 393T169 400T158 404H154Q131 404 112 385T82 344T65 302T57 280Q55 278 41 278H27Q21 284 21 287Z"}})]),T("g",{attrs:{"data-mml-node":"TeXAtom",transform:"translate(523,-150) scale(0.707)","data-mjx-texclass":"ORD"}},[T("g",{attrs:{"data-mml-node":"mi"}},[T("path",{staticStyle:{"stroke-width":"3"},attrs:{"data-c":"1D45A",d:"M21 287Q22 293 24 303T36 341T56 388T88 425T132 442T175 435T205 417T221 395T229 376L231 369Q231 367 232 367L243 378Q303 442 384 442Q401 442 415 440T441 433T460 423T475 411T485 398T493 385T497 373T500 364T502 357L510 367Q573 442 659 442Q713 442 746 415T780 336Q780 285 742 178T704 50Q705 36 709 31T724 26Q752 26 776 56T815 138Q818 149 821 151T837 153Q857 153 857 145Q857 144 853 130Q845 101 831 73T785 17T716 -10Q669 -10 648 17T627 73Q627 92 663 193T700 345Q700 404 656 404H651Q565 404 506 303L499 291L466 157Q433 26 428 16Q415 -11 385 -11Q372 -11 364 -4T353 8T350 18Q350 29 384 161L420 307Q423 322 423 345Q423 404 379 404H374Q288 404 229 303L222 291L189 157Q156 26 151 16Q138 -11 108 -11Q95 -11 87 -5T76 7T74 17Q74 30 112 181Q151 335 151 342Q154 357 154 369Q154 405 129 405Q107 405 92 377T69 316T57 280Q55 278 41 278H27Q21 284 21 287Z"}})]),T("g",{attrs:{"data-mml-node":"mi",transform:"translate(878,0)"}},[T("path",{staticStyle:{"stroke-width":"3"},attrs:{"data-c":"1D44E",d:"M33 157Q33 258 109 349T280 441Q331 441 370 392Q386 422 416 422Q429 422 439 414T449 394Q449 381 412 234T374 68Q374 43 381 35T402 26Q411 27 422 35Q443 55 463 131Q469 151 473 152Q475 153 483 153H487Q506 153 506 144Q506 138 501 117T481 63T449 13Q436 0 417 -8Q409 -10 393 -10Q359 -10 336 5T306 36L300 51Q299 52 296 50Q294 48 292 46Q233 -10 172 -10Q117 -10 75 30T33 157ZM351 328Q351 334 346 350T323 385T277 405Q242 405 210 374T160 293Q131 214 119 129Q119 126 119 118T118 106Q118 61 136 44T179 26Q217 26 254 59T298 110Q300 114 325 217T351 328Z"}})]),T("g",{attrs:{"data-mml-node":"mi",transform:"translate(1407,0)"}},[T("path",{staticStyle:{"stroke-width":"3"},attrs:{"data-c":"1D465",d:"M52 289Q59 331 106 386T222 442Q257 442 286 424T329 379Q371 442 430 442Q467 442 494 420T522 361Q522 332 508 314T481 292T458 288Q439 288 427 299T415 328Q415 374 465 391Q454 404 425 404Q412 404 406 402Q368 386 350 336Q290 115 290 78Q290 50 306 38T341 26Q378 26 414 59T463 140Q466 150 469 151T485 153H489Q504 153 504 145Q504 144 502 134Q486 77 440 33T333 -11Q263 -11 227 52Q186 -10 133 -10H127Q78 -10 57 16T35 71Q35 103 54 123T99 143Q142 143 142 101Q142 81 130 66T107 46T94 41L91 40Q91 39 97 36T113 29T132 26Q168 26 194 71Q203 87 217 139T245 247T261 313Q266 340 266 352Q266 380 251 392T217 404Q177 404 142 372T93 290Q91 281 88 280T72 278H58Q52 284 52 289Z"}})])])]),T("g",{attrs:{"data-mml-node":"mo",transform:"translate(6860.1,0)"}},[T("path",{staticStyle:{"stroke-width":"3"},attrs:{"data-c":"2C",d:"M78 35T78 60T94 103T137 121Q165 121 187 96T210 8Q210 -27 201 -60T180 -117T154 -158T130 -185T117 -194Q113 -194 104 -185T95 -172Q95 -168 106 -156T131 -126T157 -76T173 -3V9L172 8Q170 7 167 6T161 3T152 1T140 0Q113 0 96 17Z"}})]),T("g",{attrs:{"data-mml-node":"msub",transform:"translate(7304.8,0)"}},[T("g",{attrs:{"data-mml-node":"mi"}},[T("path",{staticStyle:{"stroke-width":"3"},attrs:{"data-c":"1D466",d:"M21 287Q21 301 36 335T84 406T158 442Q199 442 224 419T250 355Q248 336 247 334Q247 331 231 288T198 191T182 105Q182 62 196 45T238 27Q261 27 281 38T312 61T339 94Q339 95 344 114T358 173T377 247Q415 397 419 404Q432 431 462 431Q475 431 483 424T494 412T496 403Q496 390 447 193T391 -23Q363 -106 294 -155T156 -205Q111 -205 77 -183T43 -117Q43 -95 50 -80T69 -58T89 -48T106 -45Q150 -45 150 -87Q150 -107 138 -122T115 -142T102 -147L99 -148Q101 -153 118 -160T152 -167H160Q177 -167 186 -165Q219 -156 247 -127T290 -65T313 -9T321 21L315 17Q309 13 296 6T270 -6Q250 -11 231 -11Q185 -11 150 11T104 82Q103 89 103 113Q103 170 138 262T173 379Q173 380 173 381Q173 390 173 393T169 400T158 404H154Q131 404 112 385T82 344T65 302T57 280Q55 278 41 278H27Q21 284 21 287Z"}})]),T("g",{attrs:{"data-mml-node":"TeXAtom",transform:"translate(523,-150) scale(0.707)","data-mjx-texclass":"ORD"}},[T("g",{attrs:{"data-mml-node":"mi"}},[T("path",{staticStyle:{"stroke-width":"3"},attrs:{"data-c":"1D45A",d:"M21 287Q22 293 24 303T36 341T56 388T88 425T132 442T175 435T205 417T221 395T229 376L231 369Q231 367 232 367L243 378Q303 442 384 442Q401 442 415 440T441 433T460 423T475 411T485 398T493 385T497 373T500 364T502 357L510 367Q573 442 659 442Q713 442 746 415T780 336Q780 285 742 178T704 50Q705 36 709 31T724 26Q752 26 776 56T815 138Q818 149 821 151T837 153Q857 153 857 145Q857 144 853 130Q845 101 831 73T785 17T716 -10Q669 -10 648 17T627 73Q627 92 663 193T700 345Q700 404 656 404H651Q565 404 506 303L499 291L466 157Q433 26 428 16Q415 -11 385 -11Q372 -11 364 -4T353 8T350 18Q350 29 384 161L420 307Q423 322 423 345Q423 404 379 404H374Q288 404 229 303L222 291L189 157Q156 26 151 16Q138 -11 108 -11Q95 -11 87 -5T76 7T74 17Q74 30 112 181Q151 335 151 342Q154 357 154 369Q154 405 129 405Q107 405 92 377T69 316T57 280Q55 278 41 278H27Q21 284 21 287Z"}})]),T("g",{attrs:{"data-mml-node":"mi",transform:"translate(878,0)"}},[T("path",{staticStyle:{"stroke-width":"3"},attrs:{"data-c":"1D456",d:"M184 600Q184 624 203 642T247 661Q265 661 277 649T290 619Q290 596 270 577T226 557Q211 557 198 567T184 600ZM21 287Q21 295 30 318T54 369T98 420T158 442Q197 442 223 419T250 357Q250 340 236 301T196 196T154 83Q149 61 149 51Q149 26 166 26Q175 26 185 29T208 43T235 78T260 137Q263 149 265 151T282 153Q302 153 302 143Q302 135 293 112T268 61T223 11T161 -11Q129 -11 102 10T74 74Q74 91 79 106T122 220Q160 321 166 341T173 380Q173 404 156 404H154Q124 404 99 371T61 287Q60 286 59 284T58 281T56 279T53 278T49 278T41 278H27Q21 284 21 287Z"}})]),T("g",{attrs:{"data-mml-node":"mi",transform:"translate(1223,0)"}},[T("path",{staticStyle:{"stroke-width":"3"},attrs:{"data-c":"1D45B",d:"M21 287Q22 293 24 303T36 341T56 388T89 425T135 442Q171 442 195 424T225 390T231 369Q231 367 232 367L243 378Q304 442 382 442Q436 442 469 415T503 336T465 179T427 52Q427 26 444 26Q450 26 453 27Q482 32 505 65T540 145Q542 153 560 153Q580 153 580 145Q580 144 576 130Q568 101 554 73T508 17T439 -10Q392 -10 371 17T350 73Q350 92 386 193T423 345Q423 404 379 404H374Q288 404 229 303L222 291L189 157Q156 26 151 16Q138 -11 108 -11Q95 -11 87 -5T76 7T74 17Q74 30 112 180T152 343Q153 348 153 366Q153 405 129 405Q91 405 66 305Q60 285 60 284Q58 278 41 278H27Q21 284 21 287Z"}})])])])])])])])],1),t._v(" "),T("p",[t._v("如果边界盒不想交，则二者不相交")]),t._v(" "),T("h3",{attrs:{id:"遮挡判断"}},[t._v("遮挡判断")]),t._v(" "),T("p",[t._v("把窗口的顶点坐标代入目标多边形的平面方程得到Z值")]),t._v(" "),T("p",[t._v("如果有多个多边形，多边形A的最小Z不小于多边形B的最大Z，那么多边形B被遮挡")]),t._v(" "),T("p",[t._v("否则，老老实实根据X和Y计算哪个面的Z最大")]),t._v(" "),T("h2",{attrs:{id:"深度缓存算法"}},[t._v("深度缓存算法")]),t._v(" "),T("h3",{attrs:{id:"概述-2"}},[t._v("概述")]),t._v(" "),T("p",[t._v("Z-Buffer")]),t._v(" "),T("p",[t._v("是一种最简单的图像空间面消隐算法，适用于多边形和其他曲面")]),t._v(" "),T("p",[t._v("需要深度缓存数组ZB，大小与屏幕像素个数相同，也与显示器的帧缓存FB单元个数相同。一一对应")]),t._v(" "),T("p",[t._v("对于显示器的每一个点(x, y)，向Z轴发射射线，取最大Z值存在ZB，对应的颜色存在显示器的FB")]),t._v(" "),t._m(9),t._v(" "),T("h3",{attrs:{id:"算法步骤"}},[t._v("算法步骤")]),t._v(" "),T("p",[t._v("假设有N个多边形，屏幕像素个数为"),T("mjx-container",{staticClass:"MathJax",staticStyle:{direction:"ltr"},attrs:{jax:"SVG"}},[T("svg",{staticStyle:{overflow:"visible","min-height":"1px","min-width":"1px","vertical-align":"-0.025ex"},attrs:{xmlns:"http://www.w3.org/2000/svg",width:"6.11ex",height:"1.136ex",role:"img",focusable:"false",viewBox:"0 -491 2700.4 502"}},[T("g",{attrs:{stroke:"currentColor",fill:"currentColor","stroke-width":"0",transform:"scale(1,-1)"}},[T("g",{attrs:{"data-mml-node":"math"}},[T("g",{attrs:{"data-mml-node":"mi"}},[T("path",{staticStyle:{"stroke-width":"3"},attrs:{"data-c":"1D45A",d:"M21 287Q22 293 24 303T36 341T56 388T88 425T132 442T175 435T205 417T221 395T229 376L231 369Q231 367 232 367L243 378Q303 442 384 442Q401 442 415 440T441 433T460 423T475 411T485 398T493 385T497 373T500 364T502 357L510 367Q573 442 659 442Q713 442 746 415T780 336Q780 285 742 178T704 50Q705 36 709 31T724 26Q752 26 776 56T815 138Q818 149 821 151T837 153Q857 153 857 145Q857 144 853 130Q845 101 831 73T785 17T716 -10Q669 -10 648 17T627 73Q627 92 663 193T700 345Q700 404 656 404H651Q565 404 506 303L499 291L466 157Q433 26 428 16Q415 -11 385 -11Q372 -11 364 -4T353 8T350 18Q350 29 384 161L420 307Q423 322 423 345Q423 404 379 404H374Q288 404 229 303L222 291L189 157Q156 26 151 16Q138 -11 108 -11Q95 -11 87 -5T76 7T74 17Q74 30 112 181Q151 335 151 342Q154 357 154 369Q154 405 129 405Q107 405 92 377T69 316T57 280Q55 278 41 278H27Q21 284 21 287Z"}})]),T("g",{attrs:{"data-mml-node":"mo",transform:"translate(1100.2,0)"}},[T("path",{staticStyle:{"stroke-width":"3"},attrs:{"data-c":"D7",d:"M630 29Q630 9 609 9Q604 9 587 25T493 118L389 222L284 117Q178 13 175 11Q171 9 168 9Q160 9 154 15T147 29Q147 36 161 51T255 146L359 250L255 354Q174 435 161 449T147 471Q147 480 153 485T168 490Q173 490 175 489Q178 487 284 383L389 278L493 382Q570 459 587 475T609 491Q630 491 630 471Q630 464 620 453T522 355L418 250L522 145Q606 61 618 48T630 29Z"}})]),T("g",{attrs:{"data-mml-node":"mi",transform:"translate(2100.4,0)"}},[T("path",{staticStyle:{"stroke-width":"3"},attrs:{"data-c":"1D45B",d:"M21 287Q22 293 24 303T36 341T56 388T89 425T135 442Q171 442 195 424T225 390T231 369Q231 367 232 367L243 378Q304 442 382 442Q436 442 469 415T503 336T465 179T427 52Q427 26 444 26Q450 26 453 27Q482 32 505 65T540 145Q542 153 560 153Q580 153 580 145Q580 144 576 130Q568 101 554 73T508 17T439 -10Q392 -10 371 17T350 73Q350 92 386 193T423 345Q423 404 379 404H374Q288 404 229 303L222 291L189 157Q156 26 151 16Q138 -11 108 -11Q95 -11 87 -5T76 7T74 17Q74 30 112 180T152 343Q153 348 153 366Q153 405 129 405Q91 405 66 305Q60 285 60 284Q58 278 41 278H27Q21 284 21 287Z"}})])])])])])],1),t._v(" "),t._m(10),t._v(" "),T("h2",{attrs:{id:"扫描线算法略"}},[t._v("扫描线算法（略")]),t._v(" "),T("p",[t._v("ZB算法的优点是简单可靠，不需要对显示对象的面进行排序。缺点是需要很大的ZB，对于每一个像素都要计算Z，工作量大")]),t._v(" "),T("p",[t._v("面向多边形场景的扫描线算法解决上述问题")]),t._v(" "),T("p",[t._v("类似于多边形扫描线填充算法，首先以y为步增方向，根据多边形在XOY轴投影的图形，计算y+1时x的增量，从而根据递推公式计算出多边形在XOY轴投影的边界的各个点。然后对于XOY投影的边界的各个点步增时Z轴的增量，即可得到深度Z")])])},staticRenderFns:[function(){var t=this,Q=t.$createElement,T=t._self._c||Q;return T("blockquote",[T("p",[t._v("消隐 - 找出并消除物体中不可见的部分")])])},function(){var t=this,Q=t.$createElement,T=t._self._c||Q;return T("ul",[T("li",[t._v("消除不可见的线段 - 线消隐")]),t._v(" "),T("li",[t._v("消除不可见的面 - 面消隐")])])},function(){var t=this,Q=t.$createElement,T=t._self._c||Q;return T("ul",[T("li",[t._v("物体空间消隐 - 计算物体所在空间的遮挡关系")]),t._v(" "),T("li",[t._v("图像空间消隐 - 计算物体在屏幕上是否可见")])])},function(){var t=this,Q=t.$createElement,T=t._self._c||Q;return T("p",[t._v("消隐算法种类繁多，但是必然涉及"),T("strong",[t._v("排序")]),t._v("和"),T("strong",[t._v("相关性")]),t._v("两个基本原则：")])},function(){var t=this,Q=t.$createElement,T=t._self._c||Q;return T("ul",[T("li",[t._v("排序 - 为了确定对象之间的遮挡关系，大多数算法都会在Z方向排序，确定对象相对于观察点的距离，然后在X和Y方向进一步排序，确定遮挡关系")]),t._v(" "),T("li",[t._v("相关性 - 指所考察的物体或视图区内的图像局部保持不变的一种性质。相关性利用得越充分、巧妙，消隐算法效率越高")])])},function(){var t=this.$createElement,Q=this._self._c||t;return Q("p",[Q("img",{attrs:{src:T(575),alt:""}})])},function(){var t=this,Q=t.$createElement,T=t._self._c||Q;return T("ul",[T("li",[t._v("多边形包围了窗口（下图1")]),t._v(" "),T("li",[t._v("多边形和窗口相交（下图2")]),t._v(" "),T("li",[t._v("窗口包围多边形（下图3")]),t._v(" "),T("li",[t._v("二者分离（下图4")])])},function(){var t=this.$createElement,Q=this._self._c||t;return Q("p",[Q("img",{attrs:{src:T(576),alt:""}})])},function(){var t=this,Q=t.$createElement,T=t._self._c||Q;return T("ul",[T("li",[t._v("如果所有多边形都和窗口分离，窗口填充背景色")]),t._v(" "),T("li",[t._v("只有一个多边形和窗口相交或在窗口内，则窗口填充背景色，然后使用扫描算法画多边形")]),t._v(" "),T("li",[t._v("距离观察者最近的多边形包围了窗口，则窗口填充目标颜色")]),t._v(" "),T("li",[t._v("如果以上都不是，则进一步四分窗口")])])},function(){var t=this.$createElement,Q=this._self._c||t;return Q("p",[Q("img",{attrs:{src:T(577),alt:""}})])},function(){var t=this,Q=t.$createElement,T=t._self._c||Q;return T("pre",{staticClass:"language-python"},[T("code",{pre:!0,attrs:{class:"language-python"}},[T("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 初始化ZB为Z的极小值")]),t._v("\n"),T("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 初始化FB为背景色")]),t._v("\n"),T("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("for")]),t._v(" i "),T("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("in")]),t._v(" "),T("span",{pre:!0,attrs:{class:"token builtin"}},[t._v("range")]),T("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),T("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),T("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" n"),T("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),T("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n\t"),T("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("for")]),t._v(" j "),T("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("in")]),t._v(" "),T("span",{pre:!0,attrs:{class:"token builtin"}},[t._v("range")]),T("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),T("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),T("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" m"),T("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),T("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n\t\t"),T("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("for")]),t._v(" k "),T("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("in")]),t._v(" "),T("span",{pre:!0,attrs:{class:"token builtin"}},[t._v("range")]),T("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),T("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),T("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" N"),T("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),T("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),T("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 遍历多边形")]),t._v("\n\t\t\t"),T("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("if")]),t._v(" point"),T("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("i"),T("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" j"),T("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),T("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("in")]),t._v(" polygon"),T("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("k"),T("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),T("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("projection"),T("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n\t\t\t\t"),T("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 射线与多边形有交点")]),t._v("\n\t\t\t\t"),T("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("if")]),t._v(" polygon"),T("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("k"),T("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),T("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("i"),T("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" j"),T("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),T("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v(" ZB"),T("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("i"),T("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" j"),T("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),T("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n\t\t\t\t\t"),T("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 如果Z大于当前ZB的Z")]),t._v("\n\t\t\t\t\tZB"),T("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("i"),T("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" j"),T("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),T("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" polygon"),T("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("k"),T("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),T("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("i"),T("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" j"),T("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n\t\t\t\t\tFB"),T("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("i"),T("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" j"),T("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),T("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" polygon"),T("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("k"),T("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),T("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("i"),T("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" j"),T("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),T("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("color\n")])])}]};t.exports={attributes:{layout:"collection",title:"消隐技术",collection:"ComputerGraphics"},vue:{render:n.render,staticRenderFns:n.staticRenderFns,component:{data:function(){return{templateRender:null}},render:function(t){return this.templateRender?this.templateRender():t("div","Rendering")},created:function(){this.templateRender=n.render,this.$options.staticRenderFns=n.staticRenderFns}}}}},575:function(t,Q,T){t.exports=T.p+"img/8-1.f87d005.png"},576:function(t,Q,T){t.exports=T.p+"img/8-2.e86f956.png"},577:function(t,Q,T){t.exports=T.p+"img/8-3.509f8f6.png"}}]);