<template>
    <div class="product-details fullscreen" v-cloak>

        <div class="user-info db bm bc fc">
            <div class="personal-data">
                <img class="head-portrait" :src="product.img" alt="">
                <div class="information">
                    <div class="title">
                        <div class="real-name">{{product.title}}</div>
                    </div>
                    <div class="title">
                        <div class="real-name">pinjaman disetujui: {{product.people}}人</div>
                    </div>
                </div>
            </div>
        </div>
        

        <div class="interest">

            <div class="reference">
                <div class="rate">
                    <div>0.1%</div>
                    <div>Bunga</div>
                </div>
            </div>

            <div class="blackLine"></div>
            <div class="reference">
                <div class="rate">
                    <div>Kisaran Jumlah Pinjaman (Rupiah)</div>
                    <div>12</div>
                </div>
            </div>

            <div class="blackLine"></div>

            <div class="reference">
                <div class="rate">
                    <div>7 hari</div>
                    <div>Tenor</div>
                </div>
            </div>

        </div>

        <div class="gray"></div>


        <ul class="list">
            <li class="db" >
                <div class="left db1 bm">
                    <span class="icon"></span>
                    <div class="instructions">
                        <div class="title">Data Yang Dibutuhkan</div>
                        <div class="explain">Kartu Tanda Penduduk (KTP)、Kartu Bank、Nomor Handphone</div>
                    </div>
                </div>
            </li>

            <li class="db" >
                <div class="left db1 bm">
                    <span class="icon"></span>
                    <div class="instructions">
                        <div class="title">Syarat Pengajuan:</div>
                        <div class="explain_two">Warga Negara Indonesia rentang usia 18-40 tahun Pinjaman</div>
                        <div class="explain_tree">Persyaratan lain: Kartu Tanda Penduduk (KTP), TaoBao, Otentifikasi Operator Selular</div>
                    </div>

                </div>
            </li>

            <li class="db" >
                <div class="left db1 bm">
                    <span class="icon"></span>
                    <div class="instructions">
                        <div class="title">Keterangan Mengenai Analisa Data</div>
                        <div class="explain">Dana cair paling cepat lima menit</div>
                    </div>
                </div>
                <div class="right db1 bm br">
                    <span class="arrow"></span>
                </div>
            </li>
        </ul>

        <!-- <div class="btn-loan">申请借款</div> -->

         <div class="footer btn-fix-bottom">
            <button class="btn1" @click="toSubmit">Ajukan Permohonan</button>
        </div>

    </div>
</template>
    