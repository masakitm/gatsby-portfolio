ポートフォリオサイト 2021（構築中）
https://gatsby-portfolio-rose-gamma.vercel.app/



## ディレクトリ構成について

atomic designは優れたストラクチャーです。  
ですが、3年ほどatomic designを用いた各開発現場を眺めた際、すべてを真に有効に活用出来ているシチュエーションは少ないと感じました。  
  
具体的にはatomsとmoleculesを分けるメリットが少なく感じたこと、templateを活用している現場が少ないこと、  
page依存の強いコンポーネントも共通としてatomic designの構成に無理に落とし込もうとしていたことがあげられます。  
  
そこで本プロジェクトではatomic designを排し、pagesディレクトリのみ残して、試験的に残りを関心にて分離することを考えました。  
hooks、reduxのsliceを機能ではなく関心でディレクトリ構成し、合わせてコンポーネントも関心ベースで分離する手法です。  
  
既存のプロジェクトとはかなり異なる構成ですが、本プロジェクトにおいては有効に機能しています。  
多人数でのプロジェクトの場合はさらに深く考察していく必要があるでしょう。  


## css-in-js

現代のreactプロジェクトではstyled-componentsが採用されることが多いです。実際に有効な。  
（個人的にはstyled-jsxが好きでしたが、cssフレームワークとの兼ね合いでやや人気は下がっている様子です）  
  
本プロジェクトではcss modulesを採用しました。理由はかつてマークアップエンジニアだった自分がcssをベタで書いていたころの気持ちを思い出すためです。  
さすがにBEM等でグローバルなcssを書くのは現代的でないため、割愛しました。  
  
久しぶりのcssはvar等顕著な進化を感じました。ですが、やはり現代ではjsを活用して自由度高く書きたいという感想です。






# TODO
1. -add redux, redux toolkit
2. -manage global states
3. -add mdx blog
4. -add next stage button to congrats (with redux)
5. -design update for blog contents
6. -refactor hooks with redux
7. redesin blog style or blog moves to zenn.dev
8. -refactor directory structure like game/store, profile/components -
9. tetris add lines, level up, speed up
10. change framework to next.js
11. bug fix to pressing side key will stop the game
12. game pause on modal opening
13. add jest
14. add po
99. to be continued...



Refference
https://dev.to/adamgoth/building-a-blog-with-gatsby-and-mdx-2eh9
https://dnrsm.dev/blog/2020/gatsby-mdx-table-of-contents
