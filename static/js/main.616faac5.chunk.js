(this.webpackJsonpreact_feedbunny=this.webpackJsonpreact_feedbunny||[]).push([[0],{182:function(A,e,t){"use strict";t.r(e);var s=t(0),a=t.n(s),c=t(62),n=t.n(c),i=(t(71),t(4)),r=t(3),l=(t(72),t(73),t.p+"static/media/reload.296f0ed5.png"),o=t(1);function d(A){var e=A.setAllLoaded,t=A.listActivities,a=A.setNbClick,c=A.nbClick,n=A.nbClickMax,i=Object(s.useState)(),d=Object(r.a)(i,2),j=d[0],b=d[1];Object(s.useRef)(),Object(s.useRef)();return Object(s.useEffect)((function(){if(0!=t.length){var A=t[Math.floor(Math.random()*t.length)];b(A)}}),[]),Object(o.jsxs)("div",{className:"Activity ".concat(c>=n?"popOut":""),children:[Object(o.jsx)("img",{alt:"li\xe9e \xe0 l'activit\xe9",className:"imageActivity",src:"https://cdn-tam.ouest-france.fr/media/cache/thumb_400/recette-de-la-pate-a-modeler-tete-a-modeler.jpeg"}),Object(o.jsx)("div",{className:"activityName",children:j&&j.name}),Object(o.jsx)("img",{src:l,className:"reload",href:"/casse-l-oeuf/",onClick:function(){e(!1),setTimeout((function(){a(0),function(){var A=t[Math.floor(Math.random()*t.length)];b(A)}()}),500)}})]})}var j=t.p+"static/media/egg1.d1138e8b.png",b=t.p+"static/media/egg2.22294d39.png",m=t.p+"static/media/egg3.74bed2cd.png",u=t.p+"static/media/egg4-1.43d44fdb.png",f=t.p+"static/media/egg42front.bf51fc1d.png",p=t.p+"static/media/egg42back.16bc16d6.png",O=t.p+"static/media/panier.b370474d.png";function g(A){var e=A.listActivities,t=A.setAllLoaded,a=Object(s.useState)(0),c=Object(r.a)(a,2),n=c[0],i=c[1],l=20,g=function(A){i((function(A){return A+1})),19===n&&setTimeout((function(){i((function(A){return A+1}))}),3e3)};return Object(o.jsxs)("div",{className:"Oeufapp",children:[n<l&&Object(o.jsxs)("div",{className:"tapeOeuf",children:[Object(o.jsx)("lottie-player",{src:"https://assets10.lottiefiles.com/private_files/lf30_c6aifjew.json",id:"arrow",background:"transparent",speed:"1.4",loop:!0,autoplay:!0}),Object(o.jsx)("p",{className:"indicationOeuf",children:"Tape sur l'oeuf !"})]}),Object(o.jsxs)("div",{className:"Oeufanim",children:[n<=l&&Object(o.jsx)("img",{alt:"Oeuf cass\xe9 arri\xe8re",src:p,className:"Oeuf ".concat(n>=l?"down":"")}),0!=e.length&&Object(o.jsx)(d,{nbClickMax:l,setAllLoaded:t,listActivities:e,setNbClick:i,nbClick:n}),n<=l&&Object(o.jsx)("img",{alt:"Oeuf cass\xe9 Front up",src:u,className:"Oeuf ".concat(n>=l?"up":"")}),n<=l&&Object(o.jsx)("img",{alt:"Oeuf cass\xe9 Front down",src:f,className:"Oeuf ".concat(n>=l?"down":"")})]}),n<l&&Object(o.jsx)("img",{alt:"Oeuf cass\xe9",src:m,className:"Oeuf",onClick:g}),n<10&&Object(o.jsx)("img",{alt:"Oeuf cass\xe9",src:b,className:"Oeuf",onClick:g}),n<1&&Object(o.jsx)("img",{alt:"Oeuf cass\xe9",src:j,className:"Oeuf",onClick:g,onLoad:function(){return t(!0)}}),n<l&&Object(o.jsx)("img",{src:O,className:"panier"}),n<1&&Object(o.jsx)("lottie-player",{src:"https://assets4.lottiefiles.com/packages/lf20_RxwlFx.json",background:"transparent",speed:"1",id:"tapIcon",loop:!0,autoplay:!0})]})}var v=t(15),x=t.p+"static/media/fondFerme.e15946aa.jpg";t(75);function h(A){var e=A.listActivities,t=Object(s.useState)(!1),a=Object(r.a)(t,2),c=a[0],n=a[1],i=Object(s.useState)({}),l=Object(r.a)(i,2),d=l[0],j=l[1];return Object(s.useEffect)((function(){!0===c?setTimeout((function(){j({display:"none"})}),2e3):j({display:"block"})}),[c]),Object(o.jsxs)("div",{className:"main",style:{backgroundImage:"url(".concat(x,")")},children:[Object(o.jsx)("div",{className:"loadZone",style:d,children:Object(o.jsx)("lottie-player",{src:"https://assets3.lottiefiles.com/packages/lf20_f3qi4ym6.json",background:"transparent",speed:"1",className:"loadChiken",loop:!0,autoplay:!0})}),Object(o.jsx)(v.b,{to:"/casse-l-oeuf/AddActivity",children:Object(o.jsx)("img",{src:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAgAAAAIACAYAAAD0eNT6AAAABHNCSVQICAgIfAhkiAAAAAlwSFlzAAAOxAAADsQBlSsOGwAAABl0RVh0U29mdHdhcmUAd3d3Lmlua3NjYXBlLm9yZ5vuPBoAABTLSURBVHic7d1LzO3X/Mfx91FpNar+ylG0QtCKuM1MXFpKW2pmJJoIGjQmIsRMaSQStwZBohGSkpgYULeWKmoghhrXtolLK637NXoOx/Mf/DQRIn32Oc/e66y9X6/kO96fZ/9+edZ3r7V+61cAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABsp0OjAwzwoOq86uzqwdWpa/qc31d/qW6rfrumz9h2D2+5VmdUDxucBdg+R6u/VndXt1f3jo2zWbvQAJxWvaS6pLqwZUB5wIYz/Lq6pbqp+mx1z4Y/fxaPql5WXVQ9pzo8Ng6wQ/7Z8oPt5uqG6kstDQITemx1Tcuv772TqP5eXV89b31/+nQurL5Q/aPx10cppfZaxo73V+fGNB5afaA60vgb6P7q69XT1vM1TOEZ1Tcbfx2UUup/1ZGWRuDMOKldUv2y8TfMKnW0ekd1yhq+j5PVA6t3tsyGjP7+lVJqP3VX9aI46Ryqrq6ONf4mOd66uWXT27Y7XH2r8d+3UkqtWseqq9qS/XPb8EecUl1bvWp0kAPwo5ZZjJ+PDrImj2vZXPPk0UEATsDHq9e1NATTmr0BONQy+L9mdJADdEfLDvi7Rwc5YIerb1fnjw4CcACuq17ZMjMwpdnXna+u3jg6xAE7q2VX/HUtu+K3wektSxy7vOER2C7PbHl08JujgxyvmRuAF1Qfa/PP9G/CY1r2A3xxdJAD8tHqstEhAA7YBdV3WmZupzPrEsCZLevljx4dZM0ubVkzn9llLc/4A2yju6qnVH8eHWRVs/56vrrtH/yrPtRykuGsTq8+ODoEwBqdU719dIjjMWMDcG515egQG3Jecz/dcEX1hNEhANbsDS2NwFRmbADe3Ppe4HMyemvLwTmzeWDLtQLYdqdVbxodYlWz7QE4teWkv104MOffvbj6yugQK3ppyzsPAHbB71o2cB8ZHWS/ZpsBuKzdG/yrLh8d4Di8YnQAgA06q+Ugt2nM1gBcOjrAIBc312zNA6oXjg4BsGEagDW6YHSAQQ431yE6T68eMToEwIY9f3SAVczUAJzesit+Vz19dIAVPGN0AIABzq8eNDrEfs3UADypufIetJleoOO8f2AXnVI9cXSI/ZppQH3k6ACDHR4dYAUzZQU4SNP8/5upAThjdIDBHjI6wAp2/VoBu+vM0QH2a6YGAAA4IDM1AH8ZHWCwmV40sevXCthdfxodYL9magB+NTrAYDP9/TNlBThIvx4dYL9magBuq46NDjHQj0cHWMFPRgcAGOBYdcfoEPs1UwNwb3X76BAD3To6wAq+NzoAwAA/bhmrpjBTA1D1jdEBBvlV9f3RIVZwa/Wb0SEANuzm0QFWMVsDMNsb8Q7KjdXe6BAr2GvJDLBLbhgdYBWzNQBfqn47OsQAnxod4Dh8enQAgA36XRqAtTpaXTc6xIb9tPra6BDH4cbqZ6NDAGzIJ1rGqGnM1gBUva86MjrEBr2rOZ9++Ef1ntEhADbgSHXN6BCrmrEBuLP6yOgQG/KT6pOjQ5yAjzfRIzEAx+mD1V2jQ6zq0OgAx+nM6ofVY0YHWbOLq6+ODnGCXtyydwNgG91ZPaUJT0CdcQaglqMWL2/OqfH9+nDzD/5VX64+NjoEwBr8s3p1Ew7+tby7eFY/bZnBuHBsjLX4bvXytqfBuallJuDRo4MAHKC3NfEy7axLAPc51PLr8orRQQ7QHdWzq3tGBzlgh6tbqiePDgJwAK6tXjs6xImYdQngPnvV61s2m22DH1TPb/sG/1pekHFx9aPRQQBO0LXVlaNDnKiZlwDus1dd37IWc0HzzmrcVL2k7Rz87/PH6jPVs6rHj40CsLJj1VXVW5rrdNad8MKWHZl7E9XRlnWkbWjG9uuU6h0tf/vo718ppfZTv6heECe1h1TvbXkj0+gb5v7qxpbHR3bVU1tmPkZfB6WU+l/1t+rd1RkxjXNaTg38TeNvoH+vo9XnWjb6sXhu9fnq742/Pkoptdeyb+m9bfF5M7Oul6/i1OrS6pKWDXbnt/np9rurb7f82v1sy43Ff3tk9bLqouo51dlj4wA75FjL6as3t7x59oYmO9t/VbvQAPyn06onVo9qmdI5bQ2fsVf94V91R/X7NXzGLjir5Vo9tPq/dvN+BdbnSMshPne3/K/epffMAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAD349DoAAM8qDqvOrt6cHXqmj7n99Vfqtuq367pM7bdw1uu1RnVwwZnAbbP0eqv1d3V7dW9Y+Ns1i40AKdVL6kuqS5sGVAesOEMv65uqW6qPlvds+HPn8WjqpdVF1XPqQ6PjQPskH+2/GC7ubqh+lJLg8CEHltd0/Lre+8kqr9X11fPW9+fPp0Lqy9U/2j89VFKqb2WseP91bkxjYdWH6iONP4Gur/6evW09XwNU3hG9c3GXwellPpfdaSlETgzTmqXVL9s/A2zSh2t3lGdsobv42T1wOqdLbMho79/pZTaT91VvShOOoeqq6tjjb9Jjrdubtn0tu0OV99q/PetlFKr1rHqqrZk/9w2/BGnVNdWrxod5AD8qGUW4+ejg6zJ41o21zx5dBCAE/Dx6nUtDcG0Zm8ADrUM/q8ZHeQA3dGyA/7u0UEO2OHq29X5o4MAHIDrqle2zAxMafZ156urN44OccDOatkVf13LrvhtcHrLEscub3gEtsszWx4d/OboIMdr5gbgBdXH2vwz/ZvwmJb9AF8cHeSAfLS6bHQIgAN2QfWdlpnb6cy6BHBmy3r5o0cHWbNLW9bMZ3ZZyzP+ANvoruop1Z9HB1nVrL+er277B/+qD7WcZDir06sPjg4BsEbnVG8fHeJ4zNgAnFtdOTrEhpzX3E83XFE9YXQIgDV7Q0sjMJUZG4A3t74X+JyM3tpycM5sHthyrQC23WnVm0aHWNVsewBObTnpbxcOzPl3L66+MjrEil7a8s4DgF3wu5YN3EdGB9mv2WYALmv3Bv+qy0cHOA6vGB0AYIPOajnIbRqzNQCXjg4wyMXNNVvzgOqFo0MAbJgGYI0uGB1gkMPNdYjO06tHjA4BsGHPHx1gFTM1AKe37IrfVU8fHWAFzxgdAGCA86sHjQ6xXzM1AE9qrrwHbaYX6DjvH9hFp1RPHB1iv2YaUB85OsBgh0cHWMFMWQEO0jT//2ZqAM4YHWCwh4wOsIJdv1bA7jpzdID9mqkBAAAOyEwNwF9GBxhsphdN7Pq1AnbXn0YH2K+ZGoBfjQ4w2Ex//0xZAQ7Sr0cH2K+ZGoDbqmOjQwz049EBVvCT0QEABjhW3TE6xH7N1ADcW90+OsRAt44OsILvjQ4AMMCPW8aqKczUAFR9Y3SAQX5VfX90iBXcWv1mdAiADbt5dIBVzNYAzPZGvINyY7U3OsQK9loyA+ySG0YHWMVsDcCXqt+ODjHAp0YHOA6fHh0AYIN+lwZgrY5W140OsWE/rb42OsRxuLH62egQABvyiZYxahqzNQBV76uOjA6xQe9qzqcf/lG9Z3QIgA04Ul0zOsSqZmwA7qw+MjrEhvyk+uToECfg4030SAzAcfpgddfoEKs6NDrAcTqz+mH1mNFB1uzi6qujQ5ygF7fs3QDYRndWT2nCE1BnnAGo5ajFy5tzany/Ptz8g3/Vl6uPjQ4BsAb/rF7dhIN/Le8untVPW2YwLhwbYy2+W7287WlwbmqZCXj06CAAB+htTbxMO+sSwH0Otfy6vGJ0kAN0R/Xs6p7RQQ7Y4eqW6smjgwAcgGur144OcSJmXQK4z171+pbNZtvgB9Xz277Bv5YXZFxc/Wh0EIATdG115egQJ2rmJYD77FXXt6zFXNC8sxo3VS9pOwf/+/yx+kz1rOrxY6MArOxYdVX1luY6nXUnvLBlR+beRHW0ZR1pG5qx/TqlekfL3z76+1dKqf3UL6oXxEntIdV7W97INPqGub+6seXxkV311JaZj9HXQSml/lf9rXp3dUZM45yWUwN/0/gb6N/raPW5lo1+LJ5bfb76e+Ovj1JK7bXsW3pvW3zezKzr5as4tbq0uqRlg935bX66/e7q2y2/dj/bcmPx3x5Zvay6qHpOdfbYOMAOOdZy+urNLW+evaHJzvZf1S40AP/ptOqJ1aNapnROW8Nn7FV/+FfdUf1+DZ+xC85quVYPrf6v3bxfgfU50nKIz90t/6t36T0zAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAMD9ODQ6wAAPqs6rzq4eXJ26ps/5ffWX6rbqt2v6jG338JZrdUb1sMFZgO1ztPprdXd1e3Xv2DibtQsNwGnVS6pLqgtbBpQHbDjDr6tbqpuqz1b3bPjzZ/Go6mXVRdVzqsNj4wA75J8tP9hurm6ovtTSIDChx1bXtPz63juJ6u/V9dXz1venT+fC6gvVPxp/fZRSaq9l7Hh/dW5M46HVB6ojjb+B7q++Xj1tPV/DFJ5RfbPx10Eppf5XHWlpBM6Mk9ol1S8bf8OsUkerd1SnrOH7OFk9sHpny2zI6O9fKaX2U3dVL4qTzqHq6upY42+S462bWza9bbvD1bca/30rpdSqday6qi3ZP7cNf8Qp1bXVq0YHOQA/apnF+PnoIGvyuJbNNU8eHQTgBHy8el1LQzCt2RuAQy2D/2tGBzlAd7TsgL97dJADdrj6dnX+6CAAB+C66pUtMwNTmn3d+erqjaNDHLCzWnbFX9eyK34bnN6yxLHLGx6B7fLMlkcHvzk6yPGauQF4QfWxNv9M/yY8pmU/wBdHBzkgH60uGx0C4IBdUH2nZeZ2OrMuAZzZsl7+6NFB1uzSljXzmV3W8ow/wDa6q3pK9efRQVY166/nq9v+wb/qQy0nGc7q9OqDo0MArNE51dtHhzgeMzYA51ZXjg6xIec199MNV1RPGB0CYM3e0NIITGXGBuDNre8FPiejt7YcnDObB7ZcK4Btd1r1ptEhVjXbHoBTW07624UDc/7di6uvjA6xope2vPMAYBf8rmUD95HRQfZrthmAy9q9wb/q8tEBjsMrRgcA2KCzWg5ym8ZsDcClowMMcnFzzdY8oHrh6BAAG6YBWKMLRgcY5HBzHaLz9OoRo0MAbNjzRwdYxUwNwOktu+J31dNHB1jBM0YHABjg/OpBo0Ps10wNwJOaK+9Bm+kFOs77B3bRKdUTR4fYr5kG1EeODjDY4dEBVjBTVoCDNM3/v5kagDNGBxjsIaMDrGDXrxWwu84cHWC/ZmoAAIADMlMD8JfRAQab6UUTu36tgN31p9EB9mumBuBXowMMNtPfP1NWgIP069EB9mumBuC26tjoEAP9eHSAFfxkdACAAY5Vd4wOsV8zNQD3VrePDjHQraMDrOB7owMADPDjlrFqCjM1AFXfGB1gkF9V3x8dYgW3Vr8ZHQJgw24eHWAVszUAs70R76DcWO2NDrGCvZbMALvkhtEBVjFbA/Cl6rejQwzwqdEBjsOnRwcA2KDfpQFYq6PVdaNDbNhPq6+NDnEcbqx+NjoEwIZ8omWMmsZsDUDV+6ojo0Ns0Lua8+mHf1TvGR0CYAOOVNeMDrGqGRuAO6uPjA6xIT+pPjk6xAn4eBM9EgNwnD5Y3TU6xKoOjQ5wnM6sflg9ZnSQNbu4+uroECfoxS17NwC20Z3VU5rwBNQZZwBqOWrx8uacGt+vDzf/4F/15epjo0MArME/q1c34eBfy7uLZ/XTlhmMC8fGWIvvVi9vexqcm1pmAh49OgjAAXpbEy/TzroEcJ9DLb8urxgd5ADdUT27umd0kAN2uLqlevLoIAAH4NrqtaNDnIhZlwDus1e9vmWz2Tb4QfX8tm/wr+UFGRdXPxodBOAEXVtdOTrEiZp5CeA+e9X1LWsxFzTvrMZN1UvazsH/Pn+sPlM9q3r82CgAKztWXVW9pblOZ90JL2zZkbk3UR1tWUfahmZsv06p3tHyt4/+/pVSaj/1i+oFcVJ7SPXeljcyjb5h7q9ubHl8ZFc9tWXmY/R1UEqp/1V/q95dnRHTOKfl1MDfNP4G+vc6Wn2uZaMfi+dWn6/+3vjro5RSey37lt7bFp83M+t6+SpOrS6tLmnZYHd+m59uv7v6dsuv3c+23Fj8t0dWL6suqp5TnT02DrBDjrWcvnpzy5tnb2iys/1XtQsNwH86rXpi9aiWKZ3T1vAZe9Uf/lV3VL9fw2fsgrNartVDq/9rN+9XYH2OtBzic3fL/+pdes8MAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAW+v/AemNB4o6rmtDAAAAAElFTkSuQmCC",className:"goToAdd",alt:"go to addActivity panel"})}),Object(o.jsx)(g,{listActivities:e,setAllLoaded:n})]})}t(76),t(77),t(78);function N(A){var e=A.setApiPopup;return Object(o.jsxs)("div",{className:"ApiPopup",children:[Object(o.jsx)("div",{className:"Recherche",children:Object(o.jsxs)("form",{onSubmit:function(){},children:[Object(o.jsx)("input",{className:"barreRecherche"}),Object(o.jsx)("button",{type:"submit",children:"Rechercher"})]})}),Object(o.jsx)("button",{type:"button",className:"btn-close","aria-label":"Close",onClick:function(){return e(!1)}}),Object(o.jsx)("div",{className:"imagesList"})]})}function q(A){var e=A.listActivities,t=A.addActivityItem,a=Object(s.useState)(""),c=Object(r.a)(a,2),n=c[0],i=c[1],l=Object(s.useState)(!1),d=Object(r.a)(l,2),j=d[0],b=d[1],m=function(A){A.preventDefault();var e=Math.floor(1e10*Math.random());0!=n&&t({name:n,id:e}),i("")};return Object(o.jsxs)(o.Fragment,{children:[Object(o.jsx)("div",{style:{position:"relative",width:"75%",height:"100%"},children:Object(o.jsxs)("div",{className:"",style:{width:"20%",position:"absolute",top:"50%",left:"60%",transform:"translate(-50%,-50%)"},children:[Object(o.jsx)("button",{className:"plus",onClick:function(){return b(!0)}}),Object(o.jsxs)("form",{onSubmit:m,className:"form",children:[Object(o.jsx)("input",{className:"input",type:"text",maxLength:"20",value:n,onChange:function(A){return i(A.target.value)}}),Object(o.jsx)("div",{className:"envoi",onClick:m,children:Object(o.jsx)("svg",{xmlns:"http://www.w3.org/2000/svg",width:"auto",height:"45px",fill:"#007BFF",className:"bi bi-arrow-right-square-fill",viewBox:"0 0 16 16",children:Object(o.jsx)("path",{d:"M0 14a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2H2a2 2 0 0 0-2 2v12zm4.5-6.5h5.793L8.146 5.354a.5.5 0 1 1 .708-.708l3 3a.5.5 0 0 1 0 .708l-3 3a.5.5 0 0 1-.708-.708L10.293 8.5H4.5a.5.5 0 0 1 0-1z"})})})]}),0!=e.length&&Object(o.jsx)(v.b,{to:"/casse-l-oeuf/",className:"btn btn-primary jouer",children:"Jouer"})]})}),j&&Object(o.jsx)(N,{setApiPopup:b})]})}t(79);function B(A){var e=A.listActivities,t=A.delItem;return Object(o.jsxs)("div",{className:"card listActivity overflow-auto",children:[Object(o.jsx)("ul",{className:"list-group",children:e.map((function(A){return Object(o.jsxs)("div",{className:"list-group-item",style:{display:"flex",position:"relative",width:"100%"},children:[Object(o.jsx)("li",{className:"",children:A.name},A.id),Object(o.jsx)("p",{type:"button",className:"btn-close",style:{position:"absolute",right:"3%"},"aria-label":"Close",onClick:function(){return t(A)}})]})}))}),!e[0]&&Object(o.jsx)("lottie-player",{src:"https://assets1.lottiefiles.com/packages/lf20_s9lvjg2e.json",background:"transparent",speed:"1",style:{position:"absolute",bottom:"10px",left:"50%",transform:"translate(-50%)",width:"80%",height:"auto"},loop:!0,autoplay:!0})]})}function w(A){var e=A.addActivityItem,t=A.listActivities,s=A.delItem;return Object(o.jsxs)("div",{className:"",style:{position:"relative",width:"100%",height:"100%",overflow:"hidden"},children:[Object(o.jsx)(q,{listActivities:t,addActivityItem:e}),Object(o.jsx)(B,{listActivities:t,delItem:s})]})}t(80),t(81);var y=t(7),D=t(9),H=(t(39),t(66)),M=t(22);function P(A){var e,t,s=A.setFormulaire,a=M.a().shape({password:M.c().required("Mot de passe n\xe9cessaire").min(6,"Le mot de passe est trop court").max(30,"Le mot de passe est trop long"),confirmPassword:M.c().required("confirmer le mot de passe").oneOf([M.b("password")],"Le mot de passe ne correspond pas")}),c={resolver:Object(H.a)(a)},n=Object(D.d)(c),i=n.register,r=n.handleSubmit,l=n.formState.errors;return Object(o.jsx)("div",{className:"FormDiv",children:Object(o.jsxs)("form",{onSubmit:r((function(A){alert(A)})),children:[Object(o.jsxs)("div",{className:"form-floating mb-3",children:[Object(o.jsx)("input",Object(y.a)(Object(y.a)({},i("Nom")),{},{type:"text",className:"form-control ".concat(l.Nom?"is-invalid":""),id:"floatingInput",placeholder:"name@example.com",required:!0})),Object(o.jsx)("label",{htmlFor:"floatingInput",children:"Nom de l'enfant"})]}),Object(o.jsxs)("div",{className:"form-floating mb-3",children:[Object(o.jsx)("input",Object(y.a)(Object(y.a)({},i("Email")),{},{type:"email",className:"form-control ".concat(l.Email?"is-invalid":""),id:"floatingInput",placeholder:"name@example.com",required:!0})),Object(o.jsx)("label",{htmlFor:"floatingInput",children:"Email address"})]}),Object(o.jsxs)("div",{className:"form-floating mb-3",children:[Object(o.jsx)("input",Object(y.a)(Object(y.a)({},i("password")),{},{maxlength:"30",minlength:"6",type:"password",className:"form-control ".concat(l.password?"is-invalid":""),id:"floatingPassword",placeholder:"Mot de passe",required:!0})),Object(o.jsx)("label",{htmlFor:"floatingInput",children:"Mot de passe"}),Object(o.jsx)("div",{className:"invalid-feedback",children:null===(e=l.password)||void 0===e?void 0:e.message})]}),Object(o.jsxs)("div",{className:"form-floating mb-3",children:[Object(o.jsx)("input",Object(y.a)(Object(y.a)({},i("confirmPassword")),{},{maxlength:"30",minlength:"6",type:"password",className:"form-control ".concat(l.confirmPassword?"is-invalid":""),id:"floatingPassword",placeholder:"Mot de passe",required:!0})),Object(o.jsx)("label",{htmlFor:"floatingInput",children:"Confirmer"}),Object(o.jsx)("div",{className:"invalid-feedback",children:null===(t=l.confirmPassword)||void 0===t?void 0:t.message})]}),Object(o.jsx)("button",{type:"submit",className:"btn btn-primary submit",children:"S'inscrire"}),Object(o.jsx)("p",{className:"inscriptionClick",onClick:function(){s(1)},children:"d\xe9j\xe0 un compte ?"})]})})}function z(A){var e=A.setAllLoaded,t=Object(s.useState)(1),a=Object(r.a)(t,2),c=a[0],n=a[1],i=Object(D.d)(),l=i.register,d=i.handleSubmit,j=(i.watch,i.formState.errors);Object(s.useEffect)((function(){e(!0)}),[]);return 1===c?Object(o.jsx)("div",{className:"FormDiv",children:Object(o.jsxs)("form",{onSubmit:d((function(A){console.log(A)})),children:[Object(o.jsxs)("div",{className:"form-floating mb-3",children:[Object(o.jsx)("input",Object(y.a)(Object(y.a)({},l("Email",{required:!0})),{},{type:"email",className:"form-control ".concat(j.Email?"is-invalid":""),id:"floatingInput",placeholder:"name@example.com",required:!0})),Object(o.jsx)("label",{htmlFor:"floatingInput",children:"Email address"})]}),Object(o.jsxs)("div",{className:"form-floating mb-3",children:[Object(o.jsx)("input",Object(y.a)(Object(y.a)({maxlength:"30",minlength:"6"},l("Password",{required:!0,minLength:6,maxLength:30})),{},{type:"password",className:"form-control ".concat(j.Password?"is-invalid":""),id:"floatingPassword",placeholder:"Mot de passe",required:!0})),Object(o.jsx)("label",{htmlFor:"floatingInput",children:"Mot de passe"})]}),Object(o.jsx)("button",{type:"submit",className:"btn btn-primary submit",children:"Connecter"}),Object(o.jsx)("p",{className:"inscriptionClick",onClick:function(){n(2)},children:"Inscription"})]})}):Object(o.jsx)(P,{setFormulaire:n})}var V=t(2);function X(){var A=Object(s.useState)([{id:0,name:"Peinture"},{id:1,name:"Cache-Cache"},{id:2,name:"Manger un bonbon"}]),e=Object(r.a)(A,2),t=e[0],c=e[1];Object(s.useEffect)((function(){null!=localStorage.getItem("activities")&&0!=JSON.parse(localStorage.getItem("activities")).length&&(console.log(localStorage.getItem("activities")),c(JSON.parse(localStorage.getItem("activities"))))}),[]);return Object(o.jsx)(a.a.Fragment,{children:Object(o.jsxs)(V.c,{children:[Object(o.jsx)(V.a,{path:"/casse-l-oeuf/",exact:!0,element:Object(o.jsx)(h,{listActivities:t})}),Object(o.jsx)(V.a,{path:"/casse-l-oeuf/AddActivity",exact:!0,element:Object(o.jsx)(w,{addActivityItem:function(A){if(!t.some((function(e){return e.name===A.name}))){var e=[].concat(Object(i.a)(t),[A]);c(e),localStorage.setItem("activities",JSON.stringify(e))}},listActivities:t,delItem:function(A){var e=t.filter((function(e){return e.name!==A.name}));c(e),localStorage.setItem("activities",JSON.stringify(e))}})}),Object(o.jsx)(V.a,{path:"/casse-l-oeuf/Connexion",exact:!0,element:Object(o.jsx)(z,{})})]})})}var W=function(A){A&&A instanceof Function&&t.e(3).then(t.bind(null,183)).then((function(e){var t=e.getCLS,s=e.getFID,a=e.getFCP,c=e.getLCP,n=e.getTTFB;t(A),s(A),a(A),c(A),n(A)}))};n.a.render(Object(o.jsx)(a.a.StrictMode,{children:Object(o.jsx)(v.a,{children:Object(o.jsx)(X,{})})}),document.getElementById("root")),W()},39:function(A,e,t){},71:function(A,e,t){},72:function(A,e,t){},73:function(A,e,t){},75:function(A,e,t){},76:function(A,e,t){},77:function(A,e,t){},78:function(A,e,t){},79:function(A,e,t){},81:function(A,e,t){}},[[182,1,2]]]);
//# sourceMappingURL=main.616faac5.chunk.js.map