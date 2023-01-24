import{_ as s,o as n,c as a,f as e}from"./app.db2c626e.js";const h=JSON.parse('{"title":"Homomorphic Encryption","description":"","frontmatter":{},"headers":[{"level":2,"title":"Keys","slug":"keys","link":"#keys","children":[{"level":3,"title":"Public/Encryption Key","slug":"public-encryption-key","link":"#public-encryption-key","children":[]},{"level":3,"title":"Private Key","slug":"private-key","link":"#private-key","children":[]}]},{"level":2,"title":"Encrypted Cipher","slug":"encrypted-cipher","link":"#encrypted-cipher","children":[]},{"level":2,"title":"Node Bindings","slug":"node-bindings","link":"#node-bindings","children":[{"level":3,"title":"Generate keypair","slug":"generate-keypair","link":"#generate-keypair","children":[]},{"level":3,"title":"Add encrypted ciphers","slug":"add-encrypted-ciphers","link":"#add-encrypted-ciphers","children":[]}]}],"relativePath":"guide/he.md"}'),p={name:"guide/he.md"},l=e(`<h1 id="homomorphic-encryption" tabindex="-1">Homomorphic Encryption <a class="header-anchor" href="#homomorphic-encryption" aria-hidden="true">#</a></h1><p>Paillier cryptosystem, which is one schema of additive homomorphic encryption.</p><p>&quot;That permits users to perform computations on its encrypted data without first decrypting it. These resulting computations are left in an encrypted form which, when decrypted, result in an identical output to that produced had the operations been performed on the unencrypted data.&quot; <a href="https://en.wikipedia.org/wiki/Homomorphic_encryption" target="_blank" rel="noreferrer">Wikipedia</a></p><p>Our developed Rust library for additive homomorphic encryption: <a href="https://github.com/medelium/secure-suvey-rs" target="_blank" rel="noreferrer">github.com/medelium/secure-survey-rs</a></p><h2 id="keys" tabindex="-1">Keys <a class="header-anchor" href="#keys" aria-hidden="true">#</a></h2><p>Homomorphic encryption keys consists of an encryption/public key and a decryption/private key. The encryption key is used to encrypt input data and the decryption key is used to decrypt cipher. The encryption key is public and can be shared with anyone. The decryption key is private and should not be shared.</p><p>Keypairs are generated with 2048 bit security level.</p><h3 id="public-encryption-key" tabindex="-1">Public/Encryption Key <a class="header-anchor" href="#public-encryption-key" aria-hidden="true">#</a></h3><p>This key is shared with all other participants. These encrypt their sensitive input with all the public keys of other participants.</p><div class="language-json"><button title="Copy Code" class="copy"></button><span class="lang">json</span><pre class="shiki material-palenight"><code><span class="line"><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#89DDFF;">&quot;</span><span style="color:#C792EA;">n</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">246213231378423674334513322...</span><span style="color:#89DDFF;">&quot;</span></span>
<span class="line"><span style="color:#89DDFF;">}</span></span>
<span class="line"></span></code></pre></div><h3 id="private-key" tabindex="-1">Private Key <a class="header-anchor" href="#private-key" aria-hidden="true">#</a></h3><p>The private key is never shared and used to decrypt the received cipher.</p><div class="language-json"><button title="Copy Code" class="copy"></button><span class="lang">json</span><pre class="shiki material-palenight"><code><span class="line"><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#89DDFF;">&quot;</span><span style="color:#C792EA;">p</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">110035683870647882302709536797795256747802742137251342309793580833813823...</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">,</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#89DDFF;">&quot;</span><span style="color:#C792EA;">q</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">146273030327770901230234206977283755850033159858846017686158224445370598...</span><span style="color:#89DDFF;">&quot;</span></span>
<span class="line"><span style="color:#89DDFF;">}</span></span>
<span class="line"></span></code></pre></div><h2 id="encrypted-cipher" tabindex="-1">Encrypted Cipher <a class="header-anchor" href="#encrypted-cipher" aria-hidden="true">#</a></h2><p>The received cipher can be decrypted using the corresponding private key.</p><div class="language-json"><button title="Copy Code" class="copy"></button><span class="lang">json</span><pre class="shiki material-palenight"><code><span class="line"><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#89DDFF;">&quot;</span><span style="color:#C792EA;">raw</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">110035683870647882302709536797795256747802742137251342309793580833813823...</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">,</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#89DDFF;">&quot;</span><span style="color:#C792EA;">components</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">1</span><span style="color:#89DDFF;">,</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#89DDFF;">&quot;</span><span style="color:#C792EA;">_phantom</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">null</span></span>
<span class="line"><span style="color:#89DDFF;">}</span></span>
<span class="line"></span></code></pre></div><h2 id="node-bindings" tabindex="-1">Node Bindings <a class="header-anchor" href="#node-bindings" aria-hidden="true">#</a></h2><p>All function arguments are JSON strings of in the above displayed format.</p><ul><li><code>generate_keypair()</code> -&gt; returns a JSON keypair containing a private and a public key</li><li><code>encrypt(ek: string, value: number )</code> -&gt; encrypts the number (64-bit integer) using the key and returns a JSON encrypted cipher</li><li><code>add_many(ek: string, ciphers: string[])</code> -&gt; adds all given encrypted ciphers using the encryption key and returns a JSON encrypted cipher</li><li><code>add(ek: string, cipher_a: string, cipher_b: string)</code> -&gt; adds the two encrypted ciphers using the encryption key and returns a JSON encrypted cipher</li></ul><h3 id="generate-keypair" tabindex="-1">Generate keypair <a class="header-anchor" href="#generate-keypair" aria-hidden="true">#</a></h3><div class="language-js"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki material-palenight"><code><span class="line"><span style="color:#C792EA;">const</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span><span style="color:#A6ACCD;"> generate_key_pair </span><span style="color:#89DDFF;">}</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> </span><span style="color:#82AAFF;">require</span><span style="color:#A6ACCD;">(</span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">./index</span><span style="color:#89DDFF;">&#39;</span><span style="color:#A6ACCD;">)</span><span style="color:#89DDFF;">;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#C792EA;">let</span><span style="color:#A6ACCD;"> keypair </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> </span><span style="color:#82AAFF;">generate_key_pair</span><span style="color:#A6ACCD;">()</span><span style="color:#89DDFF;">;</span></span>
<span class="line"></span>
<span class="line"></span></code></pre></div><h3 id="add-encrypted-ciphers" tabindex="-1">Add encrypted ciphers <a class="header-anchor" href="#add-encrypted-ciphers" aria-hidden="true">#</a></h3><div class="language-js"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki material-palenight"><code><span class="line"><span style="color:#C792EA;">const</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span><span style="color:#A6ACCD;"> encrypt_value</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> add</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> add_many </span><span style="color:#89DDFF;">}</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> </span><span style="color:#82AAFF;">require</span><span style="color:#A6ACCD;">(</span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">./index</span><span style="color:#89DDFF;">&#39;</span><span style="color:#A6ACCD;">)</span><span style="color:#89DDFF;">;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#C792EA;">let</span><span style="color:#A6ACCD;"> keypair </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> JSON</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">parse</span><span style="color:#A6ACCD;">(</span><span style="color:#82AAFF;">generate_key_pair</span><span style="color:#A6ACCD;">())</span></span>
<span class="line"></span>
<span class="line"><span style="color:#C792EA;">let</span><span style="color:#A6ACCD;"> encrypted_1 </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> </span><span style="color:#82AAFF;">encrypt_value</span><span style="color:#A6ACCD;">(keypair</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">ek</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">10</span><span style="color:#A6ACCD;">)</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#C792EA;">let</span><span style="color:#A6ACCD;"> encrypted_2 </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> </span><span style="color:#82AAFF;">encrypt_value</span><span style="color:#A6ACCD;">(keypair</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">ek</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">10</span><span style="color:#A6ACCD;">)</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;">// add two ciphers</span></span>
<span class="line"><span style="color:#C792EA;">let</span><span style="color:#A6ACCD;"> add_1 </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> </span><span style="color:#82AAFF;">add</span><span style="color:#A6ACCD;">(keypair</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">ek</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> encrypted_1</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> encrypted_2)</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;">// add a list of ciphers</span></span>
<span class="line"><span style="color:#C792EA;">let</span><span style="color:#A6ACCD;"> add_2 </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> </span><span style="color:#82AAFF;">add_many</span><span style="color:#A6ACCD;">(keypair</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">ek</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> [encrypted_1</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> encrypted_2])</span><span style="color:#89DDFF;">;</span></span>
<span class="line"></span>
<span class="line"></span></code></pre></div>`,23),o=[l];function t(r,c,i,y,d,D){return n(),a("div",null,o)}const C=s(p,[["render",t]]);export{h as __pageData,C as default};