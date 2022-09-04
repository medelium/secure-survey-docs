import{_ as e,o as a,c as t,f as i}from"./app.59411d91.js";const w=JSON.parse('{"title":"FAQ","description":"","frontmatter":{},"headers":[{"level":2,"title":"What can I do with this app?","slug":"what-can-i-do-with-this-app","link":"#what-can-i-do-with-this-app","children":[]},{"level":2,"title":"What are the limitations of this app?","slug":"what-are-the-limitations-of-this-app","link":"#what-are-the-limitations-of-this-app","children":[]},{"level":2,"title":"Why is this app open-source?","slug":"why-is-this-app-open-source","link":"#why-is-this-app-open-source","children":[]},{"level":2,"title":"Is it really secure and private?","slug":"is-it-really-secure-and-private","link":"#is-it-really-secure-and-private","children":[]},{"level":2,"title":"Why do you show ads?","slug":"why-do-you-show-ads","link":"#why-do-you-show-ads","children":[]},{"level":2,"title":"Who developed this app?","slug":"who-developed-this-app","link":"#who-developed-this-app","children":[]},{"level":2,"title":"What are your next steps?","slug":"what-are-your-next-steps","link":"#what-are-your-next-steps","children":[]}],"relativePath":"guide/faq.md"}'),r={name:"guide/faq.md"},o=i('<h1 id="faq" tabindex="-1">FAQ <a class="header-anchor" href="#faq" aria-hidden="true">#</a></h1><h2 id="what-can-i-do-with-this-app" tabindex="-1">What can I do with this app? <a class="header-anchor" href="#what-can-i-do-with-this-app" aria-hidden="true">#</a></h2><p>This app aims to explain to you - with hands-on examples - how privacy-preserving methods can be used to answer questions without revealing the input of any participant. Using this app, you can create any question, select the mathematical operation (sum &amp; average), and invite people (minimum three) to answer it. All participants can receive the global result without any private information leakage.</p><h2 id="what-are-the-limitations-of-this-app" tabindex="-1">What are the limitations of this app? <a class="header-anchor" href="#what-are-the-limitations-of-this-app" aria-hidden="true">#</a></h2><p>Currently, we support the Paillier cryptosystem, which is one schema of additive homomorphic encryption. If you are interested in cryptography, look it up on <a href="https://en.wikipedia.org/wiki/Paillier_cryptosystem" target="_blank" rel="noreferrer">Wikipedia</a>. The current way we developed the schema, your device encrypts your answer with every public key of the other participants. Soon we will change it using partial additive homomorphic encryption. This means you only encrypt your input once with the public key of the aggregator.</p><h2 id="why-is-this-app-open-source" tabindex="-1">Why is this app open-source? <a class="header-anchor" href="#why-is-this-app-open-source" aria-hidden="true">#</a></h2><p>No system is always 100% secure - also not ours. To build trust and allow you to tell us if we did something wrong, we published our code publicly on GitHub.</p><h2 id="is-it-really-secure-and-private" tabindex="-1">Is it really secure and private? <a class="header-anchor" href="#is-it-really-secure-and-private" aria-hidden="true">#</a></h2><p>Yes, your device&#39;s and our aggregator&#39;s communication is encrypted using standard internet protocols. The input you send to compute the global result is also encrypted with all other participant&#39;s public keys. So no one - not even us - can read the answer you send.</p><h2 id="why-do-you-show-ads" tabindex="-1">Why do you show ads? <a class="header-anchor" href="#why-do-you-show-ads" aria-hidden="true">#</a></h2><p>We hate ads as much as you do, but our computing resources cost money and are paid with our own cash. To finance this a little, we decided to display ads - sorry! If you like to support our development and are interested in our next steps, visit <a href="https://medelium.net" target="_blank" rel="noreferrer">medelium.net</a> for more information.</p><h2 id="who-developed-this-app" tabindex="-1">Who developed this app? <a class="header-anchor" href="#who-developed-this-app" aria-hidden="true">#</a></h2><p>We are three researchers employed at the university hospital in T\xFCbingen working on a privacy-preserving distributed learning framework in healthcare.</p><h2 id="what-are-your-next-steps" tabindex="-1">What are your next steps? <a class="header-anchor" href="#what-are-your-next-steps" aria-hidden="true">#</a></h2><p>This app is a minimum viable product (MVP), aiming to explain our used technologies. Our next step is to extend this product to a secure survey, where multiple questions can be answered securely for all different domains. Furthermore, we are starting a spin-off from the university and desire to build our own company. More information at <a href="https://medelium.net" target="_blank" rel="noreferrer">medelium.net</a></p>',15),s=[o];function n(h,p,d,l,u,c){return a(),t("div",null,s)}const m=e(r,[["render",n]]);export{w as __pageData,m as default};
