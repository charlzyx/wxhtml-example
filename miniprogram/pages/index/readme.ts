export default `
<h1  style="background-color: tomato; color: whitesmoke;" ><code>&lt;wxhtml /&gt;</code> 小程序富文本组件</h1>
<p><img src="https://github.com/charlzyx/wxhtml/raw/master/logo.png" alt="wxhtml"></p>
<h2 id="对比">Diff 对比</h2>
<table>
<thead>
<tr>
<th></th>
<th><code>rich-text</code></th>
<th><code>wxhtml</code></th>
</tr>
</thead>
<tbody><tr>
<td>点击事件</td>
<td>❌</td>
<td>✅</td>
</tr>
<tr>
<td>自定义组件</td>
<td>❌</td>
<td>✅</td>
</tr>
<tr>
<td>主题配置</td>
<td>❌</td>
<td>✅</td>
</tr>
</tbody></table>
<h2 id="clickevent-点击事件-todo">ClickEvent 点击事件 [TODO]</h2>
<p><code>&lt;wxhtml bindclick=&quot;onclick&quot; /&gt;</code></p>
<h2 id="custome-自定义组件-todo">Custome 自定义组件 [TODO]</h2>
<p><code>&lt;wxhtml generic:elements=&quot;custome&quot; /&gt;</code></p>
<pre><code class="language-html">&lt;template name=&quot;demo&quot;&gt;
  &lt;demo attrs=&quot;{{node.attrs}}&quot; name=&quot;{{node.name}}&quot; body=&quot;{{node.body}}&quot;&gt;&lt;/demo&gt;
&lt;/template&gt;
&lt;template name=&quot;whoami&quot;&gt;
  &lt;whoami node=&quot;{{node}}&quot;&gt;&lt;/whoami&gt;
&lt;/template&gt;
&lt;template name=&quot;img&quot;&gt;
  &lt;image
    data-index=&quot;{{node.__index}}&quot;
    src=&quot;{{node.attrs.src}}&quot;
    class=&quot;{{attrs.class}}&quot;
    style=&quot;{{attrs.style}}&quot;
    mode=&quot;aspectFit&quot;&gt;
  &lt;/image&gt;
&lt;/template&gt;
&lt;template name=&quot;video&quot;&gt;
  &lt;video
    data-index=&quot;{{__index}}&quot;
    src=&quot;{{attrs.src}}&quot;
    class=&quot;{{attrs.class}}&quot;
    style=&quot;{{attrs.style}}&quot;
    loop=&quot;{{attrs.loop}}&quot;
    controls=&quot;{{attrs.controls}}&quot;
    autoplay=&quot;{{attrs.autoplay}}&quot; &gt;
   &lt;/video&gt;
&lt;/template&gt;
&lt;view&gt;
  &lt;template is=&quot;{{node.name}}&quot; data=&quot;{{ node }}&quot;&gt;&lt;/template&gt;
&lt;/view&gt;
</code></pre>
<h2 id="theme-主题-todo">Theme 主题 [TODO]</h2>
<p><code>&lt;wxhtml theme=&quot;custome&quot; /&gt;</code></p>

`
