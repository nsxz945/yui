// defautTab设置默认显示tab，为空时显示第一个(defautTab=0);
// label设置标签名
<template defautTab>
  <Tabs>
    <pane label='a1234'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Facere harum incidunt similique, quod dolore, nulla consectetur iste accusamus blanditiis inventore voluptatibus, soluta animi repellendus. Quibusdam error illo maiores, fugit laboriosam.</pane>
    <pane label='a4567'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Explicabo provident, ea distinctio minima est voluptas. Quae eius nihil vitae hic nostrum, deleniti nam sit rerum ab perspiciatis ducimus, adipisci mollitia!</pane>
  </Tabs>
</template>

<script>
import Tabs from '../../components/Tabs/tabs';
import pane from '../../components/Tabs/pane';
export default {
  name: 'tabs',
  data() {
    return {}
  },
  components: {
    Tabs,
    pane
  }
}
</script>
