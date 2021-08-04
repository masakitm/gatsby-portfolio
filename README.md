## ディレクトリ構成について

atomic designは優れたストラクチャーです。  
ですが、3年ほどatomic designを用いた各開発現場を眺めた際、すべてを真に有効に活用出来ているシチュエーションは少ないと感じました。  
  
具体的にはatomsとmoleculesを分けるメリットが少なく感じたこと、templateを活用している現場が少ないこと、  
page依存の強いコンポーネントも共通としてatomic designの構成に無理に落とし込もうとしていたことがあげられます。  
  
そこで本プロジェクトではatomic designを排し、pagesディレクトリのみ残して、試験的に残りを関心にて分離することを考えました。  
hooks、reduxのsliceを機能ではなく関心でディレクトリ構成し、合わせてコンポーネントも関心ベースで分離する手法です。  
  
既存のプロジェクトとはかなり異なる構成ですが、本プロジェクトにおいては有効に機能しています。










TODO
1. -add redux, redux toolkit
2. -manage global states
3. -add mdx blog
4. -add next stage button to congrats (with redux)
5. -design update for blog contents
6. -refactor hooks with redux
7. redesin blog style
8. refactor directory structure like game/store, profile/components
9. add breakout clone


Refference
https://dev.to/adamgoth/building-a-blog-with-gatsby-and-mdx-2eh9
https://dnrsm.dev/blog/2020/gatsby-mdx-table-of-contents



<!-- 
<p align="center">
  <a href="https://www.gatsbyjs.com/?utm_source=starter&utm_medium=readme&utm_campaign=minimal-starter">
    <img alt="Gatsby" src="https://www.gatsbyjs.com/Gatsby-Monogram.svg" width="60" />
  </a>
</p>
<h1 align="center">
  Gatsby minimal starter
</h1>

## 🚀 Quick start

1.  **Create a Gatsby site.**

    Use the Gatsby CLI to create a new site, specifying the minimal starter.

    ```shell
    # create a new Gatsby site using the minimal starter
    npm init gatsby
    ```

2.  **Start developing.**

    Navigate into your new site’s directory and start it up.

    ```shell
    cd my-gatsby-site/
    npm run develop
    ```

3.  **Open the code and start customizing!**

    Your site is now running at http://localhost:8000!

    Edit `src/pages/index.js` to see your site update in real-time!

4.  **Learn more**

    - [Documentation](https://www.gatsbyjs.com/docs/?utm_source=starter&utm_medium=readme&utm_campaign=minimal-starter)

    - [Tutorials](https://www.gatsbyjs.com/tutorial/?utm_source=starter&utm_medium=readme&utm_campaign=minimal-starter)

    - [Guides](https://www.gatsbyjs.com/tutorial/?utm_source=starter&utm_medium=readme&utm_campaign=minimal-starter)

    - [API Reference](https://www.gatsbyjs.com/docs/api-reference/?utm_source=starter&utm_medium=readme&utm_campaign=minimal-starter)

    - [Plugin Library](https://www.gatsbyjs.com/plugins?utm_source=starter&utm_medium=readme&utm_campaign=minimal-starter)

    - [Cheat Sheet](https://www.gatsbyjs.com/docs/cheat-sheet/?utm_source=starter&utm_medium=readme&utm_campaign=minimal-starter)

## 🚀 Quick start (Gatsby Cloud)

Deploy this starter with one click on [Gatsby Cloud](https://www.gatsbyjs.com/cloud/):

[<img src="https://www.gatsbyjs.com/deploynow.svg" alt="Deploy to Gatsby Cloud">](https://www.gatsbyjs.com/dashboard/deploynow?url=https://github.com/gatsbyjs/gatsby-starter-minimal) -->
