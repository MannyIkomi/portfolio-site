/** @jsx jsx */
import React from "react"
import { css, jsx } from "@emotion/core"
import PropTypes from "prop-types"

import { size, mixin, colors } from "../styles"

export const Logo = ({ lockup, styles, color, ...props }) => {
  const getLockup = lockup => {
    switch (lockup) {
      case "type":
        return (
          <svg viewBox="0 0 136.32 26.804" xmlns="http://www.w3.org/2000/svg">
            <title>logo-type-long</title>
            <g data-name="Layer 2">
              <g data-name="Layer 1">
                <path d="M0,8.76465A26.766,26.766,0,0,0,4.21289,8.0293h.11328a4.72884,4.72884,0,0,1,.36719,1.89453v.22656A5.47248,5.47248,0,0,1,8.96289,7.917a3.41625,3.41625,0,0,1,3.50586,2.46c1.52734-1.7539,2.7998-2.46,4.43945-2.46A3.75938,3.75938,0,0,1,20.13086,9.5c.39648.73535.45312,1.07422.45312,2.96875v3.59082c.05664,2.5166.19727,2.71484,1.668,2.77148h.16993v.93262H16.11621v-.93262h.11328c1.38574-.085,1.49805-.2832,1.49805-2.77148V12.04492c0-1.89453-.53711-2.6582-1.86524-2.6582-1.10351,0-2.03613.65039-3.25195,2.206v4.4668c0,2.43164.1416,2.68652,1.44238,2.77148h.084v.93262H8.11426v-.93262h.1416c1.38574-.085,1.499-.2832,1.499-2.77148v-3.5625a4.80786,4.80786,0,0,0-.31152-2.29,1.87907,1.87907,0,0,0-1.583-.84863,3.36438,3.36438,0,0,0-2.48828,1.27246c-.62207.707-.62207.707-.707.792v4.63672c0,2.43164.1416,2.68652,1.4707,2.77148h.11231v.93262H.02832v-.93262H.1416c1.49805-.02832,1.69629-.33984,1.69629-2.77148V12.44043C1.78125,10.03711,1.583,9.72656.1416,9.69824H0Z" />
                <path d="m36.447 17.53a2.5378 2.5378 0 0 1-2.7715 2.5166 2.4402 2.4402 0 0 1-2.5723-1.8096 8.1262 8.1262 0 0 1-4.6094 1.8096c-1.7246 0-2.9688-1.0469-2.9688-2.4883 0-1.1035 0.53711-1.8945 1.8096-2.7148a33.679 33.679 0 0 1 4.043-2.0078l1.6406-0.64942v-0.73535a3.31 3.31 0 0 0-0.25488-1.668 2.3672 2.3672 0 0 0-2.1484-0.93359 2.9142 2.9142 0 0 0-1.7246 0.48047 1.8221 1.8221 0 0 0-0.4248 1.0469c-0.16894 0.876-0.62207 1.3281-1.3848 1.3281a1.0443 1.0443 0 0 1-1.1318-1.0176 2.5933 2.5933 0 0 1 1.5556-1.9795 7.84 7.84 0 0 1 3.7324-0.791 5.0972 5.0972 0 0 1 3.8447 1.2158c0.62207 0.62207 0.76367 1.1309 0.76367 2.6572v4.835c0 1.6123 0.19825 2.0644 0.84864 2.0644 0.50878 0 0.876-0.4248 1.0176-1.1592zm-6.1074-4.1006c-2.7988 1.1318-3.8457 2.0644-3.8457 3.5068a1.6425 1.6425 0 0 0 1.584 1.7529 5.1624 5.1624 0 0 0 2.9404-1.4707v-4.0713z" />
                <path d="m37.233 8.793a23.796 23.796 0 0 0 4.2129-0.76367h0.11328a4.8223 4.8223 0 0 1 0.36719 1.8945v0.25488a5.5787 5.5787 0 0 1 4.4678-2.2617 3.6082 3.6082 0 0 1 3.1377 1.583 4.9816 4.9816 0 0 1 0.48144 2.8555v3.7041c0.05567 2.5166 0.19727 2.7148 1.668 2.7715h0.16992v0.93262h-6.4756v-0.93262h0.22656c1.4141-0.085 1.5547-0.31152 1.5547-2.7715v-4.6367a1.9109 1.9109 0 0 0-1.9785-2.1211c-1.1875 0-2.2344 0.707-3.2803 2.1777v4.5801c0 2.46 0.1416 2.7148 1.583 2.7715h0.1416v0.93262h-6.418v-0.93262h0.1416c1.498-0.02832 1.6963-0.33984 1.7246-2.7715v-3.6191c-0.05664-2.4033-0.25488-2.6856-1.7246-2.7422h-0.11326z" />
                <path d="m52.832 8.793a23.796 23.796 0 0 0 4.2129-0.76367h0.11328a4.8223 4.8223 0 0 1 0.36719 1.8945v0.25488a5.5787 5.5787 0 0 1 4.4678-2.2617 3.6082 3.6082 0 0 1 3.1377 1.583 4.9816 4.9816 0 0 1 0.48144 2.8555v3.7041c0.05567 2.5166 0.19727 2.7148 1.668 2.7715h0.16895v0.93262h-6.4746v-0.93262h0.22656c1.4141-0.085 1.5547-0.31152 1.5547-2.7715v-4.6367a1.9109 1.9109 0 0 0-1.9785-2.1211c-1.1875 0-2.2344 0.707-3.2803 2.1777v4.5801c0 2.46 0.1416 2.7148 1.583 2.7715h0.1416v0.93262h-6.418v-0.93262h0.1416c1.498-0.02832 1.6963-0.33984 1.7246-2.7715v-3.6191c-0.05664-2.4033-0.25488-2.6856-1.7246-2.7422h-0.11327z" />
                <path d="M72.81055,8.36914v.9043l-.169.02832c-.65039.02832-1.01855.2832-1.01855.67871,0,.22656.02832.33984.39648,1.13086l2.91211,5.88183,2.34668-5.51367c.02832-.05664.19824-.4248.36719-.82031a1.4806,1.4806,0,0,0,.19824-.67871c0-.45215-.36719-.67871-1.15918-.707h-.25488v-.9043h4.15625v.9043l-.14063.02832c-1.07519.16992-1.4707.65039-2.375,2.7998L73.09375,23.55273c-1.01758,2.40332-1.80957,3.251-2.91211,3.251a1.20674,1.20674,0,0,1-1.30078-1.1875c0-.76269.48047-1.27246,1.583-1.668,1.44238-.50879,1.78125-.76367,2.20605-1.78125l.81934-2.06445L68.99414,11.168c-.82031-1.61133-1.04687-1.83789-1.92285-1.86621l-.22656-.02832v-.9043Z" />
                <path d="m86.732 17.021c-1.0186 1.9785-2.3467 3.1094-3.6474 3.1094a1.6274 1.6274 0 0 1-1.753-1.3564 4.3193 4.3193 0 0 1 0.31055-1.3574l2.3184-7.0967a4.8173 4.8173 0 0 0 0.22656-1.0752c0-0.31055-0.11328-0.48047-0.36719-0.48047-0.59375 0-1.0469 0.62207-1.7812 2.4033l-0.792-0.19727c1.1875-2.46 2.1768-3.3936 3.5908-3.3936 0.9043 0 1.6113 0.53711 1.6113 1.2158a4.7869 4.7869 0 0 1-0.28223 1.3574l-2.4316 7.4648a1.9799 1.9799 0 0 0-0.16992 0.791c0 0.39648 0.16992 0.62207 0.45215 0.62207 0.65039 0 1.1309-0.56543 2.0361-2.375zm1.498-13.827a1.4834 1.4834 0 0 1-1.4697 1.3857 1.4638 1.4638 0 0 1-1.4707-1.3857 1.475 1.475 0 0 1 2.9404 0z" />
                <path d="m91.003 0.45215a12.65 12.65 0 0 0 4.2129-0.45215l0.19824 0.11328-4.1562 13.147c0.93262-1.1309 1.1592-1.4141 1.8379-2.1494 2.2617-2.6289 3.8447-3.7314 5.2871-3.7314 0.65039 0 1.2158 0.42383 1.2158 0.876a1.0861 1.0861 0 0 1-1.1025 0.90527 3.8104 3.8104 0 0 1-0.82031-0.1416 3.1537 3.1537 0 0 0-0.76367-0.1416c-0.93262 0-2.3184 1.2441-4.1279 3.7041 1.8379 0.19824 2.4033 1.0459 2.5449 3.8457 0.085 1.6396 0.11328 1.7812 0.33887 2.1484a0.5757 0.5757 0 0 0 0.53808 0.31055c0.7627 0 1.3848-0.791 1.8369-2.3184l0.707 0.2832c-0.67871 2.0635-1.9502 3.2793-3.4209 3.2793-1.1309 0-1.8945-0.9043-1.8945-2.3184 0-0.19727 0.02832-0.9043 0.085-1.668l0.02832-1.3574c0-1.1592-0.39551-1.6963-1.2158-1.6963a1.9502 1.9502 0 0 0-1.1592 0.42383l-1.9795 6.249h-2.0635l5.4287-17.417a3.3222 3.3222 0 0 0 0.11231-0.62207c0-0.50879-0.33887-0.67871-1.3564-0.67871h-0.53711z" />
                <path d="m109.2 11.479c0 4.4668-3.0254 8.6514-6.2207 8.6514-1.8662 0-3.0537-1.668-3.0537-4.2412 0-4.2969 2.9971-8.3408 6.1641-8.3408 1.8379 0 3.1104 1.6123 3.1104 3.9307zm-6.0791 0.19727a17.454 17.454 0 0 0-1.3857 5.7402c0 1.3008 0.42383 1.9795 1.3008 1.9795 1.1309 0 2.0928-1.1318 3.1387-3.7324a18.797 18.797 0 0 0 1.2442-5.6553c0-1.0459-0.48145-1.668-1.3008-1.668-1.1592 3e-5 -2.0362 0.96097-2.9971 3.336z" />
                <path d="m110.4 11.111c1.1309-2.4033 2.2334-3.5342 3.4775-3.5342a1.3716 1.3716 0 0 1 1.4424 1.5557 6.5657 6.5657 0 0 1-0.31054 1.8096c1.498-2.4316 2.6289-3.3652 4.0146-3.3652a1.9079 1.9079 0 0 1 2.0635 2.0361c0 0.25391 0 0.25391-0.05566 1.0459 1.498-2.1768 2.7139-3.082 4.1562-3.082a2.0651 2.0651 0 0 1 2.2617 1.7529 5.7671 5.7671 0 0 1-0.31152 1.5273l-2.1484 6.7578a2.1422 2.1422 0 0 0-0.16992 0.876c0 0.48047 0.16992 0.76367 0.50879 0.76367 0.67871 0 1.5557-1.0176 2.3193-2.6865l0.67773 0.45312c-1.0742 2.0352-2.375 3.1094-3.7598 3.1094a1.7191 1.7191 0 0 1-1.8096-1.6396 4.5441 4.5441 0 0 1 0.36718-1.6113l2.0078-6.3906a3.4514 3.4514 0 0 0 0.22558-1.1592c0-0.53711-0.2539-0.81934-0.76269-0.81934-1.6123 0-3.3369 2.3184-4.5527 6.1914l-1.6113 5.0615h-2.0644l2.8564-9.3584a3.3333 3.3333 0 0 0 0.16894-0.99023c0-0.56543-0.28223-0.9043-0.791-0.9043-1.5274 0-3.1104 2.2334-4.3545 6.1348l-1.6123 5.1182h-2.1201l2.5166-8.002a8.3774 8.3774 0 0 0 0.59375-2.3184c0-0.39551-0.16992-0.62207-0.45215-0.62207-0.53808 0-1.2158 0.792-2.0928 2.46z" />
                <path d="m134.82 17.021c-1.0186 1.9785-2.3467 3.1094-3.6475 3.1094a1.6274 1.6274 0 0 1-1.7529-1.3564 4.3195 4.3195 0 0 1 0.31054-1.3574l2.3184-7.0967a4.8173 4.8173 0 0 0 0.22656-1.0752c0-0.31055-0.11328-0.48047-0.36718-0.48047-0.59375 0-1.0469 0.62207-1.7812 2.4033l-0.792-0.19727c1.1875-2.46 2.1768-3.3936 3.5908-3.3936 0.9043 0 1.6113 0.53711 1.6113 1.2158a4.7871 4.7871 0 0 1-0.28222 1.3574l-2.4316 7.4648a1.9797 1.9797 0 0 0-0.16993 0.791c0 0.39648 0.16993 0.62207 0.45215 0.62207 0.65039 0 1.1309-0.56543 2.0361-2.375zm1.498-13.827a1.4833 1.4833 0 0 1-1.4697 1.3857 1.4638 1.4638 0 0 1-1.4706-1.3857 1.475 1.475 0 0 1 2.9404 0z" />
              </g>
            </g>
          </svg>
        )
      case "master":
      default:
        return (
          <svg viewBox="0 0 81.409 79.558" xmlns="http://www.w3.org/2000/svg">
            <title>logo-master</title>
            <g data-name="Layer 2">
              <g data-name="Layer 1">
                <path d="m20.839 51.16v-3.5908c0-1.8945-0.05664-2.2334-0.45313-2.9688a3.7594 3.7594 0 0 0-3.2226-1.583c-1.6396 0-2.9121 0.706-4.4395 2.46a3.4162 3.4162 0 0 0-3.5059-2.46 5.4725 5.4725 0 0 0-4.2695 2.2334v-0.22656a4.7289 4.7289 0 0 0-0.36719-1.8945h-0.11328a26.765 26.765 0 0 1-4.2129 0.73535v0.9336h0.1416c1.4414 0.02832 1.6396 0.33886 1.6963 2.7422v3.6191c0 2.4316-0.19824 2.7432-1.6963 2.7715h-0.11328v0.93262h6.2197v-0.93262h-0.11231c-1.3291-0.085-1.4707-0.33985-1.4707-2.7715v-4.6367c0.085-0.085 0.085-0.085 0.707-0.792a3.3644 3.3644 0 0 1 2.4883-1.2725 1.8791 1.8791 0 0 1 1.583 0.84864 4.8077 4.8077 0 0 1 0.31153 2.29v3.5625c0 2.4883-0.11329 2.6865-1.499 2.7715h-0.1416v0.93262h6.0225v-0.93262h-0.084c-1.3008-0.085-1.4424-0.33985-1.4424-2.7715v-4.4668c1.2158-1.5557 2.1484-2.2061 3.252-2.2061 1.3281 0 1.8652 0.76367 1.8652 2.6582v4.0146c0 2.4883-0.1123 2.6865-1.498 2.7715h-0.11329v0.93262h6.3057v-0.93262h-0.16992c-1.4708-0.05661-1.6114-0.25485-1.668-2.7715z" />
                <path d="m35.092 53.79c-0.65039 0-0.84864-0.45215-0.84864-2.0645v-4.835c0-1.5264-0.1416-2.0352-0.76367-2.6572a5.0972 5.0972 0 0 0-3.8447-1.2158 7.84 7.84 0 0 0-3.7324 0.791 2.5933 2.5933 0 0 0-1.5557 1.9796 1.0443 1.0443 0 0 0 1.1318 1.0176c0.76269 0 1.2158-0.45215 1.3848-1.3281a1.8221 1.8221 0 0 1 0.42481-1.0469 2.9142 2.9142 0 0 1 1.7246-0.48047 2.3672 2.3672 0 0 1 2.1484 0.9336 3.3098 3.3098 0 0 1 0.25489 1.668v0.73529l-1.6406 0.64941a33.679 33.679 0 0 0-4.043 2.0078c-1.2725 0.82032-1.8096 1.6113-1.8096 2.7148 0 1.4414 1.2441 2.4883 2.9688 2.4883a8.1262 8.1262 0 0 0 4.6094-1.8096 2.4402 2.4402 0 0 0 2.5723 1.8096 2.5378 2.5378 0 0 0 2.7715-2.5166h-0.73535c-0.14163 0.73437-0.50881 1.1592-1.0176 1.1592zm-3.6758-1.4707a5.1624 5.1624 0 0 1-2.9404 1.4707 1.6425 1.6425 0 0 1-1.584-1.7529c0-1.4424 1.0469-2.375 3.8457-3.5068l0.67872-0.28223z" />
                <path d="m46.142 53.932h-0.2266v0.93262h6.4746v-0.93262h-0.169c-1.4707-0.05664-1.6123-0.25488-1.668-2.7715v-3.7041a4.9816 4.9816 0 0 0-0.48144-2.8555 3.6082 3.6082 0 0 0-3.1377-1.583 5.5787 5.5787 0 0 0-4.4678 2.2617v-0.25488a4.8223 4.8223 0 0 0-0.36719-1.8945h-0.11328a23.795 23.795 0 0 1-4.2129 0.76367v0.90528h0.11328c1.4697 0.05664 1.668 0.33886 1.7246 2.7422v3.6191c-0.02832 2.4316-0.22656 2.7432-1.7246 2.7715h-0.1416v0.93262h6.418v-0.93262h-0.1416c-1.4414-0.05664-1.583-0.31152-1.583-2.7715v-4.58c1.0459-1.4707 2.0928-2.1777 3.2803-2.1777a1.9109 1.9109 0 0 1 1.9785 2.1211v4.6366c8e-5 2.46-0.14055 2.6866-1.5546 2.7715z" />
                <path d="m58.179 51.16v-4.58c1.0459-1.4707 2.0928-2.1777 3.2803-2.1777a1.9109 1.9109 0 0 1 1.9785 2.1211v4.6366c0 2.46-0.14062 2.6865-1.5547 2.7715h-0.22656v0.93262h6.4756v-0.93262h-0.16993c-1.4707-0.05664-1.6123-0.25488-1.668-2.7715v-3.7041a4.9816 4.9816 0 0 0-0.48145-2.8555 3.6082 3.6082 0 0 0-3.1377-1.583 5.5787 5.5787 0 0 0-4.4678 2.2617v-0.25488a4.8223 4.8223 0 0 0-0.36719-1.8945h-0.11328a23.795 23.795 0 0 1-4.2129 0.76367v0.90528h0.11336c1.4697 0.05664 1.668 0.33886 1.7246 2.7422v3.6191c-0.02832 2.4316-0.22656 2.7432-1.7246 2.7715h-0.1416v0.93262h6.418v-0.93262h-0.1416c-1.4415-0.05661-1.5831-0.31149-1.5831-2.7715z" />
                <path d="M77.25293,43.4696v.9043h.25488c.792.02832,1.15918.25488,1.15918.707a1.48057,1.48057,0,0,1-.19824.67871c-.16895.39551-.33887.76368-.36719.82032l-2.34668,5.51367-2.91211-5.88184c-.36816-.791-.39648-.90429-.39648-1.13086,0-.39551.36816-.65039,1.01855-.67871l.169-.02832v-.9043H67.668v.9043l.22656.02832c.876.02832,1.10254.25488,1.92285,1.86621L74.3125,55.203l-.81934,2.06446c-.4248,1.01757-.76367,1.27246-2.20605,1.78125-1.10254.3955-1.583.90527-1.583,1.668a1.20674,1.20674,0,0,0,1.30078,1.1875c1.10254,0,1.89453-.84765,2.91211-3.251L78.89355,47.202c.9043-2.14942,1.29981-2.62989,2.375-2.79981l.14063-.02832v-.9043Z" />
                <path d="m4.9766 75.401v-8.1426h-0.25488a36.68 36.68 0 0 1-4.7217 0.84765v0.90528h0.36816c1.498 0 1.7529 0.42382 1.7812 2.6855v3.7041c-0.05664 2.4316-0.22656 2.7432-1.7246 2.7715h-0.4248v0.93262h6.9277v-0.93262h-0.25488c-1.4414-0.02832-1.6396-0.33984-1.6963-2.7715z" />
                <path d="m5.2031 61.745a1.7963 1.7963 0 1 0-1.8096 1.8379 1.8038 1.8038 0 0 0 1.8096-1.8379z" />
                <path d="M19.81641,76.22156,16.1416,71.75378c.59375-.45214.67774-.50878,1.1875-.93261,1.9502-1.64063,2.74219-2.09278,3.90137-2.17774h.11328v-.93261H16.1416v.93261h.19727c.62207,0,.93359.19824.93359.56543a1.01608,1.01608,0,0,1-.36816.707A25.36876,25.36876,0,0,1,14.416,71.952l-1.15918.82031V59.96375h-.25391a27.40027,27.40027,0,0,1-4.43945.76269v.90527h.1416c1.4414.05664,1.75293.48047,1.72461,2.43164v11.3379c-.05664,2.5166-.19824,2.71484-1.72461,2.77148H8.39355v.93262h6.47559v-.93262h-.11328c-1.3291-.05664-1.499-.36816-1.499-2.77148V73.9032l.792-.59375,2.57324,3.10937c.791.99024.791.99024.791,1.1875,0,.36817-.39551.56641-1.13086.56641H16.1416v.93262h6.248v-.93262h-.1416C21.51367,78.05945,21.06055,77.7196,19.81641,76.22156Z" />
                <path d="m29.459 67.259a6.0768 6.0768 0 0 0-6.3623 6.1914c0 3.5352 2.7148 6.1074 6.4756 6.1074a6.1516 6.1516 0 1 0-0.11329-12.299zm0 11.366c-2.2627 0-3.2236-1.584-3.2236-5.2031 0-3.6475 0.96094-5.2022 3.2236-5.2022 2.2334 0 3.2227 1.583 3.2227 5.1182-2e-5 3.7314-0.96096 5.2871-3.2227 5.2871z" />
                <path d="m57.841 75.401v-3.5908c0-1.8945-0.05664-2.2334-0.45312-2.9688a3.7594 3.7594 0 0 0-3.2227-1.583c-1.6396 0-2.9121 0.70605-4.4394 2.46a3.4162 3.4162 0 0 0-3.5059-2.46 5.4724 5.4724 0 0 0-4.2695 2.2334v-0.22657a4.729 4.729 0 0 0-0.3672-1.8945h-0.11328a26.765 26.765 0 0 1-4.2129 0.73535v0.9336h0.1416c1.4414 0.02832 1.6396 0.33886 1.6963 2.7422v3.6192c0 2.4316-0.19825 2.7432-1.6963 2.7715h-0.11328v0.93262h6.2197v-0.93262h-0.1123c-1.3291-0.085-1.4707-0.33984-1.4707-2.7715v-4.6368c0.085-0.085 0.085-0.085 0.707-0.792a3.3677 3.3677 0 0 1 2.4883-1.2725 1.8791 1.8791 0 0 1 1.583 0.84864 4.8078 4.8078 0 0 1 0.31152 2.29v3.5625c0 2.4883-0.11328 2.6865-1.499 2.7715h-0.14161v0.93262h6.0225v-0.93262h-0.084c-1.3008-0.085-1.4424-0.33984-1.4424-2.7715v-4.4668c1.2158-1.5557 2.1484-2.2061 3.252-2.2061 1.3281 0 1.8652 0.76368 1.8652 2.6582v4.0146c0 2.4883-0.11231 2.6865-1.498 2.7715h-0.11328v0.93262h6.3057v-0.93262h-0.16992c-1.4708-0.0566-1.6114-0.25484-1.668-2.7714z" />
                <path d="m62.859 61.717a1.7955 1.7955 0 1 0 1.7812-1.7812 1.8115 1.8115 0 0 0-1.7812 1.7812z" />
                <path d="m66.224 75.401v-8.1426h-0.25488a36.68 36.68 0 0 1-4.7217 0.84765v0.90528h0.36816c1.498 0 1.7529 0.42382 1.7812 2.6855v3.7041c-0.05664 2.4316-0.22656 2.7432-1.7246 2.7715h-0.42481v0.93262h6.9277v-0.93262h-0.25488c-1.4414-0.02832-1.6396-0.33984-1.6963-2.7715z" />
                <polygon points="64.465 28.997 81.137 28.997 81.137 24.164 34.185 24.164 34.185 19.331 27.579 19.331 27.579 14.498 50.668 14.498 50.668 9.666 12.983 9.666 12.983 4.833 7.788 4.833 7.788 0 0.235 0 0.235 4.833 0.235 9.666 0.235 14.498 0.235 19.331 0.235 24.164 0.235 28.997 0.235 33.83 64.465 33.83" />
              </g>
            </g>
          </svg>
        )
    }
  }

  return (
    <a
      href={`/`}
      css={[
        {
          display: "block",
          objectFit: "contain",
          // width: '100%',
          // height: 'auto',

          svg: { fill: color },
          ":hover": {
            svg: { fill: colors.orange },
          },
        },
        styles,
      ]}
    >
      {getLockup(lockup)}
    </a>
  )
}
Logo.propTypes = {
  lockup: PropTypes.oneOf(["master", "type"]),
  styles: PropTypes.any,
}

export const LogoType = props => <Logo lockup={`type`} {...props} />
export const LogoMaster = props => <Logo lockup={`master`} {...props} />

export default Logo
