# table-tree

## Integration Setup

#### 1. Add Vuetify via Vue CLI
```
vue add vuetify
```

#### 2. Add Fragment Plugin

Install Fragment 
```
npm install vue-fragment
```

Create a plugin file for Fragment, src/plugins/fragment.js with the below content:
```
// src/plugins/fragment.js

import Fragment from 'vue-fragment';
import Vue from 'vue';

Vue.use(Fragment.Plugin);

import { Plugin } from 'vue-fragment';
Vue.use(Plugin);
```

Navigate to your main entry point where you instantiate your Vue instance and pass the Vuetify object in as an option.
```
import Vue from 'vue'
import App from './App.vue'
import vuetify from './plugins/vuetify'
import fragment from './plugins/fragment'

Vue.config.productionTip = false

new Vue({
  vuetify,
  fragment
  render: h => h(App)
}).$mount('#app')

```

#### 3. Copy TreeTable and TreeTableRow to your component folder
