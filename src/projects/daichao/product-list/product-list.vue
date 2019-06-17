<template>
    <div class="product-list fullscreen" v-cloak>

       <div class="tab">
           <ul class="db">
               <li 
               class="db1 bm bc" 
               :class="{selected: item.selected}" 
               v-for="(item,index) in productName" 
               :key=index
               @click="switchDiffProduct(item.symbol)"
               >{{ item.name }}</li>
           </ul>
       </div>

       <div v-for="(item,index) in productList" :key="index">
             <productCard
                :title=item.title
                :img=item.img
                :amount=item.amount
                :rate=item.rate
                :jumlah=item.jumlah
                :time=item.time></productCard>
        </div>

       
    </div>
</template>
    